import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  
  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <footer
      onClick={handleClick}
      className={`fixed bottom-0 w-full z-40 cursor-pointer transition-all duration-[5000ms] ease-in-out ${
        clicked
          ? 'bottom-[100%] h-12 w-60 mx-auto right-0 left-0 p-2'
          : 'p-4 sm:p-6'
      } bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 shadow-lg`}
    >
      {clicked ? (
        <h1 className="text-xl font-bold text-white text-center animate-bounce">
          You Nigga bitch!
        </h1>
      ) : (
        <div className="text-center">
          <p className="text-sm">
            Copyright © 2007-{currentYear} - All rights reserved by{' '}
            <span className="font-bold text-gray-100">Nioga TXT</span>
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;