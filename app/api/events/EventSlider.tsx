"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const EventSlider = ({ imageFiles }: { imageFiles: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => document.getElementById("event-slider")?.scrollBy({ left: -300, behavior: "smooth" })}
        className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform duration-300 hover:shadow-2xl hover:from-indigo-600 hover:to-purple-600"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Slider Content */}
      <div
        id="event-slider"
        className="overflow-x-auto flex space-x-4 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {imageFiles.length === 0 ? (
          <p>No upcoming events.</p>
        ) : (
          imageFiles.map((image: string, index: number) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                src={`/images/events/${image}`}
                alt={`Event ${index + 1}`}
                width={300}
                height={200}
                className="object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(image)}
              />
            </div>
          ))
        )}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => document.getElementById("event-slider")?.scrollBy({ left: 300, behavior: "smooth" })}
        className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform duration-300 hover:shadow-2xl hover:from-purple-600 hover:to-indigo-600"
        aria-label="Scroll Right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal} // Clicking on the background closes the modal
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal from closing it
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-red-500 rounded-full p-2 shadow-lg hover:bg-red-600 transition"
              aria-label="Close Modal"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={`/images/events/${selectedImage}`}
              alt="Selected Event"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              style={{ maxHeight: "90vh", width: "auto" }} // Ensure the image scales properly
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSlider;
