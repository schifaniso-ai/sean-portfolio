import React, { useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import SvgDefs from './Components/SvgDefs';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Journey from './Pages/Journey';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SvgDefs />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
