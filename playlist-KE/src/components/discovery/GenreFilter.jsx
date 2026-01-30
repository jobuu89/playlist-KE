import React, { useState } from 'react';
import { Music, Mic2, Heart, Zap, Drum, Guitar } from 'lucide-react';

const GenreFilter = ({ genres = [], selectedGenre, onGenreSelect }) => {
  // Default genres for display
  const defaultGenres = [
    { id: 'all', name: 'All', icon: Music, color: 'from-gray-500 to-gray-600' },
    { id: 'afropop', name: 'Afropop', icon: Mic2, color: 'from-teal-400 to-cyan-500' },
    { id: 'gengetone', name: 'Gengetone', icon: Zap, color: 'from-red-500 to-pink-500' },
    { id: 'benga', name: 'Benga', icon: Drum, color: 'from-blue-400 to-indigo-500' },
    { id: 'gospel', name: 'Gospel', icon: Heart, color: 'from-yellow-400 to-orange-500' },
    { id: 'kapuka', name: 'Kapuka', icon: Guitar, color: 'from-green-400 to-emerald-500' },
  ];

  const displayGenres = genres.length > 0 ? genres : defaultGenres;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Genres</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Show All'}
        </button>
      </div>

      <div className={`grid grid-cols-2 gap-2 ${isExpanded ? '' : 'max-h-48 overflow-hidden'}`}>
        {displayGenres.map((genre) => {
          const Icon = genre.icon || Music;
          const isSelected = selectedGenre === genre.id || (genre.id === 'all' && !selectedGenre);
          
          return (
            <button
              key={genre.id}
              onClick={() => onGenreSelect?.(genre.id === 'all' ? null : genre.id)}
              className={`relative flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                         ${isSelected 
                           ? 'bg-gray-700 ring-2 ring-kenya-red' 
                           : 'hover:bg-gray-700/80'}`}
            >
              {/* Icon Background */}
              <div className={`p-2 rounded-lg bg-gradient-to-br ${genre.color || 'from-gray-500 to-gray-600'}`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              
              {/* Text */}
              <div className="flex-1 text-left">
                <p className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {genre.name}
                </p>
                {genre.count && (
                  <p className="text-xs text-gray-500">{genre.count} songs</p>
                )}
              </div>

              {/* Selected Indicator */}
              {isSelected && (
                <div className="absolute top-1 right-1">
                  <div className="w-2 h-2 bg-kenya-red rounded-full animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GenreFilter;

