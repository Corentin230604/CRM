# Étage

Plan vivant des bureaux en 3D : qui est là, qui est en réunion, quelles salles sont libres.

**Démo en ligne** : https://corentin230604.github.io/CRM/ (publiée par GitHub Pages à chaque modification de `main`, données fictives).
Le déploiement Azure (version connectée) est **en pause** : voir `.github/workflows/azure-deploy.yml` pour le réactiver.

- **Sans connexion**, le site s'ouvre sur une **démonstration** (données fictives).
- **« Se connecter avec Microsoft »** ouvre la vraie version de l'entreprise : plan, postes, réservation des salles, présence déclarée (« aujourd'hui je suis au bureau / en télétravail / absent »).
- **« Connecter Teams et Outlook »** est facultatif et propre à chacun : la personne autorise Étage à lire **son** statut Teams, **son** lieu de travail et **son** agenda. Elle apparaît alors en direct.
- **Les salles et les collègues sont déduits des agendas connectés** : si Claire (connectée) a une réunion en salle Fourvière avec Hugo (non connecté), la salle est occupée et Hugo y est placé, avec la mention « vu dans l'agenda de Claire ».

## Architecture

```
web/   Interface (Vite + Three.js) : plan 3D, éditeur, planning des salles, démo intégrée
api/   API (Azure Functions, Node 20) : connexion Microsoft, jetons de chaque personne, assemblage « en direct »
docs/  Guide pour l'administrateur Microsoft 365
```

```
Navigateur ──cookie de session──▶ /api/* (Azure Functions) ──jeton de chaque personne connectée──▶ Microsoft Graph
                                          └──▶ Stockage Azure : plan, personnes, réservations, jetons chiffrés
```

| Élément | Où | Détail |
|---|---|---|
| Connexion | `api/src/functions/auth.js` | Flux « code d'autorisation » Microsoft côté serveur, session dans un cookie HttpOnly signé |
| Jetons Teams/Outlook | `api/src/lib/tokens.js` | Un fichier par personne, chiffré AES-256-GCM, renouvelé automatiquement ; effacé par « Déconnecter » |
| Vue en direct | `api/src/lib/live.js` | Statut (60 s) et agendas (3 min) des personnes connectées, présences déclarées, réservations Étage |
| Déductions | `api/src/lib/mapping.js`, `web/src/locate.js` | Salle reconnue (lieu ou adresse de salle), invités identifiés, position probable avec niveau et raisons |
| Données | Stockage Blob `etage/` | `layout.json`, `users.json`, `bookings.json`, `tokens/<id>.enc` |

Autorisations Microsoft demandées, toutes **déléguées** (au nom de la personne, jamais pour toute l'entreprise) : `User.Read` à la connexion ; `Presence.Read` et `Calendars.Read` quand la personne connecte Teams et Outlook ; `offline_access` pour continuer à lire quand elle a fermé le site.

## Lancer en local

```bash
cd web && npm install
npm run dev            # démo seule : http://localhost:5173
npm run dev:live-mock  # + API simulée (scripts/mock-api.mjs) : le bouton « Se connecter avec Microsoft » ouvre une version connectée fictive
```

Avec la vraie API : `cd api && cp local.settings.example.json local.settings.json` (à remplir), `npm install && func start` (Azure Functions Core Tools v4, Azurite pour le stockage), puis `cd web && npm run dev`.

## Tests

```bash
cd api && npm test   # lecture des agendas, déductions, validation, chiffrement des jetons, session, routes
cd web && npm test   # moteur de localisation
```

## Mettre en ligne (Azure Static Web Apps, gratuit)

### 1. Créer les ressources Azure

```bash
az login
az group create --name rg-etage --location francecentral
az storage account create --name stetage$RANDOM --resource-group rg-etage --location francecentral \
  --sku Standard_LRS --min-tls-version TLS1_2 --allow-blob-public-access false
az storage account show-connection-string --name <nom-du-compte> --resource-group rg-etage -o tsv

az staticwebapp create --name etage --resource-group rg-etage --location westeurope --sku Free \
  --source https://github.com/Corentin230604/CRM --branch main \
  --app-location web --api-location api --output-location dist --login-with-github
```

La dernière commande ajoute le secret `AZURE_STATIC_WEB_APPS_API_TOKEN` au dépôt. Si elle crée son propre fichier de workflow, supprimez-le : `.github/workflows/azure-deploy.yml` est déjà prêt. Il est en pause : remettez-y le déclencheur `push` (indiqué en commentaire) pour déployer à chaque modification.

### 2. Déclarer l'application chez Microsoft

Voir **[docs/guide-admin-microsoft365.md](docs/guide-admin-microsoft365.md)**. En résumé : une inscription d'application dans le Microsoft 365 de l'entreprise, avec l'adresse de retour `https://<votre-site>/api/auth/callback`, un secret, et les quatre autorisations déléguées ci-dessus.

### 3. Paramètres de l'API

```bash
az staticwebapp appsettings set --name etage --resource-group rg-etage --setting-names \
  ETAGE_CLIENT_ID=<id-application> \
  ETAGE_CLIENT_SECRET=<secret> \
  ETAGE_TENANT_ID=<id-locataire-ou-organizations> \
  ETAGE_SECRET="$(openssl rand -base64 48)" \
  ETAGE_STORAGE_CONNECTION="<chaîne-de-connexion>" \
  ETAGE_ADMINS="prenom.nom@entreprise.fr" \
  ETAGE_ORG_NAME="Mon entreprise · Lyon"
```

| Paramètre | Rôle |
|---|---|
| `ETAGE_SECRET` | Signe les sessions et chiffre les jetons. Ne le changez pas après la mise en service : tout le monde devrait se reconnecter. |
| `ETAGE_TENANT_ID` | L'ID du locataire de l'entreprise (recommandé) ; `organizations` accepte tout compte professionnel. |
| `ETAGE_ADMINS` | Administrateurs d'Étage. Sans ce réglage, la première personne connectée devient administratrice. |
| `ETAGE_PUBLIC_URL` | Facultatif : adresse publique du site, si elle n'est pas déduite correctement. |
| `ETAGE_TIMEZONE` / `ETAGE_IANA_TIMEZONE` | Fuseau (par défaut Paris). |

### 4. Premier lancement

1. Connectez-vous avec Microsoft : avec `ETAGE_ADMINS`, vous êtes administrateur.
2. **Modéliser** : pièces prêtes à poser, portes, cloisons, plan de fond à décalquer. Nommez les salles comme dans Outlook (ou renseignez leur adresse de salle) pour que les réunions y soient reconnues.
3. **Personnes** : ajoutez les collègues à l'avance pour leur attribuer un poste ; ils retrouvent leur fiche en se connectant avec la même adresse.
4. Chacun clique sur **Connecter Teams et Outlook** dans le panneau « Qui est là ? ».

## Limites à connaître

- **Couverture partielle.** Une réunion n'est visible que si au moins une personne connectée y participe, ou si la salle a été réservée dans Étage. Plus il y a de monde connecté, plus le plan est juste.
- **Accord de l'entreprise.** Selon les réglages Microsoft 365 de l'entreprise, chacun peut accepter seul, ou un administrateur doit approuver Étage une fois (le guide l'explique).
- **Comptes professionnels.** Le statut Teams n'existe pas pour les comptes Microsoft personnels.
- **Données.** Aucun historique de présence n'est conservé. Les réservations de plus d'un mois sont purgées.
