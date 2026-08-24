import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['features', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none">
      <nav 
        id="main-navigation"
        className={`pointer-events-auto w-full max-w-3xl transition-all duration-300 rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between glass-liquid ${
          scrolled ? 'border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)]' : ''
        }`}
      >
        {/* Logo Mark */}
        <a 
          href="#" 
          id="nav-logo"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-7 h-7 rounded-lg glass-liquid-pill flex items-center justify-center border border-white/10">
            <div className="w-2.5 h-2.5 rotate-45 bg-white/90 transition-transform group-hover:rotate-90 duration-300" />
          </div>
          <span className="font-display font-semibold text-sm sm:text-base tracking-tight text-white">
            RoShade
          </span>
          <span className="text-[10px] font-mono tracking-wide uppercase px-2 py-0.5 rounded-full glass-liquid-pill text-gray-400">
            v4.2
          </span>
        </a>

        {/* Center Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 glass-liquid-pill px-2 py-1 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`text-xs font-medium px-3.5 py-1 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/15 shadow-sm border border-white/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            id="nav-download-button"
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold btn-liquid-primary cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>

          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-gray-400 hover:text-white glass-liquid-pill"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-dropdown-menu"
          className="pointer-events-auto absolute top-16 inset-x-4 glass-liquid p-4 rounded-2xl border border-white/15 shadow-2xl flex flex-col gap-2 md:hidden z-50 animate-fade-in"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium text-gray-300 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold btn-liquid-primary flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download RoShade</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
