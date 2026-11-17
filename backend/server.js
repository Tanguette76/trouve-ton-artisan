
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

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
