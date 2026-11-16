import React, { useState } from 'react';
import { ExternalLink, Search, Plus } from 'lucide-react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Building', 'Interior', 'Renovation'];

  const projects = [
    {
      id: 1,
      title: 'Riverview Green Building',
      category: 'Building',
      image: '/assets/portfolio1.jpg',
      location: 'Downtown District'
    },
    {
      id: 2,
      title: 'The Langham Hotel',
      category: 'Building',
      image: '/assets/portfolio2.jpg',
      location: 'Metropolitan Square'
    },
    {
      id: 3,
      title: 'Villa Rustica Renovation',
      category: 'Renovation',
      image: '/assets/portfolio3.jpg',
      location: 'Hillside Heights'
    },
    {
      id: 4,
      title: 'Land Rustica Renovation',
      category: 'Renovation',
      image: '/assets/portfolio4.jpg',
      location: 'Valley West'
    },
    {
      id: 5,
      title: 'Kitchen And Living Room',
      category: 'Interior',
      image: '/assets/portfolio5.jpg',
      location: 'Residential Estate'
    },
    {
      id: 6,
      title: 'House Under The Palms',
      category: 'Building',
      image: '/assets/portfolio6.jpg',
      location: 'Coastal Avenue'
    },
    {
      id: 7,
      title: 'Green House',
      category: 'Building',
      image: '/assets/portfolio7.jpg',
      location: 'Eco Valley'
    },
    {
      id: 8,
      title: 'Inside Renovation',
      category: 'Interior',
      image: '/assets/portfolio8.jpg',
      location: 'Modern Loft Center'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#fdb813] font-extrabold text-xs sm:text-sm tracking-widest uppercase block mb-2">
            We Are Professional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#15181e] uppercase">
            Our Latest Projects
          </h2>
          <div className="w-16 h-1 bg-[#fdb813] mx-auto mt-4"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#fdb813] text-black shadow-md shadow-yellow-500/20'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow-md bg-gray-100 aspect-square cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#1e2229]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-[#fdb813] text-black flex items-center justify-center transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Plus className="w-5 h-5" />
                  </div>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs uppercase tracking-wider text-[#fdb813] font-bold block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    {project.location}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Image Zoom */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Project Fullscreen" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
            />
            <button 
              className="absolute -top-10 right-0 text-white hover:text-[#fdb813] font-bold text-sm tracking-wider"
              onClick={() => setSelectedImage(null)}
            >
              CLOSE [✕]
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
