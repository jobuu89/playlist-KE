import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-kenya-red">Playlist KE</h2>
      </div>
      <nav className="space-y-2">
        <a href="/" className="block py-2 px-4 rounded hover:bg-gray-800 transition">
          Home
        </a>
        <a href="/charts" className="block py-2 px-4 rounded hover:bg-gray-800 transition">
          Charts
        </a>
        <a href="/discover" className="block py-2 px-4 rounded hover:bg-gray-800 transition">
          Discover
        </a>
        <a href="/artists" className="block py-2 px-4 rounded hover:bg-gray-800 transition">
          Artists
        </a>
        <a href="/analytics" className="block py-2 px-4 rounded hover:bg-gray-800 transition">
          Analytics
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

