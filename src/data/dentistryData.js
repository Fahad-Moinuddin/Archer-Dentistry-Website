export const PRACTICE_INFO = {
  name: "Archer Dentistry",
  tagline: "High-Quality, Affordable & Precise Dental Care in Chicagoland",
  emergencyPhone: "(630) 835-0545",
  emergencyPhoneRaw: "+16308350545",
  mission: "Our mission is to understand, fulfill, and surpass our patients' needs and expectations. Schedule your appointment today and never look back!",
  description: "At Archer Dentistry we provide high-quality, affordable, and precise dental care across the Chicagoland area and Northwest Indiana. Your family's oral health is very important to us, and we make it our priority to provide the best quality service with gentle care and modern technology.",
  specialties: ["General Dentistry", "Family Dentistry", "Dental Implants", "Cosmetic Dentistry", "Oral Surgery", "Endodontics", "Periodontics", "Emergency Dentistry"],
  trustMetrics: [
    { label: "Chicagoland Locations", value: "5+" },
    { label: "Patients Served", value: "25,000+" },
    { label: "Average Patient Rating", value: "4.9★" },
    { label: "Dental Specialists", value: "100% In-House" },
  ]
};

export const LOCATIONS = [
  {
    id: "brighton-park",
    name: "Chicago - Brighton Park",
    address: "3924 S Archer Ave Unit D",
    cityStateZip: "Chicago, IL 60632, USA",
    fullAddress: "3924 S Archer Ave Unit D, Chicago, IL 60632, USA",
    phone: "(773) 819-7101",
    phoneRaw: "+17738197101",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=3924+S+Archer+Ave+Unit+D+Chicago+IL+60632",
    features: ["Primary Specialty Hub", "Spanish & English Speaking", "Parking Available", "3D CBCT Imaging"],
    schedule: [
      { day: "Monday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Tuesday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Wednesday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Thursday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Friday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Saturday", open: "8:00 AM", close: "2:00 PM", rawOpen: 8, rawClose: 14, isOpen: true },
      { day: "Sunday", open: "Closed", close: "Closed", rawOpen: 0, rawClose: 0, isOpen: false },
    ]
  },
  {
    id: "booker-area",
    name: "Chicago - Booker Area",
    address: "654 E 47th St",
    cityStateZip: "Chicago, IL 60653, USA",
    fullAddress: "654 E 47th St, Chicago, IL 60653, USA",
    phone: "(773) 624-5800",
    phoneRaw: "+17736245800",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=654+E+47th+St+Chicago+IL+60653",
    features: ["Bronzeville / South Side", "Family Dental Care", "School Exams Accepted", "Transit Accessible"],
    schedule: [
      { day: "Monday", open: "9:00 AM", close: "5:00 PM", rawOpen: 9, rawClose: 17, isOpen: true },
      { day: "Tuesday", open: "9:00 AM", close: "5:00 PM", rawOpen: 9, rawClose: 17, isOpen: true },
      { day: "Wednesday", open: "9:00 AM", close: "5:00 PM", rawOpen: 9, rawClose: 17, isOpen: true },
      { day: "Thursday", open: "9:00 AM", close: "5:00 PM", rawOpen: 9, rawClose: 17, isOpen: true },
      { day: "Friday", open: "9:00 AM", close: "5:00 PM", rawOpen: 9, rawClose: 17, isOpen: true },
      { day: "Saturday", open: "Closed", close: "Closed", rawOpen: 0, rawClose: 0, isOpen: false },
      { day: "Sunday", open: "Closed", close: "Closed", rawOpen: 0, rawClose: 0, isOpen: false },
    ]
  },
  {
    id: "naperville",
    name: "Naperville - Illinois",
    address: "1568 W Ogden Ave STE 108",
    cityStateZip: "Naperville, IL 60540, USA",
    fullAddress: "1568 W Ogden Ave STE 108, Naperville, IL 60540, USA",
    phone: "(630) 447-9997",
    phoneRaw: "+16304479997",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=1568+W+Ogden+Ave+STE+108+Naperville+IL+60540",
    features: ["Evening Hours to 7 PM", "Cosmetic & Implants Suite", "Digital Scanning", "Free Dedicated Lot"],
    schedule: [
      { day: "Monday", open: "11:00 AM", close: "7:00 PM", rawOpen: 11, rawClose: 19, isOpen: true },
      { day: "Tuesday", open: "9:00 AM", close: "5:00 PM", rawOpen: 9, rawClose: 17, isOpen: true },
      { day: "Wednesday", open: "11:00 AM", close: "7:00 PM", rawOpen: 11, rawClose: 19, isOpen: true },
      { day: "Thursday", open: "11:00 AM", close: "7:00 PM", rawOpen: 11, rawClose: 19, isOpen: true },
      { day: "Friday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Saturday", open: "9:00 AM", close: "2:00 PM", rawOpen: 9, rawClose: 14, isOpen: true },
      { day: "Sunday", open: "Closed", close: "Closed", rawOpen: 0, rawClose: 0, isOpen: false },
    ]
  },
  {
    id: "hickory-hills",
    name: "Hickory Hills - Illinois",
    address: "8071 W 95th St",
    cityStateZip: "Hickory Hills, IL 60457, USA",
    fullAddress: "8071 W 95th St, Hickory Hills, IL 60457, USA",
    phone: "(708) 608-0095",
    phoneRaw: "+17086080095",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8071+W+95th+St+Hickory+Hills+IL+60457",
    features: ["Southwest Suburbs", "Oral Surgery & Extractions", "Saturday Appointments", "Family Friendly"],
    schedule: [
      { day: "Monday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Tuesday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Wednesday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Thursday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Friday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Saturday", open: "8:00 AM", close: "2:00 PM", rawOpen: 8, rawClose: 14, isOpen: true },
      { day: "Sunday", open: "Closed", close: "Closed", rawOpen: 0, rawClose: 0, isOpen: false },
    ]
  },
  {
    id: "munster",
    name: "Munster - Indiana",
    address: "310 Ridge Rd",
    cityStateZip: "Munster, IN 46321, USA",
    fullAddress: "310 Ridge Rd, Munster, IN 46321, USA",
    phone: "(219) 228-1237",
    phoneRaw: "+12192281237",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=310+Ridge+Rd+Munster+IN+46321",
    features: ["NW Indiana Location", "Comprehensive Dental Care", "Endodontics & Implants", "Modern Operatories"],
    schedule: [
      { day: "Monday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Tuesday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Wednesday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Thursday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Friday", open: "9:00 AM", close: "6:00 PM", rawOpen: 9, rawClose: 18, isOpen: true },
      { day: "Saturday", open: "Closed", close: "Closed", rawOpen: 0, rawClose: 0, isOpen: false },
      { day: "Sunday", open: "Closed", close: "Closed", rawOpen: 0, rawClose: 0, isOpen: false },
    ]
  }
];

