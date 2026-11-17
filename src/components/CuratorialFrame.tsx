import React from 'react';
import { Maximize2 } from 'lucide-react';
import { AspectRatioType, MediaSlot } from '../data/portfolioContent';

interface CuratorialFrameProps {
  slot: MediaSlot;
  onClick?: () => void;
  passepartout?: boolean;
  showCaption?: boolean;
  className?: string;
}

const ASPECT_CLASSES: Record<AspectRatioType, string> = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '3:4': 'aspect-[3/4]',
  '1:1': 'aspect-square',
};

export const CuratorialFrame: React.FC<CuratorialFrameProps> = ({
  slot,
  onClick,
  passepartout = true,
  showCaption = true,
  className = '',
}) => {
  const aspectClass = ASPECT_CLASSES[slot.aspectRatio];
  const isInteractive = Boolean(onClick);

  const frameContent = (
    <div
      className={`relative w-full overflow-hidden ${aspectClass} ${
        passepartout
          ? 'bg-[#E8E2D5]/75 p-3 sm:p-5 border border-[#C2B69D]/55'
          : 'bg-[#E8E2D5] border border-[#C2B69D]/45'
      } transition-colors duration-200 ${isInteractive ? 'group-hover:border-[#2A2A2A]/50' : ''}`}
    >
      {slot.src ? (
        <div className="relative w-full h-full overflow-hidden bg-[#E8E2D5]">
          <img
            src={slot.src}
            alt={slot.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
          {isInteractive && (
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 inline-flex items-center justify-center w-9 h-9 bg-[#F7F5F0]/90 text-[#2A2A2A] border border-[#C2B69D]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      ) : (
        <div className="relative w-full h-full bg-[#F7F5F0]/85 border border-[#C2B69D]/40 flex flex-col justify-between p-4 sm:p-6 text-left">
          {/* Minimal architectural corner marks */}
          <span aria-hidden="true" className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-[#C2B69D]" />
          <span aria-hidden="true" className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-[#C2B69D]" />
          <span aria-hidden="true" className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-[#C2B69D]" />
          <span aria-hidden="true" className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-[#C2B69D]" />

          <div className="flex items-center justify-between gap-3 text-[11px] tracking-[0.14em] uppercase text-[#2A2A2A]/65 tabular-nums">
            <span>{slot.framing}</span>
            <span>{slot.aspectRatio}</span>
          </div>

          <div className="my-auto py-4 max-w-xs">
            <p className="font-serif italic text-base sm:text-lg text-[#2A2A2A]/85 leading-snug">
              {slot.title}
            </p>
            <div className="w-8 h-px bg-[#D4AF37]/80 my-3" />
            <p className="text-[11px] tracking-[0.12em] uppercase text-[#2A2A2A]/60">
              {slot.statusNote} · Fotografía real
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#2A2A2A]/55">
            <span>Marco reservado de archivo</span>
            {isInteractive && (
              <span className="inline-flex items-center gap-1.5 text-[#2A2A2A]/75 group-hover:text-[#2A2A2A]">
                <Maximize2 className="w-3 h-3" />
                <span>Ampliar</span>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <figure className={`flex flex-col ${className}`}>
      {isInteractive ? (
        <button
          type="button"
          onClick={onClick}
          aria-label={`Ampliar lámina: ${slot.title}`}
          className="group block w-full text-left cursor-pointer"
        >
          {frameContent}
        </button>
      ) : (
        frameContent
      )}
      {showCaption && (
        <figcaption className="mt-2.5 flex items-baseline justify-between gap-4 text-xs text-[#2A2A2A]/70">
          <span className="font-serif italic">{slot.caption}</span>
          {!slot.src && (
            <span className="text-[11px] tracking-wider uppercase text-[#2A2A2A]/50 shrink-0">
              {slot.statusNote}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
