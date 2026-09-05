import React, { useEffect } from 'react';
import { X, Calendar, CheckCircle2, Clock, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose, onBookService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light text-xs font-bold uppercase tracking-wider mb-2 border border-brand-gold/30">
            {service.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {service.title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-gold-light" />
              Typical Duration: <strong className="text-white">{service.duration}</strong>
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Available at All 5 Locations</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Procedure Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.details}
            </p>
          </div>

          {/* Highlights checklist */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Patient Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Expect Callout */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
            <Sparkles className="w-5 h-5 text-brand-gold-dark flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900 font-bold mb-0.5">The Archer Dentistry Difference:</strong>
              Our dedicated doctors and dental specialists prioritize comfort, gentle numbing, and transparent pricing. 
              Most insurance plans cover preventive, restorative, and surgical treatments at our offices.
            </div>
          </div>

        </div>

        {/* Modal Footer with Direct Schedule Action */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have questions about this treatment? Call any of our 5 offices or book online.
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4 text-brand-gold-light" />
              <span>Schedule This Visit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
