# Trouve ton artisan

## Présentation du projet

**Trouve ton artisan** est un site web réalisé dans le cadre de ma formation au Centre Européen de Formation (CEF).

L'objectif est de permettre aux utilisateurs de rechercher des artisans de la région Auvergne-Rhône-Alpes, de consulter leurs informations et de les contacter à l'aide d'un formulaire.

## Fonctionnalités

- Affichage des artisans mis en avant sur la page d'accueil.
- Consultation de la liste des artisans.
- Recherche d'un artisan par nom, spécialité ou ville.
- Filtrage des artisans par catégorie : Bâtiment, Services, Fabrication et Alimentation.
- Consultation de la fiche détaillée d'un artisan.
- Formulaire de contact avec enregistrement des messages dans la base de données.

**Remarque :** le formulaire enregistre les messages dans MySQL. Il ne les envoie pas directement par e-mail.

## Technologies utilisées

**Frontend :**
- React
- Vite
- JavaScript
- React Router
- Bootstrap
- Sass / SCSS

**Backend :**
- Node.js
- Express
- MySQL / MariaDB
- mysql2
- dotenv
- cors

**Outils :**
- Visual Studio Code
- Figma
- XAMPP
- phpMyAdmin
- Git et GitHub

## Structure du projet

```text
trouve-ton-artisan/
├── backend/
│   ├── db.js
│   ├── server.js
│   └── package.json
├── database/
│   └── trouve_ton_artisan.sql
├── public/
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── Styles/
│   ├── App.js
│   └── main.js
├── package.json
└── README.md
```

## Installation du projet

### 1. Prérequis

Installer :
- Node.js et npm
- XAMPP ou un serveur MySQL / MariaDB

### 2. Récupérer le projet

Cloner le dépôt GitHub, puis ouvrir le dossier du projet dans Visual Studio Code.

### 3. Installer le frontend

Dans un terminal ouvert à la racine du projet :

```bash
npm install
```

### 4. Préparer la base de données

1. Démarrer MySQL avec XAMPP.
2. Ouvrir phpMyAdmin.
3. Créer une base de données nommée `trouve_ton_artisan`.
4. Importer le fichier `database/trouve_ton_artisan.sql`.

Le fichier SQL contient les artisans et la structure de la table des messages.

### 5. Configurer le backend

Dans le dossier `backend`, créer un fichier `.env` contenant :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=trouve_ton_artisan
PORT=3001
```

Adapter `DB_USER` et `DB_PASSWORD` selon la configuration locale de MySQL.

Le fichier `.env` contient des informations de configuration privées et ne doit pas être publié sur GitHub.

### 6. Installer et démarrer le backend

Dans un terminal :

```bash
cd backend
npm install
node server.js
```

L'API est accessible localement à l'adresse :

`http://localhost:3001`

### 7. Démarrer le frontend

Ouvrir un deuxième terminal à la racine du projet :

```bash
npm run dev
```

Ouvrir ensuite l'adresse affichée par Vite, généralement :

`http://localhost:5173`

Le backend et le frontend doivent fonctionner en même temps pour accéder aux données des artisans et utiliser le formulaire de contact.

## Base de données

La base de données `trouve_ton_artisan` contient deux tables :

- `artisans` : informations des 17 artisans.
- `messages` : messages envoyés depuis les formulaires de contact.

Chaque message est associé à un artisan grâce à une clé étrangère `artisan_id`.

## Sécurité

Plusieurs mesures de sécurité ont été mises en place :

- Utilisation de requêtes SQL paramétrées pour limiter les risques d'injection SQL.
- Validation des données du formulaire côté serveur.
- Vérification de l'existence de l'artisan avant l'enregistrement d'un message.
- Conservation des identifiants de connexion à la base de données dans un fichier `.env` non versionné.

## Auteur

Projet réalisé dans le cadre de la formation Développeur Web et Web Mobile au Centre Européen de Formation (CEF).