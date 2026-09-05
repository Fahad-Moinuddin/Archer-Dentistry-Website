import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { LOCATIONS, SERVICES, PRACTICE_INFO } from '../data/dentistryData';

const getInitialFormData = (locationId, service) => ({
  locationId: locationId || LOCATIONS[0].id,
  service: service || 'Routine Checkup & Cleaning',
  preferredDate: '',
  timeWindow: 'Morning (8:00 AM – 12:00 PM)',
  patientName: '',
  phone: '',
  email: '',
  insuranceType: 'Dental PPO Insurance',
  insuranceProvider: '',
  notes: '',
});

export default function BookingModal({ isOpen, onClose, initialLocationId, initialService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() =>
    getInitialFormData(initialLocationId, initialService)
  );

  const [bookingRef, setBookingRef] = useState('');
  const [validationError, setValidationError] = useState('');

  // Reset wizard whenever the modal opens so Continue/Confirm always show
  useEffect(() => {
    if (!isOpen) return;
    setStep(1);
    setFormData(getInitialFormData(initialLocationId, initialService));
    setBookingRef('');
    setValidationError('');
  }, [isOpen, initialLocationId, initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedLocation = LOCATIONS.find(loc => loc.id === formData.locationId) || LOCATIONS[0];

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
      // Generate realistic booking reference code
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-slate-950/80 backdrop-blur-sm p-3 sm:p-6 flex flex-col items-center justify-start md:justify-center animate-fadeIn">
      <div 
        className="my-auto relative w-full max-w-2xl max-h-[min(100%,calc(100dvh-1.5rem))] sm:max-h-[calc(100dvh-3rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="flex-shrink-0 bg-gradient-to-r from-brand-navy to-brand-navy-light text-white p-6 sm:p-7 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-brand-gold-light text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Archer Dentistry • Online Scheduling</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
            {step === 5 ? 'Appointment Request Confirmed' : 'Schedule Your Dental Appointment'}
          </h3>

          {/* Progress Bar (steps 1-4) */}
          {step <= 4 && (
            <div className="mt-4">
              <div className="flex justify-between text-[11px] font-semibold text-slate-300 mb-1.5">
                <span>Step {step} of 4: {
                  step === 1 ? 'Select Office' :
                  step === 2 ? 'Reason for Visit' :
                  step === 3 ? 'Date & Time' : 'Patient Details'
                }</span>
                <span>{step * 25}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-gold transition-all duration-300 rounded-full"
                  style={{ width: `${step * 25}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Content Body — scrolls; footer stays pinned */}
        <div className="p-6 sm:p-8 flex-1 min-h-0 overflow-y-auto">
          {validationError && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* STEP 1: Select Location */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="font-display font-bold text-base text-brand-navy">
                  Where would you like to be seen?
                </h4>
                <p className="text-xs text-slate-500">
                  Select any of our 5 convenient Chicagoland locations.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {LOCATIONS.map((loc) => {
                  const isSelected = formData.locationId === loc.id;
                  return (
                    <div
                      key={loc.id}
                      onClick={() => setFormData({ ...formData, locationId: loc.id })}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-navy bg-brand-navy/5 shadow-xs ring-2 ring-brand-navy'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center mt-0.5 ${
                          isSelected ? 'bg-brand-navy text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-brand-navy">{loc.name}</div>
                          <div className="text-xs text-slate-600">{loc.address}, {loc.cityStateZip.split(',')[0]}</div>
                          <div className="text-[11px] text-brand-teal font-semibold">{loc.phone}</div>
                        </div>
                      </div>

                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
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

          {/* STEP 2: Select Service */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="font-display font-bold text-base text-brand-navy">
                  What is the primary reason for your visit?
                </h4>
                <p className="text-xs text-slate-500">
                  Selected Office: <strong className="text-slate-800">{selectedLocation.name}</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((srv) => {
                  const isSelected = formData.service === srv;
                  const isUrgent = srv.includes('Emergency');
                  return (
                    <div
                      key={srv}
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-brand-navy bg-brand-navy text-white shadow-xs'
                          : isUrgent
                          ? 'border-red-200 bg-red-50/50 text-red-900 hover:bg-red-50'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="leading-snug">{srv}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-gold-light flex-shrink-0 ml-2" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Preferred Date & Time */}
          {step === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h4 className="font-display font-bold text-base text-brand-navy">
                  When would you prefer to visit?
                </h4>
                <p className="text-xs text-slate-500">
                  Our coordinators will confirm the closest available opening with you.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Desired Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy text-sm font-medium text-slate-800"
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
            </div>
          )}

          {/* STEP 4: Patient Info & Insurance */}
          {step === 4 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <h4 className="font-display font-bold text-base text-brand-navy">
                  Patient Contact & Insurance
                </h4>
                <p className="text-xs text-slate-500">
                  We verify insurance before you arrive so you have zero surprise fees.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="Jane Doe"
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
                    Insurance / Payment Plan
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
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Sensitivity to cold, school form needed, anxiety considerations..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-navy focus:outline-none"
                ></textarea>
              </div>
            </div>
          )}

          {/* STEP 5: Confirmation */}
          {step === 5 && (
            <div className="text-center space-y-5 animate-fadeIn py-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-display font-extrabold text-brand-navy">
                  We've Received Your Request!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.patientName}</strong>. Our front desk coordinator at <strong>{selectedLocation.name}</strong> will contact you shortly to confirm your scheduled slot.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-semibold">Confirmation Reference:</span>
                  <span className="font-mono font-bold text-brand-navy">{bookingRef}</span>
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
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="font-bold text-slate-900">{formData.preferredDate} ({formData.timeWindow.split(' ')[0]})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Office Phone:</span>
                  <a href={`tel:${selectedLocation.phoneRaw}`} className="font-bold text-brand-teal hover:underline">{selectedLocation.phone}</a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 text-left">
                <strong>What to bring:</strong> Please bring a photo ID and insurance card (if applicable). For pediatric school exams, please bring your school form.
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-sm shadow-md transition-all"
              >
                Done
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer Controls (Steps 1-4) — always visible below scroll area */}
        {step < 5 && (
          <div className="flex-shrink-0 p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors"
              >
                Cancel
              </button>
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
  );
}
