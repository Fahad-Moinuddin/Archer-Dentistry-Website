import React, { useState } from 'react';
import { Phone, Calendar, MapPin, AlertCircle, X } from 'lucide-react';
import { PRACTICE_INFO, LOCATIONS } from '../data/dentistryData';

export default function MobileActionBar({ onOpenBooking }) {
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  return (
    <>
      {/* Location dial modal popup for mobile when clicking 'Call Office' */}
      {showLocationPicker && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-display font-bold text-sm text-brand-navy">
                Select Clinic to Call
              </span>
              <button 
                onClick={() => setShowLocationPicker(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.id}
                  href={`tel:${loc.phoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800"
                >
                  <div>
                    <div className="font-bold text-brand-navy">{loc.name}</div>
                    <div className="text-[11px] text-slate-500">{loc.cityStateZip.split(',')[0]}</div>
                  </div>
                  <span className="text-brand-teal font-bold">{loc.phone}</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>24/7 Emergency Line: {PRACTICE_INFO.emergencyPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        <button
          onClick={() => setShowLocationPicker(true)}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-brand-teal mb-0.5" />
          <span className="text-[10px] font-bold">Call Office</span>
        </button>

        <a
          href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors"
        >
          <AlertCircle className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-extrabold">24/7 Emergency</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white shadow-sm transition-colors"
        >
          <Calendar className="w-4 h-4 text-brand-gold-light mb-0.5" />
          <span className="text-[10px] font-bold">Book Online</span>
        </button>
      </div>
    </>
  );
}
