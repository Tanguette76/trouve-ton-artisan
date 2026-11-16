
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Accueil from "./Pages/Accueil";
import Artisans from "./Pages/Artisans.js";
import Footer from "./Components/Footer";

import "./Styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/artisans" element={<Artisans />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
