import React from 'react';
import { Users, Heart, Award, Sparkles, CheckCircle2, ShieldCheck, Calendar, Languages, Shield } from 'lucide-react';
import { DOCTORS_AND_TEAM, PRACTICE_INFO } from '../data/dentistryData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="py-10 lg:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
          <Users className="w-3.5 h-3.5 text-brand-gold" />
          <span>Our Story & Dental Family</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
          About Archer Dentistry
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          Dedicated doctors and specialists united by a common mission: providing high-quality, gentle, and affordable dental care to families across Chicagoland.
        </p>
      </div>

      {/* Mission Quote Card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-navy via-brand-navy-light to-slate-900 text-white text-center shadow-card border border-brand-gold/40 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-gold-light uppercase tracking-wider">
              Our Practice Mission
            </span>
            <blockquote className="text-xl sm:text-2xl font-display font-bold leading-snug">
              "{PRACTICE_INFO.mission}"
            </blockquote>
            <p className="text-xs text-slate-300">
              — The Doctors & Care Team at Archer Dentistry
            </p>
          </div>
        </div>
      </div>

      {/* Dual Authentic Team Spotlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Doctors */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-200 flex flex-col group">
            <div className="relative h-80 overflow-hidden bg-slate-100">
              <img
                src={DOCTORS_AND_TEAM.teamImage}
                alt="Archer Dentistry Doctors in clinical operatory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  Doctors & Specialists
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  Collaborative Clinical Care
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our office brings together general dentists, endodontists, oral surgeons, and periodontists. This collaborative multidisciplinary model ensures you never have to deal with outside clinic referrals—everything from checkups to surgical extractions happens smoothly in our familiar offices.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>General & Family Dentistry</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Endodontics (Root Canals)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Oral & Maxillofacial Surgery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Periodontics & Gum Therapy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Support Staff & Reception */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-200 flex flex-col group">
            <div className="relative h-80 overflow-hidden bg-slate-100">
              <img
                src={DOCTORS_AND_TEAM.staffImage}
                alt="Archer Dentistry front desk and dental assistants in reception"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  Support & Front Desk Team
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  Warm, Welcoming & Multilingual
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From your very first phone call to your checkout, our coordinators and registered dental assistants ensure you feel welcomed and relaxed. We guide you through insurance benefits, explain procedures clearly, and provide bilingual communication in English and Spanish.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-brand-gold" />
                  <span>English & Spanish Bilingual</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Insurance Verification Experts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Pediatric Comfort Specialists</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Flexible Payment Guidance</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Operatory Photo & Gentle Touch Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/assets/dentist-procedure.jpg"
                  alt="Doctor performing precise gentle dental procedure"
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                Clinical Precision & Patient Comfort
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
                Our Pain-Free Clinical Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We know that visiting the dentist can bring anxiety for children and adults alike. That's why our clinical operatories are equipped with gentle numbing techniques, ergonomic dental chairs, and compassionate doctors who take all the time necessary to ensure your comfort throughout the visit.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-brand-gold-light" />
                  <span>Schedule Your Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Reception Lounges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider">
                A Calming, Boutique Environment
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
                Thoughtfully Designed for Serenity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe healthcare spaces should feel tranquil, clean, and welcoming. Our reception lounges feature warm natural wood architectural elements, comfortable seating, and abundant natural light to help you decompress from the moment you arrive.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/assets/clinic-lounge.jpg"
                  alt="Archer Dentistry modern reception lounge"
                  className="w-full h-60 sm:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Values Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS_AND_TEAM.values.map((val, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-brand-gold-soft text-brand-gold-dark flex items-center justify-center font-bold text-sm mb-3">
                0{idx + 1}
              </div>
              <h4 className="font-display font-bold text-base text-brand-navy mb-1">
                {val.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
