import Image from "next/image";
import { Camera } from "lucide-react";

const HeroGallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2  overflow-hidden  ">
      <div className="lg:col-span-2 rounded-2xl overflow-hidden relative">
        <Image
          src="/images/hero-1.webp"
          alt="goSTOPS HSR Layout exterior"
          width={500}
          height={500}
          className="w-full object-cover"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 rounded-2xlgap-2 col-span-2">
        <div className=" ">
          <Image
            src="/images/hero-2.webp"
            alt="Hostel reception"
            width={150}
            height={150}
            className=" w-full rounded-2xl object-cover"
          />
        </div>
        <div className=" ">
          <Image
            src="/images/hero-3.webp"
            alt="Hostel common area"
            width={150}
            height={150}
            className=" w-full rounded-2xl object-cover"
          />
        </div>
        <div className=" ">
          <Image
            src="/images/hero-4.webp"
            alt="Hostel lounge"
            width={150}
            height={150}
            className=" rounded-2xl w-full object-cover"
          />
        </div>
        <div className=" ">
          <Image
            src="/images/hero-5.webp"
            alt="Hostel seating area"
            width={150}
            height={150}
            className="w-full  rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroGallery;
