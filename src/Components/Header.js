
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [recherche, setRecherche] = useState("");
const navigate = useNavigate();

  function changerMenu() {
    setMenuOuvert(!menuOuvert);
  }

  function fermerMenu() {
    setMenuOuvert(false);
  }

  return (
    <header className="header">
      <div className="header-contenu">

        <Link to="/" className="logo" onClick={fermerMenu}>
          <img
            src="/Logo.png"
            alt="Trouve ton artisan - Auvergne-Rhône-Alpes"
          />
        </Link>

        <button
          className="bouton-menu"
          type="button"
          onClick={changerMenu}
          aria-label="Afficher le menu"
          aria-expanded={menuOuvert}
          aria-controls="menu-categories"
        >
          ☰
        </button>

        <nav
          id="menu-categories"
          className={menuOuvert ? "menu ouvert" : "menu"}
          aria-label="Catégories d'artisans"
        >
          <Link
            to="/artisans?categorie=Bâtiment"
            onClick={fermerMenu}
          >
            Bâtiment
          </Link>

          <Link
            to="/artisans?categorie=Services"
            onClick={fermerMenu}
          >
            Services
          </Link>

          <Link
            to="/artisans?categorie=Fabrication"
            onClick={fermerMenu}
          >
            Fabrication
          </Link>

          <Link
            to="/artisans?categorie=Alimentation"
            onClick={fermerMenu}
          >
            Alimentation
          </Link>
        </nav>
      </div>

      <form
        className="recherche"
        role="search"
        onSubmit={(event) => {
  event.preventDefault();

  const texte = recherche.trim();

  if (texte) {
    navigate(`/artisans?recherche=${encodeURIComponent(texte)}`);
  }
}}
>
        <input
        type="search"
        placeholder="Rechercher un artisan..."
        aria-label="Rechercher un artisan"
        value={recherche}
        onChange={(event) => setRecherche(event.target.value)}
        />

        <button type="submit" aria-label="Rechercher">
          🔍
        </button>
      </form>
    </header>
  );
}

export default Header;
