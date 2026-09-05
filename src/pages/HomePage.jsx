import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  Cpu, 
  CreditCard,
  ChevronRight,
  Quote,
  CheckCircle
} from 'lucide-react';
import { PRACTICE_INFO, LOCATIONS, SERVICES, PATIENT_REVIEWS } from '../data/dentistryData';
import { getLiveStatus } from '../utils/hoursHelper';

export default function HomePage({ onOpenBooking, onNavigate }) {
  // 4 curated primary services to feature on home
  const featuredServices = SERVICES.filter(s => 
    ['general-dentistry', 'dental-implants', 'cosmetic-dentistry', 'emergency-dentistry'].includes(s.id)
  );

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* 1. STREAMLINED HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-12 lg:pt-14 lg:pb-20 border-b border-slate-200/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left: Punchy Headline & Clear CTAs */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>5 Chicagoland & NW Indiana Locations</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-brand-navy tracking-tight leading-[1.15]">
                High-Quality, Affordable & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-dark via-brand-gold to-amber-600">Precise Dental Care</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Comprehensive general dentistry, implants, oral surgery, and gentle family care under one roof. Schedule today with doctors who treat you like family.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-bold text-sm shadow-card hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 border border-brand-gold/40"
                >
                  <Calendar className="w-4 h-4 text-brand-gold-light" />
                  <span>Book Appointment</span>
                </button>

                <button
                  onClick={() => onNavigate('locations')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-brand-navy font-semibold text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all"
                >
                  <MapPin className="w-4 h-4 text-brand-teal" />
                  <span>View 5 Locations</span>
                </button>
              </div>

              {/* Emergency Banner */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200 flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-800 font-medium">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span>Sudden tooth pain or dental injury?</span>
                  </div>
                  <a
                    href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
                    className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1 whitespace-nowrap"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call (630) 835-0545</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Authentic Patient & Doctor Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white p-1">
                  <div className="rounded-2xl overflow-hidden relative">
                    <img
                      src="/assets/hero-smile.jpg"
                      alt="Archer Dentistry doctor with happy patient in modern Chicagoland operatory"
                      className="w-full h-[390px] sm:h-[430px] object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-brand-navy/15 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-1 text-brand-gold-light mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                        ))}
                        <span className="text-xs font-bold text-white ml-1">4.9 / 5.0 Rating</span>
                      </div>
                      <p className="text-xs text-slate-200 font-medium">
                        "Gentle, unhurried care in a welcoming, state-of-the-art office."
                      </p>
                      <span className="text-[11px] text-brand-gold-light font-semibold block mt-0.5">
                        Archer Dentistry • Chicagoland & NW Indiana
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating trust badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-card border border-slate-100 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold-soft text-brand-gold-dark flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">In-House Specialists</div>
                    <div className="text-xs font-bold text-brand-navy">No Outside Referrals</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE ARCHER DIFFERENCE (4 Bite-Sized Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-navy/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold-light flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy mb-1">
              All Specialists In-House
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              General dentists, oral surgeons, endodontists, and periodontists working together under one roof.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-navy/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy mb-1">
              5 Convenient Offices
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Brighton Park, Booker Area, Naperville, Hickory Hills, and Munster IN with Saturday hours.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-navy/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy mb-1">
              3D Digital Precision
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Low-dose 3-D imaging and digital optical scanning—no gag-inducing mouth goop or putty.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-navy/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-gold-dark flex items-center justify-center mb-3">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-brand-navy mb-1">
              Affordable & Insured
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We accept major PPO insurances, Medicaid, and offer flexible 0% interest monthly payment plans.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CURATED FEATURED SERVICES (Concise Cards + View All CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider block mb-1">
              Comprehensive Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight">
              Featured Dental Treatments
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors group"
          >
            <span>Explore All 12+ Dental Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {service.category}
                </span>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {service.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBooking(null, service.title)}
                  className="px-2.5 py-1 rounded-lg bg-brand-navy text-white text-[11px] font-semibold hover:bg-brand-navy-light transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MEET THE TEAM PREVIEW (Clean 2-Col Teaser) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-brand-gold-light uppercase tracking-wider">
                Our Doctors & Staff
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                Compassionate Experts Who Treat You Like Family
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Our multidisciplinary team of dentists, oral surgeons, and welcoming multilingual front-desk coordinators are committed to understanding, fulfilling, and surpassing your dental needs.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-sm"
                >
                  <span>Meet Our Doctors & Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('technology')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-colors border border-white/20"
                >
                  <span>Our 3D Technology</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white/20">
                <img
                  src="/assets/doctors-team.jpg"
                  alt="Archer Dentistry Doctors in clinic"
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MODERN CLINIC EXPERIENCE (Visual Gallery) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider block mb-1">
            Comfort First
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight">
            Designed for Your Comfort & Peace of Mind
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Step into clean, sunlit offices equipped with the latest dental technology and a caring team that puts your family at ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-card transition-all group flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/clinic-lounge.jpg"
                alt="Archer Dentistry modern reception lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">
                Welcoming Reception Lounges
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <p className="text-xs text-slate-600 leading-relaxed">
                Relax before your appointment in contemporary, calm waiting lounges designed like boutique spaces.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-card transition-all group flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/family-dental.jpg"
                alt="Gentle pediatric and family dental care"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">
                Gentle Pediatric & Family Care
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <p className="text-xs text-slate-600 leading-relaxed">
                Friendly doctors who take extra time to make kids giggle and feel proud of their healthy smiles.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-card transition-all group flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/assets/dentist-procedure.jpg"
                alt="Doctor performing precise gentle dental procedure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">
                Precision In-House Care
              </span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <p className="text-xs text-slate-600 leading-relaxed">
                State-of-the-art operatories for pain-free cleanings, implants, root canals, and gentle wisdom teeth removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATIONS QUICK BAR (Compact 5-Office Row with Live Hours) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider block mb-1">
              Chicagoland & NW Indiana
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight">
              Our 5 Convenient Locations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('locations')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy hover:text-brand-teal transition-colors group"
          >
            <span>View Full Hours & Get Directions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {LOCATIONS.map((loc) => {
            const status = getLiveStatus(loc);
            return (
              <div
                key={loc.id}
                onClick={() => onNavigate('locations')}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-card hover:border-brand-teal/40 cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-brand-navy truncate">
                      {loc.name.split(' - ')[1] || loc.name}
                    </span>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${status.isOpen ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mb-1">
                    {loc.address}
                  </p>
                  <p className="text-[11px] font-bold text-brand-teal">
                    {loc.phone}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className={`font-semibold ${status.isOpen ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {status.badgeText}
                  </span>
                  <span className="text-slate-400 group-hover:text-brand-navy">Details →</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. VERIFIED PATIENT REVIEWS (Real Testimonials & Photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-2">
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              <span>Real Patient Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight">
              What Chicagoland Families Say
            </h2>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900">4.9 ★ Average</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-medium">500+ Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PATIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Verified Patient
                  </span>
                </div>

                {/* Review Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-brand-gold/25 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pl-3 relative z-10">
                    "{review.comment}"
                  </p>
                </div>
              </div>

              {/* Bottom: Reviewer Profile & Treatment Tag */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-brand-gold/40 shadow-xs flex-shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-navy to-brand-navy-light text-brand-gold-light font-bold text-xs flex items-center justify-center border-2 border-brand-gold/40 shadow-xs flex-shrink-0">
                      {review.initials || review.name.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <div className="font-display font-bold text-sm text-brand-navy">
                      {review.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {review.location}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg text-right max-w-[170px] truncate">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. APPOINTMENT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-navy via-brand-navy-light to-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-brand-gold/30">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Ready to Experience Better Dental Care?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              Book your comprehensive exam and cleaning online in under 2 minutes. We look forward to welcoming you!
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Schedule Appointment</span>
          </button>
        </div>
      </section>

    </div>
  );
}
