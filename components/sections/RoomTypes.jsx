"use client";
import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";
const RoomCard = ({ title, price, originalPrice, imageSrc, adults, index }) =>{
  const [open, setOpen] = useState([]);

  return (
  <div className=" rounded-xl  border-1 border-gray-200 p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
    <div className="md:w-1/3">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
    <div className="md:w-2/3 flex flex-col justify-between">
      <div>
        
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-2xl font-bold flex flex-col items-center">
            ₹{price}
            {originalPrice && (
              <span className="text-sm font-normal text-gray-500 ml-2">
                <span className=" line-through">₹{originalPrice}</span>/night
              </span>
            )}
           
          </p>
        </div>
        <p className="text-gray-500 flex items-center mt-1">
          <User size={16} className="mr-2" /> x {adults} Adults
        </p>
        
        <div className="space-x-4 text-gray-600 mt-3 text-sm">
          <div className="flex flex-wrap gap-2">
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Blanket</p></div>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Lamp</p></div>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Locker</p></div>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Fan</p></div>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Linen</p></div>
          {open.includes(index) && 
          <>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Toilet paper</p></div>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Air conditioner</p></div>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Privacy Curtains</p></div>
          <div className="bg-gray-100 p-2 rounded-2xl"><p className="text-xs ">Ensuite washroom</p></div>
          </>}
          {!open.includes(index) && <button className="font-semibold text-pink-500" onClick={() => setOpen((prev) => [...prev, index])}>+4 more</button>}
        </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-4">
        <label className="flex items-end  space-x-2">
          <input
            type="checkbox"
            className="size-4"
          />
         
        </label>
         <span className="text-m pl-2 font-medium">Include Breakfast</span>
      </div>
      <div className="border-t mt-2 border-gray-200 "></div>
      <div className="text-right mt-2"><button className="bg-[#ff2a5f] text-white font-semibold px-8 py-2 rounded-lg hover:bg-pink-600">
          Add Bed
        </button></div>
      
    </div>
  </div>
)};

const RoomTypes = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mt-10 mb-4">Room types & Pricing</h2>
      <RoomCard
        title="Bed in 4 Bed Mixed AC Dormitory Room with Ensuite Bathroom"
        price="525.96"
        originalPrice="974"
        imageSrc="/images/room-1.webp"
        adults={1}
        index={0}
      />
      <RoomCard
        title="Deluxe Private AC Room with Ensuite Bathroom"
        price="1446.12"
        originalPrice="2678"
        imageSrc="/images/room-2.webp"
        adults={2}
         index={1}
      />
    </div>
  );
};

export default RoomTypes;
