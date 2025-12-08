import React, { useState } from "react";
import { Eye, Calendar, Tag, X, ChevronLeft, ChevronRight } from "lucide-react";


// Dummy example data — Replace with API response later
const events = [
  {
    id: 1,
    title: "Summer Design Workshop",
    description: "A full-day workshop on UI/UX fundamentals.",
    date: "2025-06-14",
    category: "Design",
    images: ["https://images.pexels.com/photos/34995709/pexels-photo-34995709.jpeg", "https://images.pexels.com/photos/34447226/pexels-photo-34447226.jpeg"],
  },
  {
    id: 2,
    title: "Marketing Webinar",
    description: "Exploring branding & modern digital marketing.",
    date: "2025-07-01",
    category: "Marketing",
    images: ["/img3.jpg"],
  },
];

const PastEvents = () => {

 const ImageViewerModal = ({ images, onClose }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-4 relative overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-200"
        >
          <X size={22} />
        </button>

        <h2 className="text-lg font-semibold mb-4 text-center">Event Images</h2>

        {/* Carousel Container */}
        <div className="relative w-full h-64 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">

          {/* Current image */}
          <img
            src={images[current]}
            className="w-full h-full object-contain transition-all"
            alt="Event"
          />

          {/* Prev Button */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 h-10 w-10 flex items-center justify-center rounded-full shadow hover:bg-white"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 h-10 w-10 flex items-center justify-center rounded-full shadow hover:bg-white"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <p className="text-center mt-3 text-sm text-gray-600">
            {current + 1} / {images.length}
          </p>
        )}

        {/* Close Button Bottom */}
        <button
          onClick={onClose}
          className="w-full mt-4 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const [modalImages, setModalImages] = useState(null);
  return (
    <div className="w-full max-w-5xl mx-auto p-3 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
        Past Events
      </h2>

      {/* MODAL */}
      {modalImages && (
        <ImageViewerModal
          images={modalImages}
          onClose={() => setModalImages(null)}
        />
      )}

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col gap-3 md:gap-4"
          >
            {/* Title + Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 break-words">
                {event.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar size={16} /> {event.date}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">
              {event.description}
            </p>

            {/* Category */}
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Tag size={16} className="text-amber-600" />
              <span className="font-medium">{event.category}</span>
            </div>

            {/* Footer Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">

              <div className="text-xs text-gray-500">
                Images: {event.images.length} uploaded
              </div>

              {/* View Images Button */}
              <button
                onClick={() => setModalImages(event.images)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition-all"
              >
                <Eye size={16} /> View Images
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
