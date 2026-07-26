import React from 'react';
import useLenis from './utils/lenis';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Pages/About';
import Journey from './Pages/Journey';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Certificates from './Pages/Certificates';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import CursorFollower from './Components/CursorFollower';
import ScrollProgress from './Components/ScrollProgress';
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
