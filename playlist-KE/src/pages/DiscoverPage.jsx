import React, { useState } from 'react';
import GenreFilter from '../components/discovery/GenreFilter';
import RegionFilter from '../components/discovery/RegionFilter';
import NewReleases from '../components/discovery/NewReleases';
import TrendingNow from '../components/discovery/TrendingNow';

const DiscoverPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const genres = [];
  const regions = [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Discover</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <RegionFilter
            regions={regions}
            selectedRegion={selectedRegion}
            onRegionSelect={setSelectedRegion}
          />
        </aside>
        
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Genres</h2>
            <GenreFilter
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreSelect={setSelectedGenre}
            />
          </div>

          <TrendingNow songs={[]} onPlay={(song) => console.log('Play:', song)} />
          <NewReleases songs={[]} onPlay={(song) => console.log('Play:', song)} />
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
