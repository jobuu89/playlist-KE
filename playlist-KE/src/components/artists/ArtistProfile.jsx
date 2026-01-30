import React from 'react';

const ArtistProfile = ({ artist }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 border-4 border-kenya-red"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
          <p className="text-xl text-gray-400 mb-4">{artist.genre}</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-500 mb-6">
            <span>{artist.monthlyListeners} monthly listeners</span>
            <span>•</span>
            <span>{artist.followers} followers</span>
            <span>•</span>
            <span>{artist.songsCount} songs</span>
          </div>
          <p className="text-gray-300">{artist.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;

