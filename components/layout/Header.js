import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto space-x-8">
         <div><a href="https://gostops.com/stay/Bengaluru/bengalurusb-hostel?checkin=2025-10-29&checkout=2025-10-30 " target="_blank"><img src="https://gostops.s3.amazonaws.com/static/src/img/gostops-logo.png" /></a></div>
          <nav className="hidden  md:flex justify-between w-full space-x-6 text-sm font-medium text-gray-600">
            <a href="https://gostops.com/stay/Bengaluru/bengalurusb-hostel?checkin=2025-10-29&checkout=2025-10-30 " target="_blank" className=" flex items-center">Destinations <ChevronDown size={16} className="ml-1" /></a>
            <a  href="https://gostops.com/stay/Bengaluru/bengalurusb-hostel?checkin=2025-10-29&checkout=2025-10-30 " target="_blank" className="">Workation</a>
            <a  href="https://gostops.com/stay/Bengaluru/bengalurusb-hostel?checkin=2025-10-29&checkout=2025-10-30 " target="_blank" className="">Coliving</a>
            <a  href="https://gostops.com/stay/Bengaluru/bengalurusb-hostel?checkin=2025-10-29&checkout=2025-10-30 " target="_blank" className="flex items-center">goSTOPS for Business <ChevronDown size={16} className="ml-1" /></a>
            <a  href="https://gostops.com/stay/Bengaluru/bengalurusb-hostel?checkin=2025-10-29&checkout=2025-10-30 " target="_blank" className=" flex items-center">Collaborate with Us <ChevronDown size={16} className="ml-1" /></a>
          </nav>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          <button className="border border-gray-300 rounded-2xl px-4 py-2 text-sm font-semibold hover:bg-gray-100">
            Download App
          </button>
          <button className="bg-red-500 text-white rounded-lg px-6 py-2 text-sm font-semibold hover:bg-pink-600">
            Login
          </button>
        </div>
        <div className="flex sm:hidden items-center space-x-2">
          <button className="border border-gray-300 rounded-lg px-3 py-2 text-xs font-semibold hover:bg-gray-100">
            App
          </button>
          <button className="bg-pink-500 text-white rounded-lg px-4 py-2 text-xs font-semibold hover:bg-pink-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;