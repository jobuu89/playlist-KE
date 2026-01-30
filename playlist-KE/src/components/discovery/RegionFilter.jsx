import React, { useState } from 'react';
import { MapPin, ChevronDown, Check, Search } from 'lucide-react';

// Kenya's 47 Counties with emojis representing each region
const KENYA_COUNTIES = [
  { id: 'all', name: 'All Counties', flag: '🇰🇪' },
  { id: 'baringo', name: 'Baringo', flag: '🦬' },
  { id: 'bomet', name: 'Bomet', flag: '🏔️' },
  { id: 'bungoma', name: 'Bungoma', flag: '🌾' },
  { id: 'busia', name: 'Busia', flag: '🌊' },
  { id: 'elgeyo-marakwet', name: 'Elgeyo-Marakwet', flag: '⛰️' },
  { id: 'embu', name: 'Embu', flag: '🍃' },
  { id: 'garissa', name: 'Garissa', flag: '🏜️' },
  { id: 'homa-bay', name: 'Homa Bay', flag: '🏖️' },
  { id: 'isiolo', name: 'Isiolo', flag: '🌵' },
  { id: 'kajiado', name: 'Kajiado', flag: '🦓' },
  { id: 'kakamega', name: 'Kakamega', flag: '🌳' },
  { id: 'kericho', name: 'Kericho', flag: '🍵' },
  { id: 'kiambu', name: 'Kiambu', flag: '🌿' },
  { id: 'kilifi', name: 'Kilifi', flag: '🏖️' },
  { id: 'kirinyaga', name: 'Kirinyaga', flag: '🗻' },
  { id: 'kisii', name: 'Kisii', flag: '⛰️' },
  { id: 'kisumu', name: 'Kisumu', flag: '🌊' },
  { id: 'kitui', name: 'Kitui', flag: '☀️' },
  { id: 'kwale', name: 'Kwale', flag: '🌴' },
  { id: 'laikipia', name: 'Laikipia', flag: '🦏' },
  { id: 'lamu', name: 'Lamu', flag: '⛵' },
  { id: 'machakos', name: 'Machakos', flag: '🌅' },
  { id: 'makueni', name: 'Makueni', flag: '🌻' },
  { id: 'mandera', name: 'Mandera', flag: '🌙' },
  { id: 'marsabit', name: 'Marsabit', flag: '🌋' },
  { id: 'meru', name: 'Meru', flag: '🌲' },
  { id: 'migori', name: 'Migori', flag: '🌅' },
  { id: 'mombasa', name: 'Mombasa', flag: '⚓' },
  { id: 'muranga', name: 'Murang\'a', flag: '🍎' },
  { id: 'nairobi', name: 'Nairobi', flag: '🏙️' },
  { id: 'nakuru', name: 'Nakuru', flag: '🦩' },
  { id: 'nandi', name: 'Nandi', flag: '🏞️' },
  { id: 'narok', name: 'Narok', flag: '🦁' },
  { id: 'nyamira', name: 'Nyamira', flag: '🌾' },
  { id: 'nyandarua', name: 'Nyandarua', flag: '❄️' },
  { id: 'nyeri', name: 'Nyeri', flag: '🗻' },
  { id: 'samburu', name: 'Samburu', flag: '🐪' },
  { id: 'siaya', name: 'Siaya', flag: '🦅' },
  { id: 'taita-taveta', name: 'Taita-Taveta', flag: '🏔️' },
  { id: 'tana-river', name: 'Tana River', flag: '🌊' },
  { id: 'tharaka-nithi', name: 'Tharaka-Nithi', flag: '🌿' },
  { id: 'trans-nzoia', name: 'Trans Nzoia', flag: '🌽' },
  { id: 'turkana', name: 'Turkana', flag: '🐊' },
  { id: 'uasin-gishu', name: 'Uasin Gishu', flag: '🏃' },
  { id: 'vihiga', name: 'Vihiga', flag: '🏸' },
  { id: 'wajir', name: 'Wajir', flag: '🌙' },
  { id: 'west-pokot', name: 'West Pokot', flag: '⛰️' },
];

const RegionFilter = ({ regions = [], selectedRegion, onRegionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const displayRegions = regions.length > 0 ? regions : KENYA_COUNTIES;
  
  const filteredRegions = searchQuery
    ? displayRegions.filter(region =>
        region.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : displayRegions;

  const selectedRegionData = displayRegions.find(r => r.id === selectedRegion) || displayRegions[0];

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-kenya-red/20 rounded-lg">
            <MapPin className="w-4 h-4 text-kenya-red" />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500">Region</p>
            <p className="text-sm font-medium text-white flex items-center gap-2">
              <span>{selectedRegionData?.flag || '🇰🇪'}</span>
              <span>{selectedRegionData?.name || 'All Counties'}</span>
            </p>
          </div>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="border-t border-gray-700 animate-fade-in">
          {/* Search Input */}
          <div className="p-3 border-b border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search county..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg
                           text-white placeholder-gray-400 text-sm focus:outline-none 
                           focus:ring-2 focus:ring-kenya-red/50"
              />
            </div>
          </div>

          {/* Counties List */}
          <div className="max-h-64 overflow-y-auto">
            {filteredRegions.length > 0 ? (
              filteredRegions.map((region) => {
                const isSelected = selectedRegion === region.id || (region.id === 'all' && !selectedRegion);
                
                return (
                  <button
                    key={region.id}
                    onClick={() => {
                      onRegionSelect?.(region.id === 'all' ? 'all' : region.id);
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className={`w-full flex items-center justify-between p-3 px-4 hover:bg-gray-700/50 transition-colors
                               ${isSelected ? 'bg-gray-700/50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{region.flag}</span>
                      <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-gray-400'}`}>
                        {region.name}
                      </span>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-kenya-red" />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-gray-500 text-sm">
                No county found matching "{searchQuery}"
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-2 border-t border-gray-700 text-center">
            <span className="text-xs text-gray-500">
              {displayRegions.length - 1} counties available
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionFilter;

