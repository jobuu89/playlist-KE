import React from 'react';

const ArtistCard = ({ artist, onClick }) => {
  return (
    <div
      className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition cursor-pointer"
      onClick={() => onClick(artist)}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-kenya-red"
      />
      <h3 className="font-bold text-lg">{artist.name}</h3>
      <p className="text-gray-400 text-sm">{artist.genre}</p>
      <p className="text-primary-500 text-sm mt-2">{artist.monthlyListeners} monthly listeners</p>
    </div>
  );
};

export default ArtistCard;

