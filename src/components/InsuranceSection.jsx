import React from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, DollarSign, Phone, FileText } from 'lucide-react';
import { INSURANCE_PARTNERS, PRACTICE_INFO } from '../data/dentistryData';

export default function InsuranceSection({ onOpenBooking }) {
  return (
    <section id="insurance" className="py-16 lg:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
            <CreditCard className="w-3.5 h-3.5 text-brand-gold" />
            <span>Affordable Dental Care for Every Family</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            Insurance & Flexible Payment Options
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We believe financial concerns should never stand in the way of a healthy smile. We work directly with your insurance provider and offer affordable financing options.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: PPO Dental Insurances */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-brand-gold-light flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                Major PPO Plans Accepted
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                We accept and maximize benefits for virtually all major dental PPOs. Our insurance specialists handle claims and pre-determinations on your behalf.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Delta Dental, Cigna, MetLife & BCBS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Aetna, Guardian, Humana & more</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Medicaid / All Kids accepted</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200 text-xs font-semibold text-brand-navy">
              No surprise bills • Free benefit checks
            </div>
          </div>

          {/* Card 2: Flexible Monthly Financing */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-gold-dark text-white flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                0% Interest Financing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Spread the cost of dental implants, crowns, veneers, or orthodontic care over convenient low-monthly payments with CareCredit.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-dark" />
                  <span>CareCredit approved provider</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-dark" />
                  <span>0% interest promotion terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold-dark" />
                  <span>Instant decision with soft credit check</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200 text-xs font-semibold text-brand-gold-dark">
              Budget-friendly monthly payment plans
            </div>
          </div>

          {/* Card 3: Self-Pay & Cash Savings */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-2">
                Transparent Self-Pay Rates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                No dental insurance? No problem. We provide clear, itemized quotes before treatment so you know exactly what to expect.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Affordable checkup & cleaning packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>School dental exam specials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Honest, no-hidden-fee estimates</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200 text-xs font-semibold text-brand-teal">
              Upfront quotes on every procedure
            </div>
          </div>

        </div>

        {/* Insurance Badges Pill Banner */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
          <div className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
            Commonly Accepted Insurances & Networks
          </div>
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
    </section>
  );
}
