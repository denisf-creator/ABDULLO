import React from 'react';
import roshadeIcon from '../assets/images/roshade_icon.jpg';

interface FooterProps {
  onOpenDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  return (
    <footer id="footer" className="border-t border-white/5 bg-[#0a0a0d]/80 backdrop-blur-md pt-12 pb-10 px-4 sm:px-6 text-xs text-gray-400">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Top Tier */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg overflow-hidden glass-liquid-pill flex items-center justify-center border border-white/20">
              <img 
                src={roshadeIcon} 
                alt="RoShade Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-white tracking-tight">RoShade</span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            <button
              onClick={onOpenDownload}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Download
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} RoShade. Not affiliated with Roblox Corporation.
          </div>
          <div>
            Display overlay post-processing engine
          </div>
        </div>

      </div>
    </footer>
  );
};
