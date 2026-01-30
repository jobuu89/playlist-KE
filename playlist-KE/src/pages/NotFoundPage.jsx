import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-kenya-red mb-4">404</h1>
      <p className="text-2xl font-semibold mb-4">Page Not Found</p>
      <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-kenya-red text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
