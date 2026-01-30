// Application Routes Configuration
import HomePage from '../pages/HomePage';
import WeeklyChartsPage from '../pages/WeeklyChartsPage';
import NewReleasesPage from '../pages/NewReleasesPage';
import ArtistsPage from '../pages/ArtistsPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import SongDetailPage from '../pages/SongDetailPage';
import ArtistDetailPage from '../pages/ArtistDetailPage';
import DiscoverPage from '../pages/DiscoverPage';
import NotFoundPage from '../pages/NotFoundPage';

export const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/charts',
    component: WeeklyChartsPage,
  },
  {
    path: '/new-releases',
    component: NewReleasesPage,
  },
  {
    path: '/artists',
    component: ArtistsPage,
  },
  {
    path: '/artist/:id',
    component: ArtistDetailPage,
  },
  {
    path: '/song/:id',
    component: SongDetailPage,
  },
  {
    path: '/analytics',
    component: AnalyticsPage,
  },
  {
    path: '/discover',
    component: DiscoverPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export const routeNames = {
  '/': 'Home',
  '/charts': 'Charts',
  '/new-releases': 'New Releases',
  '/artists': 'Artists',
  '/artist/:id': 'Artist',
  '/song/:id': 'Song',
  '/analytics': 'Analytics',
  '/discover': 'Discover',
};

export default routes;

