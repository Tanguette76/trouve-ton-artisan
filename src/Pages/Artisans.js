
import { useEffect, useState } from "react";
import CarteArtisan from "../Components/CarteArtisan";

function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    async function recupererArtisans() {
      try {
        const reponse = await fetch("http://localhost:3001/api/artisans");

        if (!reponse.ok) {
          throw new Error("Erreur lors du chargement");
        }

        const donnees = await reponse.json();
        setArtisans(donnees);
      } catch (error) {
        console.error(error);
        setErreur("Impossible de charger les artisans.");
      } finally {
        setChargement(false);
      }
    }

    recupererArtisans();
  }, []);

  return (
    <main className="container py-4">
      <h1>Tous les artisans</h1>

      {chargement && <p>Chargement des artisans...</p>}

      {erreur && <p role="alert">{erreur}</p>}

      {!chargement && !erreur && (
        <>
          <p>{artisans.length} artisan(s) disponible(s)</p>

          <div className="liste-artisans">
            {artisans.map((artisan) => (
              <CarteArtisan
                key={artisan.id}
                artisan={artisan}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default Artisans;
