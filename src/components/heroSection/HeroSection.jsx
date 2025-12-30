import React from 'react';
import Button from '../boutons/Buttons';
import './HeroSection.css';
import heroImage from '../../assets/chemisePlier.jfif'


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-title">Un pressing à domicile qui change la donne</h1>
          <p className="hero-subtitle">
            Simplifiez-vous la vie avec nos services de nettoyage à sec et de blanchisserie,
            collecte et livraison incluses.
          </p>
          <div className="hero-buttons">
            <Button className="btn">Demander un devis</Button>
            <Button className="btn ghost-button">En savoir plus</Button>
          </div>
        </div>
        <div className="hero-image-content">
          <img src={heroImage} alt="Un pressing à domicile qui change la donne" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;