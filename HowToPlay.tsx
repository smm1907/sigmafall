import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const HowToPlay: React.FC = () => {
  return (
    <section id="gameplay" className="py-24 bg-space-900 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 brand-font">
            NASIL <span className="text-neon-pink">OYNANIR?</span>
          </h2>
          <p className="text-gray-400">Üç basit adımda zirveye ulaş.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-orange-500/30 transform rotate-3">
                    1
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Görevi İncele</h3>
                <p className="text-gray-400 px-6">
                    Sol üst köşedeki göreve bak. <br/>
                    <span className="text-orange-400 font-mono text-sm bg-orange-900/30 px-2 py-1 rounded mt-2 inline-block">Örn: 50 Çıkar, 5 Çarp</span>
                </p>
            </div>

            {/* Arrow for Desktop */}
            <div className="hidden md:flex justify-center text-white/20">
                 <ArrowDown className="w-8 h-8 -rotate-90" />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-blue-700 flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg shadow-blue-500/30 transform -rotate-3">
                    2
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">İşlemi Yap</h3>
                <p className="text-gray-400 px-6">
                   Yukarıdan düşen sayı ile görevdeki işlemi kafandan hesapla.
                   <br/>
                   <span className="text-neon-blue font-mono text-sm bg-blue-900/30 px-2 py-1 rounded mt-2 inline-block">Sayı: 100 -> (100-50)*5 = 250</span>
                </p>
            </div>

             {/* Arrow for Desktop */}
             <div className="hidden md:flex justify-center text-white/20">
                 <ArrowDown className="w-8 h-8 -rotate-90" />
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-green to-emerald-700 flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30 transform rotate-3">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Cevabı Seç</h3>
                <p className="text-gray-400 px-6">
                    Aşağıdaki şıklardan doğru olanı süre bitmeden işaretle!
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HowToPlay;