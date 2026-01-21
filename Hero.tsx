import React from 'react';
import { Download, ChevronRight, Hexagon, Play, Settings, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-900 pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-space-900/50 to-space-900"></div>
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-10 text-neon-blue opacity-20 animate-float hidden lg:block">
        <Hexagon size={120} strokeWidth={1} />
      </div>
      <div className="absolute bottom-1/3 right-10 text-neon-pink opacity-20 animate-float-delayed hidden lg:block">
        <Hexagon size={180} strokeWidth={1} />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-neon-pink/10 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10 mb-12 md:mb-0">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-sm">
            <span className="text-neon-blue text-sm font-bold tracking-widest uppercase">Yeni Nesil Matematik Oyunu</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight brand-font">
            SAYILARLA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink">
              DANSA HAZIR MISIN?
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Sigma Fall ile matematik becerilerini test et. Düşen sayıları yakala, işlemi çöz ve doğru cevabı seç. Uzay boşluğunda zihnini serbest bırak.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-neon-blue to-blue-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105 transition-all group">
              <Download className="mr-2 group-hover:animate-bounce" />
              Hemen İndir
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-white hover:bg-white/10 hover:border-white/30 transition-all">
              Nasıl Oynanır <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center md:justify-start space-x-8 text-gray-400 text-sm font-medium">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-neon-green mr-2 animate-pulse"></span>
              Ücretsiz Oyna
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-neon-pink mr-2 animate-pulse"></span>
              Çevrimdışı Mod
            </div>
          </div>
        </div>

        {/* Hero Image / Phone Mockup */}
        <div className="w-full md:w-1/2 flex justify-center z-10 relative">
          <div className="relative w-[280px] h-[580px] bg-space-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            
            {/* CSS Generated Game UI (Main Menu) */}
             <div className="relative w-full h-full bg-space-900 flex flex-col items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-space-900/20 via-space-800/40 to-space-900"></div>

                {/* Main Content */}
                <div className="z-10 flex flex-col items-center w-full px-6">
                  
                  {/* Logo Area */}
                  <div className="mb-12 relative flex flex-col items-center">
                    <div className="absolute inset-0 bg-neon-blue/10 blur-2xl rounded-full scale-150"></div>
                    <div className="relative z-10 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm mb-6 animate-float">
                        <Hexagon size={48} className="text-neon-blue" strokeWidth={1.5} />
                    </div>
                    
                    <h2 className="text-4xl font-extrabold text-white tracking-widest brand-font leading-none mb-1 text-center drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                      SIGMA
                    </h2>
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500 tracking-widest brand-font leading-none text-center">
                      FALL
                    </h2>
                  </div>
                  
                  {/* Play Button */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-neon-blue to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.4)] cursor-pointer hover:scale-110 transition-transform group">
                    <Play className="w-10 h-10 text-white fill-current ml-1 group-hover:animate-pulse" />
                  </div>
                  <p className="mt-4 text-xs font-bold text-neon-blue tracking-[0.3em] animate-pulse">TAP TO START</p>
                  
                  {/* Menu Buttons */}
                  <div className="mt-16 flex gap-6 w-full justify-center">
                    <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <Trophy size={20} className="text-gray-400 group-hover:text-neon-yellow transition-colors" />
                        </div>
                    </div>
                     <div className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <Settings size={20} className="text-gray-400 group-hover:text-neon-pink transition-colors" />
                        </div>
                    </div>
                  </div>

                </div>
            </div>
            
            {/* Glossy Reflection */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none rounded-[2.5rem]"></div>
          </div>
          
          {/* Floating badge behind phone */}
          <div className="absolute top-1/2 -right-4 md:-right-10 bg-space-800/90 backdrop-blur-md p-4 rounded-2xl border border-neon-pink/30 shadow-lg animate-float-delayed">
             <div className="flex items-center gap-3">
                 <div className="bg-neon-pink/20 p-2 rounded-full">
                     <Hexagon className="text-neon-pink w-6 h-6" />
                 </div>
                 <div>
                     <p className="text-xs text-gray-400">Günlük Görev</p>
                     <p className="text-sm font-bold text-white">Tamamlandı!</p>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;