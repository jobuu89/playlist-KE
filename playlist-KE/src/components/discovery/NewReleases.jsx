import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Play, Pause, Clock, Calendar } from 'lucide-react';
import SongCard from '../songs/SongCard';

const NewReleases = ({ songs, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAll = () => {
    setIsPlaying(!isPlaying);
    if (songs.length > 0) {
      onPlay?.(songs[0]);
    }
  };

  // Get current date for display
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div 
            className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg shadow-purple-900/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Sparkles className={`w-6 h-6 text-white transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              New Releases
              <span className="inline-flex items-center px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full animate-pulse">
                FRESH
              </span>
            </h2>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Updated {currentDate}</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayAll}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                       text-white rounded-full text-sm font-medium transition-all duration-300
                       border border-gray-700 hover:border-gray-600"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Playing</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Play All</span>
              </>
            )}
          </button>
          
          <Link 
            to="/new-releases"
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm font-medium 
                       transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Songs Grid */}
      {songs.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 stagger-children">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} onPlay={onPlay} />
          ))}
        </div>
      ) : (
        /* Empty State with Visual Appeal */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-gray-800/50 rounded-xl p-3 animate-pulse">
              <div className="aspect-square bg-gray-700 rounded-lg mb-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-700 rounded w-1/2 mb-2" />
              <div className="h-3 bg-gray-700 rounded w-1/4" />
            </div>
          ))}
        </div>
      )}

      {/* Info Banner */}
      {songs.length === 0 && (
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-700/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-white font-semibold mb-1">Fresh content coming soon</h3>
                <p className="text-gray-400 text-sm">New releases are updated weekly. Stay tuned!</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewReleases;

