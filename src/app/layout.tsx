import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Mohammad Vahedi | Aesthetic Medicine Clinic",
  description: "Expert aesthetic medicine by Dr. Mohammad Vahedi. Botox, Fillers, Thread Lift, HIFU, Laser Hair Removal, Hair Transplant, Rhinoplasty, and more. Transform your beauty with confidence.",
  keywords: ["Dr. Mohammad Vahedi", "Aesthetic Medicine", "Botox", "Fillers", "Thread Lift", "HIFU", "Laser Hair Removal", "Hair Transplant", "Rhinoplasty", "Cosmetic Surgery", "Beauty Clinic", "Tehran"],
  authors: [{ name: "Dr. Mohammad Vahedi" }],
  alternates: {
    canonical: "https://dr-vahedi.com",
    languages: {
      'en': 'https://dr-vahedi.com/en',
      'ar': 'https://dr-vahedi.com/ar',
    },
  },
  openGraph: {
    title: "Dr. Mohammad Vahedi | Aesthetic Medicine Clinic",
    description: "Expert aesthetic medicine by Dr. Mohammad Vahedi. Transform your beauty with confidence.",
    url: "https://dr-vahedi.com",
    siteName: "Dr. Mohammad Vahedi Clinic",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        width: 1200,
        height: 630,
        alt: "Dr. Mohammad Vahedi Aesthetic Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mohammad Vahedi | Aesthetic Medicine",
    description: "Expert aesthetic medicine by Dr. Mohammad Vahedi. Transform your beauty with confidence.",
    images: ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Mohammad Vahedi",
              "alternateName": "الدكتور محمد واحدی",
              "description": "Expert aesthetic medicine specialist offering Botox, Fillers, Thread Lift, HIFU, Laser Hair Removal, Hair Transplant, and Rhinoplasty.",
              "url": "https://dr-vahedi.com",
              "telephone": "+989392083721",
              "email": "mohammadvahediwork@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tehran",
                "addressCountry": "IR"
              },
              "specialty": "Aesthetic Medicine",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Aesthetic Treatments",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Botox & Fillers",
                      "description": "Non-surgical facial rejuvenation treatments"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Thread Lift",
                      "description": "Non-surgical face lifting procedure"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "HIFU Treatment",
                      "description": "High-intensity focused ultrasound skin tightening"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Dr. Mohammad Vahedi Aesthetic Clinic",
              "alternateName": "عيادة الدكتور محمد واحدی التجميلية",
              "description": "Premium aesthetic medicine clinic offering advanced cosmetic treatments and procedures.",
              "url": "https://dr-vahedi.com",
              "telephone": "+989392083721",
              "email": "mohammadvahediwork@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tehran",
                "addressCountry": "IR"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Aesthetic Services",
                "itemListElement": [
                  "Botox & Fillers",
                  "Thread Lift", 
                  "HIFU",
                  "Laser Hair Removal",
                  "Hair Transplant",
                  "Rhinoplasty",
                  "Liposuction & Body Contouring"
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
