import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MusicProvider } from './context/MusicContext';
import { PlayerProvider } from './context/PlayerContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/shared/ProtectedRoute';
import HomePage from './pages/HomePage';
import WeeklyChartsPage from './pages/WeeklyChartsPage';
import NewReleasesPage from './pages/NewReleasesPage';
import ArtistsPage from './pages/ArtistsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import DiscoverPage from './pages/DiscoverPage';
import SongDetailPage from './pages/SongDetailPage';
import ArtistDetailPage from './pages/ArtistDetailPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';

// Component to redirect authenticated users from login page
const LoginRedirect = () => {
  const { user } = useAuth();
  const location = useLocation();
  
  if (user) {
    // Redirect to the page they were trying to access, or home
    const redirectTo = location.state?.from?.pathname || '/';
    return <Navigate to={redirectTo} replace />;
  }
  
  return <AuthPage />;
};

// Protected routes wrapper
const ProtectedRoutes = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return null; // Will be handled by ProtectedRoute in App
  }
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="weekly-charts" element={<WeeklyChartsPage />} />
        <Route path="new-releases" element={<NewReleasesPage />} />
        <Route path="artists" element={<ArtistsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="songs/:id" element={<SongDetailPage />} />
        <Route path="artists/:id" element={<ArtistDetailPage />} />
      </Routes>
    </MainLayout>
  );
};

function App() {
  return (
    <MusicProvider>
      <PlayerProvider>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginRedirect />} />
            
            {/* Protected routes - require authentication */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <ProtectedRoutes />
                </ProtectedRoute>
              }
            />
            
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </PlayerProvider>
    </MusicProvider>
  );
}

export default App;

