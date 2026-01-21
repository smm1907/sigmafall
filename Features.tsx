import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-space-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 brand-font">
            OYUN <span className="text-neon-blue">ÖZELLİKLERİ</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Sigma Fall sadece bir oyun değil, reflekslerinizi ve matematik zekanızı aynı anda zorlayan bir deneyim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group bg-space-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.2)]"
            >
              <div className={`mb-6 p-4 rounded-xl bg-white/5 inline-block ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 brand-font">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;