export const SERVICES = [
  {
    id: "general-dentistry",
    title: "General & Family Dentistry",
    category: "Preventive & Family",
    icon: "ShieldCheck",
    summary: "Complete preventive checkups, gentle teeth cleanings, and proactive cavity care for toddlers, teens, adults, and seniors.",
    details: "Your family's oral health is our foundational focus. Routine examinations include high-resolution digital imaging, ultrasonic hygiene cleanings, oral cancer screenings, and personalized prevention plans to safeguard your smile for a lifetime.",
    highlights: ["Routine comprehensive check-ups", "Gentle ultrasonic cleanings", "Fluoride treatments & sealants", "Periodontal health monitoring"],
    duration: "45-60 mins",
    popular: true
  },
  {
    id: "childrens-dentistry",
    title: "Children's Dentistry & School Exams",
    category: "Preventive & Family",
    icon: "Smile",
    summary: "Warm, anxiety-free pediatric dentistry with official State of Illinois & Indiana school dental exam forms completed on site.",
    details: "We foster positive dental experiences early in life. Our friendly staff takes time to explain every step, providing gentle dental cleanings, cavity protection, habit counseling, and required Illinois School Dental Exam certifications.",
    highlights: ["Official state school exam forms provided", "Gentle and patient pediatric approach", "Protective dental sealants & fluoride", "Parent education on oral growth"],
    duration: "30-45 mins",
    popular: false
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Restorative & Implants",
    icon: "Award",
    summary: "Permanent, natural-feeling tooth replacement using biocompatible titanium roots topped with custom lifelike porcelain crowns.",
    details: "Dental implants are the gold standard for restoring missing teeth. They prevent jawbone deterioration, preserve facial structure, and allow you to chew, speak, and laugh with complete stability and confidence.",
    highlights: ["Permanent titanium biocompatible root", "Custom shaded porcelain crown", "Preserves adjacent natural teeth", "Restores 100% natural bite force"],
    duration: "Consultation + Custom Plan",
    popular: true
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Veneers",
    category: "Cosmetic",
    icon: "Sparkles",
    summary: "Transform chips, stains, and misalignments with handcrafted porcelain veneers, bonding, and total smile makeovers.",
    details: "From subtle enhancements to dramatic transformations, our cosmetic specialists customize ultra-thin, durable porcelain veneers and aesthetic dental bonding to complement your natural facial aesthetics perfectly.",
    highlights: ["Ultra-thin porcelain veneers", "Tooth-colored composite bonding", "Custom smile simulation", "Stain & chip correction"],
    duration: "2-3 Visits",
    popular: true
  },
  {
    id: "teeth-whitening",
    title: "Professional Teeth Whitening",
    category: "Cosmetic",
    icon: "Zap",
    summary: "Fast, safe in-office laser whitening and custom prescription take-home trays to brighten your smile up to 8 shades.",
    details: "Remove years of coffee, tea, wine, and aging discoloration safely. Unlike harsh drugstore kits, our professional dental whitening formulas include desensitizing agents to deliver dazzling brightness without tooth sensitivity.",
    highlights: ["Up to 8 shades whiter in 1 visit", "Enamel-safe professional formula", "Includes take-home touch-up trays", "Minimal sensitivity technology"],
    duration: "60 mins",
    popular: false
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery & Wisdom Teeth",
    category: "Oral Surgery",
    icon: "Scissors",
    summary: "In-house surgical extractions, wisdom tooth removal, and bone grafting performed with gentle precision and sedation options.",
    details: "No need to travel to an unfamiliar third-party surgical clinic. Our skilled in-house oral surgery team handles impacted wisdom teeth, complex extractions, and socket preservation right here with gentle local anesthesia and anxiety-relief options.",
    highlights: ["Impacted 3rd molar (wisdom teeth) removal", "Gentle atraumatic tooth extractions", "Socket preservation & bone grafting", "Comprehensive sedation & comfort care"],
    duration: "45-90 mins",
    popular: true
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment (Endodontics)",
    category: "Restorative & Implants",
    icon: "Activity",
    summary: "Virtually painless endodontic therapy designed to eliminate severe infection, alleviate toothache, and save your natural tooth.",
    details: "Modern root canal treatment is as gentle as getting a standard filling. Utilizing rotary instruments and digital magnification, we thoroughly clear diseased pulp, sterilize the root canal system, and seal it to protect your natural tooth.",
    highlights: ["Immediate toothache pain relief", "Preserves natural tooth structure", "Rotary precision instruments", "Capped with custom protective crown"],
    duration: "60-90 mins",
    popular: false
  },
  {
    id: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    category: "Restorative & Implants",
    icon: "Anchor",
    summary: "Strong, color-matched ceramic crowns to repair broken teeth and fixed bridges to bridge gaps seamlessly.",
    details: "When a tooth is fractured, heavily filled, or missing, our custom-milled dental crowns and multi-unit bridges restore optimal structural integrity, bite alignment, and lifelike beauty.",
    highlights: ["High-strength zirconia & porcelain", "Exact color-match to your natural teeth", "Reinforces cracked or weakened teeth", "Long-lasting durability"],
    duration: "2 Visits",
    popular: false
  },
  {
    id: "emergency-dentistry",
    title: "Emergency Dental Care",
    category: "Emergency",
    icon: "PhoneCall",
    summary: "Same-day priority relief for severe toothaches, broken teeth, infections, and dental trauma. Call (630) 835-0545 immediately.",
    details: "Dental emergencies cannot wait. We reserve dedicated daily appointment slots across our Chicagoland offices for patients experiencing sudden acute pain, knocked-out teeth, abscesses, or damaged restorations.",
    highlights: ["Same-day emergency appointments", "Immediate pain relief protocol", "24/7 dedicated phone: (630) 835-0545", "Full diagnostic digital imaging on arrival"],
    duration: "Immediate / Same-Day",
    popular: true
  },
  {
    id: "partial-dentures",
    title: "Partial & Complete Dentures",
    category: "Restorative & Implants",
    icon: "CheckCircle",
    summary: "Custom crafted, lightweight removable dental prosthetics engineered for comfortable chewing, speech, and natural aesthetics.",
    details: "Whether replacing several missing teeth or an entire dental arch, our modern prosthetics utilize flexible, biocompatible materials that seat comfortably against your gums without awkward pinching.",
    highlights: ["Natural-looking gum & tooth shades", "Lightweight flexible clasps", "Improves speech and nutritional chewing", "Repair and reline services available"],
    duration: "Multiple precision fittings",
    popular: false
  },
  {
    id: "dental-fillings",
    title: "Tooth-Colored Composite Fillings",
    category: "Preventive & Family",
    icon: "Check",
    summary: "Mercury-free, seamless resin fillings that bond directly to your enamel to treat decay discreetly.",
    details: "We use biocompatible, tooth-colored composite resins that bond directly to your tooth structure, strengthening the remaining tooth while matching its exact hue and translucency.",
    highlights: ["100% amalgam and mercury free", "Blends invisibly with your natural enamel", "Minimally invasive tooth preparation", "Cured instantly with specialized LED light"],
    duration: "30-45 mins",
    popular: false
  },
  {
    id: "digital-technology",
    title: "3D Imaging & Digital Impressions",
    category: "Technology",
    icon: "Cpu",
    summary: "State-of-the-art 3-D Cone Beam CT scans and optical 3D scanners eliminating gooey mouth molds forever.",
    details: "Precision is in our name. We invest in top-tier dental technology: low-dose 3-D CBCT scanners provide panoramic 360° views of bones, nerves, and roots, while digital intraoral scanners create flawless digital impressions in minutes.",
    highlights: ["No gag-inducing impression goop", "Ultra-low radiation 3D scanning", "Microscopic diagnostic accuracy", "Faster turnaround for crowns & implants"],
    duration: "Included with diagnostics",
    popular: false
  }
];

