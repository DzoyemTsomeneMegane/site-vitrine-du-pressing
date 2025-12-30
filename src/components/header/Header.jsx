import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  // 1. On crée un état 'isNavOpen' qui sera false par défaut
  const [isNavOpen, setIsNavOpen] = useState(false);

  // 2. On crée une fonction pour basculer l'état
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">Bright Pressing</a>
      
      {/* 3. Le bouton burger, visible uniquement sur mobile */}
      <button className="hamburger-menu" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* 4. La navigation, dont la visibilité dépend de l'état */}
      <nav className={`nav ${isNavOpen ? 'is-open' : ''}`}>
        <a href="/" className="nav-link">Accueil</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="/a-propos" className="nav-link">À propos</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav>
      
      <a href="/contact" className="cta-button">Devis gratuit</a>
    </header>
  );
};

export default Header;