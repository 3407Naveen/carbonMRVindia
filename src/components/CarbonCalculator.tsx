import React, { useState } from 'react';
import { Calculator, Leaf, TrendingUp } from 'lucide-react';

interface CarbonCalculatorProps {
  language: 'en' | 'hi';
}

const translations = {
  en: {
    title: 'Carbon Credit Calculator',
    subtitle: 'Calculate potential carbon credits from your agricultural practices',
    plotSelection: 'Select Plot',
    calculationType: 'Calculation Type',
    agroforestry: 'Agroforestry Carbon',
    riceMethane: 'Rice Methane Reduction',
    treeData: 'Tree Data',
    speciesType: 'Species Type',
    treeCount: 'Number of Trees',
    avgDbh: 'Average DBH (cm)',
    avgHeight: 'Average Height (m)',
    age: 'Tree Age (years)',
    riceData: 'Rice Cultivation Data',
    area: 'Area (hectares)',
    waterRegime: 'Water Management',
    organic: 'Organic Amendment',
    fertilizer: 'Fertilizer Type',
    calculate: 'Calculate Credits',
    results: 'Calculation Results',
    totalCredits: 'Total Carbon Credits',
    biomassCarbon: 'Biomass Carbon',
    methaneReduction: 'Methane Reduction',
    uncertainty: 'Uncertainty (±)',
    conservative: 'Conservative Estimate'
  },
  hi: {
    title: 'कार्बन क्रेडिट कैलकुलेटर',
    subtitle: 'अपनी कृषि प्रथाओं से संभावित कार्बन क्रेडिट की गणना करें',
    plotSelection: 'प्लॉट चुनें',
    calculationType: 'गणना प्रकार',
    agroforestry: 'कृषि वानिकी कार्बन',
    riceMethane: 'चावल मीथेन कमी',
    treeData: 'वृक्ष डेटा',
    speciesType: 'प्रजाति प्रकार',
    treeCount: 'वृक्षों की संख्या',
    avgDbh: 'औसत DBH (सेमी)',
    avgHeight: 'औसत ऊंचाई (मी)',
    age: 'वृक्ष आयु (वर्ष)',
    riceData: 'धान की खेती डेटा',
    area: 'क्षेत्रफल (हेक्टेयर)',
    waterRegime: 'जल प्रबंधन',
    organic: 'जैविक संशोधन',
    fertilizer: 'उर्वरक प्रकार',
    calculate: 'क्रेडिट गणना करें',
    results: 'गणना परिणाम',
    totalCredits: 'कुल कार्बन क्रेडिट',
    biomassCarbon: 'बायोमास कार्बन',
    methaneReduction: 'मीथेन कमी',
    uncertainty: 'अनिश्चितता (±)',
    conservative: 'रूढ़िवादी अनुमान'
  }
};

const speciesData: { [key: string]: { name: string; allometricA: number; allometricB: number } } = {
  'mango': { name: 'Mango', allometricA: 0.0673, allometricB: 2.7 },
  'coconut': { name: 'Coconut', allometricA: 0.0454, allometricB: 2.6 },
  'teak': { name: 'Teak', allometricA: 0.0751, allometricB: 2.8 },
  'neem': { name: 'Neem', allometricA: 0.0612, allometricB: 2.65 }
};