export const TECHNOLOGY_FEATURES = [
  {
    title: "3-D Cone Beam CT (CBCT)",
    subtitle: "Micro-Precision Anatomical Mapping",
    description: "Our high-definition 3D dental scanner creates detailed 360-degree views of your jaw, tooth roots, sinuses, and nerves. This ensures pinpoint accuracy for dental implants, oral surgeries, and root canals with a fraction of the radiation of traditional medical CTs.",
    badge: "Low-Dose Radiation"
  },
  {
    title: "Optical Digital Impressions",
    subtitle: "Zero Gooey Impression Putty",
    description: "Say goodbye to uncomfortable, gag-inducing impression trays. Our handheld intraoral scanner glides over your teeth to capture thousands of high-resolution 3D color frames per second, ensuring exact digital fit for crowns, veneers, and bridges.",
    badge: "100% Patient Comfort"
  },
  {
    title: "High-Def Intraoral Cameras",
    subtitle: "Complete Co-Diagnosis Transparency",
    description: "We believe in honest, transparent care. With chairside intraoral cameras, you can view the exact condition of your teeth on high-definition operatory monitors, allowing you to see what the doctor sees before any treatment begins.",
    badge: "Chairside Visuals"
  },
  {
    title: "Ultrasonic Scalers & Rotary Endodontics",
    subtitle: "Gentle & Fast Treatment",
    description: "Advanced ultrasonic instruments allow for deep plaque and tartar removal with minimal vibration, while computerized rotary endodontic tools make root canals smoother, quieter, and significantly faster.",
    badge: "Painless Technique"
  }
];

