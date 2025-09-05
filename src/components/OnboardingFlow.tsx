import React, { useState } from 'react';
import { User, MapPin, Camera, Phone } from 'lucide-react';

interface OnboardingFlowProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    welcome: 'Welcome to CarbonMRV India',
    subtitle: 'Let\'s get you started with carbon credit farming',
    step1: 'Personal Information',
    step2: 'Farm Details',
    step3: 'Documentation',
    step4: 'Verification',
    name: 'Full Name',
    phone: 'Phone Number',
    village: 'Village',
    district: 'District',
    state: 'State',
    farmSize: 'Farm Size (hectares)',
    farmType: 'Farm Type',
    agroforestry: 'Agroforestry',
    rice: 'Rice Cultivation',
    crops: 'Main Crops/Trees',
    uploadId: 'Upload ID Proof',
    uploadLand: 'Upload Land Documents',
    takeSelfie: 'Take Selfie',
    audioConsent: 'Audio Consent',
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    recordConsent: 'Record Consent'
  },
  hi: {
    welcome: 'कार्बनMRV भारत में आपका स्वागत है',
    subtitle: 'आइए कार्बन क्रेडिट फार्मिंग की शुरुआत करते हैं',
    step1: 'व्यक्तिगत जानकारी',
    step2: 'खेत विवरण',
    step3: 'दस्तावेजीकरण',
    step4: 'सत्यापन',
    name: 'पूरा नाम',
    phone: 'फोन नंबर',
    village: 'गांव',
    district: 'जिला',
    state: 'राज्य',
    farmSize: 'खेत का आकार (हेक्टेयर)',
    farmType: 'खेत का प्रकार',
    agroforestry: 'कृषि वानिकी',
    rice: 'धान की खेती',
    crops: 'मुख्य फसलें/पेड़',
    uploadId: 'आईडी प्रूफ अपलोड करें',
    uploadLand: 'भूमि दस्तावेज अपलोड करें',
    takeSelfie: 'सेल्फी लें',
    audioConsent: 'ऑडियो सहमति',
    next: 'अगला',
    previous: 'पिछला',
    submit: 'जमा करें',
    recordConsent: 'सहमति रिकॉर्ड करें'
  }
};

export function OnboardingFlow({ language }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    district: '',
    state: '',
    farmSize: '',
    farmType: '',
    crops: ''
  });

  const t = translations[language];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="राजेश कुमार"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.phone}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.village}</label>
                <input
                  type="text"
                  value={formData.village}
                  onChange={(e) => handleInputChange('village', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.district}</label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.state}</label>
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select State</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.farmSize}</label>
              <input
                type="number"
                value={formData.farmSize}
                onChange={(e) => handleInputChange('farmSize', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="2.5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.farmType}</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="farmType"
                    value="agroforestry"
                    checked={formData.farmType === 'agroforestry'}
                    onChange={(e) => handleInputChange('farmType', e.target.value)}
                    className="mr-2"
                  />
                  {t.agroforestry}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="farmType"
                    value="rice"
                    checked={formData.farmType === 'rice'}
                    onChange={(e) => handleInputChange('farmType', e.target.value)}
                    className="mr-2"
                  />
                  {t.rice}
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.crops}</label>
              <textarea
                value={formData.crops}
                onChange={(e) => handleInputChange('crops', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={3}
                placeholder="Mango, Coconut, Teak"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <User className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 mb-2">{t.uploadId}</p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Choose File
                </button>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 mb-2">{t.uploadLand}</p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Choose File
                </button>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-2">{t.takeSelfie}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Open Camera
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t.audioConsent}</h3>
              <p className="text-gray-600 mb-4">
                Please record your consent to participate in the CarbonMRV program
              </p>
              <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center space-x-2 mx-auto">
                <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                <span>{t.recordConsent}</span>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.welcome}</h2>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step <= currentStep
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>{t.step1}</span>
          <span>{t.step2}</span>
          <span>{t.step3}</span>
          <span>{t.step4}</span>
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-md ${
            currentStep === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700'
          }`}
        >
          {t.previous}
        </button>
        <button
          onClick={currentStep === 4 ? () => alert('Onboarding completed!') : nextStep}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          {currentStep === 4 ? t.submit : t.next}
        </button>
      </div>
    </div>
  );
}