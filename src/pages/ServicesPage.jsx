import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Smile, 
  Award, 
  Sparkles, 
  Zap, 
  Scissors, 
  Activity, 
  Anchor, 
  PhoneCall, 
  CheckCircle, 
  Check, 
  Cpu, 
  Clock, 
  ArrowRight,
  Flame,
  Calendar,
  Phone
} from 'lucide-react';
import { SERVICES, PRACTICE_INFO } from '../data/dentistryData';

const ICON_MAP = {
  ShieldCheck,
  Smile,
  Award,
  Sparkles,
  Zap,
  Scissors,
  Activity,
  Anchor,
  PhoneCall,
  CheckCircle,
  Check,
  Cpu
};

export default function ServicesPage({ onSelectService, onQuickBook }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Preventive & Family',
    'Restorative & Implants',
    'Cosmetic',
    'Oral Surgery',
    'Emergency'
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="py-10 lg:py-16 space-y-12">
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span>Full Clinical Offerings</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
          Comprehensive Dental Services
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          Everything your family needs for a lifetime of healthy, beautiful smiles. All procedures are performed in-house by our dedicated dentists and dental specialists.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${SERVICES.length})`}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || ShieldCheck;
            const isEmergency = service.category === 'Emergency';

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isEmergency
                    ? 'bg-gradient-to-b from-red-50/70 to-white border-red-200 shadow-xs hover:shadow-lg'
                    : 'bg-white hover:bg-slate-50/70 border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-card'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isEmergency
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gradient-to-br from-brand-navy to-brand-navy-light text-brand-gold-light shadow-soft'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {service.popular && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[11px] font-bold">
                          <Flame className="w-3 h-3 text-amber-600" />
                          Popular
                        </span>
                      )}
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                        isEmergency ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0"></div>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors flex items-center gap-1 px-2 py-1"
                    >
                      <span>Procedure details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      onClick={() => onQuickBook(service.title)}
                      className="px-3 py-1.5 rounded-lg bg-brand-navy hover:bg-brand-navy-light text-white font-semibold text-xs transition-colors shadow-xs"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Family & Pediatric Dentistry Spotlight Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-100 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/assets/family-dental.jpg"
                  alt="Friendly pediatric dental visit"
                  className="w-full h-60 sm:h-64 object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                Pediatric & Family Dentistry
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
                Positive Dental Experiences from Day One
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether it's your child's very first visit, an official mandatory Illinois School Dental Exam, or routine cavity prevention, our team specializes in gentle, patient, and fun care that builds healthy smile habits for life.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onQuickBook("Children's Dentistry & School Exams")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs shadow-xs transition-all"
                >
                  <Calendar className="w-4 h-4 text-brand-gold-light" />
                  <span>Book Family or School Exam Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Dental Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-600 to-red-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-200 text-xs font-bold uppercase tracking-wider">
              Immediate Relief Available
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Dealing with a Dental Emergency?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 max-w-xl">
              Severe toothache, broken tooth, swelling, or knocked-out tooth? Call our 24/7 priority emergency line for immediate triage and same-day care.
            </p>
          </div>
          <a
            href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-red-700 hover:bg-red-50 font-bold text-sm shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-red-700" />
            <span>Call (630) 835-0545</span>
          </a>
        </div>
      </div>
    </div>
  );
}
