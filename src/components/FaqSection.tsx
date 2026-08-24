import React, { useState } from 'react';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('safety');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-liquid-pill text-xs text-gray-400 mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FAQ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm">
          Everything regarding safety, performance, and controls.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-2.5">
        {FAQS.map((faq) => {
          const isOpen = openFaqId === faq.id;

          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className="rounded-xl overflow-hidden glass-liquid-card transition-colors"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-xs sm:text-sm font-medium text-gray-200">
                  {faq.question}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Safety Compliance Note Box */}
      <div className="mt-8 p-4 rounded-xl glass-liquid flex items-start gap-3 text-xs text-gray-400">
        <ShieldCheck className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-gray-200">Anti-Cheat Safety: </span>
          RoShade operates strictly as a post-processing display overlay, adhering to Roblox Terms of Service.
        </div>
      </div>

    </section>
  );
};
