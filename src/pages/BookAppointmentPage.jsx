import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Shield, 
  Star,
  FileText
} from 'lucide-react';
import { LOCATIONS, PRACTICE_INFO } from '../data/dentistryData';
import { isLocationOpenNow } from '../utils/hoursHelper';

export default function BookAppointmentPage({ onOpenBooking, onNavigate }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    locationId: LOCATIONS[0].id,
    service: 'Routine Checkup & Cleaning',
    preferredDate: '',
    timeWindow: 'Morning (8:00 AM – 12:00 PM)',
    patientName: '',
    phone: '',
    email: '',
    insuranceType: 'Dental PPO Insurance',
    insuranceProvider: '',
    notes: '',
  });

  const [bookingRef, setBookingRef] = useState('');
  const [validationError, setValidationError] = useState('');

  const selectedLocation = LOCATIONS.find(loc => loc.id === formData.locationId) || LOCATIONS[0];

  const serviceOptions = [
    'Routine Checkup & Cleaning',
    'Emergency Tooth Pain / Broken Tooth',
    'Children\'s Dentistry & School Exam',
    'Dental Implants Consultation',
    'Cosmetic Porcelain Veneers',
    'Professional Teeth Whitening',
    'Root Canal Treatment (Endodontics)',
    'Tooth Extraction / Wisdom Teeth',
    'Crowns & Bridges',
    'General Dental Consultation'
  ];

  const handleNext = () => {
    setValidationError('');
    if (step === 1) {
      if (!formData.locationId) {
        setValidationError('Please select a clinic location.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.service) {
        setValidationError('Please select a service or reason for visit.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!formData.preferredDate) {
        setValidationError('Please select a preferred appointment date.');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!formData.patientName.trim() || !formData.phone.trim()) {
        setValidationError('Please provide your full name and phone number.');
        return;
      }
      const refCode = 'AD-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(refCode);
      setStep(5);
    }
  };

  const handlePrev = () => {
    setValidationError('');
    if (step > 1 && step < 5) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-light text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-brand-gold-light/80 mb-3">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <span className="text-white font-medium">Book Appointment</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Online Scheduling</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
                Schedule Your Visit
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Choose from 5 modern Chicagoland & NW Indiana clinics. We confirm appointments rapidly, verify insurance in advance, and offer early morning, evening, and Saturday availability.
              </p>
            </div>

            {/* Emergency Hotline Pill */}
            <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/40 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Same-Day Emergency Care</div>
                <a href={`tel:${PRACTICE_INFO.emergencyPhoneRaw}`} className="text-sm sm:text-base font-bold text-white hover:text-brand-gold-light transition-colors">
                  {PRACTICE_INFO.emergencyPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Scheduling Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: Interactive 5-Step Scheduling Wizard Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-card border border-slate-200/80 overflow-hidden">
            {/* Step Header */}
            <div className="bg-brand-navy p-6 sm:p-7 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-brand-gold-light text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Step {step} of 4</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {step === 1 && 'Select Your Nearest Office'}
                    {step === 2 && 'Reason for Dental Visit'}
                    {step === 3 && 'Choose Date & Time Window'}
                    {step === 4 && 'Patient Information & Insurance'}
                    {step === 5 && 'Appointment Request Received'}
                  </h2>
                </div>
                {step <= 4 && (
                  <div className="text-right">
                    <span className="text-2xl font-display font-extrabold text-brand-gold">{step * 25}%</span>
                  </div>
                )}
              </div>

              {/* Progress bar */}
              {step <= 4 && (
                <div className="w-full h-1.5 bg-white/20 rounded-full mt-4 overflow-hidden">
                  <div 
                    className="h-full bg-brand-gold transition-all duration-300 rounded-full"
                    style={{ width: `${step * 25}%` }}
                  ></div>
                </div>
              )}
            </div>

            {/* Step Body */}
            <div className="p-6 sm:p-8">
              {validationError && (
                <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* STEP 1: Location */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <p className="text-xs text-slate-500">
                    Select the Archer Dentistry clinic most convenient to your home or workplace:
                  </p>

                  <div className="space-y-2.5">
                    {LOCATIONS.map((loc) => {
                      const isSelected = formData.locationId === loc.id;
                      const isOpen = isLocationOpenNow(loc.schedule);
                      return (
                        <div
                          key={loc.id}
                          onClick={() => setFormData({ ...formData, locationId: loc.id })}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'border-brand-navy bg-brand-navy/5 ring-2 ring-brand-navy shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected ? 'bg-brand-navy text-white' : 'bg-slate-100 text-slate-600'
                            }`}>
                              <MapPin className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-sm text-brand-navy">{loc.name}</span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {isOpen ? 'Open Today' : 'Closed Now'}
                                </span>
                              </div>
                              <div className="text-xs text-slate-600 mt-0.5">{loc.address}, {loc.cityStateZip}</div>
                              <div className="text-[11px] text-brand-teal font-medium mt-0.5">{loc.phone}</div>
                            </div>
                          </div>

                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-brand-navy bg-brand-navy text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Service Selection */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span>Office selected: <strong className="text-brand-navy">{selectedLocation.name}</strong></span>
                    <button onClick={() => setStep(1)} className="text-brand-teal font-semibold hover:underline text-[11px]">Change</button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((srv) => {
                      const isSelected = formData.service === srv;
                      const isUrgent = srv.includes('Emergency');
                      return (
                        <div
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-brand-navy bg-brand-navy text-white shadow-xs'
                              : isUrgent
                              ? 'border-red-200 bg-red-50/50 text-red-900 hover:bg-red-50'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{srv}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-gold-light shrink-0 ml-2" />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Date & Preferred Time */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Select Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-navy focus:outline-none text-sm font-medium text-slate-800"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Time Window
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        'Morning (8:00 AM – 12:00 PM)',
                        'Afternoon (12:00 PM – 4:00 PM)',
                        'Evening (4:00 PM – 7:00 PM)'
                      ].map((tw) => {
                        const isSelected = formData.timeWindow === tw;
                        return (
                          <button
                            type="button"
                            key={tw}
                            onClick={() => setFormData({ ...formData, timeWindow: tw })}
                            className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                              isSelected
                                ? 'bg-brand-navy text-white border-brand-navy shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {tw}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-amber-700" />
                    <span>We accommodate same-day emergency slots and Saturday morning visits.</span>
                  </div>
                </div>
              )}

              {/* STEP 4: Patient Info & Insurance */}
              {step === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.patientName}
                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                        placeholder="First and last name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(773) 555-0144"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Insurance / Payment
                      </label>
                      <select
                        value={formData.insuranceType}
                        onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none bg-white"
                      >
                        <option value="Dental PPO Insurance">Dental PPO Insurance</option>
                        <option value="Medicaid / All Kids">Medicaid / All Kids</option>
                        <option value="Self-Pay / Cash">Self-Pay / Cash Discount</option>
                        <option value="CareCredit Monthly Financing">CareCredit 0% Financing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Notes or Symptoms (Optional)
                    </label>
                    <textarea
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Sensitivity to cold, school form needed, anxiety considerations..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 5: Receipt Confirmation */}
              {step === 5 && (
                <div className="text-center space-y-6 animate-fadeIn py-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-extrabold text-brand-navy">
                      Appointment Request Confirmed!
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.patientName}</strong>. Our front desk team at <strong>{selectedLocation.name}</strong> has received your request and will contact you shortly to confirm your reservation.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 text-xs text-slate-700">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-semibold">Reference Code:</span>
                      <span className="font-mono font-bold text-brand-navy text-sm">{bookingRef}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Location:</span>
                      <span className="font-bold text-slate-900">{selectedLocation.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-slate-900">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Requested Date:</span>
                      <span className="font-bold text-slate-900">{formData.preferredDate} ({formData.timeWindow.split(' ')[0]})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Clinic Direct Phone:</span>
                      <a href={`tel:${selectedLocation.phoneRaw}`} className="font-bold text-brand-teal hover:underline">{selectedLocation.phone}</a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => onNavigate('home')}
                      className="flex-1 py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm shadow-md transition-all"
                    >
                      Return to Home
                    </button>
                    <button
                      onClick={() => {
                        setStep(1);
                        setFormData({
                          ...formData,
                          preferredDate: '',
                          patientName: '',
                          phone: '',
                          email: '',
                          notes: '',
                        });
                      }}
                      className="py-3.5 px-6 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all"
                    >
                      Book Another Visit
                    </button>
                  </div>
                </div>
              )}

              {/* Wizard Nav Controls (Steps 1-4) */}
              {step <= 4 && (
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      onClick={handlePrev}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div></div>
                  )}

                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all"
                  >
                    <span>{step === 4 ? 'Confirm & Request' : 'Continue'}</span>
                    <ArrowRight className="w-4 h-4 text-brand-gold-light" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT 5 COLS: Clinic Info & Patient Reassurance Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Selected Location Card */}
            <div className="bg-white rounded-3xl p-6 shadow-card border border-slate-200/80">
              <div className="flex items-center gap-2 text-brand-gold-dark text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Selected Clinic Details</span>
              </div>
              <h3 className="font-display font-extrabold text-xl text-brand-navy">
                {selectedLocation.name}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {selectedLocation.address}, {selectedLocation.cityStateZip}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Phone:</span>
                  <a href={`tel:${selectedLocation.phoneRaw}`} className="font-bold text-brand-navy hover:text-brand-teal">
                    {selectedLocation.phone}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Status:</span>
                  <span className={`font-bold ${isLocationOpenNow(selectedLocation.schedule) ? 'text-emerald-600' : 'text-slate-600'}`}>
                    {isLocationOpenNow(selectedLocation.schedule) ? '● Open Now' : '○ Closed (Reopens Soon)'}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero surprise fees — we verify insurance coverage before treatment.</span>
              </div>
            </div>

            {/* Checklist: What to Bring */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-3">
                <FileText className="w-4 h-4 text-amber-700" />
                <span>What to Bring to Your Visit:</span>
              </div>
              <ul className="space-y-2 text-xs text-amber-950">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                  <span>Government-issued photo ID (driver's license or state ID)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                  <span>Dental insurance card or Medicaid / All Kids card (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                  <span>List of any current medications or relevant health history</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 mt-0.5 shrink-0" />
                  <span>School dental exam forms for pediatric appointments</span>
                </li>
              </ul>
            </div>

            {/* Reassurance & Reviews Snippet */}
            <div className="bg-brand-navy rounded-3xl p-6 text-white shadow-card">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-amber-300 ml-2">4.9 ★ Rating</span>
              </div>
              <p className="text-xs text-slate-200 italic leading-relaxed">
                "All the staff are super nice so friendly so helpful! The dentist is so awesome so funny he is the best! Love this place!"
              </p>
              <div className="mt-3 text-[11px] text-brand-gold-light font-semibold">
                — Letty B., Archer Dentistry Patient
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
