import React from 'react';

const RegionFilter = ({ regions, selectedRegion, onRegionSelect }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <h4 className="font-semibold mb-3">Filter by Region</h4>
      <div className="space-y-2">
        {regions.map((region) => (
          <label key={region.code} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="region"
              checked={selectedRegion === region.code}
              onChange={() => onRegionSelect(region.code)}
              className="accent-kenya-red"
            />
            <img src={region.flag} alt={region.name} className="w-6 h-4 rounded" />
            <span>{region.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RegionFilter;

