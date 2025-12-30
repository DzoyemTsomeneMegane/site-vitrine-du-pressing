import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mon Pressing. Tous droits réservés.</p>
      <div className="footer-contact">
        <a href="tel:0123456789">01 23 45 67 89</a> | 
        <a href="mailto:contact@monpressing.com">contact@monpressing.com</a>
      </div>
      <div className="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="/politique-de-confidentialite">Politique de confidentialité</a>
      </div>
    </footer>
  );
};

export default Footer;