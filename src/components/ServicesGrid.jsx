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
  Calendar
} from 'lucide-react';
import { SERVICES } from '../data/dentistryData';

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

export default function ServicesGrid({ onSelectService, onQuickBook }) {
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
    <section id="services" className="py-16 lg:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Comprehensive Family & Specialty Dentistry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            Complete Dental Services Under One Roof
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From routine checkups and children's school exams to complex dental implants, root canals, and oral surgery, our dedicated team provides gentle, precise care without outside referrals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${SERVICES.length})`}
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || ShieldCheck;
            const isEmergency = service.category === 'Emergency';

            return (
              <div
                key={service.id}
                className={`group rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isEmergency
                    ? 'bg-gradient-to-b from-red-50/70 to-white border-red-200 hover:shadow-lg'
                    : 'bg-white hover:bg-slate-50/60 border-slate-200/90 hover:border-slate-300 hover:shadow-card'
                }`}
              >
                <div>
                  {/* Top Badges & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
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
                        isEmergency 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy group-hover:text-brand-navy-light transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {service.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Duration & CTA */}
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
                      <span>Details</span>
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

        {/* Custom Consultation Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-navy via-brand-navy-light to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
              Not sure which dental treatment you need?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Schedule a comprehensive examination with our dentists. We perform 3D low-radiation digital imaging and review clear, personalized options before beginning any treatment.
            </p>
          </div>
          <button
            onClick={() => onQuickBook("Comprehensive Dental Examination")}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-light text-slate-950 font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Book Consultation Exam</span>
          </button>
        </div>

      </div>
    </section>
  );
}
