import React, { useState } from "react";
import { Mail, User, Calendar, Eye, X } from "lucide-react";

// Dummy Data — replace with backend API later
const contacts = [
  {
    id: 1,
    name: "Raghav Kumar",
    email: "raghav@example.com",
    date: "2025-01-10",
    message: "I want to know more about your event services. Please contact me.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    date: "2025-02-05",
    message:
      "I am facing issues with login. Kindly assist me as soon as possible.",
  },
];

const Queries = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="w-full max-w-5xl mx-auto p-3 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
        Contact Form Submissions
      </h2>

      {/* MESSAGE MODAL */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-5 relative">

            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-200"
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold mb-3">Full Message</h3>

            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {selectedMessage}
            </p>

            <button
              onClick={() => setSelectedMessage(null)}
              className="w-full mt-5 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CONTACT LIST */}
      <div className="flex flex-col gap-4">
        {contacts.map((entry) => (
          <div
            key={entry.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col gap-3 md:gap-4"
          >
            {/* NAME + DATE */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="flex items-center gap-2 text-gray-900 font-semibold text-base md:text-lg">
                <User size={18} className="text-amber-600" />
                {entry.name}
              </div>

              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <Calendar size={14} /> {entry.date}
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-2 text-gray-700 break-all text-sm">
              <Mail size={16} className="text-gray-500" />
              {entry.email}
            </div>

            {/* MESSAGE PREVIEW */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words line-clamp-2">
              {entry.message}
            </p>

            {/* VIEW BUTTON */}
            <button
              onClick={() => setSelectedMessage(entry.message)}
              className="self-end w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition-all"
            >
              <Eye size={16} /> View Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
