"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-15">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      {items.map((item, index) => (
        <div key={index} className=" mt-2 border-b  border-gray-200">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex justify-between pt-5 pb-5 font-bold text-gray-700 text-left"
          >
            {item.q}
            <span className="ml-2">
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      q: "Can I get an early check-in?",
      a: "Yup! If there’s a bed free, you can check in anytime after 7 AM.",
    },
    {
      q: "Is there food available in the hostel?",
      a: "For sure! Our café runs 24x7, and you can order yummy bites straight from the app.",
    },
    {
      q: "Are guests/outsiders allowed?",
      a: "Sorry, no outside guests are allowed — we keep it safe and comfy just for our in-house travelers.",
    },
    {
      q: "Are there events at the hostel?",
      a: "Absolutely! We’ve got fun hangouts and activities every evening. Check the app to see what’s on tonight.",
    },
    {
      q: "Are there discounts for long stays?",
      a: "Oh yes! If you’re staying 5 nights or more, we’ve got some crazy discounts waiting for you. Change dates to find out!",
    },
    {
      q: "Is Wi-Fi available?",
      a: "Yes! Free Wi-Fi is all yours — though signal can be a bit moody in some corners.",
    },
    {
      q: "Do you have lockers for valuables?",
      a: "Yes! We’ve got big digital lockers that open only with your phone — so your stuff stays super safe while you’re out exploring.",
    },
    {
      q: "Is the dorm safe?",
      a: "YTotally! While most hostels keep dorms open, at goSTOPS every dorm has a Bluetooth lock that opens only through our app for registered guests. That means only your dorm-mates can get in — no random walk-ins.",
    },
    {
      q: "Will my group/friends get the same dorm?",
      a: "We’ll try our best to keep you all together, but sometimes it depends on availability.",
    },
    {
      q: "Can I leave my luggage at the hostel after checkout until evening?",
      a: "Of course! You can drop your bags with us, chill in common area or explore hands-free until 10pm on the day of your checkout!",
    },
    {
      q: "Who do I contact if I have a query?",
      a: "Our customer support team is around 24x7 to help you out! Just give us a call on +91 7428882828 or +91 8368725734 and we’ll sort it out (or connect you with the property manager if needed). You can also drop us an email anytime at hello@gostops.com.",
    },   
  ];

  return (
    <div className="min-h-screen w-full flex">
      <Accordion items={faqItems} />
    </div>
  );
};

export default Faq;
