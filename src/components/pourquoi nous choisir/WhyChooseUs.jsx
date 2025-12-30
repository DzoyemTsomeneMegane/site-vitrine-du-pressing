import React from 'react';
import { FaLeaf, FaMagic, FaHandshake, FaMoneyBillWave } from 'react-icons/fa'; // Ajout d'icônes
import './WhyChooseUs.css';
import Monlinge   from '../../assets/mamiLinge3.png';
// import Mabande from '../../assets/rubanremove2.png';

const featuresData = [
  {
    icon: <FaLeaf />,
    title: 'Nettoyage Écologique',
    description: 'Nous utilisons des produits biodégradables et des méthodes respectueuses de l’environnement.',
  },
  {
    icon: <FaMagic />,
    title: 'Expertise et Qualité',
    description: 'Nos experts garantissent un soin optimal et des résultats impeccables pour tous vos textiles.',
  },
  {
    icon: <FaHandshake />, // Nouvelle icône
    title: 'Service Client Dédié',
    description: 'Une équipe à votre écoute, prête à répondre à vos besoins avec courtoisie et efficacité.',
  },
  {
    icon: <FaMoneyBillWave />, // Nouvelle icône
    title: 'Tarifs Transparent & Justes',
    description: 'Bénéficiez de prix clairs, sans surprise, pour une qualité de service irréprochable.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="section-title-why">Pourquoi nous choisir ?</h2>
          <p style={{textAlign:'left', color:'#666',fontSize:'1rem'}}>Nous transformons la corvée du linge en une expérience sans effort. Découvrez nos engagements pour un service exceptionnel.</p>
          <div className="features-list">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-small">{feature.icon}</div>
                <div>
                  <h3 className="feature-item-title">{feature.title}</h3>
                  <p className="feature-item-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={Monlinge} alt="Pourquoi choisir notre pressing" className="choose-us-image" />
          {/* <img src={Mabande} alt="ndreclients" className="choose-us-image-overlay"/> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;