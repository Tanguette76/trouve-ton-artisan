
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function DetailArtisan() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    async function recupererArtisan() {
      try {
        const reponse = await fetch(
          `http://localhost:3001/api/artisans/${id}`
        );

        if (!reponse.ok) {
          throw new Error("Artisan introuvable");
        }

        const donnees = await reponse.json();
        setArtisan(donnees);
      } catch (error) {
        console.error(error);
        setErreur("Impossible de charger cet artisan.");
      } finally {
        setChargement(false);
      }
    }

    recupererArtisan();
  }, [id]);

  return (
    <main className="container py-4">
      <Link to="/artisans">← Retour aux artisans</Link>

      {chargement && <p>Chargement de l'artisan...</p>}

      {erreur && <p role="alert">{erreur}</p>}

      {!chargement && !erreur && artisan && (
        <article className="card p-4 mt-4">
          <h1>{artisan.nom}</h1>

          <p><strong>Spécialité :</strong> {artisan.specialite}</p>
          <p><strong>Catégorie :</strong> {artisan.categorie}</p>
          <p><strong>Ville :</strong> {artisan.ville}</p>
          <p><strong>Note :</strong> ⭐ {artisan.note} / 5</p>

          <h2>À propos</h2>
          <p>{artisan.description}</p>

          <h2>Contact</h2>
          <p>
            <strong>Email :</strong>{" "}
            <a href={`mailto:${artisan.email}`}>
              {artisan.email}
            </a>
          </p>

          {artisan.site_web && (
            <p>
              <strong>Site internet :</strong>{" "}
              <a
                href={artisan.site_web}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visiter le site
              </a>
            </p>
          )}
        </article>
      )}
    </main>
  );
}

export default DetailArtisan;
