import { Briefcase, Zap } from "lucide-react";

const HostelInfo = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl font-bold">Bengaluru, HSR Silk Board</h1>
          <p className="text-gray-500 mt-2">
            754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand, Outer
            Ring road, Bengaluru - 560102
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center text-sm bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg">
              <Briefcase size={16} className="mr-2" />
              Booked by 200+ this week
            </div>
            <div className="flex items-center text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg">
              <Zap size={16} className="mr-2" />
              Perfect for Stay Near HSR Startup Scene
            </div>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="flex flex-col items-start md:items-end mb-4">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-3xl font-bold">₹525.96</p>
          </div>

          <button className="w-full text-white font-bold py-3 rounded-lg bg-[#ff2a5f]">
            Select Room
          </button>
        </div>
      </div>

      <p className="mt-6 text-gray-600">
        Nestled in HSR layout near Silk Board junction, goSTOPS Bengaluru HSR
        offers convenient access to Bengaluru&apos;s tech parks, dining, shopping,
        and nightlife, making it a perfect spot for explorers looking to
        experience the city&apos;s dynamic culture and modern vibes.
      </p>
    </div>
  );
};

export default HostelInfo;