export const DOCTORS_AND_TEAM = {
  headline: "Compassionate, Highly Trained Dental Specialists Under One Roof",
  subheadline: "No referrals across town. Our collaborative team of general dentists, endodontists, oral surgeons, and periodontists works together to provide seamless care for your whole family.",
  teamImage: "/assets/doctors-team.jpg",
  staffImage: "/assets/clinic-staff.jpg",
  procedureImage: "/assets/dentist-procedure.jpg",
  patientImage: "/assets/patient-smile.png",
  values: [
    {
      title: "Family First",
      desc: "We treat every patient like our own family member—with warmth, empathy, and genuine respect."
    },
    {
      title: "Affordable Care",
      desc: "Quality dental health should be accessible. We accept major PPOs, Medicaid, and offer flexible payment plans."
    },
    {
      title: "Pain-Free Philosophy",
      desc: "Gentle hands, soothing chairside care, and modern numbing techniques eliminate dental anxiety."
    },
    {
      title: "Multilingual Staff",
      desc: "Our diverse clinical and front-office teams proudly serve Chicagoland in English, Spanish, and Arabic."
    }
  ]
};

export const PATIENT_REVIEWS = [
  {
    id: "letty-b",
    name: "Letty B",
    location: "Chicago",
    service: "Family & Pediatric Dentistry",
    rating: 5,
    avatar: "/assets/reviewers/review-letty.jpg",
    comment: "I am so happy I found this dentist for my kids and me! All the staff are super nice so friendly so helpful! The dentist he is so awesome so funny he is the best! Love this place! I will definitely recommend my whole family to come here! Thank you guys so much!"
  },
  {
    id: "tyler-m",
    name: "Tyler M",
    location: "Chicago",
    service: "Root Canal (Dr. Dommaraju)",
    doctor: "Dr. Dommaraju",
    rating: 5,
    avatar: "/assets/reviewers/review-tyler.jpg",
    comment: "I have been dreading getting a root canal for months, but they made my whole experience very comfortable. Dr. Dommaraju and the lady who assisted were always checking in to see how I was feeling throughout the procedure and communicated with me throughout. I’ll definitely be back here and would recommend it to anyone who needs dental work done!"
  },
  {
    id: "barbara-p",
    name: "Barbara P",
    location: "Chicago",
    service: "Wheelchair Accessible Care",
    rating: 5,
    avatar: null,
    initials: "BP",
    comment: "This place is very very good. I recommend this dentist if you haven’t been to one in years. Very wheelchair accessible which most dentist don’t provide. I’m not afraid of going to the dentist anymore. I definitely recommend this place."
  },
  {
    id: "sandra-o",
    name: "Sandra O",
    location: "Chicago",
    service: "Cleaning & Wisdom Teeth Removal",
    rating: 5,
    avatar: "/assets/reviewers/review-sandra.jpg",
    comment: "As a first time patient, I had a great experience from customer service to surgery. Everyone is very generous and patient. I had my a teeth cleaning and wisdom teeth removal; and the surgery went very smooth. I did not feel any pain during the surgery and I was awake. The facility is very clean and organized as well."
  }
];

