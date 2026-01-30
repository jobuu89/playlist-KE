import React, { useState } from 'react';
import { Users, Music2, Award, TrendingUp } from 'lucide-react';
import ArtistList from '../components/artists/ArtistList';

const ArtistsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Stats for display
  const stats = [
    { icon: Users, label: 'Total Artists', value: '500+', color: 'text-kenya-red' },
    { icon: Music2, label: 'Songs', value: '10K+', color: 'text-primary-500' },
    { icon: Award, label: 'Awards', value: '45', color: 'text-yellow-500' },
    { icon: TrendingUp, label: 'New This Month', value: '+24', color: 'text-green-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        
        <div className="relative container mx-auto px-4 pt-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Kenyan Artists
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover talented artists from Kenya's vibrant music scene. From established 
              legends to rising stars.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gray-700/50`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#111827" />
          </svg>
        </div>
      </div>

      {/* Artists Content */}
      <div className="container mx-auto px-4 py-8">
        <ArtistList 
          artists={[]} 
          onArtistClick={(artist) => console.log('Artist:', artist)}
        />
      </div>
    </div>
  );
};

export default ArtistsPage;

