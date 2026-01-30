import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PlayerBar from './PlayerBar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-1 pb-24">
        {children}
      </main>
      <PlayerBar />
      <Footer />
    </div>
  );
};

export default MainLayout;
