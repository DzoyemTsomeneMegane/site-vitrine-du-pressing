import React from 'react';
import './Button.css';

const Button = (props) => {
  // On définit notre objet de style pour le bouton
  const buttonStyle = {
    backgroundColor: props.backgroundColor|| '#4A9D87', //  vert d'eau profond professionnel .
    color: props.color || 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  };

  return (
    // On applique le style en utilisant l'attribut 'style'
    <button style={buttonStyle} {...props} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;