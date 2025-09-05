import React from 'react';
import { Globe, Leaf } from 'lucide-react';

interface HeaderProps {
  userRole: string;
  language: 'en' | 'hi';
  onLanguageChange: (lang: 'en' | 'hi') => void;
}

const translations = {
  en: {
    title: 'CarbonMRV India',
    subtitle: 'Carbon Monitoring, Reporting & Verification Platform',
    farmer: 'Farmer',
    aggregator: 'Aggregator',
    verifier: 'Verifier',
    buyer: 'Buyer'
  },
  hi: {
    title: 'कार्बनMRV भारत',
    subtitle: 'कार्बन निगरानी, रिपोर्टिंग और सत्यापन प्लेटफॉर्म',
    farmer: 'किसान',
    aggregator: 'एग्रीगेटर',
    verifier: 'सत्यापनकर्ता',
    buyer: 'खरीदार'
  }
};

export function Header({ userRole, language, onLanguageChange }: HeaderProps) {
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">{t.title}</h1>
              <p className="text-xs text-gray-600 hidden sm:block">{t.subtitle}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 capitalize">
              {t[userRole as keyof typeof t]}
            </span>
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-xs font-semibold text-green-600">
                {userRole.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
            className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}