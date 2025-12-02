'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}