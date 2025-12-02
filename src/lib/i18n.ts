export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    blog: "Blog",
    appointment: "Book Appointment",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Transform Your Beauty, Enhance Your Confidence",
    heroSubtitle: "Expert aesthetic medicine by Dr. Mohammad Vahedi",
    bookNow: "Book Now",
    learnMore: "Learn More",
    
    // About Section
    aboutTitle: "About Dr. Mohammad Vahedi",
    aboutSubtitle: "Expert in Aesthetic Medicine",
    aboutDescription: "With years of experience in aesthetic medicine, Dr. Vahedi combines artistry with medical expertise to deliver natural, beautiful results.",
    experience: "Years Experience",
    patients: "Happy Patients",
    procedures: "Procedures",
    
    // Services
    servicesTitle: "Our Services",
    botoxFillers: "Botox & Fillers",
    threadLift: "Thread Lift",
    hifu: "HIFU",
    laserHair: "Laser Hair Removal",
    hairTransplant: "Hair Transplant",
    rhinoplasty: "Rhinoplasty",
    liposuction: "Liposuction & Body Contouring",
    
    // Gallery
    galleryTitle: "Before & After Gallery",
    viewAll: "View All",
    filterBy: "Filter by",
    
    // Blog
    blogTitle: "Latest Articles",
    readMore: "Read More",
    
    // Appointment
    appointmentTitle: "Book Your Appointment",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    email: "Email",
    selectService: "Select Service",
    appointmentDate: "Appointment Date",
    appointmentTime: "Preferred Time",
    submit: "Submit Appointment",
    depositPayment: "Optional Deposit Payment",
    
    // Contact
    contactTitle: "Contact Us",
    address: "Address",
    phone: "Phone",
    emailContact: "Email",
    whatsapp: "WhatsApp",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    
    // Calculator
    calculatorTitle: "Cost Calculator",
    selectTreatment: "Select Treatment",
    calculate: "Calculate Cost",
    estimatedCost: "Estimated Cost",
    
    // Quiz
    quizTitle: "Which Treatment is Right for You?",
    startQuiz: "Start Quiz",
    next: "Next",
    previous: "Previous",
    result: "Your Result",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    close: "Close",
    open: "Open"
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    gallery: "معرض الأعمال",
    blog: "المقالات",
    appointment: "حجز موعد",
    contact: "اتصل بنا",
    
    // Hero Section
    heroTitle: "حوّل جمالك، عزز ثقتك",
    heroSubtitle: "طب تجميلي متخصص تحت إشراف الدكتور محمد واحدی",
    bookNow: "احجز الآن",
    learnMore: "اعرف المزيد",
    
    // About Section
    aboutTitle: "عن الدكتور محمد واحدی",
    aboutSubtitle: "خبير في طب التجميل",
    aboutDescription: "مع سنوات من الخبرة في طب التجميل، يجمع الدكتور واحدی بين الفن والخبرة الطبية لتقديم نتائج طبيعية وجميلة.",
    experience: "سنوات الخبرة",
    patients: "مرضى سعداء",
    procedures: "إجراءات",
    
    // Services
    servicesTitle: "خدماتنا",
    botoxFillers: "حقن البوتوكس والفيلر",
    threadLift: "شد الوجه بالخيوط",
    hifu: "هايفو",
    laserHair: "إزالة الشعر بالليزر",
    hairTransplant: "زراعة الشعر",
    rhinoplasty: "تجميل الأنف",
    liposuction: "شفط الدهون ونحت الجسم",
    
    // Gallery
    galleryTitle: "معرض قبل وبعد",
    viewAll: "عرض الكل",
    filterBy: "تصفية حسب",
    
    // Blog
    blogTitle: "آخر المقالات",
    readMore: "اقرأ المزيد",
    
    // Appointment
    appointmentTitle: "احجز موعدك",
    fullName: "الاسم الكامل",
    phoneNumber: "رقم الهاتف",
    email: "البريد الإلكتروني",
    selectService: "اختر الخدمة",
    appointmentDate: "تاريخ الموعد",
    appointmentTime: "الوقت المفضل",
    submit: "إرسال الموعد",
    depositPayment: "دفع عربون اختياري",
    
    // Contact
    contactTitle: "اتصل بنا",
    address: "العنوان",
    phone: "الهاتف",
    emailContact: "البريد الإلكتروني",
    whatsapp: "واتساب",
    
    // FAQ
    faqTitle: "الأسئلة الشائعة",
    
    // Calculator
    calculatorTitle: "حاسبة التكلفة",
    selectTreatment: "اختر العلاج",
    calculate: "احسب التكلفة",
    estimatedCost: "التكلفة التقديرية",
    
    // Quiz
    quizTitle: "ما هو العلاج المناسب لك؟",
    startQuiz: "ابدأ الاختبار",
    next: "التالي",
    previous: "السابق",
    result: "نتيجتك",
    
    // Common
    loading: "جاري التحميل...",
    error: "خطأ",
    success: "نجح",
    close: "إغلاق",
    open: "فتح"
  }
};

export type Language = 'en' | 'ar';
export type TranslationKey = keyof typeof translations.en;