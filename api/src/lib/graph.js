// Appels Microsoft Graph avec le jeton d'une personne connectée.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Appel Microsoft Graph avec reprise automatique en cas de limitation (429/503). */
export async function graph(path, { token, method = 'GET', body, headers = {} } = {}) {
  const url = path.startsWith('https://') ? path : `https://graph.microsoft.com/v1.0${path}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, {
      method,
      headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}), ...headers },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (res.status === 429 || res.status === 503 || res.status === 504) {
      await sleep(Math.min(10, Number(res.headers.get('retry-after')) || 2 ** attempt) * 1000);
      continue;
    }
    if (res.status === 202 || res.status === 204) return null;
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = null; }
    if (!res.ok) {
      const err = new Error(data?.error?.message || `Microsoft Graph a répondu ${res.status}`);
      err.status = 502;
      err.graphStatus = res.status;
      throw err;
    }
    return data;
  }
  throw Object.assign(new Error('Microsoft Graph limite temporairement les requêtes.'), { status: 503, expose: true });
}

/** Suit la pagination @odata.nextLink (500 éléments au plus). */
export async function graphAll(path, opts) {
  const out = [];
  let next = path;
  while (next && out.length < 500) {
    const page = await graph(next, opts);
    out.push(...(page?.value || []));
    next = page?.['@odata.nextLink'];
  }
  return out;
}

/** Exécute fn sur chaque élément, n à la fois. */
export async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const k = i++;
      out[k] = await fn(items[k]);
    }
  }));
  return out;
}
