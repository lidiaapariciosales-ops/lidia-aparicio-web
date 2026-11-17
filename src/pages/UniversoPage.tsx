import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS, PROJECTS } from '../data/portfolioContent';
import { CuratorialFrame } from '../components/CuratorialFrame';

interface UniversoPageProps {
  onNavigate: (path: string) => void;
}

export const UniversoPage: React.FC<UniversoPageProps> = ({ onNavigate }) => {
  const [selectedCollection, setSelectedCollection] = useState<string>('all');

  const visibleProjects =
    selectedCollection === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.collectionId === selectedCollection);

  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      {/* Exhibition Header */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-10 border-b border-[#C2B69D]/45">
        <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
          Exposición curada · Capítulos editables
        </p>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl text-[#2A2A2A]">
              Universo
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#2A2A2A]/75">
              Cada colección se concibe como un reportaje monográfico, no como una cuadrícula comercial. Categorías curatoriales abiertas a la incorporación de tus fotografías y vídeos reales.
            </p>
          </div>
        </div>

        {/* Clean Interactive Filter Bar (no static pills) */}
        <div
          role="tablist"
          aria-label="Filtrar exposición por colección"
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#C2B69D]/35 pt-6"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCollection === 'all'}
            onClick={() => setSelectedCollection('all')}
            className={`py-1.5 text-xs tracking-[0.12em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 border-b ${
              selectedCollection === 'all'
                ? 'border-[#D4AF37] text-[#2A2A2A] font-medium'
                : 'border-transparent text-[#2A2A2A]/60 hover:text-[#2A2A2A]'
            }`}
          >
            Todas las colecciones
          </button>

          {COLLECTIONS.map((col) => {
            const active = selectedCollection === col.id;
            return (
              <button
                key={col.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCollection(col.id)}
                className={`py-1.5 text-xs tracking-[0.12em] uppercase transition-colors cursor-pointer whitespace-nowrap shrink-0 border-b tabular-nums ${
                  active
                    ? 'border-[#D4AF37] text-[#2A2A2A] font-medium'
                    : 'border-transparent text-[#2A2A2A]/60 hover:text-[#2A2A2A]'
                }`}
              >
                {col.index} · {col.title}
              </button>
            );
          })}
        </div>
      </section>

      {/* Editorial Reportages */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-20">
        {visibleProjects.map((project, index) => (
          <article
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#C2B69D]/40 last:border-b-0 last:pb-0"
          >
            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <CuratorialFrame
                slot={project.coverSlot}
                onClick={() => onNavigate(`/universo/${project.slug}`)}
              />
            </div>

            <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className="text-[11px] tracking-[0.14em] uppercase text-[#2A2A2A]/60 tabular-nums">
                {project.chapterCode} · {project.collectionTitle}
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
                {project.title}
              </h2>

              <p className="mt-2 font-serif italic text-base text-[#2A2A2A]/75">
                {project.subtitle}
              </p>

              <div className="w-10 h-px bg-[#D4AF37] my-6" />

              <p className="text-sm leading-relaxed text-[#2A2A2A]/80 max-w-md">
                {project.contextText}
              </p>

              <div className="mt-6 text-xs text-[#2A2A2A]/60 flex flex-wrap gap-x-4 gap-y-1 tabular-nums">
                <span>{project.gallerySlots.length + 1} láminas en secuencia</span>
                <span aria-hidden="true">·</span>
                <span>{project.videoSlot ? 'Incluye espacio para vídeo' : 'Serie fotográfica'}</span>
                {project.isConceptualSample && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Ejemplo conceptual de maqueta</span>
                  </>
                )}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onNavigate(`/universo/${project.slug}`)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-xs tracking-[0.12em] uppercase border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#F7F5F0] transition-colors duration-200 cursor-pointer"
                >
                  <span>Abrir reportaje</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
