import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-kenya-red">Playlist KE</h3>
            <p className="text-gray-400">The ultimate destination for Kenyan music lovers.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/charts" className="hover:text-white">Weekly Charts</a></li>
              <li><a href="/new-releases" className="hover:text-white">New Releases</a></li>
              <li><a href="/artists" className="hover:text-white">Artists</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-400">Follow us on social media for updates.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Playlist KE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

