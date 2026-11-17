
import { Link } from "react-router-dom";

function CarteArtisan({ artisan }) {
  return (
    <article className="carte-artisan">
      <Link
        to={`/artisans/${artisan.id}`}
        className="lien-carte"
      >
        <div className="carte-entete">
          <h3>{artisan.nom}</h3>
          <span>{artisan.specialite}</span>
        </div>

        <div
          className="etoiles"
          aria-label={`Note : ${artisan.note} sur 5`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>
              {index < artisan.note ? "★" : "☆"}
            </span>
          ))}
        </div>

        <p>{artisan.ville}</p>
      </Link>
    </article>
  );
}

export default CarteArtisan;
