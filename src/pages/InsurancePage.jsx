import React, { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, DollarSign, Phone, FileText, HelpCircle, ChevronDown, Calendar, Sparkles } from 'lucide-react';
import { INSURANCE_PARTNERS, FAQS, PRACTICE_INFO } from '../data/dentistryData';

export default function InsurancePage({ onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? -1 : idx);
  };

  return (
    <div className="py-10 lg:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
          <CreditCard className="w-3.5 h-3.5 text-brand-gold" />
          <span>Affordable & Transparent Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-navy tracking-tight">
          Insurance, Financing & FAQs
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          We believe high-quality dental care should be accessible and affordable for every family. We maximize your insurance benefits and offer flexible payment plans.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-gold-light flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                Major PPO Plans Accepted
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                We accept virtually all dental PPO plans. Our front desk team verifies coverage before treatment and files all claims for you.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Delta Dental, Cigna, MetLife & BCBS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Aetna, Guardian, Humana & United Concordia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Medicaid / All Kids accepted</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 text-xs font-semibold text-brand-navy">
              Complimentary insurance benefit checks
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-gold-dark text-white flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                0% Interest Financing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Break larger treatments like implants, crowns, and smile makeovers into manageable monthly installments with CareCredit.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-dark" />
                  <span>CareCredit approved provider</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-dark" />
                  <span>0% APR interest promotion terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-dark" />
                  <span>Instant decision with soft credit check</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 text-xs font-semibold text-brand-gold-dark">
              Budget-friendly monthly payments
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                Transparent Self-Pay Rates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                No dental insurance? No problem. We provide clear, itemized quotes before treatment so you never have surprise fees.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Affordable checkup & cleaning packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Official Illinois school dental exam specials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Upfront itemized fee transparency</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 text-xs font-semibold text-brand-teal">
              Upfront quotes before care begins
            </div>
          </div>

        </div>
      </div>

      {/* Insurance Network Badges Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-center">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
            In-Network & Participating Insurance Carriers
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {INSURANCE_PARTNERS.map((partner, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-xs"
              >
                {partner}
              </span>
            ))}
            <span className="px-3 py-1 text-xs font-bold text-brand-teal">
              + Dozens More Plans
            </span>
          </div>
        </div>
      </div>

      {/* Interactive FAQ Accordion */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-brand-gold" />
            <span>Common Patient Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base text-brand-navy">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white border border-slate-200 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-navy text-white' : 'text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 p-6 rounded-3xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-base text-brand-navy">
              Want us to check your insurance benefits today?
            </h4>
            <p className="text-xs text-slate-600">
              Call any of our offices or schedule an appointment online.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 rounded-xl bg-brand-navy text-white hover:bg-brand-navy-light font-bold text-xs shadow-xs flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-brand-gold-light" />
            <span>Book Appointment Online</span>
          </button>
        </div>
      </div>
    </div>
  );
}
