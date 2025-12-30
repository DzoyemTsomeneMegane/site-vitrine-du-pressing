import React from 'react';
import './TestimonialSection.css';

const TestimonialCard = ({ quote, name, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image-container">
        <img src={image} alt={`Photo de ${name}`} className="testimonial-image" />
      </div>
      <p className="testimonial-quote">"{quote}"</p>
      <p className="testimonial-name">- {name}</p>
    </div>
  );
};

export default TestimonialCard;