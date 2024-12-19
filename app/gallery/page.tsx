"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // Importing the X icon for a modern close button

interface GalleryData {
  folderName: string;
  images: string[];
}

export default function GalleryPage() {
  // ... (previous state and effects remain the same)
  const [gallery, setGallery] = useState<GalleryData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFolderImages, setSelectedFolderImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("/api/gallery");
        const data: GalleryData[] = await response.json();
        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  const openModal = (images: string[]) => {
    setSelectedFolderImages(images);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedFolderImages.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "ArrowLeft") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedFolderImages.length - 1 : prevIndex - 1
      );
    } else if (event.key === "Escape") {
      closeModal();
    }
  }, [selectedFolderImages.length, closeModal]);

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isModalOpen, handleKeyPress]);

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((folder, folderIndex) => (
          <div
            key={folderIndex}
            className="rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => openModal(folder.images)}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">{folder.folderName}</h2>
            <div className="grid grid-cols-2 gap-4">
              {folder.images.slice(0, 4).map((src, imageIndex) => (
                <div key={imageIndex} className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Image from ${folder.folderName}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-[#b9d9eb06] inline-block relative rounded-l shadow-xl"
            onClick={handleModalContentClick}
          >
            {/* Modern close button with hover effects and animation */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 rounded-full bg-red-500 hover:bg-red-600 transform hover:scale-110 transition-all duration-200 group"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
            </button>

            <div className="relative w-[80vw] h-[80vh] flex justify-center items-center p-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(
                    currentImageIndex === 0 ? selectedFolderImages.length - 1 : currentImageIndex - 1
                  );
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 rounded-full p-3 shadow-lg hover:bg-gray-600 transition-all z-50"
              >
                &#8592;
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={selectedFolderImages[currentImageIndex]}
                  alt="Selected image"
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-500"
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(
                    currentImageIndex === selectedFolderImages.length - 1
                      ? 0
                      : currentImageIndex + 1
                  );
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white bg-black bg-opacity-50 rounded-full p-3 shadow-lg hover:bg-gray-600 transition-all z-50"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}