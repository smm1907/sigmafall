import React from 'react';
import { SCREENSHOTS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-space-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 brand-font">
                OYUN <span className="text-neon-yellow">EKRANLARI</span>
                </h2>
                <p className="text-gray-400">Sigma Fall evreninden kareler.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCREENSHOTS.map((shot) => (
            <div key={shot.id} className="group relative">
                {/* Phone Frame */}
              <div className="relative aspect-[9/19.5] rounded-[2rem] border-8 border-space-900 bg-space-900 overflow-hidden shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,214,0,0.3)]">
                {/* Image Placeholder - User should replace src with real images */}
                <img 
                  src={shot.url} 
                  alt={shot.caption}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold text-lg">{shot.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;