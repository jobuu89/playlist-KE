import React, { useState } from 'react';
import { Play, Heart, MoreVertical } from 'lucide-react';

const SongCard = ({ song, onPlay, onAddToPlaylist }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Placeholder image for demo/empty state
  const placeholderImage = `https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop`;

  return (
    <div
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 hover:bg-gray-800 
                 transition-all duration-300 card-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay?.(song)}
    >
      {/* Gradient Border Effect on Hover */}
      <div 
        className={`absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-kenya-red via-primary-500 to-kenya-green
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
      />

      {/* Image Container */}
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <img
          src={song?.cover || placeholderImage}
          alt={song?.title || 'Song'}
          className={`w-full aspect-square object-cover transition-transform duration-500 
                      ${isHovered ? 'scale-110' : 'scale-100'}`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300
                      ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlay?.(song);
            }}
            className="w-14 h-14 flex items-center justify-center bg-kenya-red rounded-full
                       transform transition-all duration-300 hover:scale-110 hover:bg-red-700
                       shadow-lg shadow-red-900/50"
          >
            <Play className="w-6 h-6 text-white fill-current ml-1" />
          </button>
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300
                     ${isLiked ? 'bg-kenya-red text-white' : 'bg-black/50 text-white opacity-0 group-hover:opacity-100'}
                     hover:scale-110`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Duration Badge */}
        {song?.duration && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs font-medium">
            {song.duration}
          </div>
        )}
      </div>

      {/* Song Info */}
      <div className="space-y-1">
        <h4 className="font-semibold text-white truncate group-hover:text-kenya-red transition-colors">
          {song?.title || 'Unknown Title'}
        </h4>
        <p className="text-gray-400 text-sm truncate hover:text-white transition-colors">
          {song?.artist || 'Unknown Artist'}
        </p>
      </div>

      {/* Hover Action Bar */}
      <div className={`flex items-center justify-between mt-3 overflow-hidden transition-all duration-300
                      ${isHovered ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToPlaylist?.(song);
          }}
          className="flex-1 py-2 bg-kenya-red/20 text-kenya-red rounded-lg text-sm font-medium
                     hover:bg-kenya-red hover:text-white transition-colors"
        >
          Add to Playlist
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="ml-2 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
        >
          <MoreVertical className="w-4 h-4 text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default SongCard;