export const FAQS = [
  {
    question: "What should I do in a dental emergency?",
    answer: "Call our 24/7 dedicated emergency line immediately at (630) 835-0545. Whether you are dealing with unbearable tooth pain, a knocked-out tooth, a facial swelling, or a broken restoration, we arrange immediate same-day priority appointments across our Chicagoland locations. If a tooth was knocked out, place it gently in milk or inside your cheek without scrubbing the root, and get to our office right away."
  },
  {
    question: "Do you accept my dental insurance?",
    answer: "Archer Dentistry works with virtually all major PPO dental insurances, including Delta Dental, Cigna, MetLife, Guardian, Blue Cross Blue Shield, Aetna, Humana, and United Healthcare. We also accept Medicaid / All Kids at qualifying locations. Our front office team will verify your benefits and file all claims on your behalf to maximize your coverage and minimize out-of-pocket costs."
  },
  {
    question: "What if I do not have dental insurance?",
    answer: "We are firmly committed to affordable care for everyone. We offer flexible zero-interest financing through CareCredit, customized in-house payment installment options, and transparent discounted rates for cash and self-pay patients. You will always receive a clear, upfront estimate before any treatment begins."
  },
  {
    question: "Are your offices open on Saturdays or evenings?",
    answer: "Yes! We understand busy family work and school schedules. Our Naperville office offers convenient evening hours until 7:00 PM on Mondays, Wednesdays, and Thursdays. Furthermore, our Brighton Park, Naperville, and Hickory Hills locations are open on Saturdays for your convenience."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring a valid photo ID, your dental insurance card (if applicable), a list of any current medications you take, and any previous dental records or recent X-rays if available. For school exams, bring your school's official dental examination form."
  },
  {
    question: "I have dental anxiety. How can Archer Dentistry help me?",
    answer: "You are not alone, and we pride ourselves on being a no-judgment, gentle practice. We offer noise-canceling headphones, warm blankets, gentle numbing techniques, and nitrous oxide (laughing gas) or calming oral sedation. Our doctors go at your pace and will pause anytime you raise your hand."
  }
];

export const INSURANCE_PARTNERS = [
  "Delta Dental",
  "Blue Cross Blue Shield",
  "Cigna Dental",
  "MetLife",
  "Aetna",
  "Guardian",
  "Humana",
  "United Concordia",
  "CareCredit",
  "Medicaid / All Kids"
];
