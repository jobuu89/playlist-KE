import React, { useState } from 'react';
import { Sparkles, Search, SlidersHorizontal } from 'lucide-react';
import GenreFilter from '../components/discovery/GenreFilter';
import RegionFilter from '../components/discovery/RegionFilter';
import NewReleases from '../components/discovery/NewReleases';
import TrendingNow from '../components/discovery/TrendingNow';
import SongCard from '../components/songs/SongCard';

const DiscoverPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const genres = [];
  const regions = [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative container mx-auto px-4 pt-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-kenya-red/20 rounded-full text-kenya-red text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Discover</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Explore Kenyan Music
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find new songs, artists, and genres. Filter by your preferences and 
              discover the best of Kenyan music.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search songs, artists, or albums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-14 py-4 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl 
                           text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-kenya-red/50 focus:border-kenya-red transition-all"
              />
              <button 
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-xl transition-colors
                           ${isFiltersOpen ? 'bg-kenya-red text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#111827" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <RegionFilter
              regions={regions}
              selectedRegion={selectedRegion}
              onRegionSelect={setSelectedRegion}
            />
            <GenreFilter
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreSelect={setSelectedGenre}
            />
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Trending */}
            <TrendingNow songs={[]} onPlay={(song) => console.log('Play:', song)} />
            
            {/* New Releases */}
            <NewReleases songs={[]} onPlay={(song) => console.log('Play:', song)} />

            {/* Quick Picks Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Quick Picks</h2>
                <button className="text-kenya-red hover:text-red-400 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <SongCard 
                    key={i} 
                    song={{}} 
                    onPlay={(song) => console.log('Play:', song)} 
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;

