import React, { useState } from 'react';
import { Play, Heart, MoreVertical } from 'lucide-react';

const ArtistCard = ({ artist, onClick, onFollow }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Placeholder images based on genre
  const getPlaceholderImage = () => {
    const images = [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop',
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  const genreColors = {
    gengetone: 'from-red-500 to-pink-500',
    afropop: 'from-teal-400 to-cyan-500',
    benga: 'from-blue-400 to-indigo-500',
    gospel: 'from-yellow-400 to-orange-500',
    kapuka: 'from-green-400 to-emerald-500',
    default: 'from-kenya-red to-purple-500',
  };

  const colorClass = genreColors[artist?.genre?.toLowerCase()] || genreColors.default;

  return (
    <div
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center
                 transition-all duration-300 card-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick?.(artist)}
    >
      {/* Animated Gradient Border Ring */}
      <div 
        className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r ${colorClass}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
                    animate-pulse-glow`}
      />

      {/* Image Container */}
      <div className="relative inline-block mb-4">
        <div className={`w-32 h-32 rounded-full p-1 bg-gradient-to-r ${colorClass}`}>
          <img
            src={artist?.image || getPlaceholderImage()}
            alt={artist?.name || 'Artist'}
            className="w-full h-full rounded-full object-cover border-4 border-gray-900"
          />
        </div>
        
        {/* Play Overlay */}
        <div
          className={`absolute inset-0 rounded-full bg-black/50 flex items-center justify-center
                      transition-all duration-300
                      ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick?.(artist);
            }}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full
                       transform transition-all duration-300 hover:scale-110"
          >
            <Play className="w-5 h-5 text-gray-900 fill-current ml-1" />
          </button>
        </div>
      </div>

      {/* Artist Info */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg text-white truncate group-hover:text-kenya-red transition-colors">
          {artist?.name || 'Unknown Artist'}
        </h3>
        <p className="text-gray-400 text-sm capitalize">{artist?.genre || 'Various'}</p>
        
        {/* Monthly Listeners */}
        <div className="flex items-center justify-center gap-1 text-primary-400 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" />
            <path d="M14.707 12.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L11 13.586V8a1 1 0 012 0v5.586l1.293-1.293a1 1 0 011.414 0z" />
          </svg>
          <span>{artist?.monthlyListeners || '0'} monthly listeners</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`flex items-center justify-center gap-2 mt-4 overflow-hidden transition-all duration-300
                      ${isHovered ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFollowing(!isFollowing);
            onFollow?.(artist);
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                     ${isFollowing 
                       ? 'bg-gray-700 text-white' 
                       : 'bg-kenya-red text-white hover:bg-red-700'}`}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
        >
          <MoreVertical className="w-4 h-4 text-gray-300" />
        </button>
      </div>

      {/* Top Artist Badge */}
      {artist?.isTop && (
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold
                        bg-gradient-to-r ${colorClass} text-white`}>
          TOP 10
        </div>
      )}
    </div>
  );
};

export default ArtistCard;

