import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-kenya-red">Playlist KE</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-primary-500 transition">Home</a></li>
            <li><a href="/charts" className="hover:text-primary-500 transition">Charts</a></li>
            <li><a href="/artists" className="hover:text-primary-500 transition">Artists</a></li>
            <li><a href="/discover" className="hover:text-primary-500 transition">Discover</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

