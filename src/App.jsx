import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ServiceModal from './components/ServiceModal';
import MobileActionBar from './components/MobileActionBar';

// Page components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import LocationsPage from './pages/LocationsPage';
import AboutPage from './pages/AboutPage';
import TechnologyPage from './pages/TechnologyPage';
import InsurancePage from './pages/InsurancePage';
import ContactPage from './pages/ContactPage';

import { LOCATIONS } from './data/dentistryData';

function getRouteFromHash() {
  const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
  const validRoutes = ['home', 'services', 'locations', 'about', 'technology', 'insurance', 'contact'];
  return validRoutes.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash());
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeLocationId, setActiveLocationId] = useState(LOCATIONS[0].id);
  const [selectedService, setSelectedService] = useState('');
  const [activeServiceDetail, setActiveServiceDetail] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRouteFromHash();
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.location.hash = `#/${route === 'home' ? '' : route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (locationId = null, serviceName = '') => {
    if (locationId) setActiveLocationId(locationId);
    if (serviceName) setSelectedService(serviceName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleSelectServiceDetail = (service) => {
    setActiveServiceDetail(service);
  };

  const handleCloseServiceDetail = () => {
    setActiveServiceDetail(null);
  };

  const handleLocationSelect = (locId) => {
    setActiveLocationId(locId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
        onSelectLocation={handleLocationSelect}
      />

      {/* Main Page Body */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onNavigate={navigateTo}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesPage
            onSelectService={handleSelectServiceDetail}
            onQuickBook={(serviceName) => handleOpenBooking(null, serviceName)}
          />
        )}

        {currentRoute === 'locations' && (
          <LocationsPage
            onOpenBooking={handleOpenBooking}
            initialLocationId={activeLocationId}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'technology' && (
          <TechnologyPage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'insurance' && (
          <InsurancePage
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
        onSelectLocation={handleLocationSelect}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive 5-Step Appointment Scheduler Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialLocationId={activeLocationId}
        initialService={selectedService}
      />

      {/* In-Depth Service Detail Modal */}
      <ServiceModal
        service={activeServiceDetail}
        onClose={handleCloseServiceDetail}
        onBookService={(serviceTitle) => handleOpenBooking(null, serviceTitle)}
      />
    </div>
  );
}
