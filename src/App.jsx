import "./global.scss";

import { useState } from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Nav from "./components/menu/Navigation";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import PacksBasicPage from "./pages/PacksBasicPage";
import PacksAdvancedPage from "./pages/PacksAdvancedPage";
import PacksSupremePage from "./pages/PacksSupremePage";
import ScrollToTop from "./assets/functions/ScrollToTop";

function App() {
  const [menuOpen,SetMenuOpen ] = useState(false);
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Menu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>
        <Nav menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Pacote-Basico/" element={<PacksBasicPage />}/>
          <Route path="/Pacote-Avancado/" element={<PacksAdvancedPage />}/>
          <Route path="/Pacote-Supremo/" element={<PacksSupremePage />}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;