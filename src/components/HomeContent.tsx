'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Calendar,
  Heart,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Calculator,
  HelpCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Camera,
  Award,
  Users,
  Activity,
  CreditCard
} from 'lucide-react';

export default function HomeContent() {
  const { t, isRTL, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [calculatorService, setCalculatorService] = useState('');
  const [calculatorResult, setCalculatorResult] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => window.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const services = [
    { id: 'botox', name: t('botoxFillers'), price: 200, image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'thread', name: t('threadLift'), price: 800, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'hifu', name: t('hifu'), price: 600, image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'laser', name: t('laserHair'), price: 150, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'hair', name: t('hairTransplant'), price: 3000, image: 'https://images.unsplash.com/photo-1520136576095-6e8157bb5c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'rhino', name: t('rhinoplasty'), price: 4000, image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' },
    { id: 'lipo', name: t('liposuction'), price: 2500, image: 'https://images.unsplash.com/photo-1533088397526-2c819d9a00a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80' }
  ];

  const galleryImages = [
    { before: 'https://images.unsplash.com/photo-1596468138836-2c7441830eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1616394584738-fc6e612d71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', category: 'botox' },
    { before: 'https://images.unsplash.com/photo-1580234849516-8cc5d13a0aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', category: 'thread' },
    { before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1520136576095-6e8157bb5c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', category: 'hifu' },
    { before: 'https://images.unsplash.com/photo-1610992015792-357c95e96273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1616975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', category: 'laser' },
    { before: 'https://images.unsplash.com/photo-1520136576095-6e8157bb5c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1580234849516-8cc5d13a0aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', category: 'hair' },
    { before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', after: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80', category: 'rhino' }
  ];

  const blogPosts = [
    {
      title: language === 'en' ? 'The Benefits of Botox: What You Need to Know' : 'فوائد البوتوكس: ما تحتاج إلى معرفته',
      excerpt: language === 'en' ? 'Discover how Botox can help you achieve a more youthful appearance...' : 'اكتشف كيف يمكن للبوتوكس مساعدتك في تحقيق مظهر أكثر شباباً...',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      date: '2024-01-15'
    },
    {
      title: language === 'en' ? 'Thread Lift: The Non-Surgical Facelift Alternative' : 'شد الوجه بالخيوط: البديل غير الجراحي لشد الوجه',
      excerpt: language === 'en' ? 'Learn about this innovative procedure that lifts and tightens your skin...' : 'تعرف على هذا الإجراء المبتكر الذي يشد ويشد بشرتك...',
      image: 'https://images.unsplash.com/photo-1580234849516-8cc5d13a0aa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      date: '2024-01-10'
    },
    {
      title: language === 'en' ? 'HIFU Treatment: The Future of Skin Tightening' : 'علاج هايفو: مستقبل شد البشرة',
      excerpt: language === 'en' ? 'Explore how HIFU technology can rejuvenate your appearance...' : 'استكشف كيف يمكن لتقنية هايفو أن تجدد مظهرك...',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      date: '2024-01-05'
    }
  ];

  const faqs = [
    {
      question: language === 'en' ? 'How long do Botox results last?' : 'كم تدوم نتائج البوتوكس؟',
      answer: language === 'en' ? 'Botox results typically last 3-4 months, after which you can schedule another treatment.' : 'تدوم نتائج البوتوكس عادة 3-4 أشهر، وبعدها يمكنك تحديد موعد للعلاج التالي.'
    },
    {
      question: language === 'en' ? 'Is thread lift painful?' : 'هل شد الوجه بالخيوط مؤلم؟',
      answer: language === 'en' ? 'The procedure is performed under local anesthesia, ensuring minimal discomfort during and after the treatment.' : 'يتم الإجراء تحت التخدير الموضعي، مما يضمن الحد الأدنى من الانزعاج خلال وبعد العلاج.'
    },
    {
      question: language === 'en' ? 'When will I see HIFU results?' : 'متى سأرى نتائج هايفو؟',
      answer: language === 'en' ? 'Initial results can be seen immediately, with full effects developing over 2-3 months.' : 'يمكن رؤية النتائج الأولية فوراً، مع التطور الكامل للآثار على مدى 2-3 أشهر.'
    }
  ];

  const calculateCost = () => {
    const service = services.find(s => s.id === calculatorService);
    if (service) {
      setCalculatorResult(service.price);
    }
  };

  const quizQuestions = [
    {
      question: language === 'en' ? 'What is your primary concern?' : 'ما هو هاجسك الأساسي؟',
      options: [
        language === 'en' ? 'Fine lines and wrinkles' : 'الخطوط الدقيقة والتجاعيد',
        language === 'en' ? 'Sagging skin' : 'ترهل الجلد',
        language === 'en' ? 'Excess hair' : 'الشعر الزائد',
        language === 'en' ? 'Hair loss' : 'تساقط الشعر'
      ]
    },
    {
      question: language === 'en' ? 'How invasive are you willing to go?' : 'ما مدى تدخلك الذي ترغب فيه؟',
      options: [
        language === 'en' ? 'Non-invasive only' : 'غير جراحي فقط',
        language === 'en' ? 'Minimally invasive' : 'تدخل جراحي طفيف',
        language === 'en' ? 'Surgical is fine' : 'الجراحة لا بأس بها'
      ]
    }
  ];

  const getQuizResult = () => {
    if (quizAnswers[0] === 0) return language === 'en' ? 'Botox & Fillers' : 'البوتوكس والفيلر';
    if (quizAnswers[0] === 1) return language === 'en' ? 'Thread Lift or HIFU' : 'شد الوجه بالخيوط أو هايفو';
    if (quizAnswers[0] === 2) return language === 'en' ? 'Laser Hair Removal' : 'إزالة الشعر بالليزر';
    if (quizAnswers[0] === 3) return language === 'en' ? 'Hair Transplant' : 'زراعة الشعر';
    return language === 'en' ? 'Consultation Recommended' : 'يوصى بالاستشارة';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 to-amber-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  {language === 'en' ? 'Dr. Mohammad Vahedi' : 'الدكتور محمد واحدی'}
                </h1>
                <p className="text-xs text-gray-600">
                  {language === 'en' ? 'Aesthetic Medicine' : 'طب التجميل'}
                </p>
              </div>
            </div>
            
            <div className={`hidden md:flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">{t('home')}</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">{t('about')}</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">{t('services')}</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-600 transition-colors">{t('gallery')}</a>
              <a href="#blog" className="text-gray-700 hover:text-amber-600 transition-colors">{t('blog')}</a>
              <a href="#appointment" className="text-gray-700 hover:text-amber-600 transition-colors">{t('appointment')}</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">{t('contact')}</a>
              <LanguageSwitcher />
            </div>
            
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-green-100/50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Aesthetic Clinic"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
              {language === 'en' ? 'Premium Aesthetic Medicine' : 'طب التجميل المتميز'}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              {t('heroSubtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3"
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('bookNow')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-3"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('learnMore')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-600 transform rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${isRTL ? 'md:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'order-2' : ''}>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt={t('aboutTitle')}
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className={isRTL ? 'order-1 text-right' : ''}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('aboutTitle')}</h2>
              <p className="text-xl text-amber-600 mb-6">{t('aboutSubtitle')}</p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t('aboutDescription')}
              </p>
              
              <div className={`grid grid-cols-3 gap-6 mb-8 ${isRTL ? 'text-right' : ''}`}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">{t('experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">5000+</div>
                  <div className="text-sm text-gray-600">{t('patients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">10K+</div>
                  <div className="text-sm text-gray-600">{t('procedures')}</div>
                </div>
              </div>
              
              <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  <Award className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {language === 'en' ? 'Board Certified' : 'معتمد من المجلس'}
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                  <Star className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {language === 'en' ? 'Expert in Aesthetics' : 'خبير في التجميل'}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Users className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {language === 'en' ? 'Patient-Focused Care' : 'رعاية تركز على المريض'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? 'Discover our comprehensive range of aesthetic treatments' : 'اكتشف نطاقنا الشامل من العلاجات التجميلية'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{service.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-2xl font-bold text-amber-600">${service.price}</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {language === 'en' ? 'Popular' : 'شائع'}
                    </Badge>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                    onClick={() => setSelectedService(service.id)}
                  >
                    {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('galleryTitle')}</h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? 'See the amazing transformations achieved by our treatments' : 'شاهد التحولات المذهلة التي حققتها علاجاتنا'}
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-8">
              <TabsTrigger value="all">{language === 'en' ? 'All' : 'الكل'}</TabsTrigger>
              <TabsTrigger value="botox">Botox</TabsTrigger>
              <TabsTrigger value="thread">{language === 'en' ? 'Thread' : 'الخيوط'}</TabsTrigger>
              <TabsTrigger value="hifu">HIFU</TabsTrigger>
              <TabsTrigger value="laser">{language === 'en' ? 'Laser' : 'الليزر'}</TabsTrigger>
              <TabsTrigger value="hair">{language === 'en' ? 'Hair' : 'الشعر'}</TabsTrigger>
              <TabsTrigger value="rhino">{language === 'en' ? 'Nose' : 'الأنف'}</TabsTrigger>
              <TabsTrigger value="lipo">{language === 'en' ? 'Body' : 'الجسم'}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative">
                        <img src={image.before} alt="Before" className="w-full h-64 object-cover" />
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                          {language === 'en' ? 'Before' : 'قبل'}
                        </div>
                      </div>
                      <div className="relative">
                        <img src={image.after} alt="After" className="w-full h-64 object-cover" />
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                          {language === 'en' ? 'After' : 'بعد'}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('blogTitle')}</h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? 'Stay informed with our latest articles and insights' : 'ابق على اطلاع بأحدث مقالاتنا ورؤانا'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50">
                    {t('readMore')}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('appointmentTitle')}</h2>
              <p className="text-xl text-gray-600">
                {language === 'en' ? 'Take the first step towards your transformation' : 'اتخذ الخطوة الأولى نحو تحولك'}
              </p>
            </div>
            
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('fullName')}</label>
                    <Input placeholder={language === 'en' ? 'Enter your full name' : 'أدخل اسمك الكامل'} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('phoneNumber')}</label>
                    <Input placeholder="+989392083721" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                    <Input type="email" placeholder="mohammadvahediwork@gmail.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('selectService')}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? 'Choose a service' : 'اختر خدمة'} />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('appointmentDate')}</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('appointmentTime')}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? 'Select time' : 'اختر الوقت'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Additional Notes' : 'ملاحظات إضافية'}
                  </label>
                  <Textarea 
                    placeholder={language === 'en' ? 'Tell us about your goals...' : 'أخبرنا عن أهدافك...'}
                    rows={4}
                  />
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                  >
                    <Calendar className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('submit')}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 border-amber-500 text-amber-600 hover:bg-amber-50"
                  >
                    <CreditCard className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('depositPayment')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('calculatorTitle')}</h2>
              <p className="text-xl text-gray-600">
                {language === 'en' ? 'Get an estimate for your desired treatment' : 'احصل على تقدير لعلاجك المطلوب'}
              </p>
            </div>
            
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('selectTreatment')}</label>
                    <Select value={calculatorService} onValueChange={setCalculatorService}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'en' ? 'Choose a treatment' : 'اختر العلاج'} />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name} - ${service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    onClick={calculateCost}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                    disabled={!calculatorService}
                  >
                    <Calculator className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('calculate')}
                  </Button>
                  
                  {calculatorResult !== null && (
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        ${calculatorResult}
                      </div>
                      <div className="text-gray-600">{t('estimatedCost')}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('quizTitle')}</h2>
              <p className="text-xl text-gray-600">
                {language === 'en' ? 'Find your perfect treatment with our quick quiz' : 'اعثر على علاجك المثالي مع اختبارنا السريع'}
              </p>
            </div>
            
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                {quizStep < quizQuestions.length ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-4">
                        {language === 'en' ? `Question ${quizStep + 1} of ${quizQuestions.length}` : `سؤال ${quizStep + 1} من ${quizQuestions.length}`}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">
                        {quizQuestions[quizStep].question}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {quizQuestions[quizStep].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full text-left justify-start h-auto p-4 hover:bg-amber-50 hover:border-amber-500"
                          onClick={() => {
                            const newAnswers = [...quizAnswers];
                            newAnswers[quizStep] = index;
                            setQuizAnswers(newAnswers);
                            if (quizStep < quizQuestions.length - 1) {
                              setQuizStep(quizStep + 1);
                            }
                          }}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-green-500 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t('result')}</h3>
                    <div className="p-6 bg-amber-50 rounded-lg">
                      <div className="text-xl font-bold text-amber-600 mb-2">
                        {getQuizResult()}
                      </div>
                      <p className="text-gray-600">
                        {language === 'en' 
                          ? 'Based on your answers, this treatment would be perfect for you. Book a consultation to learn more!'
                          : 'بناءً على إجاباتك، هذا العلاج سيكون مثالياً لك. احجز استشارة لمعرفة المزيد!'
                        }
                      </p>
                    </div>
                    <Button 
                      onClick={() => {
                        setQuizStep(0);
                        setQuizAnswers([]);
                      }}
                      variant="outline"
                    >
                      {language === 'en' ? 'Retake Quiz' : 'أعد الاختبار'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('faqTitle')}</h2>
              <p className="text-xl text-gray-600">
                {language === 'en' ? 'Find answers to common questions about our treatments' : 'اعثر على إجابات للأسئلة الشائعة حول علاجاتنا'}
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md">
                  <AccordionTrigger className="px-6 py-4 text-left hover:text-amber-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contactTitle')}</h2>
            <p className="text-xl text-gray-600">
              {language === 'en' ? 'Get in touch with us to start your journey' : 'تواصل معنا لبدء رحلتك'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className={isRTL ? 'text-right' : ''}>
              <div className="space-y-6">
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('phone')}</div>
                    <div className="text-gray-600">+989392083721</div>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('emailContact')}</div>
                    <div className="text-gray-600">mohammadvahediwork@gmail.com</div>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('address')}</div>
                    <div className="text-gray-600">
                      {language === 'en' 
                        ? 'Tehran, Iran - Premium Medical District' 
                        : 'طهران، إيران - المنطقة الطبية المتميزة'
                      }
                    </div>
                  </div>
                </div>
                
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {language === 'en' ? 'Working Hours' : 'ساعات العمل'}
                    </div>
                    <div className="text-gray-600">
                      {language === 'en' 
                        ? 'Mon - Sat: 9:00 AM - 6:00 PM' 
                        : 'السبت - الخميس: 9:00 ص - 6:00 م'
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>{language === 'en' ? 'Interactive Map' : 'خريطة تفاعلية'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/989392083721"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <Dialog open={showExitPopup} onOpenChange={setShowExitPopup}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">
                {language === 'en' ? 'Wait! 🎉 Special Offer' : 'انتظر! 🎉 عرض خاص'}
              </DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-4">
              <div className="text-6xl">🎁</div>
              <p className="text-gray-600">
                {language === 'en' 
                  ? 'Get 20% off your first treatment when you book today!'
                  : 'احصل على خصم 20% على أول علاج لك عند الحجز اليوم!'
                }
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setShowExitPopup(false);
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                >
                  {language === 'en' ? 'Claim Offer' : 'اطلب العرض'}
                </Button>
                <Button variant="outline" onClick={() => setShowExitPopup(false)}>
                  {t('close')}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-green-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  {language === 'en' ? 'Dr. Mohammad Vahedi' : 'الدكتور محمد واحدی'}
                </h3>
              </div>
              <p className="text-gray-400">
                {language === 'en' ? 'Expert aesthetic medicine for natural beauty' : 'طب تجميلي متخصص للجمال الطبيعي'}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('services')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">{t('botoxFillers')}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">{t('threadLift')}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">{t('hifu')}</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">{t('laserHair')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('contact')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+989392083721</li>
                <li>mohammadvahediwork@gmail.com</li>
                <li>{language === 'en' ? 'Tehran, Iran' : 'طهران، إيران'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Follow Us' : 'تابعنا'}
              </h4>
              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              {language === 'en' 
                ? '© 2024 Dr. Mohammad Vahedi. All rights reserved.' 
                : '© 2024 الدكتور محمد واحدی. جميع الحقوق محفوظة.'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}