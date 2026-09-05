import React from 'react';
import { Cpu, Scan, Monitor, Zap, Shield, CheckCircle2, Eye, Sparkles } from 'lucide-react';
import { TECHNOLOGY_FEATURES } from '../data/dentistryData';

export default function TechnologySection() {
  return (
    <section id="technology" className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-brand-navy-dark to-slate-900 text-white scroll-mt-16 relative overflow-hidden">
      {/* Subtle background circuit pattern / radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Advanced Clinical Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Precision Dentistry, Unmatched Comfort
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We invest in next-generation dental equipment so you experience shorter appointments, microscopic clinical accuracy, zero gooey impressions, and faster healing.
          </p>
        </div>

        {/* 2-Column Grid: Left Feature Cards, Right Authentic Operatory Procedure Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Tech Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECHNOLOGY_FEATURES.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/50 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-brand-gold/20 text-brand-gold-light border border-brand-gold/30">
                        {feature.badge}
                      </span>
                      <Sparkles className="w-4 h-4 text-brand-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-gold-light transition-colors">
                      {feature.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-400 mb-2">
                      {feature.subtitle}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comfort Guarantee Card */}
            <div className="p-4 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-gold-light flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-200">
                <strong className="text-brand-gold-light font-bold">Gentle Touch Commitment: </strong>
                High-tech diagnostic imaging allows us to spot microscopic tooth decay before it becomes a painful toothache, saving you both discomfort and costly procedures down the road.
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Operatory Procedure Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-800 p-2">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="/assets/dentist-procedure.jpg"
                    alt="Archer Dentistry specialist performing gentle precision dental procedure in operatory"
                    className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                      In-Office Precision
                    </span>
                    <h4 className="font-display font-bold text-base text-white">
                      Gentle Chairside Procedure
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Doctor and assistant delivering attentive, sterile, and ergonomic patient care in our state-of-the-art operatory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Tech Badge */}
              <div className="absolute -bottom-4 -left-4 bg-brand-navy p-3.5 rounded-2xl shadow-xl border border-brand-gold/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold-light">
                  <Scan className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-300">3D Diagnostic CBCT</div>
                  <div className="text-xs font-bold text-white">Sub-Millimeter Accuracy</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
