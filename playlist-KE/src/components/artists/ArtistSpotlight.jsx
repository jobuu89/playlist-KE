import React, { useState } from 'react';
import { Play, Heart, MoreVertical, ExternalLink, Calendar, Users, Music2 } from 'lucide-react';

const ArtistSpotlight = ({ artist, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Placeholder images
  const placeholderImage = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop';
  const bgImage = 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=400&fit=crop';

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
      className="relative overflow-hidden rounded-3xl bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Artist Image */}
          <div className="relative">
            <div className={`w-48 h-48 lg:w-64 lg:h-64 rounded-2xl p-1 bg-gradient-to-r ${colorClass}`}>
              <img
                src={artist?.image || placeholderImage}
                alt={artist?.name || 'Artist'}
                className="w-full h-full rounded-xl object-cover shadow-2xl"
              />
            </div>
            
            {/* Play Button Overlay */}
            <button
              onClick={() => onPlay?.(artist)}
              className={`absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl
                         transition-all duration-300
                         ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full 
                            transform transition-transform hover:scale-110 shadow-xl">
                <Play className="w-8 h-8 text-gray-900 fill-current ml-1" />
              </div>
            </button>
          </div>

          {/* Artist Info */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium 
                           bg-gradient-to-r ${colorClass} text-white mb-4`}>
              <span>Artist Spotlight</span>
            </div>

            {/* Name & Genre */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {artist?.name || 'Featured Artist'}
            </h2>
            <p className="text-lg text-gray-400 mb-4 capitalize">{artist?.genre || 'Various Genres'}</p>

            {/* Bio */}
            <p className="text-gray-300 mb-6 max-w-2xl">
              {artist?.bio || 'Discover the hottest artist taking the Kenyan music scene by storm. ' +
               'With unique sounds and captivating performances, this artist is redefining the sound of East Africa.'}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-white font-bold">{artist?.monthlyListeners || '1.2M'}</p>
                  <p className="text-gray-500 text-xs">Monthly Listeners</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Music2 className="w-5 h-5 text-kenya-red" />
                <div>
                  <p className="text-white font-bold">50+</p>
                  <p className="text-gray-500 text-xs">Songs</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white font-bold">2024</p>
                  <p className="text-gray-500 text-xs">Year Active</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={() => {
                  setIsFollowing(!isFollowing);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300
                           ${isFollowing 
                             ? 'bg-gray-700 text-white' 
                             : `bg-gradient-to-r ${colorClass} text-white hover:shadow-lg`}`}
              >
                {isFollowing ? '✓ Following' : '+ Follow'}
              </button>
              
              <button className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold
                               hover:bg-gray-700 transition-colors border border-gray-700">
                <MoreVertical className="w-5 h-5" />
              </button>
              
              <button className="px-4 py-3 bg-gray-800 text-white rounded-full font-semibold
                               hover:bg-gray-700 transition-colors flex items-center gap-2 border border-gray-700">
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">View Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${colorClass} opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
      <div className={`absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-br ${colorClass} opacity-5 rounded-full blur-2xl`} />
    </div>
  );
};

export default ArtistSpotlight;

