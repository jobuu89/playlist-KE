import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pl-12 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kenya-red"
      />
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        🔍
      </span>
    </form>
  );
};

export default SearchBar;

