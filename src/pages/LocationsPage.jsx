import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Calendar, ExternalLink, Shield } from 'lucide-react';
import { LOCATIONS, PRACTICE_INFO } from '../data/dentistryData';
import { getLiveStatus } from '../utils/hoursHelper';

export default function LocationsPage({ onOpenBooking, initialLocationId }) {
  const [selectedId, setSelectedId] = useState(initialLocationId || LOCATIONS[0].id);

  const activeLocation = LOCATIONS.find(loc => loc.id === selectedId) || LOCATIONS[0];
  const liveStatus = getLiveStatus(activeLocation);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = new Date().getDay();
  const currentDayName = daysOfWeek[currentDayIndex];

  return (
    <div className="py-10 lg:py-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
          <MapPin className="w-3.5 h-3.5 text-brand-gold" />
          <span>5 Modern Chicagoland & NW Indiana Clinics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
          Find Your Nearest Office
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          We proudly serve Brighton Park, Bronzeville / Booker Area, Naperville, Hickory Hills, and Munster Indiana with flexible evening and Saturday appointments.
        </p>
      </div>

      {/* Location Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2.5 no-scrollbar">
          {LOCATIONS.map((loc) => {
            const isCurrent = loc.id === activeLocation.id;
            const status = getLiveStatus(loc);
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedId(loc.id)}
                className={`flex-shrink-0 px-4 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2.5 border ${
                  isCurrent
                    ? 'bg-brand-navy text-white border-brand-navy shadow-card'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400' : 'bg-slate-400'}`}></div>
                <span>{loc.name.split(' - ')[1] || loc.name}</span>
                {isCurrent && (
                  <span className="text-[10px] bg-brand-gold text-slate-950 font-bold px-1.5 py-0.5 rounded ml-0.5">
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Location Hub Details Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-card border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Office Information (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 space-y-6">
              <div className="space-y-6">
                
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark">
                      Archer Dentistry Clinic
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
                      {activeLocation.name}
                    </h2>
                  </div>

                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold ${
                    liveStatus.isOpen
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      liveStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                    }`}></span>
                    <span>{liveStatus.statusText}</span>
                  </div>
                </div>

                {/* Address & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-xs text-brand-teal flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Address</span>
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {activeLocation.address}
                      </p>
                      <p className="text-xs text-slate-600">
                        {activeLocation.cityStateZip}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-xs text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Phone Number</span>
                      <a 
                        href={`tel:${activeLocation.phoneRaw}`}
                        className="text-base font-extrabold text-brand-navy hover:text-brand-teal transition-colors block"
                      >
                        {activeLocation.phone}
                      </a>
                      <span className="text-[11px] text-emerald-700 font-medium">Direct line to reception</span>
                    </div>
                  </div>
                </div>

                {/* Office Highlights */}
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Office Amenities & Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeLocation.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBooking(activeLocation.id)}
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-brand-gold-light" />
                  <span>Book at this Office</span>
                </button>

                <a
                  href={activeLocation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-xs transition-all"
                >
                  <Navigation className="w-4 h-4 text-brand-teal" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={`tel:${activeLocation.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm border border-emerald-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Office</span>
                </a>
              </div>
            </div>

            {/* Right: Weekly Hours Breakdown (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-slate-50/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-navy text-white flex items-center justify-center">
                    <Clock className="w-4 h-4 text-brand-gold-light" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-navy">
                      Weekly Operating Hours
                    </h3>
                    <p className="text-xs text-slate-500">
                      Today's schedule highlighted below
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-slate-200/70 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
                  {activeLocation.schedule.map((item) => {
                    const isToday = item.day === currentDayName;
                    return (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm ${
                          isToday 
                            ? 'bg-amber-50 font-bold text-slate-900 border-l-4 border-brand-gold' 
                            : 'text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={isToday ? 'text-brand-navy font-bold' : 'font-medium'}>
                            {item.day}
                          </span>
                          {isToday && (
                            <span className="text-[10px] bg-brand-gold text-slate-900 uppercase font-black px-1.5 py-0.2 rounded">
                              Today
                            </span>
                          )}
                        </div>

                        <div>
                          {item.isOpen ? (
                            <span className={isToday ? 'text-slate-900 font-bold' : 'text-slate-700'}>
                              {item.open} – {item.close}
                            </span>
                          ) : (
                            <span className="text-slate-400 font-medium italic">
                              Closed
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-blue-900 flex items-start gap-2">
                  <Shield className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Affiliated Network:</span> Part of Archer Dentistry's 5 core clinics plus 2 regional partner centers across Chicagoland.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <span>Emergency Dental Line:</span>
                <a href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`} className="font-bold text-red-600 hover:underline">
                  {PRACTICE_INFO.emergencyPhone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Directory of All 5 Offices Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h3 className="text-xl font-display font-bold text-brand-navy">
            All 5 Clinic Locations Summary
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LOCATIONS.map((loc) => {
            const status = getLiveStatus(loc);
            return (
              <div 
                key={loc.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-brand-navy/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-bold text-base text-brand-navy">
                      {loc.name}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {status.badgeText}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    {loc.address}, {loc.cityStateZip}
                  </p>
                  <p className="text-xs font-bold text-brand-teal mb-3">
                    {loc.phone}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-600 hover:text-brand-navy flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => {
                      setSelectedId(loc.id);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-brand-navy hover:underline"
                  >
                    View Details ↑
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
