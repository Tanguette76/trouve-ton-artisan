
const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Vérifier que le serveur fonctionne
app.get("/", (req, res) => {
  res.json({ message: "API Trouve ton artisan opérationnelle !" });
});

// Récupérer les artisans depuis MySQL
app.get("/api/artisans", async (req, res) => {
  try {
    const [artisans] = await db.query("SELECT * FROM artisans");

    res.json(artisans);
  } catch (error) {
    console.error("Erreur MySQL :", error);
    res.status(500).json({
      message: "Impossible de récupérer les artisans",
    });
  }
});


app.get("/api/artisans/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Identifiant invalide",
      });
    }

    const [artisans] = await db.query(
      "SELECT * FROM artisans WHERE id = ?",
      [id]
    );

    if (artisans.length === 0) {
      return res.status(404).json({
        message: "Artisan introuvable",
      });
    }

    res.json(artisans[0]);
  } catch (error) {
    console.error("Erreur MySQL :", error);

    res.status(500).json({
      message: "Impossible de récupérer cet artisan",
    });
  }
});


app.post("/api/contact", async (req, res) => {
  try {
    const { artisanId, nom, email, objet, message } = req.body;

    // Vérifier les champs obligatoires
    if (
      !Number.isInteger(artisanId) ||
      artisanId <= 0 ||
      typeof nom !== "string" ||
      typeof email !== "string" ||
      typeof objet !== "string" ||
      typeof message !== "string" ||
      !nom.trim() ||
      !email.trim() ||
      !objet.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires.",
      });
    }

    // Vérifier la longueur des champs
    if (
      nom.length > 100 ||
      email.length > 254 ||
      objet.length > 150 ||
      message.length > 2000
    ) {
      return res.status(400).json({
        message: "Un ou plusieurs champs sont trop longs.",
      });
    }

    // Vérifier le format de l'e-mail
    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValide) {
      return res.status(400).json({
        message: "Adresse e-mail invalide.",
      });
    }

    // Vérifier que l'artisan existe
    const [artisans] = await db.query(
      "SELECT id FROM artisans WHERE id = ?",
      [artisanId]
    );

    if (artisans.length === 0) {
      return res.status(404).json({
        message: "Artisan introuvable.",
      });
    }

    await db.query(
  `INSERT INTO messages
   (artisan_id, nom, email, objet, message)
   VALUES (?, ?, ?, ?, ?)`,
  [artisanId, nom.trim(), email.trim(), objet.trim(), message.trim()]
);

res.status(201).json({
  message: "Votre message a bien été enregistré.",
});

  } catch (error) {
    console.error("Erreur formulaire :", error);

    res.status(500).json({
      message: "Erreur lors du traitement du formulaire.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
