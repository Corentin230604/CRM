// Petit cache mémoire par instance de Functions : évite de solliciter Graph à chaque affichage.
const store = new Map();

export async function cached(key, ttlMs, loader) {
  const hit = store.get(key);
  const now = Date.now();
  if (hit && hit.expires > now) return hit.promise;
  const promise = loader().catch((err) => {
    store.delete(key);
    throw err;
  });
  store.set(key, { promise, expires: now + ttlMs });
  return promise;
}

export function invalidate(prefix) {
  for (const k of store.keys()) if (k.startsWith(prefix)) store.delete(k);
}
