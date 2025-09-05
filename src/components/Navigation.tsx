import React from 'react';
import { 
  Home, User, Users, Shield, CreditCard, Sprout, 
  Calculator, Map, FileText, Wallet, ShoppingCart 
} from 'lucide-react';

interface NavigationProps {
  userRole: string;
  currentView: string;
  onViewChange: (view: string) => void;
  onRoleChange: (role: string) => void;
  language: 'en' | 'hi';
}

const translations = {
  en: {
    dashboard: 'Dashboard',
    onboarding: 'Onboarding',
    plots: 'My Plots',
    calculator: 'Carbon Calculator',
    maps: 'Map Viewer',
    reports: 'Reports',
    wallet: 'Wallet',
    marketplace: 'Marketplace',
    switchRole: 'Switch Role',
    farmer: 'Farmer',
    aggregator: 'Aggregator',
    verifier: 'Verifier',
    buyer: 'Buyer'
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    onboarding: 'नामांकन',
    plots: 'मेरी भूमि',
    calculator: 'कार्बन कैलकुलेटर',
    maps: 'मैप व्यूअर',
    reports: 'रिपोर्ट',
    wallet: 'वॉलेट',
    marketplace: 'बाज़ार',
    switchRole: 'भूमिका बदलें',
    farmer: 'किसान',
    aggregator: 'एग्रीगेटर',
    verifier: 'सत्यापनकर्ता',
    buyer: 'खरीदार'
  }
};

export function Navigation({ userRole, currentView, onViewChange, onRoleChange, language }: NavigationProps) {
  const t = translations[language];

  const getMenuItems = () => {
    const baseItems = [
      { id: 'dashboard', label: t.dashboard, icon: Home },
    ];

    if (userRole === 'farmer') {
      return [
        ...baseItems,
        { id: 'onboarding', label: t.onboarding, icon: User },
        { id: 'plots', label: t.plots, icon: Sprout },
        { id: 'calculator', label: t.calculator, icon: Calculator },
        { id: 'wallet', label: t.wallet, icon: Wallet },
      ];
    } else if (userRole === 'aggregator') {
      return [
        ...baseItems,
        { id: 'plots', label: t.plots, icon: Sprout },
        { id: 'calculator', label: t.calculator, icon: Calculator },
        { id: 'maps', label: t.maps, icon: Map },
        { id: 'reports', label: t.reports, icon: FileText },
      ];
    } else if (userRole === 'verifier') {
      return [
        ...baseItems,
        { id: 'maps', label: t.maps, icon: Map },
        { id: 'reports', label: t.reports, icon: FileText },
      ];
    } else {
      return [
        ...baseItems,
        { id: 'marketplace', label: t.marketplace, icon: ShoppingCart },
        { id: 'reports', label: t.reports, icon: FileText },
      ];
    }
  };

  const menuItems = getMenuItems();

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around py-2">
          {menuItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex flex-col items-center space-y-1 px-2 py-1 rounded-lg transition-colors ${
                  currentView === item.id 
                    ? 'bg-green-50 text-green-600' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col md:fixed md:left-0 md:top-16 md:h-full md:w-64 md:bg-white md:border-r md:border-gray-200 md:z-30">
        <div className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  currentView === item.id 
                    ? 'bg-green-50 text-green-600 border border-green-200' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-2">{t.switchRole}:</p>
            <div className="grid grid-cols-2 gap-2">
              {['farmer', 'aggregator', 'verifier', 'buyer'].map((role) => (
                <button
                  key={role}
                  onClick={() => onRoleChange(role)}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                    userRole === role
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t[role as keyof typeof t]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}