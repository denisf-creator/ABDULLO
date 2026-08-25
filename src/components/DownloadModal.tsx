import React, { useState, useEffect } from 'react';
import { X, Download, Check, Laptop, FileCheck, RefreshCw } from 'lucide-react';
import { DOWNLOAD_DETAILS } from '../data';
import { downloadConfig } from '../downloadConfig';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadCompleted, setDownloadCompleted] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const triggerFileDownload = () => {
    const a = document.createElement('a');
    a.href = downloadConfig.filePath;
    a.download = downloadConfig.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleStartDownload = () => {
    setDownloadCompleted(false);
    setDownloadProgress(10);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadCompleted(true);
          triggerFileDownload();
          return 100;
        }
        return prev + 30;
      });
    }, 180);
  };

  const handleDownloadAgain = () => {
    triggerFileDownload();
  };

  if (!isOpen) return null;

  return (
    <div 
      id="download-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        id="download-modal-content"
        className="w-full max-w-lg glass-liquid p-6 sm:p-7 rounded-2xl border border-white/10 shadow-2xl relative transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="text-xs text-gray-400 font-medium mb-1">{DOWNLOAD_DETAILS.version}</div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Download RoShade
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white glass-liquid-pill cursor-pointer transition-colors duration-200"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          <div className="glass-liquid-pill p-3 rounded-xl">
            <div className="text-[11px] text-gray-400 mb-0.5 flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5 text-gray-300" /> Platform
            </div>
            <div className="text-xs font-semibold text-white">{downloadConfig.osRequirement}</div>
          </div>
          <div className="glass-liquid-pill p-3 rounded-xl">
            <div className="text-[11px] text-gray-400 mb-0.5 flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-gray-300" /> Size
            </div>
            <div className="text-xs font-semibold text-white">{downloadConfig.fileSize}</div>
          </div>
        </div>

        {/* Download Button / Progress / Download Again */}
        <div className="mb-5 space-y-3">
          {!downloadCompleted && downloadProgress === 0 ? (
            <button
              onClick={handleStartDownload}
              className="w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm btn-liquid-primary flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.99]"
            >
              <Download className="w-4 h-4" />
              <span>{downloadConfig.buttonText}</span>
            </button>
          ) : !downloadCompleted ? (
            <div className="p-4 rounded-xl glass-liquid-pill space-y-2 text-center">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Downloading installer...</span>
                <span className="font-mono text-white font-semibold">{downloadProgress}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-200 ease-out rounded-full shadow-[0_0_10px_#fff]"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl glass-liquid-pill text-center text-xs text-gray-200 flex items-center justify-center gap-2 border border-emerald-500/30 bg-emerald-950/20">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-white">Download Complete. Run installer to proceed.</span>
              </div>

              {/* Download Again Button */}
              <button
                onClick={handleDownloadAgain}
                className="w-full py-2.5 rounded-xl font-medium text-xs sm:text-sm btn-liquid-secondary flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] transition-all duration-200"
              >
                <RefreshCw className="w-3.5 h-3.5 text-gray-300" />
                <span>Download Again</span>
              </button>
            </div>
          )}
        </div>

        {/* Quick Instructions */}
        <div className="p-3.5 rounded-xl glass-liquid-pill space-y-2 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white font-mono">1</span>
            <span>Run the installer.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white font-mono">2</span>
            <span>Launch Roblox.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white font-mono">3</span>
            <span>Press <kbd className="px-1 py-0.5 rounded bg-white/10 text-gray-200 text-[10px]">Shift + F8</kbd> to toggle.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
