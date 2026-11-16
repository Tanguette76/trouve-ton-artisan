
import { useState } from 'react';

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  function changerMenu() {
    setMenuOuvert(!menuOuvert);
  }

  return (
    <header className="header">
      <div className="header-contenu">

        
<a href="/" className="logo">
  <img
    src="/Logo.png"
    alt="Trouve ton artisan - Auvergne-Rhône-Alpes"
  />
</a>


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
          className={menuOuvert ? 'menu ouvert' : 'menu'}
          aria-label="Catégories d'artisans"
        >
          <a href="/categorie/batiment">Bâtiment</a>
          <a href="/categorie/services">Services</a>
          <a href="/categorie/fabrication">Fabrication</a>
          <a href="/categorie/alimentation">Alimentation</a>
        </nav>
      </div>

      <form
        className="recherche"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="search"
          placeholder="Rechercher un artisan..."
          aria-label="Rechercher un artisan"
        />
        <button type="submit" aria-label="Rechercher">
          🔍
        </button>
      </form>
    </header>
  );
}

export default Header;
