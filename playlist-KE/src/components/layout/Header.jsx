import React, { useState } from 'react';
import { Music, Search, Bell, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ onMenuToggle, isMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Menu Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onMenuToggle}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Music className="h-8 w-8 text-kenya-red transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 h-8 w-8 text-kenya-red animate-pulse opacity-50 blur-sm" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Playlist<span className="text-kenya-red">KE</span></h1>
                <p className="text-xs text-gray-500">Kenyan Music Weekly</p>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 
                                 transition-colors group-focus-within:text-kenya-red" />
              <input
                type="text"
                placeholder="Search songs, artists, or genres..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-full 
                           text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-kenya-red/50 focus:border-kenya-red transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="hidden lg:inline-flex px-2 py-1 text-xs text-gray-500 bg-gray-700 rounded">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors group">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-kenya-red rounded-full animate-pulse" />
            </button>
            
            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-800 transition-colors"
              >
                <div className="h-8 w-8 bg-gradient-to-br from-kenya-red to-purple-600 rounded-full 
                              flex items-center justify-center text-white font-bold">
                  U
                </div>
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden animate-scale-in">
                  <div className="p-4 border-b border-gray-700">
                    <p className="font-medium text-white">User Name</p>
                    <p className="text-sm text-gray-400">user@example.com</p>
                  </div>
                  <div className="py-2">
                    <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                    <hr className="my-2 border-gray-700" />
                    <button className="flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-gray-700 w-full transition-colors">
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-full 
                       text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-kenya-red/50 transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

