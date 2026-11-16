
import CarteArtisan from '../Components/CarteArtisan';

function Accueil() {
  const etapes = [
    "Choisir la catégorie d'artisanat dans le menu.",
    "Choisir un artisan.",
    "Le contacter via le formulaire de contact.",
    "Une réponse sera apportée sous 48h."
  ];

  // Données temporaires pour tester l'affichage
  const artisans = [
    {
      id: 1,
      nom: "Dubois Martin",
      specialite: "Menuisier",
      note: 5,
      ville: "Rennes"
    },
    {
      id: 2,
      nom: "Express Plomberie",
      specialite: "Plombier",
      note: 4,
      ville: "Paris"
    },
    {
      id: 3,
      nom: "Atelier des Monts",
      specialite: "Ébéniste",
      note: 5,
      ville: "Lyon"
    }
  ];

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

        <div className="liste-artisans">
          {artisans.map((artisan) => (
            <CarteArtisan
              key={artisan.id}
              artisan={artisan}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Accueil;
