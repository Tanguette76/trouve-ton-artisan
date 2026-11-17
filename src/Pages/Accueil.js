
import CarteArtisan from "../Components/CarteArtisan";
import { useEffect, useState } from "react";

function Accueil() {
  const [artisans, setArtisans] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  const etapes = [
    "Choisir la catégorie d'artisanat dans le menu.",
    "Choisir un artisan.",
    "Le contacter via le formulaire de contact.",
    "Une réponse sera apportée sous 48h."
  ];

  useEffect(() => {
    async function recupererArtisans() {
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

        const reponse = await fetch(`${API_URL}/api/artisans`);

        if (!reponse.ok) {
          throw new Error("Erreur lors de la récupération des artisans");
        }

        const donnees = await reponse.json();

        // Garder uniquement les artisans du mois
        const artisansDuMois = donnees.filter(
          (artisan) => artisan.top_artisan === 1
        );

        setArtisans(artisansDuMois);
      } catch (error) {
        console.error(error);
        setErreur("Impossible de charger les artisans pour le moment.");
      } finally {
        setChargement(false);
      }
    }

    recupererArtisans();
  }, []);

  return (
    <main>
      <section className="etapes">
        <div className="container">
          <h1>Comment trouver mon artisan ?</h1>

          <ol className="liste-etapes">
            {etapes.map((etape, index) => (
              <li key={index}>
                <span className="numero-etape">
                  {index + 1}
                </span>
                <span>{etape}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="artisans-mois container">
        <h2>Les artisans du mois</h2>

        {chargement && <p>Chargement des artisans...</p>}

        {erreur && <p role="alert">{erreur}</p>}

        {!chargement && !erreur && artisans.length === 0 && (
          <p>Aucun artisan du mois pour le moment.</p>
        )}

        {!chargement && !erreur && artisans.length > 0 && (
          <div className="liste-artisans">
            {artisans.map((artisan) => (
              <CarteArtisan
                key={artisan.id}
                artisan={artisan}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Accueil;
