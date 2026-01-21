import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowToPlay from './components/HowToPlay';
import Gallery from './components/Gallery';
import DownloadSection from './components/Download';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-900 text-white selection:bg-neon-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowToPlay />
        <Gallery />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;