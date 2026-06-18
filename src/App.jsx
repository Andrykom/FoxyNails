import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

import infoData from '../info.json';
import servicesData from '../services.json';

function App() {
  // Fix initial scroll issue and clear hash
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    setTimeout(() => window.scrollTo(0, 0), 10);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-brand selection:text-white">
      <Header info={infoData} />
      
      <main className="flex-grow">
        <Hero info={infoData} />
        <Features info={infoData} />
        <Services services={servicesData} />
        <Portfolio />
      </main>
      
      <Footer info={infoData} />
      
      {/* Modals and Overlays */}
      <BookingModal services={servicesData} />
    </div>
  );
}

export default App;
