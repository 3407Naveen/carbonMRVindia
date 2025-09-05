import React, { useState } from 'react';
import { ShoppingCart, Award, MapPin, Users, Leaf } from 'lucide-react';

interface MarketplaceProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    title: 'Carbon Credit Marketplace',
    subtitle: 'Buy verified carbon credits from Indian smallholder farmers',
    availableProjects: 'Available Projects',
    filters: 'Filters',
    location: 'Location',
    projectType: 'Project Type',
    certification: 'Certification',
    priceRange: 'Price Range',
    buyCredits: 'Buy Credits',
    viewDetails: 'View Details',
    farmers: 'farmers',
    hectares: 'hectares',
    verified: 'Verified',
    pending: 'Pending Verification',
    agroforestry: 'Agroforestry',
    riceSystems: 'Rice Systems',
    impact: 'Project Impact',
    biodiversity: 'Biodiversity Benefits',
    soilHealth: 'Soil Health Improvement',
    waterConservation: 'Water Conservation'
  },
  hi: {
    title: 'कार्बन क्रेडिट बाज़ार',
    subtitle: 'भारतीय छोटे किसानों से सत्यापित कार्बन क्रेडिट खरीदें',
    availableProjects: 'उपलब्ध परियोजनाएं',
    filters: 'फिल्टर',
    location: 'स्थान',
    projectType: 'परियोजना प्रकार',
    certification: 'प्रमाणन',
    priceRange: 'मूल्य सीमा',
    buyCredits: 'क्रेडिट खरीदें',
    viewDetails: 'विवरण देखें',
    farmers: 'किसान',
    hectares: 'हेक्टेयर',
    verified: 'सत्यापित',
    pending: 'सत्यापन प्रतीक्षित',
    agroforestry: 'कृषि वानिकी',
    riceSystems: 'धान प्रणाली',
    impact: 'परियोजना प्रभाव',
    biodiversity: 'जैव विविधता लाभ',
    soilHealth: 'मिट्टी स्वास्थ्य सुधार',
    waterConservation: 'जल संरक्षण'
  }
};

const projects = [
  {
    id: 'KAP-2024-001',
    name: 'Karnataka Agroforestry Initiative',
    location: 'Karnataka, India',
    type: 'Agroforestry',
    farmers: 154,
    area: 1250,
    villages: 23,
    availableCredits: 245,
    pricePerCredit: 675,
    certification: 'Gold Standard',
    status: 'verified',
    impact: {
      biodiversity: 'High',
      soilHealth: 'Significant',
      waterConservation: 'Medium'
    },
    image: 'https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Smallholder farmers in Karnataka are planting native tree species on agricultural land, creating sustainable agroforestry systems.'
  },
  {
    id: 'TRS-2024-001',
    name: 'Tamil Nadu Sustainable Rice Systems',
    location: 'Tamil Nadu, India',
    type: 'Rice Systems',
    farmers: 89,
    area: 890,
    villages: 15,
    availableCredits: 156,
    pricePerCredit: 550,
    certification: 'Verra VCS',
    status: 'pending',
    impact: {
      biodiversity: 'Medium',
      soilHealth: 'High',
      waterConservation: 'High'
    },
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Rice farmers implementing water-efficient irrigation and organic farming practices to reduce methane emissions.'
  },
  {
    id: 'MAP-2024-001',
    name: 'Maharashtra Mixed Farming Project',
    location: 'Maharashtra, India',
    type: 'Agroforestry',
    farmers: 76,
    area: 650,
    villages: 12,
    availableCredits: 187,
    pricePerCredit: 720,
    certification: 'Plan Vivo',
    status: 'verified',
    impact: {
      biodiversity: 'High',
      soilHealth: 'Medium',
      waterConservation: 'High'
    },
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Integrated farming systems combining tree plantations with traditional crops for enhanced carbon sequestration.'
  }
];

export function Marketplace({ language }: MarketplaceProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [purchaseQuantity, setPurchaseQuantity] = useState(10);

  const t = translations[language];

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <ShoppingCart className="h-8 w-8" />
          <h2 className="text-2xl font-bold">{t.title}</h2>
        </div>
        <p className="opacity-90">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">{t.filters}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.location}</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                <option>All States</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Maharashtra</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.projectType}</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">{t.agroforestry}</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">{t.riceSystems}</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.certification}</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Gold Standard</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Verra VCS</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Plan Vivo</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.priceRange}</label>
              <div className="px-3 py-2 bg-gray-50 rounded-md text-sm text-gray-600">
                ₹500 - ₹800 per credit
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="text-lg font-semibold">{t.availableProjects}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover"
                />
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{project.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status === 'verified' ? t.verified : t.pending}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs text-center mb-3">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold">{project.farmers}</div>
                      <div className="text-gray-500">{t.farmers}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold">{project.area}</div>
                      <div className="text-gray-500">{t.hectares}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-semibold">{project.availableCredits}</div>
                      <div className="text-gray-500">credits</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-lg font-bold text-green-600">₹{project.pricePerCredit}</div>
                      <div className="text-xs text-gray-500">per credit</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {project.certification}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                    >
                      {t.buyCredits}
                    </button>
                    <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
                      {t.viewDetails}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">{t.buyCredits}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  
                  <h4 className="font-semibold text-lg mb-2">{selectedProject.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{selectedProject.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Location:</span>
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Farmers:</span>
                      <span>{selectedProject.farmers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Area:</span>
                      <span>{selectedProject.area} hectares</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certification:</span>
                      <span>{selectedProject.certification}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="font-semibold mb-2">{t.impact}:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{t.biodiversity}:</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(selectedProject.impact.biodiversity)}`}>
                          {selectedProject.impact.biodiversity}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{t.soilHealth}:</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(selectedProject.impact.soilHealth)}`}>
                          {selectedProject.impact.soilHealth}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{t.waterConservation}:</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getImpactColor(selectedProject.impact.waterConservation)}`}>
                          {selectedProject.impact.waterConservation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-green-600">₹{selectedProject.pricePerCredit}</div>
                      <div className="text-sm text-gray-500">per carbon credit</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Quantity (credits)
                        </label>
                        <input
                          type="number"
                          value={purchaseQuantity}
                          onChange={(e) => setPurchaseQuantity(parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          min="1"
                          max={selectedProject.availableCredits}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Max available: {selectedProject.availableCredits} credits
                        </p>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Subtotal:</span>
                          <span>₹{(purchaseQuantity * selectedProject.pricePerCredit).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Platform fee (2%):</span>
                          <span>₹{Math.round(purchaseQuantity * selectedProject.pricePerCredit * 0.02).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg border-t pt-2">
                          <span>Total:</span>
                          <span>₹{Math.round(purchaseQuantity * selectedProject.pricePerCredit * 1.02).toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <button className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center space-x-2">
                        <Award className="h-5 w-5" />
                        <span>Purchase {purchaseQuantity} Credits</span>
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center">
                        Secure payment • Instant certificate delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}