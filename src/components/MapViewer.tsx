import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Satellite, Layers, Filter, Download } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapViewerProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    title: 'Remote Sensing Map Viewer',
    subtitle: 'Satellite-based monitoring and verification',
    mapLayers: 'Map Layers',
    satellite: 'Satellite Imagery',
    ndvi: 'NDVI (Vegetation Index)',
    flooding: 'Flooding Detection',
    plotBoundaries: 'Plot Boundaries',
    filters: 'Data Filters',
    dateRange: 'Date Range',
    cloudCover: 'Max Cloud Cover (%)',
    plotInfo: 'Plot Information',
    lastUpdated: 'Last Updated',
    ndviValue: 'NDVI Value',
    biomass: 'Estimated Biomass',
    carbonStock: 'Carbon Stock',
    download: 'Download Data'
  },
  hi: {
    title: 'रिमोट सेंसिंग मैप व्यूअर',
    subtitle: 'उपग्रह-आधारित निगरानी और सत्यापन',
    mapLayers: 'मैप लेयर्स',
    satellite: 'उपग्रह इमेजरी',
    ndvi: 'NDVI (वनस्पति सूचकांक)',
    flooding: 'बाढ़ का पता लगाना',
    plotBoundaries: 'प्लॉट की सीमाएं',
    filters: 'डेटा फिल्टर',
    dateRange: 'तारीख रेंज',
    cloudCover: 'अधिकतम क्लाउड कवर (%)',
    plotInfo: 'प्लॉट जानकारी',
    lastUpdated: 'अंतिम अपडेट',
    ndviValue: 'NDVI मान',
    biomass: 'अनुमानित बायोमास',
    carbonStock: 'कार्बन स्टॉक',
    download: 'डेटा डाउनलोड करें'
  }
};

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const plotData = [
  {
    id: 'AG-001',
    lat: 13.2846,
    lng: 77.7011,
    name: 'Doddaballapur Plot',
    area: 2.5,
    ndvi: 0.68,
    biomass: 125.3,
    carbonStock: 58.9,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'AG-002',
    lat: 13.3010,
    lng: 77.7150,
    name: 'Hosakote Plot',
    area: 1.8,
    ndvi: 0.72,
    biomass: 98.7,
    carbonStock: 46.4,
    lastUpdated: '2024-01-14'
  }
];

export function MapViewer({ language }: MapViewerProps) {
  const [activeLayer, setActiveLayer] = useState('satellite');
  const [cloudCover, setCloudCover] = useState(20);
  const [selectedPlot, setSelectedPlot] = useState<any>(null);

  const t = translations[language];

  const getMarkerColor = (ndvi: number) => {
    if (ndvi >= 0.7) return '#22c55e'; // High vegetation - green
    if (ndvi >= 0.5) return '#eab308'; // Medium vegetation - yellow
    return '#ef4444'; // Low vegetation - red
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Satellite className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{t.subtitle}</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Map Layers */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Layers className="h-4 w-4 mr-2" />
                {t.mapLayers}
              </h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="layer"
                    value="satellite"
                    checked={activeLayer === 'satellite'}
                    onChange={(e) => setActiveLayer(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{t.satellite}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="layer"
                    value="ndvi"
                    checked={activeLayer === 'ndvi'}
                    onChange={(e) => setActiveLayer(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{t.ndvi}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="layer"
                    value="flooding"
                    checked={activeLayer === 'flooding'}
                    onChange={(e) => setActiveLayer(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{t.flooding}</span>
                </label>
              </div>
            </div>

            {/* Filters */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                {t.filters}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">{t.dateRange}</label>
                  <input
                    type="date"
                    className="w-full px-2 py-1 text-xs border border-gray-300 rounded-md"
                    defaultValue="2024-01-01"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">{t.cloudCover}</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={cloudCover}
                    onChange={(e) => setCloudCover(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-xs text-gray-500">{cloudCover}%</div>
                </div>
              </div>
            </div>

            {/* Selected Plot Info */}
            {selectedPlot && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">{t.plotInfo}</h3>
                <div className="bg-gray-50 p-3 rounded-lg text-xs space-y-1">
                  <div><strong>ID:</strong> {selectedPlot.id}</div>
                  <div><strong>Area:</strong> {selectedPlot.area} ha</div>
                  <div><strong>{t.ndviValue}:</strong> {selectedPlot.ndvi}</div>
                  <div><strong>{t.biomass}:</strong> {selectedPlot.biomass} t/ha</div>
                  <div><strong>{t.carbonStock}:</strong> {selectedPlot.carbonStock} tC/ha</div>
                  <div><strong>{t.lastUpdated}:</strong> {selectedPlot.lastUpdated}</div>
                </div>
                <button className="w-full mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs flex items-center justify-center space-x-1">
                  <Download className="h-3 w-3" />
                  <span>{t.download}</span>
                </button>
              </div>
            )}
          </div>

          {/* Map Container */}
          <div className="lg:col-span-3">
            <div className="h-96 lg:h-[500px] rounded-lg overflow-hidden border border-gray-200">
              <MapContainer
                center={[13.2920, 77.7080]}
                zoom={13}
                className="h-full w-full"
              >
                <TileLayer
                  url={activeLayer === 'satellite' 
                    ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                    : activeLayer === 'ndvi'
                    ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  }
                  attribution={activeLayer === 'satellite'
                    ? '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    : '&copy; OpenStreetMap contributors'
                  }
                />
                
                {plotData.map((plot) => (
                  <React.Fragment key={plot.id}>
                    <Marker
                      position={[plot.lat, plot.lng]}
                      eventHandlers={{
                        click: () => setSelectedPlot(plot)
                      }}
                    >
                      <Popup>
                        <div className="text-sm">
                          <strong>{plot.name}</strong><br />
                          ID: {plot.id}<br />
                          NDVI: {plot.ndvi}<br />
                          Area: {plot.area} ha
                        </div>
                      </Popup>
                    </Marker>
                    
                    {activeLayer === 'ndvi' && (
                      <Circle
                        center={[plot.lat, plot.lng]}
                        radius={200}
                        pathOptions={{
                          color: getMarkerColor(plot.ndvi),
                          fillColor: getMarkerColor(plot.ndvi),
                          fillOpacity: 0.3
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </MapContainer>
            </div>
            
            {/* Legend */}
            {activeLayer === 'ndvi' && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">NDVI Legend:</h4>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>Low (0-0.5)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span>Medium (0.5-0.7)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>High (0.7+)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Satellite Data Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Sentinel-2 Optical</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• 10m resolution</p>
            <p>• 5-day revisit</p>
            <p>• Cloud cover: &lt;{cloudCover}%</p>
            <p>• Latest: 2024-01-15</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Sentinel-1 SAR</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• 10m resolution</p>
            <p>• 6-day revisit</p>
            <p>• Weather independent</p>
            <p>• Flood detection</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Data Quality</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• GPS accuracy: ±3m</p>
            <p>• Atmospheric correction</p>
            <p>• Cloud masking</p>
            <p>• Quality assurance</p>
          </div>
        </div>
      </div>
    </div>
  );
}