import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import YouTubeSection from './components/YoutubeSection';
import Footer from './components/Footer';
import './App.css';

function MyApp() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
      <YouTubeSection />    {/* Add the new YouTube section */}
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;