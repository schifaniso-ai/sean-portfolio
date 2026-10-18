import React from 'react';
import './lib/gsap';
import useLenis from './utils/lenis';
import Nav from './components/layout/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';
import CursorFollower from './components/effects/CursorFollower';
import ScrollProgress from './components/effects/ScrollProgress';
import './App.css';

function App() {
  useLenis();

  return (
    <>
      <CursorFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Work />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;