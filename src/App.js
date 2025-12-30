import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import ServiceCardList from './components/servicesCardList/ServiceCardList';
import './App.css'; // Un fichier CSS global pour le body et le App div
import TestimonialSection from './components/testimonialSection/TestimonialSection';
import HowItWorks from './components/comment ça marche/HowItWorks';
import WhyChooseUs from './components/pourquoi nous choisir/WhyChooseUs';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ServiceCardList />
        <HowItWorks/>
        <WhyChooseUs/>
        <TestimonialSection/>
      </main>
      <Footer />
    </div>
  );
};

export default App;