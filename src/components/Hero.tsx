import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Download, 
  ChevronRight, 
  Shield, 
  Zap, 
  Sliders, 
  MoveHorizontal, 
  Sparkles, 
  Eye 
} from 'lucide-react';
import { sliderConfig } from '../sliderConfig';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'with' | 'without'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || e.touches.length === 0) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-16 md:pt-36 md:pb-24 flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Status Pill */}
        <div 
          id="hero-version-badge"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-liquid-pill text-xs text-gray-400 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          <span className="text-gray-200 font-medium">RoShade v4.2 Pro</span>
          <span className="text-gray-600">•</span>
          <span>Graphics Comparison Engine</span>
        </div>

        {/* Clean Minimal Headline */}
        <h1 
          id="hero-main-title"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15] mb-5"
        >
          Next-Gen Roblox Visuals. Redefined.
        </h1>

        {/* Subtitle */}
        <p 
          id="hero-subtitle"
          className="text-sm sm:text-base text-gray-400 max-w-xl font-normal leading-relaxed mb-8"
        >
          Compare standard Roblox graphics side-by-side with real-time ray-traced reflections, ambient occlusion, and cinematic volumetric bloom.
        </p>

        {/* Clean Liquid Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-10">
          <button
            id="hero-cta-download"
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm btn-liquid-primary flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download RoShade</span>
          </button>

          <a
            id="hero-cta-features"
            href="#features"
            className="w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-xs sm:text-sm btn-liquid-secondary flex items-center justify-center gap-1.5 group cursor-pointer"
          >
            <span>Explore Features</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Comparison Control Tabs */}
        <div className="flex items-center gap-1.5 mb-4 p-1 rounded-full glass-liquid-pill text-xs">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'slider'
                ? 'bg-white/15 text-white font-medium shadow-sm border border-white/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <MoveHorizontal className="w-3.5 h-3.5" />
            <span>Interactive Slider</span>
          </button>
          <button
            onClick={() => setViewMode('without')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'without'
                ? 'bg-white/15 text-white font-medium shadow-sm border border-white/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Without Shaders</span>
          </button>
          <button
            onClick={() => setViewMode('with')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'with'
                ? 'bg-white/15 text-white font-medium shadow-sm border border-white/10'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>With Shaders</span>
          </button>
        </div>

        {/* Comparison Frame (Liquid Glass) */}
        <div 
          id="hero-comparison-artwork"
          className="w-full relative rounded-2xl p-1.5 glass-liquid overflow-hidden group shadow-2xl"
        >
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-[#101014] select-none cursor-ew-resize"
            onMouseDown={(e) => {
              if (viewMode === 'slider') {
                setIsDragging(true);
                handleMove(e.clientX);
              }
            }}
            onTouchStart={(e) => {
              if (viewMode === 'slider' && e.touches.length > 0) {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
              }
            }}
          >
            {/* View Mode: Only Without Shaders */}
            {viewMode === 'without' && (
              <img
                src={sliderConfig.imageWithoutShaders}
                alt={sliderConfig.labelWithout}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            )}

            {/* View Mode: Only With Shaders */}
            {viewMode === 'with' && (
              <img
                src={sliderConfig.imageWithShaders}
                alt={sliderConfig.labelWith}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            )}

            {/* View Mode: Interactive Comparison Slider */}
            {viewMode === 'slider' && (
              <>
                {/* Background Image: Enhanced WITH SHADERS */}
                <img
                  src={sliderConfig.imageWithShaders}
                  alt={sliderConfig.labelWith}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Foreground Clipped Image: WITHOUT SHADERS */}
                <div 
                  className="absolute inset-0 h-full overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={sliderConfig.imageWithoutShaders}
                    alt={sliderConfig.labelWithout}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%',
                    }}
                  />
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Circular Grab Handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full glass-liquid flex items-center justify-center border border-white/40 shadow-xl text-white">
                    <MoveHorizontal className="w-4 h-4 text-white" />
                  </div>
                </div>
              </>
            )}

            {/* Top Left Label */}
            <div className="absolute top-3 left-3 z-30 pointer-events-none">
              <span className="glass-liquid-pill px-3 py-1 rounded-md text-[11px] font-medium text-gray-300 border border-white/10 shadow-lg">
                {viewMode === 'with' ? sliderConfig.labelWith : sliderConfig.labelWithout}
              </span>
            </div>

            {/* Top Right Label (for Slider mode) */}
            {viewMode === 'slider' && (
              <div className="absolute top-3 right-3 z-30 pointer-events-none">
                <span className="glass-liquid-pill px-3 py-1 rounded-md text-[11px] font-medium text-white border border-white/10 shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{sliderConfig.labelWith}</span>
                </span>
              </div>
            )}

            {/* Bottom info strip */}
            <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-[11px] text-gray-400 pointer-events-none">
              <span className="glass-liquid-pill px-3 py-1 rounded-md">Drag slider to compare in real-time</span>
              <span className="glass-liquid-pill px-3 py-1 rounded-md hidden sm:inline">Shift + F8 In-Game Toggle</span>
            </div>
          </div>
        </div>

        {/* 3 Value Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-6">
          <div className="glass-liquid-card p-4 rounded-xl flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg glass-liquid-pill flex items-center justify-center text-gray-300 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Zero Input Lag</div>
              <div className="text-[11px] text-gray-400">&lt; 1.2ms async compute pass</div>
            </div>
          </div>

          <div className="glass-liquid-card p-4 rounded-xl flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg glass-liquid-pill flex items-center justify-center text-gray-300 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Safe &amp; Undetected</div>
              <div className="text-[11px] text-gray-400">100% Policy-compliant overlay</div>
            </div>
          </div>

          <div className="glass-liquid-card p-4 rounded-xl flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg glass-liquid-pill flex items-center justify-center text-gray-300 shrink-0">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Instant Hotkey Swap</div>
              <div className="text-[11px] text-gray-400">Shift + F8 in-game toggle</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
