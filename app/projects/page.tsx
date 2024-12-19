'use client';

import { useState } from 'react';

import { format } from 'date-fns'; // Import date-fns for formatting
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const projects = [
    {
      id: 1,
      date: new Date('2023-07-01'), // Example date
      title: "Aged + Grace: A Mental Health Hangout for Community Elders",
      description: "A community outreach program focused on improving the mental and spiritual well-being of senior citizens aged 70 and above.",
      fullDescription: "The \"Aged + Grace\" project is a community outreach program designed to prioritize the mental health of our beloved elders aged 70 and above. This initiative aims to educate and empower seniors to live their lives with grace and purpose. Through one-on-one and face-to-face discussions, we cover essential topics such as cultivating a positive lifestyle, managing worry, effective communication with younger generations, incorporating stress-free exercise, and embracing a spiritually fulfilling life in preparation for a peaceful transition.  This particular event hosted approximately 40 community elders, providing them with personalized guidance and support",
      image: "/images/projects/elderly/elder1.jpg",
      images: [
        "/images/projects/elderly/elder1.jpg", 
        "/images/projects/elderly/elder2.jpg", 
        "/images/projects/elderly/elder3.jpg",
        "/images/projects/elderly/elder4.jpg",
        "/images/projects/elderly/elder5.jpg",
        "/images/projects/elderly/elder6.jpg",
      ],
      categories: ["Community Outreach", "Senior Citizens", "Mental Health"],
      impact: "Improved mental well-being and quality of life for participating community elders. Increased awareness and support for senior citizens within the community. Fostering intergenerational connections and understanding."
    },
    {
      id: 2,
      date: new Date('2023-09-23'), // Example date
      title: "A Day in Education - Books Presentation",
      description: "Donation of educational books and materials to Kids and Youths in Bonny Island.",
      fullDescription: "In celebration of Basic Education and Literacy Month, the Rotary Club of Bonny Island donated educational books and materials to Kids Resource Centre on September 23, 2023. The project aimed to address the yearning needs of young learners, including those unable to attend school, by providing access to essential reading resources.  This initiative was made possible through the generous support of KelVic Crafts & Millinery and Learning Pages, who partnered with the Rotary Club.  The donated materials will enhance reading abilities and provide valuable learning opportunities for the children at Kids Resource Centre.",
      image: "/images/projects/basicedu/edu (8).jpg",
      images: [
        "/images/projects/basicedu/edu (1).jpg", 
        "/images/projects/basicedu/edu (2).jpg", 
        "/images/projects/basicedu/edu (3).jpg", 
        "/images/projects/basicedu/edu (4).jpg", 
        "/images/projects/basicedu/edu (5).jpg", 
        "/images/projects/basicedu/edu (6).jpg", 
        "/images/projects/basicedu/edu (7).jpg",
        "/images/projects/basicedu/edu (8).jpg",
      ],
      categories: ["Basic education and literacy", "Community", "Vocational"],
      impact: "Improved access to educational resources for underprivileged children in Bonny Island. Enhanced reading abilities and literacy skills.  Fostering a love of learning and providing opportunities for educational growth."
    },
    {
      id: 3,
      date: new Date('2024-05-07'), // Example date
      title: "Drug Sensitization in Secondary School in Finima, Bonny Island",
      description: "A drug awareness and prevention program promoting healthy life choices.",
      fullDescription: "This project involved conducting a drug sensitization program at a secondary school in Finima, Bonny Island. The program aimed to educate students about the dangers of drug abuse, provide them with the knowledge and skills to make healthy choices, and empower them to resist peer pressure.  The program included interactive sessions, speakers, and the distribution of informational materials, all tailored to resonate with the specific needs and concerns of secondary school students.",
      image: "/images/projects/drugsensi/drugsensi (3).png",
      images: [
        "/images/projects/drugsensi/drugsensi (1).png", 
        "/images/projects/drugsensi/drugsensi (2).jpg", 
        "/images/projects/drugsensi/drugsensi (3).jpg",
        "/images/projects/drugsensi/drugsensi (2).png", 
        "/images/projects/drugsensi/drugsensi (3).png", 
        "/images/projects/drugsensi/drugsensi (1).jpg", 
        "/images/projects/drugsensi/drugsensi (4).jpg",
        "/images/projects/drugsensi/drugsensi (4).png", 
        "/images/projects/drugsensi/drugsensi (5).jpg", 
      ],
      categories: ["Basic education and literacy", "Community", "Vocational"],
      impact: "Improved access to educational resources for underprivileged children in Bonny Island. Enhanced reading abilities and literacy skills.  Fostering a love of learning and providing opportunities for educational growth."
    },
    // {
    //   id: 4,
    //   date: new Date('2023-11-15'), // Example date
    //   title: "Drug Sensitization in Secondary School in Finima, Bonny Island",
    //   description: "A drug awareness and prevention program promoting healthy life choices.",
    //   fullDescription: "This project involved conducting a drug sensitization program at a secondary school in Finima, Bonny Island. The program aimed to educate students about the dangers of drug abuse, provide them with the knowledge and skills to make healthy choices, and empower them to resist peer pressure.  The program included interactive sessions, speakers, and the distribution of informational materials, all tailored to resonate with the specific needs and concerns of secondary school students.",
    //   image: "/images/projects/drugsensi/drugsensi (3).png",
    //   images: [
    //     "/images/projects/drugsensi/drugsensi (1).png", 
    //     "/images/projects/drugsensi/drugsensi (2).jpg", 
    //     "/images/projects/drugsensi/drugsensi (3).jpg",
    //     "/images/projects/drugsensi/drugsensi (2).png", 
    //     "/images/projects/drugsensi/drugsensi (3).png", 
    //     "/images/projects/drugsensi/drugsensi (1).jpg", 
    //     "/images/projects/drugsensi/drugsensi (4).jpg",
    //     "/images/projects/drugsensi/drugsensi (4).png", 
    //     "/images/projects/drugsensi/drugsensi (5).jpg", 
    //   ],
    //   categories: ["Basic education and literacy", "Community", "Vocational"],
    //   impact: "Improved access to educational resources for underprivileged children in Bonny Island. Enhanced reading abilities and literacy skills.  Fostering a love of learning and providing opportunities for educational growth."
    // },
  ];
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const openProjectModal = (project: typeof projects[number]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsImageLoading(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedProject.images.length
      );
      setIsImageLoading(true);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? (selectedProject.images.length - 1) : (prevIndex - 1)
      );
      setIsImageLoading(true);
    }
  };

  const handleMonthFilterChange = (month: string | null) => {
    setSelectedMonth(month);
  };

  const handleYearFilterChange = (year: string | null) => {
    setSelectedYear(year);
  };

  const resetFilters = () => {
    setSelectedMonth(null);
    setSelectedYear(null);
  };

  // Generate unique months and years
  const uniqueMonths = Array.from(new Set(projects.map((project) => format(project.date, 'MMMM'))));
  const uniqueYears = Array.from(new Set(projects.map((project) => format(project.date, 'yyyy'))));

  // Filter projects based on selected month and year
  const filteredProjects = projects.filter((project) => {
    const projectMonth = format(project.date, 'MMMM');
    const projectYear = format(project.date, 'yyyy');

    const monthMatch = !selectedMonth || projectMonth === selectedMonth;
    const yearMatch = !selectedYear || projectYear === selectedYear;

    return monthMatch && yearMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Our Projects</h1>
      
      {/* Date Filter Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
        {/* Year Filter */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">Filter by Year:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedYear(null)}
              className={`text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md ${
                selectedYear === null ? 'bg-gray-100' : ''
              }`}
            >
              All Years
            </button>
            {uniqueYears.map((year) => (
              <button
                key={year}
                onClick={() => handleYearFilterChange(year)}
                className={`text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md ${
                  selectedYear === year ? 'bg-gray-100' : ''
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Month Filter */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium"></span>
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedMonth(null)}
              className={`text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md ${
                selectedMonth === null ? 'bg-gray-100' : ''
              }`}
            >
              All Months
            </button>
            {uniqueMonths.map((month) => (
              <button
                key={month}
                onClick={() => handleMonthFilterChange(month)}
                className={`text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md ${
                  selectedMonth === month ? 'bg-gray-100' : ''
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Reset Filters Button (only show if any filter is active) */}
        {(selectedMonth || selectedYear) && (
          <button
            onClick={resetFilters}
            className="text-red-600 hover:bg-red-50 px-4 py-2 rounded-md border border-red-200"
          >
            Reset Filters
          </button>
        )}
      </div>
      
      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={400} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 line-clamp-3">{project.description}</p>
                {/* Display project date */}
                <p className="text-gray-500 text-sm">
                  {format(project.date, 'MMMM dd, yyyy')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p className="text-xl">No projects found matching the selected filters.</p>
        </div>
      )}

      {/* Rest of the modal code remains the same as in the previous version */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={closeModal}
          >
            {/* Wider container to accommodate external navigation */}
            <div className="relative w-full max-w-6xl flex items-center justify-center">
              {/* Previous Image Arrow */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-50 
                    bg-white/80 hover:bg-white shadow-lg rounded-full p-4 
                    transition-all duration-300 mr-4"
                >
                  <ChevronLeft className="w-10 h-10 text-gray-700" />
                </motion.button>
              )}

              {/* Modal Content */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                {/* Image Carousel */}
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  {/* Image Display with Transition */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full relative flex items-center justify-center"
                    >
                      {/* Loading Spinner */}
                      {isImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-100 bg-opacity-50">
                          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                        </div>
                      )}

                      {/* Image with onLoadingComplete */}
                      <Image 
                        src={selectedProject.images[currentImageIndex]} 
                        alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="w-full h-full"
                        onLoadingComplete={() => setIsImageLoading(false)}
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Image Counter */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-black/50 text-white px-4 py-2 rounded-full">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}
                </div>

                {/* Filter Buttons */}
                <div className="mb-4">
                  {/* monthOptions should be defined or imported */}
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Description</h3>
                      <p className="text-gray-700 mb-4">{selectedProject.fullDescription}</p>
                      
                      <h3 className="text-xl font-semibold mb-2">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.categories.map((category) => (
                          <span 
                            key={category} 
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Project Impact</h3>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <p className="text-gray-700">{selectedProject.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Next Image Arrow */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-50 
                    bg-white/80 hover:bg-white shadow-lg rounded-full p-4 
                    transition-all duration-300 ml-4"
                >
                  <ChevronRight className="w-10 h-10 text-gray-700" />
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}