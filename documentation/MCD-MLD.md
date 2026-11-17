# Modélisation de la base de données — Trouve ton artisan

## 1. Présentation

Le projet « Trouve ton artisan » utilise une base de données relationnelle MySQL nommée `trouve_ton_artisan`.

Elle contient deux tables :
- `artisans` : les informations des professionnels référencés.
- `messages` : les demandes envoyées par les visiteurs depuis le formulaire de contact.

## 2. MCD — Modèle Conceptuel de Données

### Entité ARTISAN

Attributs :
- **id** : identifiant unique
- nom
- specialite
- ville
- note
- description
- email
- site_web
- categorie
- top_artisan

### Entité MESSAGE

Attributs :
- **id** : identifiant unique
- nom
- email
- objet
- message
- date_envoi

### Association REÇOIT

Un artisan peut recevoir plusieurs messages.

Cardinalités :
- ARTISAN : **0,N** — un artisan peut recevoir zéro, un ou plusieurs messages.
- MESSAGE : **1,1** — chaque message concerne obligatoirement un seul artisan.

Représentation simplifiée :

```text
+------------------+              +------------------+
|     ARTISAN      |              |     MESSAGE      |
+------------------+              +------------------+
| id               |              | id               |
| nom              |              | nom              |
| specialite       |              | email            |
| ville            |              | objet            |
| note             |              | message          |
| description      |              | date_envoi       |
| email            |              +------------------+
| site_web         |                       |
| categorie        |                       |
| top_artisan      |                       |
+------------------+                       |
         |                                 |
       (0,N)                             (1,1)
         |                                 |
         +----------- REÇOIT --------------+
```

## 3. MLD — Modèle Logique de Données

Le MLD traduit le MCD en tables relationnelles.

**ARTISANS**

```text
ARTISANS (
  id [PK],
  nom,
  specialite,
  ville,
  note,
  description,
  email,
  site_web,
  categorie,
  top_artisan
)
```

**MESSAGES**

```text
MESSAGES (
  id [PK],
  artisan_id [FK → ARTISANS.id],
  nom,
  email,
  objet,
  message,
  date_envoi
)
```

Légende :
- **PK** : clé primaire, identifiant unique d'une ligne.
- **FK** : clé étrangère, référence à une autre table.

La clé étrangère `artisan_id` permet de relier chaque message à l'artisan concerné.

## 4. MPD — Modèle Physique de Données

Le modèle physique est implémenté dans MySQL / MariaDB.

Il comprend :
- Une table `artisans` contenant les 17 artisans.
- Une table `messages` destinée aux formulaires de contact.
- Une clé primaire `id` dans chaque table.
- Une clé étrangère `messages.artisan_id` qui référence `artisans.id`.

Le script SQL d'importation se trouve dans le dossier `database` du projet.

## 5. Intégrité des données

La relation entre les tables est garantie par une contrainte de clé étrangère.

Ainsi, un message ne peut pas être associé à un artisan inexistant.

Les messages sont enregistrés à l'aide de requêtes SQL paramétrées dans le backend Express.