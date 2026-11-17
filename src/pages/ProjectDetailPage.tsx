import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { PROJECTS, ProjectChapter } from '../data/portfolioContent';
import { CuratorialFrame } from '../components/CuratorialFrame';
import { Lightbox } from '../components/Lightbox';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project: ProjectChapter = projectIndex >= 0 ? PROJECTS[projectIndex] : PROJECTS[0];
  const nextProject = PROJECTS[(projectIndex >= 0 ? projectIndex + 1 : 1) % PROJECTS.length];

  const allSlots = [project.coverSlot, ...project.gallerySlots];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      {/* Top breadcrumb & Chapter Title */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-12 border-b border-[#C2B69D]/45">
        <button
          type="button"
          onClick={() => onNavigate('/universo')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A]/70 hover:text-[#2A2A2A] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Universo</span>
        </button>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60 tabular-nums">
              {project.chapterCode} · {project.collectionTitle}
              {project.isConceptualSample ? ' · Ejemplo conceptual' : ''}
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-[#2A2A2A]">
              {project.title}
            </h1>
            <p className="mt-3 font-serif italic text-lg text-[#2A2A2A]/75">
              {project.subtitle}
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#2A2A2A]/80">
              {project.contextText}
            </p>
          </div>
        </div>

        {/* Cover Plate */}
        <div className="mt-10">
          <CuratorialFrame
            slot={project.coverSlot}
            onClick={() => setLightboxIndex(0)}
          />
        </div>
      </section>

      {/* Monographic Editorial Sequence (6-12 frames layout) */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 border-b border-[#C2B69D]/45">
        <div className="flex items-baseline justify-between gap-4 mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
            Secuencia visual
          </h2>
          <span className="text-xs tracking-[0.12em] uppercase text-[#2A2A2A]/60 tabular-nums">
            {allSlots.length} láminas · Pulsa para ampliar
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          {project.gallerySlots.map((slot, idx) => {
            const isWide = slot.aspectRatio === '16:9';
            const colSpan = isWide ? 'md:col-span-12' : idx % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5';
            return (
              <div key={slot.id} className={colSpan}>
                <CuratorialFrame
                  slot={slot}
                  onClick={() => setLightboxIndex(idx + 1)}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Optional Silent Video / Making-of Section */}
      {project.videoSlot && (
        <section className="bg-[#E8E2D5]/40 border-b border-[#C2B69D]/45 py-14 sm:py-20">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
                  Cine y making-of
                </p>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
                  {project.videoSlot.title}
                </h2>
                <div className="w-10 h-px bg-[#D4AF37] my-5" />
                <p className="text-sm leading-relaxed text-[#2A2A2A]/75">
                  {project.videoSlot.note}
                </p>
                <p className="mt-4 text-xs text-[#2A2A2A]/60 tabular-nums">
                  Duración: {project.videoSlot.duration}
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="aspect-video bg-[#E8E2D5] p-3 sm:p-5 border border-[#C2B69D]/60">
                  {project.videoSlot.src ? (
                    <video
                      src={project.videoSlot.src}
                      poster={project.videoSlot.posterSrc}
                      controls
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#2A2A2A] text-[#F7F5F0] flex flex-col items-center justify-center p-6 text-center">
                      <span className="inline-flex items-center justify-center w-12 h-12 border border-[#F7F5F0]/35 mb-4">
                        <Play className="w-4 h-4 text-[#D4AF37]" />
                      </span>
                      <p className="font-serif italic text-xl">
                        Espacio reservado para vídeo real
                      </p>
                      <p className="mt-2 text-xs tracking-[0.12em] uppercase text-[#C2B69D]">
                        Pendiente de confirmar · Reproducción silenciosa con póster
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Verified Credits & Smooth Next Project Navigation */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60 mb-4">
              Ficha técnica y créditos verificados
            </p>
            <dl className="border-t border-[#C2B69D]/45 text-sm">
              <div className="py-3 border-b border-[#C2B69D]/35 flex justify-between gap-4">
                <dt className="text-[#2A2A2A]/60">Rol</dt>
                <dd className="text-right">{project.credits.rol}</dd>
              </div>
              <div className="py-3 border-b border-[#C2B69D]/35 flex justify-between gap-4">
                <dt className="text-[#2A2A2A]/60">Cliente / Firma</dt>
                <dd className="text-right">{project.credits.cliente}</dd>
              </div>
              <div className="py-3 border-b border-[#C2B69D]/35 flex justify-between gap-4">
                <dt className="text-[#2A2A2A]/60">Año</dt>
                <dd className="text-right tabular-nums">{project.credits.anio}</dd>
              </div>
              <div className="py-3 border-b border-[#C2B69D]/35 flex justify-between gap-4">
                <dt className="text-[#2A2A2A]/60">Localización</dt>
                <dd className="text-right">{project.credits.localizacion}</dd>
              </div>
              <div className="py-3 border-b border-[#C2B69D]/35 flex justify-between gap-4">
                <dt className="text-[#2A2A2A]/60">Autorización</dt>
                <dd className="text-right">{project.credits.permisos}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:pl-10 flex flex-col justify-between bg-[#E8E2D5]/55 border border-[#C2B69D]/55 p-8">
            <div>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
                Siguiente capítulo en Universo
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
                {nextProject.title}
              </h3>
              <p className="mt-2 text-sm text-[#2A2A2A]/75">
                {nextProject.subtitle}
              </p>
            </div>
            <div className="mt-8">
              <button
                type="button"
                onClick={() => onNavigate(`/universo/${nextProject.slug}`)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-xs tracking-[0.12em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors cursor-pointer"
              >
                <span>Continuar al siguiente proyecto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        slots={allSlots}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelect={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
};
