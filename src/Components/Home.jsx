import React from 'react'
import About from './About/About'
import Contscts from './Contact/Contscts'
import HowItWorks from './HowItWorks'
import Faqs from './Faq/Faqs'


export const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Home />
      <section id="about">
        <About />
      </section>
      <section id="contacts">
        <Contscts/>
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
    </div>
  );
}
