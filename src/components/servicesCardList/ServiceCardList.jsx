import React from 'react';
import Card from '../card/Card';
import './ServiceCardList.css';
// Importe les nouvelles icônes nécessaires pour les services
import { FaTshirt, FaHands, FaBed, FaSprayCan, FaCut, FaTruck, FaClock, FaHeartbeat } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaTshirt />,
    title: 'Nettoyage à sec',
    description: 'Vos vêtements délicats sont traités avec des solvants écologiques pour un résultat impeccable.',
  },
  {
    id: 2,
    icon: <FaHands />,
    title: 'Lavage et Repassage',
    description: 'Un service complet pour un linge propre, frais et prêt à être rangé.',
  },
  {
    id: 3,
    icon: <FaBed />,
    title: 'Blanchisserie',
    description: 'Pour votre literie, rideaux et autres articles volumineux. Un nettoyage en profondeur.',
  },
  {
    id: 4,
    icon: <FaSprayCan />,
    title: 'Détachage Spécialisé',
    description: 'Nous traitons les taches tenaces pour redonner une nouvelle vie à vos textiles.',
  },
  {
    id: 5,
    icon: <FaCut />,
    title: 'Retouches et Couture',
    description: 'Ajustements simples ou réparations, nous prenons soin de vos vêtements.',
  },
  // Nouveaux services
  {
    id: 6,
    icon: <FaTruck />,
    title: 'Collecte & Livraison Express',
    description: 'Un service rapide et fiable pour un linge collecté et livré directement à votre porte.',
  },
  {
    id: 7,
    icon: <FaClock />,
    title: 'Suivi de Commande',
    description: 'Suivez le statut de votre commande en temps réel depuis notre application web.',
  },
  {
    id: 8,
    icon: <FaHeartbeat />,
    title: 'Soins Spécialisés',
    description: 'Un traitement sur mesure pour les tissus les plus précieux et les plus délicats.',
  },
];

const ServiceCardList = () => {
  return (
    <div >
      <div className="content-title" id="services">
      <h1 className="section-title-service">Nos Services Offerts</h1>
      </div>
        <div className="service-card-list">
        {servicesData.map((service) => (
        <Card
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
      </div>
    </div>
  );
};

export default ServiceCardList;