import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PATIENT_REVIEWS } from '../data/dentistryData';

export default function ReviewsSection() {
  const [filterOffice, setFilterOffice] = useState('All');

  const offices = ['All', 'Brighton Park', 'Naperville', 'Booker Area', 'Hickory Hills', 'Munster, IN'];

  const filteredReviews = filterOffice === 'All'
    ? PATIENT_REVIEWS
    : PATIENT_REVIEWS.filter(r => r.location.toLowerCase().includes(filterOffice.toLowerCase()));

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-slate-50 scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            Loved by Thousands Across Chicagoland
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Read real feedback from families and patients who trust Archer Dentistry for their oral healthcare and smile transformations.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 p-3 px-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm font-bold text-slate-900">
              4.9 out of 5.0 Rating
            </div>
            <div className="text-xs text-slate-500 border-l border-slate-200 pl-4 hidden sm:inline">
              Based on 450+ Chicagoland Patient Reviews
            </div>
          </div>
        </div>

        {/* Office Filter Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar">
          {offices.map((office) => (
            <button
              key={office}
              onClick={() => setFilterOffice(office)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors flex-shrink-0 ${
                filterOffice === office
                  ? 'bg-brand-navy text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {office}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-card transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {review.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-brand-navy font-semibold text-[11px] mb-3">
                  {review.service}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Patient Name & Location */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-slate-900">
                    {review.name}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {review.location}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
