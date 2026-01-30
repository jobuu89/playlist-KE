import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled, className = '', ...props }) => {
  const baseStyles = 'font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-kenya-red disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-kenya-red text-white hover:bg-red-700',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600',
    outline: 'border-2 border-kenya-red text-kenya-red hover:bg-kenya-red hover:text-white',
    ghost: 'text-gray-400 hover:text-white hover:bg-gray-800',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

