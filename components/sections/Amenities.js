import {
  MonitorPlay,
  Gamepad2,
  Tv,
  Wind,
  Droplets,
  Utensils,
  ThermometerSun,
  ParkingCircle,
  Fan,
} from "lucide-react";

const AmenityItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3">
    <Icon className="text-gray-600" size={24} />
    <span>{text}</span>
  </div>
);

const Amenities = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">Amenities you'll get</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-500 mt-5">
        <AmenityItem icon={Tv} text="24/7 Front Desk" />
        <AmenityItem icon={Wind} text="AC" />
        <AmenityItem icon={Utensils} text="Common Area" />
        <AmenityItem icon={Droplets} text="Ensuite Washroom" />
        <AmenityItem icon={Fan} text="Fan" />
        <AmenityItem icon={ThermometerSun} text="Geyser" />
        <AmenityItem icon={MonitorPlay} text="Home Theatre" />
        <AmenityItem icon={Gamepad2} text="Indoor Games" />
        <AmenityItem icon={ParkingCircle} text="Laundry" />
      </div>
      <button className="w-full md:w-auto  mt-5 mb-5 h-[43px] items-center justify-center gap-2  rounded-[12px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)]  px-8 py-3  text-[#2A2929] font-['Nunito_Sans'] text-[16px] leading-[22px] font-medium">
        View all amenities
      </button>
    </div>
  );
};

export default Amenities;