export function CarbonCalculator({ language }: CarbonCalculatorProps) {
  const [calculationType, setCalculationType] = useState('agroforestry');
  const [plotId, setPlotId] = useState('AG-001');
  const [treeData, setTreeData] = useState({
    species: 'mango',
    count: 100,
    avgDbh: 25,
    avgHeight: 12,
    age: 5
  });
  const [riceData, setRiceData] = useState({
    area: 2.5,
    waterRegime: 'intermittent',
    organic: 'compost',
    fertilizer: 'urea'
  });
  const [results, setResults] = useState<any>(null);

  const t = translations[language];

  const calculateAgroforestryCarbon = () => {
    const species = speciesData[treeData.species];
    // Allometric equation: AGB = a * (DBH^b)
    const agbPerTree = species.allometricA * Math.pow(treeData.avgDbh, species.allometricB);
    const totalAGB = agbPerTree * treeData.count; // kg
    const carbonContent = totalAGB * 0.47; // 47% carbon content
    const co2Equivalent = carbonContent * 3.67; // CO2 equivalent
    const credits = co2Equivalent / 1000; // tCO2e to credits

    return {
      biomassCarbon: carbonContent.toFixed(2),
      co2Equivalent: co2Equivalent.toFixed(2),
      credits: credits.toFixed(2),
      uncertainty: (credits * 0.15).toFixed(2) // 15% uncertainty
    };
  };

  const calculateRiceMethaneReduction = () => {
    // Simplified methane emission factors (kg CH4/ha/season)
    const baselineEmission = riceData.waterRegime === 'continuous' ? 150 : 75;
    const projectEmission = riceData.waterRegime === 'intermittent' ? 45 : baselineEmission * 0.7;
    
    const emissionReduction = baselineEmission - projectEmission;
    const methaneReduction = emissionReduction * riceData.area;
    const co2Equivalent = methaneReduction * 25; // GWP of methane
    const credits = co2Equivalent / 1000;

    return {
      methaneReduction: methaneReduction.toFixed(2),
      co2Equivalent: co2Equivalent.toFixed(2),
      credits: credits.toFixed(2),
      uncertainty: (credits * 0.25).toFixed(2) // 25% uncertainty for methane
    };
  };

  const handleCalculate = () => {
    if (calculationType === 'agroforestry') {
      const agroResults = calculateAgroforestryCarbon();
      setResults({
        type: 'agroforestry',
        ...agroResults,
        conservativeCredits: (parseFloat(agroResults.credits) * 0.85).toFixed(2) // 15% buffer
      });
    } else {
      const riceResults = calculateRiceMethaneReduction();
      setResults({
        type: 'rice',
        ...riceResults,
        conservativeCredits: (parseFloat(riceResults.credits) * 0.75).toFixed(2) // 25% buffer
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Calculator className="h-6 w-6 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{t.subtitle}</p>

        {/* Plot Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t.plotSelection}</label>
          <select
            value={plotId}
            onChange={(e) => setPlotId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="AG-001">AG-001 - Doddaballapur (2.5 ha)</option>
            <option value="AG-002">AG-002 - Hosakote (1.8 ha)</option>
          </select>
        </div>

        {/* Calculation Type */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t.calculationType}</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="calculationType"
                value="agroforestry"
                checked={calculationType === 'agroforestry'}
                onChange={(e) => setCalculationType(e.target.value)}
                className="mr-2"
              />
              {t.agroforestry}
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="calculationType"
                value="rice"
                checked={calculationType === 'rice'}
                onChange={(e) => setCalculationType(e.target.value)}
                className="mr-2"
              />
              {t.riceMethane}
            </label>
          </div>
        </div>

        {/* Input Forms */}
        {calculationType === 'agroforestry' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.treeData}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.speciesType}</label>
                  <select
                    value={treeData.species}
                    onChange={(e) => setTreeData(prev => ({ ...prev, species: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {Object.entries(speciesData).map(([key, species]) => (
                      <option key={key} value={key}>{species.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.treeCount}</label>
                  <input
                    type="number"
                    value={treeData.count}
                    onChange={(e) => setTreeData(prev => ({ ...prev, count: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.avgDbh}</label>
                  <input
                    type="number"
                    value={treeData.avgDbh}
                    onChange={(e) => setTreeData(prev => ({ ...prev, avgDbh: parseFloat(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.avgHeight}</label>
                  <input
                    type="number"
                    value={treeData.avgHeight}
                    onChange={(e) => setTreeData(prev => ({ ...prev, avgHeight: parseFloat(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-green-800 mb-2">Biomass Calculation</h4>
                <p className="text-sm text-green-600">
                  Using species-specific allometric equations for accurate carbon estimation
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.riceData}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.area}</label>
                  <input
                    type="number"
                    value={riceData.area}
                    onChange={(e) => setRiceData(prev => ({ ...prev, area: parseFloat(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.waterRegime}</label>
                  <select
                    value={riceData.waterRegime}
                    onChange={(e) => setRiceData(prev => ({ ...prev, waterRegime: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="continuous">Continuous Flooding</option>
                    <option value="intermittent">Intermittent Irrigation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.organic}</label>
                  <select
                    value={riceData.organic}
                    onChange={(e) => setRiceData(prev => ({ ...prev, organic: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="none">No Organic Amendment</option>
                    <option value="compost">Compost</option>
                    <option value="straw">Rice Straw Incorporation</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-blue-800 mb-2">Methane Reduction</h4>
                <p className="text-sm text-blue-600">
                  Water management practices reduce methane emissions from rice fields
                </p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center space-x-2"
        >
          <Calculator className="h-5 w-5" />
          <span>{t.calculate}</span>
        </button>
      </div>

      {/* Results */}
      {results && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">{t.results}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">{results.credits}</div>
              <div className="text-sm text-gray-600">{t.totalCredits}</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">{results.conservativeCredits}</div>
              <div className="text-sm text-gray-600">{t.conservative}</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 mb-2">±{results.uncertainty}</div>
              <div className="text-sm text-gray-600">{t.uncertainty}</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Calculation Details:</h4>
            <div className="text-sm text-gray-600 space-y-1">
              {results.type === 'agroforestry' ? (
                <>
                  <p>• {t.biomassCarbon}: {results.biomassCarbon} kg</p>
                  <p>• CO2 Equivalent: {results.co2Equivalent} kg CO2e</p>
                  <p>• Species: {speciesData[treeData.species].name}</p>
                  <p>• Tree Count: {treeData.count}</p>
                </>
              ) : (
                <>
                  <p>• {t.methaneReduction}: {results.methaneReduction} kg CH4</p>
                  <p>• CO2 Equivalent: {results.co2Equivalent} kg CO2e</p>
                  <p>• Area: {riceData.area} hectares</p>
                  <p>• Water Management: {riceData.waterRegime}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}