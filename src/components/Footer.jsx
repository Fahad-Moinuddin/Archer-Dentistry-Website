import React from 'react';
import { Phone, MapPin, Mail, Clock, ShieldCheck, Heart, ExternalLink, Calendar } from 'lucide-react';
import { PRACTICE_INFO, LOCATIONS, SERVICES } from '../data/dentistryData';

export default function Footer({ onNavigate, onOpenBooking, onSelectLocation }) {
  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-14 pb-24 md:pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Emergency Action Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/80 via-brand-navy to-brand-navy-dark border border-red-500/30 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-red-400 font-extrabold text-xs uppercase tracking-wider block">
              Emergency Dental Care Available 24/7
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Experiencing Severe Tooth Pain or Trauma?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Don't wait through the night. Call our dedicated emergency response line for urgent triage and immediate appointments.
            </p>
          </div>
          <a
            href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Emergency: {PRACTICE_INFO.emergencyPhone}</span>
          </a>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-brand-gold/40">
                <svg className="w-6 h-6 text-brand-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 3.5 1.5 7 2.5 11 .5 2 2 3 3.5 3s2.5-1.5 2-4.5c-.3-2 .5-3.5 1.5-3.5s1.8 1.5 1.5 3.5c-.5 3 .5 4.5 2 4.5s3-1 3.5-3C21.5 15 23 11.5 23 8c0-3.5-3.5-6-8-6z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M12 7v5" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 9h4" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="font-display font-extrabold text-xl text-white">
                  Archer Dentistry
                </div>
                <div className="text-[11px] text-brand-gold-light font-semibold uppercase tracking-wider">
                  Chicagoland & NW Indiana
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {PRACTICE_INFO.description}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-slate-950 font-bold text-xs shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">All Services</button></li>
              <li><button onClick={() => onNavigate('locations')} className="hover:text-white transition-colors">5 Locations</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">Our Doctors & Team</button></li>
              <li><button onClick={() => onNavigate('technology')} className="hover:text-white transition-colors">3D Technology</button></li>
              <li><button onClick={() => onNavigate('insurance')} className="hover:text-white transition-colors">Insurance & FAQs</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Popular Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Dental Treatments
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">General Dentistry</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Dental Implants</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Porcelain Veneers</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Teeth Whitening</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Oral Surgery</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Root Canal Therapy</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">School Dental Exams</button></li>
            </ul>
          </div>

          {/* Col 4: Chicagoland Locations (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              Our 5 Clinic Locations
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-xs">{loc.name}</div>
                    <div className="text-[11px] text-slate-400">{loc.address}</div>
                  </div>
                  <button
                    onClick={() => {
                      if (onSelectLocation) onSelectLocation(loc.id);
                      onNavigate('locations');
                    }}
                    className="text-[11px] text-brand-gold-light hover:underline font-semibold"
                  >
                    Hours →
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Accessibility */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Archer Dentistry. All rights reserved. Chicagoland & NW Indiana.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <button onClick={() => onNavigate('insurance')} className="hover:text-white">Insurance & FAQs</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white">Contact & Emergency</button>
            <span>•</span>
            <span className="text-slate-400">Accessibility Statement Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
