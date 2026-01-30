import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Search } from 'lucide-react';
import ArtistCard from './ArtistCard';
import { GridSkeleton } from '../shared/Skeleton';

const ArtistList = ({ artists, onArtistClick, isLoading = false }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter artists based on search
  const filteredArtists = artists.filter(artist =>
    artist?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artist?.genre?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Artists</h2>
          <p className="text-gray-400 flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{artists.length > 0 ? `${artists.length} artists` : 'Discover Kenyan talent'}</span>
          </p>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-full
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                         focus:ring-kenya-red/50 focus:border-kenya-red transition-all"
            />
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <GridSkeleton items={10} cardType="artist" />
      ) : filteredArtists.length > 0 ? (
        <>
          {/* Artists Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 stagger-children">
            {filteredArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                onClick={onArtistClick}
              />
            ))}
          </div>

          {/* View More Button */}
          {filteredArtists.length >= 10 && (
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white 
                                 rounded-full font-medium hover:bg-gray-700 transition-colors
                                 border border-gray-700">
                <span>Load More Artists</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="bg-gray-800/50 rounded-2xl p-12 text-center border border-gray-700/50">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700/50 rounded-full mb-6">
            <Users className="w-10 h-10 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {searchQuery ? 'No artists found' : 'No artists yet'}
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            {searchQuery 
              ? `No artists match "${searchQuery}". Try a different search term.`
              : 'Connect your backend to display artists. The grid will show artist cards once data is available.'}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-2 bg-kenya-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Clear Search
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ArtistList;

