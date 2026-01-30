import React from 'react';

const GenreFilter = ({ genres, selectedGenre, onGenreSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onGenreSelect(null)}
        className={`px-4 py-2 rounded-full transition ${
          selectedGenre === null
            ? 'bg-kenya-red text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreSelect(genre)}
          className={`px-4 py-2 rounded-full transition ${
            selectedGenre === genre
              ? 'bg-kenya-red text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;

