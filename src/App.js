import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './lib/gsap';
import useLenis from './utils/lenis';
import Nav from './components/layout/Nav';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import CursorFollower from './components/effects/CursorFollower';
import ScrollProgress from './components/effects/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  useLenis();

  return (
    <>
      <ScrollToTop />
      <CursorFollower />
      <ScrollProgress />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;