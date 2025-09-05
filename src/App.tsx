import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { FarmerDashboard } from './components/dashboards/FarmerDashboard';
import { AggregatorDashboard } from './components/dashboards/AggregatorDashboard';
import { VerifierDashboard } from './components/dashboards/VerifierDashboard';
import { BuyerDashboard } from './components/dashboards/BuyerDashboard';
import { OnboardingFlow } from './components/OnboardingFlow';
import { PlotRegistration } from './components/PlotRegistration';
import { CarbonCalculator } from './components/CarbonCalculator';
import { MapViewer } from './components/MapViewer';
import { ReportGenerator } from './components/ReportGenerator';
import { Wallet } from './components/Wallet';
import { Marketplace } from './components/Marketplace';

type UserRole = 'farmer' | 'aggregator' | 'verifier' | 'buyer';
type View = 'dashboard' | 'onboarding' | 'plots' | 'calculator' | 'maps' | 'reports' | 'wallet' | 'marketplace';

function App() {
  const [userRole, setUserRole] = useState<UserRole>('farmer');
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        switch (userRole) {
          case 'farmer': return <FarmerDashboard language={language} />;
          case 'aggregator': return <AggregatorDashboard language={language} />;
          case 'verifier': return <VerifierDashboard language={language} />;
          case 'buyer': return <BuyerDashboard language={language} />;
        }
        break;
      case 'onboarding': return <OnboardingFlow language={language} />;
      case 'plots': return <PlotRegistration language={language} />;
      case 'calculator': return <CarbonCalculator language={language} />;
      case 'maps': return <MapViewer language={language} />;
      case 'reports': return <ReportGenerator language={language} />;
      case 'wallet': return <Wallet language={language} />;
      case 'marketplace': return <Marketplace language={language} />;
      default: return <FarmerDashboard language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userRole={userRole} 
        language={language} 
        onLanguageChange={setLanguage}
      />
      <Navigation 
        userRole={userRole}
        currentView={currentView}
        onViewChange={setCurrentView}
        onRoleChange={setUserRole}
        language={language}
      />
      <main className="pt-16 pb-20 md:ml-64 md:pb-8">
        <div className="container mx-auto px-4 py-6">
          {renderCurrentView()}
        </div>
      </main>
    </div>
  );
}

export default App;