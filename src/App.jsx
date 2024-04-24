import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './Components/Home';
import HowItWorks from './Components/HowItWorks';
import Nav from './Components/Nav/Nav';
import Contscts from './Components/Contact/Contscts';
import Faqs from './Components/Faq/Faqs';
import About from './Components/About/About';

function App() {
  const [count, setCount] = useState(0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav scrollToSection={scrollToSection} /> {/* Pass scrollToSection function as a prop */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contscts />} />
          <Route path='/workings' element={<HowItWorks />} />
          <Route path='/faqs' element={<Faqs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
