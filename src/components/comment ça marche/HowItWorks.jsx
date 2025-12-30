// import React from 'react';
// import './HowItWorks.css';

// const stepsData = [
//   {
//     step: 1,
//     title: 'Passez votre commande',
//     description: 'Sélectionnez les services dont vous avez besoin via notre site web ou notre application.',
//   },
//   {
//     step: 2,
//     title: 'Collecte à votre domicile',
//     description: 'Un de nos agents se rend à votre domicile pour collecter vos vêtements, à l\'heure de votre choix.',
//   },
//   {
//     step: 3,
//     title: 'Nettoyage professionnel',
//     description: 'Vos articles sont traités avec le plus grand soin par nos experts, selon les méthodes adaptées à chaque tissu.',
//   },
//   {
//     step: 4,
//     title: 'Livraison à votre porte',
//     description: 'Vos vêtements, propres et repassés, vous sont livrés en parfait état, prêts à être portés.',
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <div className="how-it-works-section">
//       <h2 className="section-title">Comment ça marche ?</h2>
//       <div className="steps-container">
//         {stepsData.map((step) => (
//           <div key={step.step} className="step-card">
//             <div className="step-number">{step.step}</div>
//             <h3 className="step-title">{step.title}</h3>
//             <p className="step-description">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;




import React from 'react';
import './HowItWorks.css';
import Monplaning from '../../assets/monplaning.jfif';
import MonRasse from '../../assets/mon-panier-a-linge.jpg';
import MonPro from '../../assets/machemise.jpg';
import Livraison from '../../assets/livraison.jfif';


const stepsData = [
  {
    step: 1,
    title: 'Passez votre commande',
    description: 'Sélectionnez les services dont vous avez besoin via notre site web ou notre application.',
    image: Monplaning, 
  },
  {
    step: 2,
    title: 'Collecte à votre domicile',
    description: 'Un de nos agents se rend à votre domicile pour collecter vos vêtements, à l\'heure de votre choix.',
    image: MonRasse, 
  },
  {
    step: 3,
    title: 'Nettoyage professionnel',
    description: 'Vos articles sont traités avec le plus grand soin par nos experts, selon les méthodes adaptées à chaque tissu.',
    image: MonPro,
  },
  {
    step: 4,
    title: 'Livraison à votre porte',
    description: 'Vos vêtements, propres et repassés, vous sont livrés en parfait état, prêts à être portés.',
    image: Livraison,
   },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works-section">
      <h2 className="section-title">Comment ça marche ?</h2>
      <div className="steps-container">
        {stepsData.map((step) => (
          <div key={step.step} className="step-card">
            <div className="step-image-wrapper"> {/* Renommé pour plus de clarté */}
              <img src={step.image} alt={step.title} className="step-main-image" /> {/* Utilisation de <img> */}
            </div>
              <div className="step-number">{step.step}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;