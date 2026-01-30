import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Music, ArrowRight, Zap, Crown, Headphones } from 'lucide-react';
import TrendingNow from '../components/discovery/TrendingNow';
import NewReleases from '../components/discovery/NewReleases';
import ArtistSpotlight from '../components/artists/ArtistSpotlight';

const HomePage = () => {
  const [featuredSong, setFeaturedSong] = useState({
    title: 'Diamond Platnumz',
    subtitle: 'Jeje',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop',
    views: '2.5M',
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4ODgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-kenya-red/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-kenya-red/20 rounded-full text-kenya-red text-sm font-medium mb-6">
                <Crown className="w-4 h-4" />
                <span>#1 Music Platform in Kenya</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Discover Kenya's
                <span className="block text-kenya-red animate-gradient bg-gradient-to-r from-kenya-red via-purple-500 to-kenya-red bg-clip-text text-transparent">
                  Hottest Music
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Stay ahead of the curve with weekly charts, new releases, and 
                artist spotlights. The ultimate destination for Kenyan music lovers.
              </p>

              {/* Stats Banner */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-kenya-red/20 rounded-lg">
                    <Music className="w-5 h-5 text-kenya-red" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">10K+</p>
                    <p className="text-sm text-gray-400">Songs</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary-500/20 rounded-lg">
                    <Headphones className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">500+</p>
                    <p className="text-sm text-gray-400">Artists</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">1M+</p>
                    <p className="text-sm text-gray-400">Streams</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => console.log('Play featured song')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-kenya-red text-white 
                             rounded-full font-semibold hover:bg-red-700 transition-all duration-300 
                             hover:shadow-lg hover:shadow-red-900/50 hover:-translate-y-1"
                >
                  <Play className="w-5 h-5 fill-current" />
                  <span>Play Now</span>
                </button>
                <Link 
                  to="/charts"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-white 
                             rounded-full font-semibold hover:bg-gray-700 transition-all duration-300
                             border border-gray-700 hover:border-gray-600"
                >
                  <span>View Charts</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Featured Album Art */}
            <div className="relative">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-kenya-red via-purple-500 to-kenya-red animate-spin" style={{ animationDuration: '8s' }}>
                  <div className="absolute inset-2 rounded-full bg-gray-900" />
                </div>
                
                {/* Album Cover */}
                <img
                  src={featuredSong.cover}
                  alt={featuredSong.title}
                  className="absolute inset-4 rounded-2xl object-cover shadow-2xl 
                             transform transition-transform duration-500 hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gray-900 rounded-xl p-4 shadow-xl border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-kenya-red/20 rounded-lg">
                      <Zap className="w-5 h-5 text-kenya-red" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Trending</p>
                      <p className="font-bold text-white">{featuredSong.views}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-gray-900" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Artist Spotlight */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-kenya-red to-red-700 rounded-xl">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Artist Spotlight</h2>
                <p className="text-gray-400 text-sm">Featured artist of the week</p>
              </div>
            </div>
            <Link to="/artists" className="text-kenya-red hover:text-red-400 text-sm font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ArtistSpotlight 
            artist={{
              name: 'Bien',
              genre: 'Afropop',
              image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=600&h=600&fit=crop',
              bio: 'Bien is a Kenyan singer, songwriter, and record producer. He is best known for his hit single "Nails" which topped local charts.',
              monthlyListeners: '2.5M',
              isTop: true,
            }}
            onPlay={(song) => console.log('Play:', song)}
          />
        </section>

        {/* Trending Now */}
        <section>
          <TrendingNow
            songs={[]}
            onPlay={(song) => console.log('Play:', song)}
          />
        </section>

        {/* New Releases */}
        <section>
          <NewReleases
            songs={[]}
            onPlay={(song) => console.log('Play:', song)}
          />
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-kenya-red to-purple-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvZz48L2c+PC9zdmc+')] opacity-20" />
          
          <div className="relative container mx-auto px-8 py-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Discover New Music?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of music lovers and stay updated with the latest Kenyan hits.
            </p>
            <Link 
              to="/discover"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-kenya-red rounded-full 
                         font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

