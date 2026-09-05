import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { LOCATIONS, PRACTICE_INFO } from '../data/dentistryData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredLocation: LOCATIONS[0].name,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide at least your full name and phone number so our team can reach you.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 scroll-mt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold-soft border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-brand-gold" />
            <span>We Are Here For You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
            Contact Archer Dentistry
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Have a question, need help with insurance verification, or want to schedule by phone? Reach out to any of our 5 locations or send a quick message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Quick Contact Info for All 5 Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 24/7 Emergency Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-md">
              <div className="flex items-center gap-2 text-amber-200 text-xs font-extrabold uppercase tracking-wider mb-1">
                <AlertCircle className="w-4 h-4" />
                24/7 Priority Emergency Line
              </div>
              <p className="text-xs text-red-100 mb-3">
                For severe toothache, bleeding, broken teeth, or knocked-out teeth:
              </p>
              <a
                href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`}
                className="text-2xl sm:text-3xl font-display font-black text-white hover:text-amber-200 transition-colors flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                {PRACTICE_INFO.emergencyPhone}
              </a>
            </div>

            {/* Location Cards Accordion/List */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                All 5 Office Direct Contacts
              </div>

              {LOCATIONS.map((loc) => (
                <div 
                  key={loc.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-brand-teal/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-display font-bold text-sm text-brand-navy">
                      {loc.name}
                    </h4>
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      {loc.phone}
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mb-1">
                    {loc.address}, {loc.cityStateZip}
                  </p>
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-brand-gold-dark font-semibold hover:underline"
                  >
                    View on Google Maps →
                  </a>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-card border border-slate-200/90">
              
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-brand-navy">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Our patient care team will respond within 2-4 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-emerald-950">
                    Message Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, <strong className="text-emerald-950">{formData.name}</strong>. A patient coordinator from our <strong>{formData.preferredLocation}</strong> team will call or email you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        preferredLocation: LOCATIONS[0].name,
                        message: ''
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Johnson"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm text-slate-800"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(773) 555-0199"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm text-slate-800"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm text-slate-800 bg-white"
                      >
                        {LOCATIONS.map((loc) => (
                          <option key={loc.id} value={loc.name}>
                            {loc.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      How can we help you?
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your dental concern, question about insurance, or requested appointment time..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm text-slate-800"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm shadow-card flex items-center justify-center gap-2 transition-all group"
                  >
                    <Send className="w-4 h-4 text-brand-gold-light group-hover:translate-x-1 transition-transform" />
                    <span>Send Message to Care Team</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
