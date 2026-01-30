import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PlayerBar from './PlayerBar';
import { X } from 'lucide-react';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <Header 
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar - Desktop (always visible) */}
        <aside className="hidden lg:block w-64 bg-gray-900 border-r border-gray-800 shrink-0">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:hidden
                     ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold text-kenya-red">Playlist KE</h2>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <Sidebar onItemClick={() => setIsSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <main className="flex-1 pb-28 lg:pb-24 overflow-x-hidden">
          <div className="min-h-full">
            {children}
          </div>
        </main>
      </div>

      {/* Player Bar */}
      <PlayerBar />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

const Sidebar = ({ onItemClick }) => {
  const navItems = [
    { icon: '🏠', label: 'Home', href: '/' },
    { icon: '📊', label: 'Charts', href: '/charts' },
    { icon: '🎵', label: 'New Releases', href: '/new-releases' },
    { icon: '🔍', label: 'Discover', href: '/discover' },
    { icon: '👥', label: 'Artists', href: '/artists' },
    { icon: '📈', label: 'Analytics', href: '/analytics' },
  ];

  const secondaryItems = [
    { icon: '❤️', label: 'Favorites', href: '/favorites' },
    { icon: '📋', label: 'Playlists', href: '/playlists' },
    { icon: '⏰', label: 'History', href: '/history' },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Logo for Desktop */}
      <div className="hidden lg:flex items-center gap-3 px-2 mb-6">
        <div className="relative">
          <span className="text-3xl">🎵</span>
          <div className="absolute inset-0 text-3xl text-kenya-red animate-pulse opacity-50 blur-sm">
            🎵
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Playlist KE</h2>
          <p className="text-xs text-gray-500">Kenyan Music</p>
        </div>
      </div>

      {/* Main Navigation */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
          Menu
        </h3>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 
                       hover:text-white hover:bg-gray-800 transition-all duration-200
                       group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
              {item.label === 'Charts' && (
                <span className="ml-auto px-2 py-0.5 bg-kenya-red/20 text-kenya-red text-xs rounded-full">
                  HOT
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Secondary Navigation */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
          Library
        </h3>
        <nav className="space-y-1">
          {secondaryItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 
                       hover:text-white hover:bg-gray-800 transition-all duration-200
                       group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-br from-kenya-red/20 to-purple-500/10 rounded-xl p-4 border border-gray-700/50">
        <h4 className="text-sm font-semibold text-white mb-2">Weekly Stats</h4>
        <div className="space-y-2 text-xs text-gray-400">
          <div className="flex justify-between">
            <span>Top Genre</span>
            <span className="text-kenya-red">Afropop</span>
          </div>
          <div className="flex justify-between">
            <span>Total Streams</span>
            <span className="text-primary-400">1.2M</span>
          </div>
          <div className="flex justify-between">
            <span>New Artists</span>
            <span className="text-green-400">+24</span>
          </div>
        </div>
      </div>

      {/* User Mini Profile */}
      <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <div className="w-10 h-10 bg-gradient-to-br from-kenya-red to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
          U
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">User Name</p>
          <p className="text-xs text-gray-400 truncate">Free Plan</p>
        </div>
        <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainLayout;

