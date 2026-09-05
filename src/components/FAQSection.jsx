import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, Calendar } from 'lucide-react';
import { FAQS, PRACTICE_INFO } from '../data/dentistryData';

export default function FAQSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-16 lg:py-24 bg-white scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-gold" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about scheduling, dental insurance, emergency protocols, and patient comfort at Archer Dentistry.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-brand-navy">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white border border-slate-200 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-navy text-white' : 'text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-base text-brand-navy">
              Have a question not answered here?
            </h4>
            <p className="text-xs text-slate-600">
              Our front desk coordinators are happy to assist by phone or email.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-brand-navy hover:bg-slate-50 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-teal" />
              <span>Call Any Clinic</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-brand-navy text-white hover:bg-brand-navy-light font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-brand-gold-light" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
