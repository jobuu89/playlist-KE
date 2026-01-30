import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ArtistList from '../components/artists/ArtistList';

const ArtistsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Artists</h1>
        <ArtistList artists={[]} onArtistClick={(artist) => console.log('Artist:', artist)} />
      </div>
    </MainLayout>
  );
};

export default ArtistsPage;

