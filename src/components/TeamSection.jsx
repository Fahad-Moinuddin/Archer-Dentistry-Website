import React from 'react';
import { Users, Heart, Award, Sparkles, CheckCircle2, ShieldCheck, Calendar, Languages } from 'lucide-react';
import { DOCTORS_AND_TEAM } from '../data/dentistryData';

export default function TeamSection({ onOpenBooking }) {
  return (
    <section id="team" className="py-16 lg:py-24 bg-slate-50 scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-brand-gold" />
            <span>Dedicated Dentists & Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
            Meet the Archer Dentistry Family
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {DOCTORS_AND_TEAM.subheadline}
          </p>
        </div>

        {/* Dual Authentic Team Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: Our Doctors & Dental Specialists */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-200/90 flex flex-col group">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
              <img
                src={DOCTORS_AND_TEAM.teamImage}
                alt="Archer Dentistry Doctors and Dental Specialists in clinical operatory"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  Doctors & Specialists
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Collaborative Clinical Leadership
                </h3>
                <p className="text-xs text-slate-200">
                  Comprehensive General Dentists, Oral Surgeons, Endodontists & Periodontists.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our doctors bring decades of combined clinical expertise. By having specialized care under one roof, we eliminate the inconvenience and anxiety of outside referrals—guaranteeing coordinated, seamless care from routine fillings to advanced oral surgery.
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
                  <span>Dental Implants & Cosmetics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Our Caring Support Staff & Reception */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-200/90 flex flex-col group">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
              <img
                src={DOCTORS_AND_TEAM.staffImage}
                alt="Archer Dentistry front desk and clinical dental assistant team in reception with gold tooth wall emblem"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-brand-gold text-slate-950 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  Support & Front Desk Team
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Warm, Welcoming & Multilingual
                </h3>
                <p className="text-xs text-slate-200">
                  Patient coordinators, registered dental assistants & insurance billing experts.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From the moment you step through our doors into our warm reception, our coordinators ensure you feel at ease. We handle insurance verification, scheduling, and chairside comfort with genuine warmth and patience.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-brand-gold" />
                  <span>English & Spanish Bilingual</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Insurance Verification Pros</span>
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

        {/* Practice Values Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS_AND_TEAM.values.map((val, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
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

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm shadow-md transition-all group"
          >
            <Calendar className="w-4 h-4 text-brand-gold-light group-hover:scale-110 transition-transform" />
            <span>Book with Our Dental Team Today</span>
          </button>
        </div>

      </div>
    </section>
  );
}
