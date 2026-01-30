import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Play, Pause, Heart, Plus } from 'lucide-react';
import SongCard from '../songs/SongCard';

const TrendingNow = ({ songs, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAll = () => {
    setIsPlaying(!isPlaying);
    if (songs.length > 0) {
      onPlay?.(songs[0]);
    }
  };

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div 
            className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg shadow-orange-900/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Flame className={`w-6 h-6 text-white transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              Trending Now
              <span className="inline-flex items-center px-2 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">
                HOT
              </span>
            </h2>
            <p className="text-gray-400 text-sm">Top hits dominating the charts this week</p>
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
            to="/charts"
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
        /* Empty State with Skeleton */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-gray-800/50 rounded-xl p-3 animate-pulse">
              <div className="aspect-square bg-gray-700 rounded-lg mb-3" />
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-700 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      {songs.length === 0 && (
        <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-white font-semibold mb-1">No trending songs yet</h3>
              <p className="text-gray-400 text-sm">Connect your backend to fetch real data</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-kenya-red/20 text-kenya-red rounded-lg text-sm font-medium hover:bg-kenya-red hover:text-white transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Sample Data</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
                <Heart className="w-4 h-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrendingNow;

