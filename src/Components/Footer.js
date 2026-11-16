
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-contenu">
          
        <div className="footer-logo">
         <img
             src="/Logo.png"
             alt="Trouve ton artisan - Auvergne-Rhône-Alpes"
            />
        </div>


          <address className="footer-contact">
            <strong>LYON</strong>
            <p>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France
            </p>
            <a href="tel:+33426734000">
              +33 (0)4 26 73 40 00
            </a>
          </address>
        </div>

        <nav className="footer-liens" aria-label="Informations légales">
          <a href="/cookies">Cookies</a>
          <a href="/accessibilite">Accessibilité</a>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/donnees-personnelles">Données personnelles</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
