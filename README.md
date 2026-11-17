# Trouve ton artisan

## À propos du projet

J'ai réalisé ce site dans le cadre de ma formation de développeur web au Centre Européen de Formation (CEF).

Le but du projet est de créer un site qui permet de trouver des artisans en Auvergne-Rhône-Alpes, de consulter leurs informations et de les contacter grâce à un formulaire.

Pour ce projet, j'ai utilisé React pour le site, Express pour le serveur et MySQL pour la base de données.

## Ce que permet de faire le site

- Consulter les artisans mis en avant sur la page d'accueil.
- Rechercher un artisan par son nom, sa spécialité ou sa ville.
- Afficher les artisans par catégorie.
- Accéder à la fiche d'un artisan pour voir ses informations.
- Remplir un formulaire pour contacter un artisan.

Les messages envoyés depuis le formulaire sont enregistrés dans la base de données. Il n'y a pas d'envoi d'e-mail automatique.

## Technologies utilisées

Pour réaliser ce projet, j'ai utilisé :

- **React et JavaScript** pour les pages du site.
- **Bootstrap et SCSS** pour la mise en forme.
- **Node.js et Express** pour créer l'API.
- **MySQL** pour stocker les artisans et les messages.
- **Figma** pour préparer les maquettes.
- **Git et GitHub** pour sauvegarder et partager mon travail.

J'ai travaillé avec Visual Studio Code et XAMPP pour faire fonctionner le projet en local.

## Installation du projet

Pour lancer le site sur un ordinateur, il faut avoir installé Node.js et XAMPP (ou un serveur MySQL).

### 1. Installer les dépendances

Ouvrir un terminal à la racine du projet et saisir :

```bash
npm install
```

Ensuite, aller dans le dossier du serveur :

```bash
cd backend
npm install
```

### 2. Installer la base de données

Démarrer MySQL avec XAMPP, puis ouvrir phpMyAdmin.

Créer une base de données appelée `trouve_ton_artisan` et importer le fichier :

`database/trouve_ton_artisan.sql`

La base contient les informations de 17 artisans ainsi qu'une table pour enregistrer les messages du formulaire.

### 3. Configurer le serveur

Dans le dossier `backend`, créer un fichier `.env` avec les informations suivantes :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=trouve_ton_artisan
PORT=3001
```

Le nom d'utilisateur et le mot de passe sont à adapter selon la configuration de MySQL.

### 4. Lancer le serveur

Depuis le dossier `backend`, saisir :

```bash
node server.js
```

Le serveur fonctionne sur `http://localhost:3001`.

### 5. Lancer le site

Ouvrir un deuxième terminal à la racine du projet et saisir :

```bash
npm run dev
```

Le site est normalement accessible sur :

`http://localhost:5173`

Il faut laisser les deux terminaux ouverts pour que le site puisse récupérer les informations depuis la base de données.

## Organisation de la base de données

J'ai créé deux tables :

- `artisans` : elle contient les informations des artisans.
- `messages` : elle conserve les messages envoyés depuis le formulaire de contact.

Chaque message est relié à un artisan grâce à son identifiant.

Les explications sur le MCD et le MLD se trouvent dans le fichier `documentation/MCD-MLD.md`.

## Sécurité

J'ai ajouté quelques vérifications dans le projet :

- Les champs du formulaire sont vérifiés avant l'enregistrement.
- Les requêtes SQL utilisent des paramètres pour éviter de mettre directement les saisies des utilisateurs dans les requêtes.
- Les informations de connexion à MySQL sont conservées dans un fichier `.env`, qui n'est pas envoyé sur GitHub.

## Maquettes

Les maquettes du site ont été réalisées avec Figma pour les versions ordinateur, tablette et mobile.

## Contexte

Ce projet a été réalisé dans le cadre de mon devoir de formation au CEF.