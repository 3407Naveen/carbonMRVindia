import React, { useState } from 'react';
import { MapPin, Camera, QrCode, Satellite } from 'lucide-react';

interface PlotRegistrationProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    title: 'Plot Registration',
    subtitle: 'Register your agricultural plots for carbon credit monitoring',
    plotId: 'Plot ID',
    location: 'Location',
    gpsCoords: 'GPS Coordinates',
    area: 'Area (hectares)',
    plotType: 'Plot Type',
    agroforestry: 'Agroforestry',
    rice: 'Rice Cultivation',
    treeSpecies: 'Tree Species',
    plantingDate: 'Planting Date',
    generateQr: 'Generate QR Code',
    takePhotos: 'Take Photos',
    canopyPhoto: 'Canopy Photo',
    trunkPhoto: 'Trunk Photo',
    soilPhoto: 'Soil Photo',
    save: 'Save Plot',
    myPlots: 'My Registered Plots',
    verified: 'Verified',
    pending: 'Pending'
  },
  hi: {
    title: 'भूमि पंजीकरण',
    subtitle: 'कार्बन क्रेडिट निगरानी के लिए अपनी कृषि भूमि पंजीकृत करें',
    plotId: 'भूमि आईडी',
    location: 'स्थान',
    gpsCoords: 'GPS निर्देशांक',
    area: 'क्षेत्रफल (हेक्टेयर)',
    plotType: 'भूमि प्रकार',
    agroforestry: 'कृषि वानिकी',
    rice: 'धान की खेती',
    treeSpecies: 'पेड़ की प्रजातियां',
    plantingDate: 'रोपण तिथि',
    generateQr: 'QR कोड जनरेट करें',
    takePhotos: 'तस्वीरें लें',
    canopyPhoto: 'कैनोपी फोटो',
    trunkPhoto: 'तना फोटो',
    soilPhoto: 'मिट्टी फोटो',
    save: 'भूमि सेव करें',
    myPlots: 'मेरी पंजीकृत भूमि',
    verified: 'सत्यापित',
    pending: 'प्रतीक्षित'
  }
};

export function PlotRegistration({ language }: PlotRegistrationProps) {
  const [newPlot, setNewPlot] = useState({
    plotId: '',
    location: '',
    gpsLat: '',
    gpsLng: '',
    area: '',
    plotType: '',
    treeSpecies: '',
    plantingDate: ''
  });

  const t = translations[language];

  const registeredPlots = [
    {
      id: 'AG-001',
      location: 'Doddaballapur, Karnataka',
      area: '2.5',
      type: 'Agroforestry',
      species: 'Mango, Coconut',
      status: 'verified',
      credits: 12.5
    },
    {
      id: 'AG-002',
      location: 'Hosakote, Karnataka',
      area: '1.8',
      type: 'Agroforestry',
      species: 'Teak, Neem',
      status: 'pending',
      credits: 8.3
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setNewPlot(prev => ({ ...prev, [field]: value }));
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setNewPlot(prev => ({
          ...prev,
          gpsLat: position.coords.latitude.toFixed(6),
          gpsLng: position.coords.longitude.toFixed(6)
        }));
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* New Plot Registration */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t.title}</h2>
        <p className="text-gray-600 mb-6">{t.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.plotId}</label>
            <input
              type="text"
              value={newPlot.plotId}
              onChange={(e) => handleInputChange('plotId', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="AG-003"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.location}</label>
            <input
              type="text"
              value={newPlot.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Village, District"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.gpsCoords}</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newPlot.gpsLat}
                onChange={(e) => handleInputChange('gpsLat', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Latitude"
              />
              <input
                type="text"
                value={newPlot.gpsLng}
                onChange={(e) => handleInputChange('gpsLng', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Longitude"
              />
              <button
                onClick={getCurrentLocation}
                className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <MapPin className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.area}</label>
            <input
              type="number"
              value={newPlot.area}
              onChange={(e) => handleInputChange('area', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.plotType}</label>
            <select
              value={newPlot.plotType}
              onChange={(e) => handleInputChange('plotType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Type</option>
              <option value="agroforestry">{t.agroforestry}</option>
              <option value="rice">{t.rice}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t.treeSpecies}</label>
            <input
              type="text"
              value={newPlot.treeSpecies}
              onChange={(e) => handleInputChange('treeSpecies', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Mango, Coconut, Teak"
            />
          </div>
        </div>

        {/* Photo Upload Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">{t.takePhotos}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-2">{t.canopyPhoto}</p>
              <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                Capture
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-2">{t.trunkPhoto}</p>
              <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                Capture
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-2">{t.soilPhoto}</p>
              <button className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                Capture
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
            <QrCode className="h-4 w-4" />
            <span>{t.generateQr}</span>
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            {t.save}
          </button>
        </div>
      </div>

      {/* Registered Plots */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">{t.myPlots}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {registeredPlots.map((plot) => (
            <div key={plot.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{plot.id}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  plot.status === 'verified' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {plot.status === 'verified' ? t.verified : t.pending}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{plot.location}</p>
              <p className="text-sm text-gray-600 mb-1">{plot.area} ha • {plot.species}</p>
              <p className="text-sm font-medium text-green-600">{plot.credits} credits</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}