import HeroGallery from "../components/sections/HeroGallery";
import HostelInfo from "../components/sections/HostelInfo";
import BookingCard from "../components/sections/BookingCard";
import RoomTypes from "../components/sections/RoomTypes";
import Amenities from "../components/sections/Amenities";
import Guidelines from "../components/sections/Guidelines";
import Faq from "../components/sections/Faq";
import GettingHere from "@/components/sections/GettingHere";

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      
        <div className="md:ml-15 md:mr-15">
          <HeroGallery />
          <HostelInfo />
          <div className="md:grid md:grid-cols-12 gap-x-9 px-[16px] md:px-[32px] lg:px-[48px] xl:px-[64px] xxl:px-[112px]">
          <div className="md:col-span-8">
            <RoomTypes/>
          <Amenities/>
          <GettingHere/>
          <Guidelines/>
          <Faq/>
          </div>
          <div className="hidden md:block md:col-span-4">
            <div className="sticky top-[50px] pt-[85px]">
              <BookingCard/></div>
            
          </div>
          </div>
        </div>

      </div>
  
  );
}