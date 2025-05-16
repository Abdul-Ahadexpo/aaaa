import React from 'react';
import { GithubIcon, HelpCircle, HomeIcon, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 shadow-md px-4 py-3 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-105"
        >
          <span className="text-3xl">🔣</span> <span>Nioga TXT</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-700 transition-colors`}
            aria-label="Home"
          >
            <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          
          <Link 
            to="/learn" 
            className={`nav-link ${location.pathname === '/learn' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-700 transition-colors`}
            aria-label="Learn"
          >
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          
          <Link 
            to="/instructions" 
            className={`nav-link ${location.pathname === '/instructions' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-700 transition-colors`}
            aria-label="Instructions"
          >
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          
          <a 
            href="https://github.com/Abdul-Ahadexpo/aaaa/tree/main" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link text-gray-600 hover:text-indigo-700 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar