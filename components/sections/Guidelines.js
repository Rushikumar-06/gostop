import { Ban, CircleX, CalendarClock, User } from "lucide-react";

const Guidelines = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Guidelines</h2>
      <div className="max-w-[450px] flex flex-wrap justify-between rounded-[12px] bg-gray-100 p-[12px] mb-[16px] md:mb-[24px] gap-y-2 gap-x-4">
        <div className="flex flex-1 min-w-[200px] text-grey-700 text-[16px] font-medium">
          Check in: 1:00 PM
        </div>
        <div className="flex flex-1 min-w-[200px] text-grey-700 text-[16px] font-medium">
          Check out: 10:00 AM
        </div>
      </div>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start space-x-3">
          <User className="text-pink-500 mt-1 flex-shrink-0" size={20} />
          <span>
            All guests must carry a Govt. photo ID (PAN card not accepted).
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <Ban className="text-pink-500 mt-1 flex-shrink-0" size={20} />
          <span>Local IDs are not accepted.</span>
        </li>
        <li className="flex items-start space-x-3">
          <Ban className="text-pink-500 mt-1 flex-shrink-0" size={20} />
          <span>
            Non-resident visitors are not allowed beyond the reception/common
            areas.
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <CalendarClock
            className="text-pink-500 mt-1 flex-shrink-0"
            size={20}
          />
          <span>
            Cancellations/Modifications: Free up to 5 days (120 hours) before
            the standard check-in time.
          </span>
        </li>
        <li className="flex items-start space-x-3">
          <CircleX className="text-pink-500 mt-1 flex-shrink-0" size={20} />
          <span>No-shows are charged 100% of the reservation.</span>
        </li>
        <li className="flex items-start space-x-3">
          <CircleX className="text-pink-500 mt-1 flex-shrink-0" size={20} />
          <span>No refunds for early departures.</span>
        </li>
      </ul>
      <button className="mt-8 border border-gray-400 rounded-lg px-6 py-2 font-semibold hover:bg-gray-100">
        View all guidelines
      </button>
    </div>
  );
};

export default Guidelines;
