
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Accueil from "./Pages/Accueil";
import Artisans from "./Pages/Artisans.js";
import Footer from "./Components/Footer";
import DetailArtisan from "./Pages/DetailArtisan";

import "./Styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/artisans/:id" element={<DetailArtisan />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
