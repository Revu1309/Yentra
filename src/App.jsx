import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

import Intro from './pages/Intro.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import Legal from './pages/Legal.jsx';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';
  const [showLoader, setShowLoader] = React.useState(true);

  // Show the loader on initial app load, regardless of which URL the user hit
  if (showLoader) {
    return (
      <main className="w-full h-screen bg-background text-foreground">
        <Intro onComplete={() => {
          // Force scroll to top so we always land directly on the Hero Section
          if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
          }
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          setShowLoader(false);
        }} />
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-neon selection:text-black">
      <Navbar />
      <main className={isHome ? '' : 'flex-1'}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/home"     element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq"      element={<FAQ />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/privacy"  element={<Legal />} />
          <Route path="/terms"    element={<Legal />} />
          <Route path="*"         element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}
