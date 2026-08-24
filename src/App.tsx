import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-[#E2E8F0] selection:bg-cyan-500/20 selection:text-cyan-200 overflow-x-hidden font-sans">
      
      {/* Background Subtle Prismatic Ambient Lighting Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Top-center soft cyan ambient refraction */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/[0.04] blur-[150px] rounded-full" />
        
        {/* Center-left violet spectral bloom */}
        <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] bg-violet-600/[0.03] blur-[160px] rounded-full" />
        
        {/* Center-right electric blue bloom */}
        <div className="absolute top-[60%] -right-40 w-[600px] h-[600px] bg-blue-600/[0.03] blur-[160px] rounded-full" />
        
        {/* Bottom subtle prism caustics */}
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[400px] bg-cyan-500/[0.03] blur-[140px] rounded-full" />
      </div>

      {/* Floating Glass Navigation Header */}
      <Navbar onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onOpenDownload={() => setDownloadModalOpen(true)} />
        <FeaturesGrid />
        <FaqSection />
      </main>

      {/* Luxury Minimalist Footer */}
      <Footer onOpenDownload={() => setDownloadModalOpen(true)} />

      {/* Download Dialog Modal */}
      <DownloadModal 
        isOpen={downloadModalOpen} 
        onClose={() => setDownloadModalOpen(false)} 
      />

    </div>
  );
}
