import React from 'react';

const EmptyState = ({ icon, title, message, action }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-12 text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{message}</p>
      {action && (
        <button className="px-6 py-2 bg-kenya-red text-white rounded-lg hover:bg-red-700 transition">
          {action}
        </button>
      )}
    </div>
  );
};

export default EmptyState;

