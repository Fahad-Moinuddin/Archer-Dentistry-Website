import React from 'react';
import { Calendar, MapPin, Phone, ShieldCheck, Star, Sparkles, CheckCircle2, Clock, Users } from 'lucide-react';
import { PRACTICE_INFO } from '../data/dentistryData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Decorative background glow circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Chicagoland Practice Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Chicagoland's Premier Multi-Location Dental Practice</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              High-Quality, Affordable & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-dark via-brand-gold to-amber-600">Precise Dental Care</span> for Your Family.
            </h1>

            {/* Subhead based on exact business description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Your family's oral health is our highest priority. We proudly offer comprehensive general dentistry, 
              endodontics, oral surgery, and periodontics across <span className="font-semibold text-slate-800">5 modern Chicagoland locations</span> with gentle hands and advanced 3D imaging.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>All Specialists & Surgeries In-House</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Same-Day Emergency Relief</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Major PPO Insurances & Medicaid Accepted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Saturday & Evening Appointments</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-bold text-base shadow-card hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 border border-brand-gold/40"
              >
                <Calendar className="w-5 h-5 text-brand-gold-light" />
                <span>Schedule Your Appointment</span>
              </button>

              <a
                href="#locations"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-brand-navy font-semibold text-base border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"
              >
                <MapPin className="w-5 h-5 text-brand-teal" />
                <span>Find Your Nearest Office (5)</span>
              </a>
            </div>

            {/* Emergency Hotline Callout Box */}
            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-amber-950 font-medium">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Severe toothache or dental emergency?</span>
                    <span className="text-slate-600">Immediate same-day pain relief across Chicagoland.</span>
                  </div>
                </div>
                <a
                  href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {PRACTICE_INFO.emergencyPhone}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Authentic Patient Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-brand-navy to-slate-900 border-4 border-white p-2">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-t from-slate-950/80 via-transparent to-transparent relative">
                  <img
                    src="/assets/patient-smile.png"
                    alt="Happy Archer Dentistry patient showing confident beautiful smile"
                    className="w-full h-[400px] sm:h-[460px] object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Photo Gradient Overlay for Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent opacity-85"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-brand-gold-light mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                      <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                    </div>
                    <p className="text-xs font-medium text-slate-200 italic">
                      "Gentle, precise, and genuinely caring. Archer Dentistry gave me my smile back!"
                    </p>
                    <span className="text-[11px] text-slate-400 font-semibold block mt-0.5">
                      — Chicago Patient Community
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 5 Chicagoland Offices */}
              <div className="absolute -top-5 -left-5 bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 flex items-center gap-3 animate-float-slow hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Serving Chicagoland</div>
                  <div className="text-sm font-bold text-brand-navy">5 Modern Clinics</div>
                </div>
              </div>

              {/* Floating Badge 2: In-House Specialists */}
              <div className="absolute -bottom-5 -right-4 bg-white p-3.5 rounded-2xl shadow-card border border-slate-100 flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-brand-gold-dark flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">In-House Care</div>
                  <div className="text-sm font-bold text-brand-navy">General • Endo • Surgery</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PRACTICE_INFO.trustMetrics.map((metric, index) => (
              <div key={index} className="text-center p-3 rounded-xl bg-white/60 border border-slate-200/60 shadow-xs">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
