'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
      <Languages className="w-4 h-4 text-amber-600" />
      <div className="flex bg-white/10 backdrop-blur-sm rounded-lg p-1">
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium transition-all ${
            language === 'en' 
              ? 'bg-amber-600 text-white' 
              : 'text-white hover:bg-white/20'
          }`}
        >
          English
        </Button>
        <Button
          variant={language === 'ar' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('ar')}
          className={`px-3 py-1 text-sm font-medium transition-all ${
            language === 'ar' 
              ? 'bg-amber-600 text-white' 
              : 'text-white hover:bg-white/20'
          }`}
        >
          عربي
        </Button>
      </div>
    </div>
  );
}