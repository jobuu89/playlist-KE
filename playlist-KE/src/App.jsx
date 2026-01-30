import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MusicProvider } from './context/MusicContext';
import { PlayerProvider } from './context/PlayerContext';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import WeeklyChartsPage from './pages/WeeklyChartsPage';
import NewReleasesPage from './pages/NewReleasesPage';
import ArtistsPage from './pages/ArtistsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import DiscoverPage from './pages/DiscoverPage';
import SongDetailPage from './pages/SongDetailPage';
import ArtistDetailPage from './pages/ArtistDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <MusicProvider>
      <PlayerProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weekly-charts" element={<WeeklyChartsPage />} />
            <Route path="/new-releases" element={<NewReleasesPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/songs/:id" element={<SongDetailPage />} />
            <Route path="/artists/:id" element={<ArtistDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </PlayerProvider>
    </MusicProvider>
  );
}

export default App;
