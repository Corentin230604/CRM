# Étage : déclarer l'application dans Microsoft 365

Comptez environ 15 minutes. Dans beaucoup d'entreprises, tout salarié peut faire cette déclaration lui-même. Si le menu est grisé, transmettez ce guide au service informatique.

## Ce que fait Étage, et ce qu'il ne fait pas

Chaque personne choisit de connecter **son** compte. Étage lit alors :

- son **statut Teams** (disponible, en réunion, absent…) et le **lieu de travail** qu'elle déclare (bureau, télétravail) ;
- son **agenda Outlook** : horaires, lieu et participants des réunions. L'objet n'est montré aux collègues que si l'admin d'Étage l'autorise.

Étage **ne lit pas** les e-mails, les conversations Teams, le contenu des invitations ni les fichiers. Il n'a **aucun accès à l'échelle de l'entreprise** : seulement aux comptes des personnes qui l'ont autorisé, et chacun peut retirer cet accès à tout moment.

## 1. Inscrire l'application

Centre d'administration Microsoft Entra (entra.microsoft.com) › **Identité › Applications › Inscriptions d'applications › Nouvelle inscription**

| Champ | Valeur |
|---|---|
| Nom | `Étage` |
| Types de comptes | **Comptes dans cet annuaire organisationnel uniquement** |
| URI de redirection | Plateforme **Web** : `https://<adresse-du-site>/api/auth/callback` |

Pour développer en local, ajoutez aussi `http://localhost:5173/api/auth/callback` (interface Vite qui relaie `/api` vers `func start`).

Notez l'**ID d'application (client)** et l'**ID de l'annuaire (locataire)**.

## 2. Secret client

**Certificats et secrets › Nouveau secret client** › durée 24 mois. Copiez la **Valeur** immédiatement et transmettez-la par un canal sûr. Notez la date d'expiration : à l'échéance, plus personne ne pourra se connecter tant que le secret n'est pas remplacé.

## 3. Autorisations

**Autorisations de l'API › Ajouter une autorisation › Microsoft Graph › Autorisations déléguées** :

| Autorisation | Pourquoi | Demandée |
|---|---|---|
| `User.Read` | Se connecter (nom, e-mail) | À la connexion |
| `offline_access` | Continuer à lire le statut quand la personne a fermé le site | À la connexion |
| `Presence.Read` | Son statut Teams et son lieu de travail | En cliquant « Connecter Teams et Outlook » |
| `Calendars.Read` | Son agenda (pour la salle et les collègues invités) | En cliquant « Connecter Teams et Outlook » |

Aucune autorisation de type « Application » : Étage n'agit jamais pour toute l'organisation.

## 4. Consentement : chacun accepte, ou un administrateur une fois pour tous

Ce qui se passe dépend du réglage **Applications d'entreprise › Consentement et autorisations › Paramètres de consentement de l'utilisateur** :

- **« Autoriser le consentement pour les applications de votre organisation »** (ou « pour toutes les applications ») : chacun accepte lui-même en se connectant, rien de plus à faire.
- **Consentement utilisateur désactivé, ou limité aux autorisations « à faible impact »** : la personne voit « approbation de l'administrateur requise ». Un administrateur ouvre alors **Inscriptions d'applications › Étage › Autorisations de l'API › Accorder un consentement d'administrateur** : c'est valable pour tout le monde, une seule fois.

## 5. Ce qu'il faut transmettre à la personne qui déploie

| Information | Où la trouver |
|---|---|
| ID d'application (client) | Inscription « Étage » › Vue d'ensemble |
| ID de l'annuaire (locataire) | Inscription « Étage » › Vue d'ensemble |
| Secret client (valeur) | Étape 2, par canal sûr |

## Salles de réunion

Étage reconnaît une salle quand le lieu d'une réunion Outlook contient son nom (tel qu'écrit dans le plan) ou son adresse de salle Exchange. Si vos salles sont des boîtes aux lettres de ressource, renseignez leur adresse dans « Modéliser » : la reconnaissance devient exacte.

## RGPD

Étage traite des données personnelles de salariés, avec leur accord individuel :

- inscrivez le traitement au **registre** (finalité : organisation du travail sur site et réservation des salles) ;
- **informez les salariés** et le **CSE** s'il existe (Code du travail, article L2312-38) ;
- la connexion de Teams et d'Outlook reste **facultative**, et chacun peut la retirer depuis son menu ;
- aucun historique de présence n'est conservé.
