import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-yellow-500">goSTOPS</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-pink-500 flex items-center">Destinations <ChevronDown size={16} className="ml-1" /></a>
            <a href="#" className="hover:text-pink-500">Workation</a>
            <a href="#" className="hover:text-pink-500">Coliving</a>
            <a href="#" className="hover:text-pink-500 flex items-center">goSTOPS for Business <ChevronDown size={16} className="ml-1" /></a>
            <a href="#" className="hover:text-pink-500 flex items-center">Collaborate with Us <ChevronDown size={16} className="ml-1" /></a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-100">
            Download App
          </button>
          <button className="bg-pink-500 text-white rounded-lg px-6 py-2 text-sm font-semibold hover:bg-pink-600">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;