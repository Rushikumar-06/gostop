"use client";
import { useState } from "react";
import { Bus, Train, Plane, Car, ChevronDown, ChevronUp } from "lucide-react";

const TravelAccordionItem = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index} className="border-b md:border-b-1 ">
            <button
              onClick={() => {
                handleToggle(index);
              }}
              className={
                "w-full p-4 rounded-lg flex items-center gap-4 text-left transition-all duration-300 "
              }
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  openIndex === index ? "bg-pink-100" : "bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5 text-pink-500" />
              </div>
              <span className="font-bold text-lg text-gray-800 flex-grow">
                {item.title}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-gray-500" />
              ) : (
                <ChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 pl-16 text-gray-600 text-sm">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

const GettingHere = () => {
  const travelOptions = [
    {
      icon: Bus,
      title: "By Bus",
      content:
        "From Majestic Bus Station, take a BMTC bus heading towards HSR Layout or Silk Board Junction. This will cost your around ₹30-₹50. Once at Silk Board, take a short ride by auto-rickshaw or cab to HSR Layout. ",
    },
    {
      icon: Train,
      title: "By Train",
      content:
        "From Bengaluru City Railway Station (Majestic), take a taxi or an auto-rickshaw directly to HSR Layout, which is approximately 13 km away. Alternatively, you can use the Bengaluru Metro. Take the Green Line from Majestic to Yelachenahalli, then switch to an auto-rickshaw or cab to reach HSR Layout.",
    },
    {
      icon: Plane,
      title: "By Air",
      content:
        "From Kempegowda International Airport, take an airport taxi directly to HSR Layout, which is approximately 45 km away. This will cost you around ₹250. Alternatively, you can use ride-hailing services like Ola or Uber for a more convenient option directly to HSR Layout. This will cost you around ₹1000-1500.",
    },
    {
      icon: Car,
      title: "By Taxi",
      content:
        "Alternatively, you can use ride-hailing services like Ola or Uber for a more convenient option directly to HSR Layout.",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Getting Here</h2>
      <p className="text-gray-500 mb-8">
        754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand, Outer Ring
        road, Bengaluru - 560102
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 h-80 md:h-auto rounded-xl overflow-hidden shadow-lg">
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.885149622941!2d77.6206848747978!3d12.915121716120945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f391857999%3A0x1353c85748805663!2sgoSTOPS%20Bengaluru%2C%20HSR%20Layout!5e0!3m2!1sen!2sin!4v1672852000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2">
          <div className="space-y-2">
            <TravelAccordionItem data={travelOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingHere;
