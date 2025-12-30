import React from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialSection.css';

// Tableau de données de témoignages
const testimonialsData = [
  {
    id: 1,
    quote: "Le service est impeccable, mes chemises n'ont jamais été aussi bien repassées !",
    name: "Atangana Françis",
    image: "../../assets/machemise.jpg"
  },
  {
    id: 2,
    quote: "Professionnalisme et rapidité. Je recommande vivement leurs services pour les couettes et couvertures.",
    name: "M. Tsona",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Ils ont réussi à enlever une vieille tache sur ma robe de soirée. Un miracle ! Meme les taches de moisissure n'y voient que du feu!",
    name: "Mme Clarice",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop"
  }
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">Ce que nos clients disent de nous</h2>
      <div className="testimonial-grid">
        {testimonialsData.map(testimonial => (
          <TestimonialCard 
            key={testimonial.id}
            quote={testimonial.quote}
            name={testimonial.name}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;