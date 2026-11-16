import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesAtGlance from './components/FeaturesAtGlance';
import AboutCompany from './components/AboutCompany';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import QuoteBanner from './components/QuoteBanner';
import TestimonialsSection from './components/TestimonialsSection';
import PartnerLogos from './components/PartnerLogos';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 selection:bg-[#fdb813] selection:text-black">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 3. Hero Banner */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 4. Features At A Glance */}
        <FeaturesAtGlance />

        {/* 5. About Company */}
        <AboutCompany />

        {/* 6. Construction Services */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* 7. Construction Process */}
        <ProcessSection />

        {/* 8. Portfolio Gallery */}
        <PortfolioSection />

        {/* 9. Interested in Construction / Free Quote Banner */}
        <QuoteBanner />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. Partner Logos */}
        <PartnerLogos />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseQuote} 
      />
    </div>
  );
}
