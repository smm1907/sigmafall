import React from 'react';
import { Sigma, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-blue to-purple-600 flex items-center justify-center text-white shadow-lg">
                  <Sigma size={18} />
                </div>
                <span className="text-xl font-bold text-white brand-font">SIGMA FALL</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Matematik ve reflekslerin buluştuğu nokta. Uzay boşluğunda zihinsel sınırlarını zorla.
            </p>
          </div>

          <div className="md:text-right">
            <h4 className="text-white font-bold mb-4">Destek</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://smm1907.github.io/sigmafall/privacy.html" className="hover:text-neon-blue transition-colors">Gizlilik Politikası</a></li>
              <li><a href="https://smm1907.github.io/sigmafall/terms.html" className="hover:text-neon-blue transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sigma Fall. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 text-gray-500 text-sm">
             <Mail size={14} />
             <span>samimbaydar@hotmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;