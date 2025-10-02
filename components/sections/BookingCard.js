'use client';
import { Calendar, Users, Bed } from 'lucide-react';

const BookingCard = () => {
  return (
    <div className="sticky top-24 mt-8 lg:mt-0">
      <div className="border rounded-xl bg-white shadow-lg">

        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
          
            <button type='calander'>  <Calendar size={20} className="text-gray-500" /></button>
            <div>
              <span className="font-semibold">29 Oct - 30 Oct</span>
              <span className="text-gray-500 text-sm"> (1 night)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users size={20} className="text-gray-500" />
            <span className="font-semibold">0 guests</span>
          </div>
        </div>

        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-left mb-8">Summary</h2>
          
          <div className="relative inline-block">
            <span className="absolute top-8 -left-4 text-pink-400 text-xl">+</span>
            <span className="absolute top-2 left-12 text-pink-400 text-xl">+</span>
            <span className="absolute top-12 left-20 text-pink-400 text-lg">+</span>
            <span className="absolute top-4 right-10 text-pink-400 text-xl">+</span>
            <span className="absolute top-10 -right-4 text-pink-400 text-xl">+</span>
            
            <div className="absolute bottom-6 inset-x-0 h-16 flex items-end justify-center gap-1 opacity-50">
                <div className="bg-gray-200 w-8 h-10 rounded-t-sm"></div>
                <div className="bg-gray-200 w-12 h-16 rounded-t-sm"></div>
                <div className="bg-gray-200 w-6 h-12 rounded-t-sm"></div>
                <div className="bg-gray-200 w-10 h-8 rounded-t-sm"></div>
            </div>

            <div className="relative bg-white border-2 border-gray-300 rounded-xl w-40 h-40 p-4 flex flex-col items-center justify-center">
                <div className="absolute -top-2 inset-x-0 h-4 flex justify-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>

                <div className="relative w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                    <Bed size={40} className="text-pink-500" />
                    <div className="absolute -bottom-1 -right-1 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/TR/SVG2/0000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                </div>
            </div>
          </div>

          <p className="text-gray-500 mt-8">
            Select a bed to get your stay summary here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;