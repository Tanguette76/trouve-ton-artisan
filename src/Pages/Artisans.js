
import { useEffect, useState } from "react";
import CarteArtisan from "../Components/CarteArtisan";
import { useSearchParams } from "react-router-dom";

function Artisans() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categorie = searchParams.get("categorie") || "Toutes";
  const recherche = searchParams.get("recherche") || "";

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

  // Filtrer les artisans selon la catégorie choisie
  const artisansFiltres = artisans.filter((artisan) => {
  const correspondCategorie =
    categorie === "Toutes" || artisan.categorie === categorie;

  const texteRecherche = recherche.toLowerCase().trim();

  const correspondRecherche =
    artisan.nom.toLowerCase().includes(texteRecherche) ||
    artisan.specialite.toLowerCase().includes(texteRecherche) ||
    artisan.ville.toLowerCase().includes(texteRecherche);

  return correspondCategorie && correspondRecherche;
});

  return (
    <main className="container py-4">
      <h1>Tous les artisans</h1>

      <div className="mb-4">
        <label htmlFor="categorie" className="form-label">
          Filtrer par catégorie :
        </label>

        <select
          id="categorie"
          className="form-select"
          value={categorie}
          onChange={(event) => {
  const nouvelleCategorie = event.target.value;

  if (nouvelleCategorie === "Toutes") {
    setSearchParams({});
  } else {
    setSearchParams({ categorie: nouvelleCategorie });
  }
}}
        >
          <option value="Toutes">Toutes les catégories</option>
          <option value="Bâtiment">Bâtiment</option>
          <option value="Services">Services</option>
          <option value="Fabrication">Fabrication</option>
          <option value="Alimentation">Alimentation</option>
        </select>
      </div>

      {chargement && <p>Chargement des artisans...</p>}

      {erreur && <p role="alert">{erreur}</p>}

      {!chargement && !erreur && (
        <>
          <p>{artisansFiltres.length} artisan(s) disponible(s)</p>

          <div className="liste-artisans">
            {artisansFiltres.map((artisan) => (
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
