import { hkdfSync } from 'node:crypto';

// Paramètres lus dans les « Paramètres de l'application » Azure (ou local.settings.json en local).
const required = (name) => {
  const v = process.env[name];
  if (!v) throw Object.assign(new Error(`Paramètre manquant côté serveur : ${name}`), { status: 500 });
  return v;
};

export const cfg = {
  /** Inscription d'application Microsoft Entra (connexion + accès délégué à Teams/Outlook). */
  get clientId() { return required('ETAGE_CLIENT_ID'); },
  get clientSecret() { return required('ETAGE_CLIENT_SECRET'); },
  /** ID du locataire de l'entreprise, ou « organizations » pour accepter tout compte professionnel. */
  get tenant() { return process.env.ETAGE_TENANT_ID || 'organizations'; },
  get storage() { return required('ETAGE_STORAGE_CONNECTION'); },
  /** Secret long et aléatoire : signe les sessions et chiffre les jetons Microsoft stockés. */
  get secret() {
    const s = required('ETAGE_SECRET');
    if (s.length < 32) throw Object.assign(new Error('ETAGE_SECRET doit contenir au moins 32 caractères.'), { status: 500 });
    return s;
  },
  get publicUrl() { return (process.env.ETAGE_PUBLIC_URL || '').replace(/\/$/, ''); },
  get orgName() { return process.env.ETAGE_ORG_NAME || 'Mon entreprise'; },
  /** E-mails des administrateurs d'Étage. Sinon, la première personne connectée devient administratrice. */
  get admins() { return (process.env.ETAGE_ADMINS || '').split(/[\s,;]+/).filter(Boolean).map((e) => e.toLowerCase()); },
  get windowsTz() { return process.env.ETAGE_TIMEZONE || 'Romance Standard Time'; },
  get ianaTz() { return process.env.ETAGE_IANA_TIMEZONE || 'Europe/Paris'; },
};

/** Clé dérivée du secret principal, une par usage (session, chiffrement des jetons). */
const keys = new Map();
export function key(purpose) {
  if (!keys.has(purpose)) keys.set(purpose, Buffer.from(hkdfSync('sha256', cfg.secret, 'etage', purpose, 32)));
  return keys.get(purpose);
}
