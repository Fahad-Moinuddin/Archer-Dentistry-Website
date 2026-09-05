import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MapPin, Clock, Menu, X, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import { PRACTICE_INFO, LOCATIONS } from '../data/dentistryData';

export default function Navbar({ currentRoute, onNavigate, onOpenBooking, onSelectLocation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer if user resizes window back to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', route: 'home' },
    { name: 'Services', route: 'services' },
    { name: 'Locations', route: 'locations' },
    { name: 'About Us', route: 'about' },
    { name: 'Technology', route: 'technology' },
    { name: 'Insurance & FAQs', route: 'insurance' },
    { name: 'Contact', route: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full max-w-full overflow-x-clip transition-all duration-300">
      {/* Top Emergency & Info Banner */}
      <div className="bg-brand-navy-dark text-slate-200 text-xs md:text-sm border-b border-white/10 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Emergency Alert */}
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="font-medium text-amber-300 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 inline text-amber-400" />
              Dental Emergency?
            </span>
            <span className="text-slate-300 hidden sm:inline">Call 24/7:</span>
            <a 
              href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`} 
              className="font-bold text-white hover:text-brand-gold-light transition-colors underline underline-offset-2 flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-brand-gold-light" />
              {PRACTICE_INFO.emergencyPhone}
            </a>
          </div>

          {/* Quick Location & Language Badges */}
          <div className="hidden lg:flex items-center gap-4 text-xs text-slate-300">
            <button 
              onClick={() => onNavigate('locations')}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold-light" />
              5 Chicagoland Locations
            </button>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Saturday & Evening Hours
            </span>
            <span className="text-slate-500">•</span>
            <span className="bg-white/10 text-white px-2 py-0.5 rounded text-[11px] font-medium">
              Hablamos Español
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full max-w-full overflow-x-clip transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-card py-3 border-b border-slate-200/80' 
          : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Left: Logo with Golden Tooth Crest */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 group text-left flex-shrink-0"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-brand-gold/30 flex-shrink-0">
              <svg className="w-6 h-6 text-brand-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 1.5 7 2.5 11 .5 2 2 3 3.5 3s2.5-1.5 2-4.5c-.3-2 .5-3.5 1.5-3.5s1.8 1.5 1.5 3.5c-.5 3 .5 4.5 2 4.5s3-1 3.5-3C21.5 15 23 11.5 23 8c0-3.5-3.5-6-8-6z" fill="currentColor" fillOpacity="0.15" />
                <path d="M12 7v5" stroke="currentColor" strokeWidth="2" />
                <path d="M10 9h4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl md:text-2xl text-brand-navy tracking-tight">
                  Archer
                </span>
                <span className="font-display font-light text-xl md:text-2xl text-brand-gold-dark tracking-tight">
                  Dentistry
                </span>
              </div>
              <span className="block text-[10px] md:text-[11px] font-semibold tracking-wider text-slate-500 uppercase -mt-1">
                Precision & Family Dental Care
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links (Visible on xl and above: >= 1280px) */}
          <div className="hidden xl:flex items-center gap-3 2xl:gap-5 text-xs xl:text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.name}
                  onClick={() => onNavigate(link.route)}
                  className={`py-1.5 px-1 transition-colors relative font-semibold whitespace-nowrap ${
                    isActive ? 'text-brand-navy font-bold' : 'text-slate-600 hover:text-brand-navy'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Desktop Actions Block (Visible on xl and above: >= 1280px) */}
          <div className="hidden xl:flex items-center gap-3 pl-4 2xl:pl-6 border-l border-slate-200 shrink-0">
            {/* Quick Location Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                aria-expanded={locationDropdownOpen}
              >
                <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                <span>Our Offices</span>
                <span className="bg-brand-navy text-white text-[10px] px-1.5 py-0.2 rounded-full">5</span>
              </button>

              {locationDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-card border border-slate-100 p-2 z-50"
                  onMouseLeave={() => setLocationDropdownOpen(false)}
                >
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1">
                    Select Chicagoland Location
                  </div>
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        if (onSelectLocation) onSelectLocation(loc.id);
                        setLocationDropdownOpen(false);
                        onNavigate('locations');
                      }}
                      className="w-full text-left px-2.5 py-2 hover:bg-slate-50 rounded-lg transition-colors flex items-start gap-2.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-xs text-brand-navy">{loc.name}</div>
                        <div className="text-[11px] text-slate-500">{loc.address}</div>
                        <div className="text-[11px] text-brand-teal font-medium">{loc.phone}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 2xl:px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold text-xs xl:text-sm shadow-md hover:shadow-lg hover:from-brand-navy-light hover:to-brand-navy transition-all duration-200 border border-brand-gold/40 hover:border-brand-gold group whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-brand-gold-light group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Tablet & Mobile Controls (Visible on all screens < 1280px: xl:hidden) */}
          <div className="flex xl:hidden items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Location Dropdown for Tablet (sm to xl: >= 640px) */}
            <div className="relative hidden sm:block">
              <button 
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                <span>Offices (5)</span>
              </button>
              {locationDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-card border border-slate-100 p-2 z-50"
                  onMouseLeave={() => setLocationDropdownOpen(false)}
                >
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1">
                    Select Chicagoland Location
                  </div>
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => {
                        if (onSelectLocation) onSelectLocation(loc.id);
                        setLocationDropdownOpen(false);
                        onNavigate('locations');
                      }}
                      className="w-full text-left px-2.5 py-2 hover:bg-slate-50 rounded-lg transition-colors flex items-start gap-2.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-xs text-brand-navy">{loc.name}</div>
                        <div className="text-[11px] text-slate-500">{loc.address}</div>
                        <div className="text-[11px] text-brand-teal font-medium">{loc.phone}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Appointment CTA Button (Adaptive for Tablet & Mobile - never extends beyond border) */}
            <button
              onClick={() => onOpenBooking()}
              className="px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-brand-navy to-brand-navy-light text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all border border-brand-gold/30 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-gold-light" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 focus:outline-none transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-navy" /> : <Menu className="w-6 h-6 text-brand-navy" />}
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Navigation Drawer (Visible on all screens < 1280px: xl:hidden) */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 sm:px-6 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
            {/* Quick Actions in Drawer */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a 
                href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
                className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-bold border border-red-200"
              >
                <Phone className="w-4 h-4" />
                Emergency 24/7
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-brand-navy text-white text-xs font-bold shadow-sm"
              >
                <Calendar className="w-4 h-4 text-brand-gold-light" />
                Book Online
              </button>
            </div>

            {/* Navigation links list */}
            <div className="divide-y divide-slate-100 border-y border-slate-100 py-1">
              {navLinks.map((link) => {
                const isActive = currentRoute === link.route;
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate(link.route);
                    }}
                    className={`w-full flex items-center justify-between py-3 px-2 text-sm font-semibold rounded-xl transition-colors ${
                      isActive 
                        ? 'text-brand-navy font-bold bg-amber-50/80 border-l-4 border-brand-gold pl-3' 
                        : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}
            </div>

            {/* Quick Office Selector in Tablet / Mobile Drawer */}
            <div className="pt-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Our 5 Offices
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => {
                      if (onSelectLocation) onSelectLocation(loc.id);
                      setMobileMenuOpen(false);
                      onNavigate('locations');
                    }}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-left border border-slate-200/70 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-xs text-brand-navy">{loc.name}</div>
                      <div className="text-[11px] text-slate-500">{loc.phone}</div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 text-xs text-slate-500">
              <div className="font-semibold text-slate-700 mb-0.5">24/7 Dental Emergency Hotline:</div>
              <a href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`} className="text-brand-navy font-extrabold text-sm block">
                {PRACTICE_INFO.emergencyPhone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
