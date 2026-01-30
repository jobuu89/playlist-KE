import React from 'react';

const Card = ({ children, className = '', hover = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-800 rounded-xl p-6 ${hover ? 'hover:bg-gray-700 hover:transform hover:scale-105 transition cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

