import React from "react";
import { Mail, Calendar } from "lucide-react";

// Dummy data — replace with backend API response later
const subscriptions = [
  {
    id: 1,
    email: "userexample1234567890@gmail.com",
    date: "2025-02-10",
  },
  {
    id: 2,
    email: "contact@mailservice.in",
    date: "2025-02-11",
  },
  {
    id: 3,
    email: "longemailaddresswithmorecharacters@testdomain.com",
    date: "2025-02-12",
  },
];

const Subscribers = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-3 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
        Subscribers List
      </h2>

      <div className="flex flex-col gap-4">
        {subscriptions.map((sub) => (
          <div
            key={sub.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col gap-3 md:gap-4"
          >
            {/* EMAIL */}
            <div className="flex items-center gap-2 text-gray-900 font-medium break-all text-sm md:text-base">
              <Mail size={18} className="text-amber-600 shrink-0" />
              {sub.email}
            </div>

            {/* DATE */}
            <div className="flex items-center gap-2 text-gray-600 text-xs md:text-sm">
              <Calendar size={14} />
              {sub.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscribers;
