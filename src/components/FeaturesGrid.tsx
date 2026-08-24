import React from 'react';
import { Sparkles, Cpu, Gauge, Sliders, CheckCircle2 } from 'lucide-react';
import { FEATURES } from '../data';
import { FeatureItem } from '../types';

export const FeaturesGrid: React.FC = () => {
  const getIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-gray-200";
    switch (name) {
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'Gauge':
        return <Gauge className={iconClass} />;
      case 'Sliders':
        return <Sliders className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-liquid-pill text-xs text-gray-400 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gray-400" />
          <span>Core Graphics Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
          Engineered for Maximum Fidelity
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          Low-level GPU compute shaders delivering real-time ray-traced reflections and crisp lighting inside Roblox.
        </p>
      </div>

      {/* 4 Clean Minimal Liquid Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FEATURES.map((feature: FeatureItem, index: number) => (
          <div
            key={feature.id}
            id={`feature-card-${feature.id}`}
            className="rounded-2xl p-6 glass-liquid-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl glass-liquid-pill flex items-center justify-center">
                  {getIcon(feature.iconName)}
                </div>
                <span className="text-[11px] font-mono text-gray-500">
                  0{index + 1}
                </span>
              </div>

              <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">
                {feature.subtitle}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                {feature.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5">
              {feature.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
