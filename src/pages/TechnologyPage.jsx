import React from 'react';
import { Cpu, Scan, Monitor, Zap, Shield, CheckCircle2, Eye, Sparkles, Calendar } from 'lucide-react';
import { TECHNOLOGY_FEATURES } from '../data/dentistryData';

export default function TechnologyPage({ onOpenBooking }) {
  return (
    <div className="py-10 lg:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
          <Cpu className="w-3.5 h-3.5 text-brand-gold" />
          <span>Precision & Patient Comfort</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
          Modern Dental Technology
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          We invest in advanced clinical equipment so your dental care is more accurate, less invasive, virtually painless, and significantly faster.
        </p>
      </div>

      {/* 2-Column Hero: Features & Authentic Operatory Photo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Features Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECHNOLOGY_FEATURES.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand-teal/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-brand-gold-soft text-brand-gold-dark border border-brand-gold/30">
                        {feature.badge}
                      </span>
                      <Sparkles className="w-4 h-4 text-brand-gold" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-brand-navy mb-1">
                      {feature.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mb-2">
                      {feature.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-blue-950">
                <strong className="font-bold">Zero Putty Guarantee: </strong>
                We use digital optical wand scanners to take 3D digital impressions for crowns, bridges, and veneers. No gooey impression trays, no gagging, and microscopic margins.
              </div>
            </div>
          </div>

          {/* Right: Dual Technology Photo Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-900">
              <img
                src="/assets/digital-scan.jpg"
                alt="3D digital intraoral scanner and monitor"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  Optical 3D Scanning
                </span>
                <h4 className="font-display font-bold text-base text-white">
                  Intraoral Digital Mapping
                </h4>
                <p className="text-xs text-slate-300">
                  Captures thousands of microscopic color data points in seconds with zero gooey impressions.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-card border-4 border-white bg-slate-900">
              <img
                src="/assets/dentist-procedure.jpg"
                alt="Archer Dentistry operatory procedure"
                className="w-full h-52 sm:h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  High-Precision Operatory
                </span>
                <h4 className="font-display font-bold text-base text-white">
                  Sterile & Ergonomic Surgical Suites
                </h4>
                <p className="text-xs text-slate-300">
                  Precision loupes and gentle chairside care for pain-free procedures.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3 Key Patient Benefits Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-brand-navy text-white shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-display font-extrabold text-white">
              How Our Technology Directly Benefits You
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Technology is not just about fancy equipment—it's about a better, calmer patient experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold text-slate-950 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-bold text-base text-white">Less Radiation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our digital X-rays and 3D CBCT scanners emit up to 80% less radiation than traditional dental film, ensuring safety for kids and adults.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold text-slate-950 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-bold text-base text-white">Fewer & Shorter Visits</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Digital impression files are transmitted instantly to our master dental laboratories, reducing turnaround time and eliminating fit adjustments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold text-slate-950 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-bold text-base text-white">Total Diagnostic Transparency</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                With our intraoral camera footage displayed right in front of your chair, you see exactly what the doctor sees before agreeing to any treatment.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Your 3D Scan & Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
