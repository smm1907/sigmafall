import React from 'react';
import { Apple, Play } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
       {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 brand-font">
          MACERAYA BAŞLA
        </h2>
        <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
          Sigma Fall'u şimdi indir ve matematik evrenindeki yerini al. Ücretsiz ve internetsiz oynanabilir.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* App Store Button */}
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl border border-white/10 hover:bg-gray-900 hover:scale-105 transition-all shadow-xl w-64 justify-center group">
                <Apple className="w-8 h-8 mr-3 group-hover:text-gray-300" fill="currentColor" />
                <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-xl font-bold font-sans">App Store</div>
                </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl border border-white/10 hover:bg-gray-900 hover:scale-105 transition-all shadow-xl w-64 justify-center group">
                <Play className="w-8 h-8 mr-3 group-hover:text-neon-green" fill="currentColor" />
                <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-xl font-bold font-sans">Google Play</div>
                </div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;