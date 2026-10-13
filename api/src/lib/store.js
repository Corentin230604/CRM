// Stockage : petits fichiers JSON dans un conteneur Azure Blob, avec contrôle de version (ETag).
import { BlobServiceClient } from '@azure/storage-blob';
import { cfg } from './config.js';
import { HttpError } from './http.js';

const CONTAINER = 'etage';
let containerClient;
async function container() {
  if (!containerClient) {
    containerClient = BlobServiceClient.fromConnectionString(cfg.storage).getContainerClient(CONTAINER);
    await containerClient.createIfNotExists();
  }
  return containerClient;
}

export async function readBlob(name) {
  const blob = (await container()).getBlockBlobClient(name);
  try {
    return (await blob.downloadToBuffer()).toString('utf8');
  } catch (err) {
    if (err.statusCode === 404) return null;
    throw err;
  }
}

export async function writeBlob(name, text) {
  const blob = (await container()).getBlockBlobClient(name);
  await blob.upload(text, Buffer.byteLength(text));
}

export async function deleteBlob(name) {
  await (await container()).getBlockBlobClient(name).deleteIfExists();
}

export async function readJson(name, fallback) {
  const blob = (await container()).getBlockBlobClient(name);
  try {
    const buf = await blob.downloadToBuffer();
    const props = await blob.getProperties();
    return { data: JSON.parse(buf.toString('utf8')), etag: props.etag };
  } catch (err) {
    if (err.statusCode === 404) return { data: structuredClone(fallback), etag: null };
    throw err;
  }
}

export async function writeJson(name, data, etag) {
  const blob = (await container()).getBlockBlobClient(name);
  const body = JSON.stringify(data);
  try {
    const res = await blob.upload(body, Buffer.byteLength(body), {
      blobHTTPHeaders: { blobContentType: 'application/json' },
      conditions: etag ? { ifMatch: etag } : { ifNoneMatch: '*' },
    });
    return res.etag;
  } catch (err) {
    if (err.statusCode === 412 || err.statusCode === 409) throw Object.assign(new HttpError(409, 'Les données ont changé entre-temps. Rechargez la page.'), { conflict: true });
    throw err;
  }
}

/** Lit, modifie et réécrit un fichier JSON ; recommence si quelqu'un l'a modifié entre-temps. */
export async function updateJson(name, fallback, mutate) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const { data, etag } = await readJson(name, fallback);
    const result = await mutate(data);
    try {
      await writeJson(name, data, etag);
      return result;
    } catch (err) {
      if (!err.conflict || attempt === 5) throw err;
      await new Promise((r) => setTimeout(r, 50 + Math.random() * 150));
    }
  }
  return null;
}

export const emptyLayout = () => ({
  org: '',
  floor: { w: 36, d: 23 },
  rooms: [],
  items: [],
  settings: { agenda: 'busy', guess: 'all' },
});

export async function readLayout() {
  const { data, etag } = await readJson('layout.json', emptyLayout());
  return { layout: { ...emptyLayout(), ...data }, etag };
}

export async function writeLayout(layout, etag) {
  try {
    return await writeJson('layout.json', layout, etag);
  } catch (err) {
    if (err.conflict) throw new HttpError(409, 'Le plan a été modifié par un autre administrateur entre-temps. Rechargez la page pour récupérer sa version.');
    throw err;
  }
}
