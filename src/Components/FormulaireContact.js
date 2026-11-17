
import { useState } from "react";

function FormulaireContact({ artisan }) {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");


async function envoyerFormulaire(event) {
  event.preventDefault();

  try {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

    const reponse = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artisanId: artisan.id,
        nom: nom,
        email: email,
        objet: objet,
        message: message,
      }),
    });

    const donnees = await reponse.json();

    if (!reponse.ok) {
      throw new Error(donnees.message);
    }

    alert(donnees.message);

    setNom("");
    setEmail("");
    setObjet("");
    setMessage("");
  } catch (error) {
    console.error(error);
    alert(error.message || "Erreur lors de l'envoi du formulaire.");
  }
}


  return (
    <section className="mt-4">
      <h2>Contacter {artisan.nom}</h2>

      <form onSubmit={envoyerFormulaire}>
        <div className="mb-3">
          <label htmlFor="nom-contact" className="form-label">
            Votre nom
          </label>
          <input
            id="nom-contact"
            type="text"
            className="form-control"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
            required
            maxLength={100}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email-contact" className="form-label">
            Votre adresse e-mail
          </label>
          <input
            id="email-contact"
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            maxLength={254}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="objet-contact" className="form-label">
            Objet
          </label>
          <input
            id="objet-contact"
            type="text"
            className="form-control"
            value={objet}
            onChange={(event) => setObjet(event.target.value)}
            required
            maxLength={150}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message-contact" className="form-label">
            Votre message
          </label>
          <textarea
            id="message-contact"
            className="form-control"
            rows="5"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            maxLength={2000}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Envoyer le message
        </button>
      </form>
    </section>
  );
}

export default FormulaireContact;
