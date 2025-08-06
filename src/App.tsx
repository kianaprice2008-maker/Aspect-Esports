import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UpcomingMatches from './components/UpcomingMatches';
import Teams from './components/Teams';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <UpcomingMatches />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;