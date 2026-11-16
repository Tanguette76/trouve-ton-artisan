
const express = require("express");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
