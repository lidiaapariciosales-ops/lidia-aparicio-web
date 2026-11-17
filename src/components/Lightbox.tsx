import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { MediaSlot } from '../data/portfolioContent';

interface LightboxProps {
  slots: MediaSlot[];
  activeIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  slots,
  activeIndex,
  onClose,
  onSelect,
}) => {
  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < slots.length;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelect((activeIndex + 1) % slots.length);
      if (e.key === 'ArrowLeft') onSelect((activeIndex - 1 + slots.length) % slots.length);
    };

    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, activeIndex, slots.length, onClose, onSelect]);

  if (!isOpen || activeIndex === null) return null;

  const slot = slots[activeIndex];
  const prevIdx = (activeIndex - 1 + slots.length) % slots.length;
  const nextIdx = (activeIndex + 1) % slots.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visor de lámina: ${slot.title}`}
      className="fixed inset-0 z-50 bg-[#2A2A2A]/95 text-[#F7F5F0] flex flex-col justify-between p-4 sm:p-8"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs tracking-[0.14em] uppercase text-[#C2B69D] tabular-nums">
          {String(activeIndex + 1).padStart(2, '0')} / {String(slots.length).padStart(2, '0')} · {slot.framing}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar visor"
          className="inline-flex items-center justify-center w-11 h-11 text-[#F7F5F0] hover:text-[#D4AF37] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Viewer */}
      <div className="my-auto flex items-center justify-between gap-4 max-w-6xl w-full mx-auto">
        <button
          type="button"
          onClick={() => onSelect(prevIdx)}
          aria-label="Lámina anterior"
          className="hidden sm:inline-flex items-center justify-center w-11 h-11 border border-[#F7F5F0]/20 text-[#F7F5F0] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors shrink-0 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center max-h-[72vh]">
          {slot.src ? (
            <div className="bg-[#E8E2D5] p-3 sm:p-4 max-h-[68vh] flex items-center justify-center">
              <img
                src={slot.src}
                alt={slot.alt}
                referrerPolicy="no-referrer"
                className="max-h-[62vh] w-auto object-contain"
              />
            </div>
          ) : (
            <div className="w-full max-w-2xl aspect-[4/3] bg-[#F7F5F0] text-[#2A2A2A] p-8 sm:p-12 border border-[#C2B69D] flex flex-col justify-between">
              <div className="flex justify-between text-xs tracking-[0.14em] uppercase text-[#2A2A2A]/60 tabular-nums">
                <span>{slot.framing}</span>
                <span>{slot.aspectRatio}</span>
              </div>
              <div className="my-auto">
                <p className="font-serif italic text-2xl sm:text-3xl text-[#2A2A2A]">
                  {slot.title}
                </p>
                <div className="w-10 h-px bg-[#D4AF37] my-4" />
                <p className="text-xs tracking-[0.14em] uppercase text-[#2A2A2A]/65">
                  {slot.statusNote} · Espacio reservado para fotografía real
                </p>
              </div>
              <p className="text-xs text-[#2A2A2A]/55">{slot.alt}</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => onSelect(nextIdx)}
          aria-label="Lámina siguiente"
          className="hidden sm:inline-flex items-center justify-center w-11 h-11 border border-[#F7F5F0]/20 text-[#F7F5F0] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors shrink-0 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Caption & Mobile Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F7F5F0]/15 pt-4">
        <p className="font-serif italic text-sm sm:text-base text-[#E8E2D5] text-center sm:text-left">
          {slot.caption}
        </p>
        <div className="flex sm:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => onSelect(prevIdx)}
            aria-label="Lámina anterior"
            className="inline-flex items-center justify-center w-11 h-11 border border-[#F7F5F0]/25 text-[#F7F5F0]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => onSelect(nextIdx)}
            aria-label="Lámina siguiente"
            className="inline-flex items-center justify-center w-11 h-11 border border-[#F7F5F0]/25 text-[#F7F5F0]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
