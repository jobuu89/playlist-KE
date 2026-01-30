import React from 'react';

const ArtistSpotlight = ({ artist }) => {
  return (
    <div className="relative bg-gradient-to-r from-kenya-red to-purple-900 rounded-xl p-8 text-white overflow-hidden">
      <div className="relative z-10">
        <p className="text-sm uppercase tracking-wider mb-2">Artist Spotlight</p>
        <h2 className="text-3xl font-bold mb-4">{artist.name}</h2>
        <p className="text-white/80 mb-6 max-w-md">{artist.bio}</p>
        <button className="px-6 py-2 bg-white text-kenya-red rounded-lg font-semibold hover:bg-gray-100 transition">
          View Profile
        </button>
      </div>
      <img
        src={artist.image}
        alt={artist.name}
        className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-30"
      />
    </div>
  );
};

export default ArtistSpotlight;

