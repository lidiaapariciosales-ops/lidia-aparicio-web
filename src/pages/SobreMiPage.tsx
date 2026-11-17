import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_IDENTITY, TIMELINE_MILESTONES } from '../data/portfolioContent';
import { CuratorialFrame } from '../components/CuratorialFrame';

interface SobreMiPageProps {
  onNavigate: (path: string) => void;
}

export const SobreMiPage: React.FC<SobreMiPageProps> = ({ onNavigate }) => {
  const presentMilestone = TIMELINE_MILESTONES[TIMELINE_MILESTONES.length - 1];

  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      {/* Author Portrait & Bio */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-16 border-b border-[#C2B69D]/45">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              Sobre mí · Trayectoria como archivo vivo
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-[#2A2A2A]">
              {SITE_IDENTITY.brandName}
            </h1>
            <p className="mt-2 text-xs tracking-[0.14em] uppercase text-[#2A2A2A]/70">
              {SITE_IDENTITY.brandRole} · 20 años de trayectoria confirmada
            </p>

            <div className="w-12 h-px bg-[#D4AF37] my-6" />

            <div className="max-w-[65ch] space-y-4 text-sm sm:text-base leading-[1.75] text-[#2A2A2A]/85">
              <p>
                Veinte años detrás de la cámara construyendo una mirada propia entre la fotografía industrial, médica, publicitaria y documental, hasta consolidar una dirección visual delegada de autor para marcas con esencia.
              </p>
              <p>
                Este archivo biográfico rechaza el formato de currículum interminable: presenta la evolución del oficio mediante capítulos visuales y notas de contexto verificables. La biografía redactada definitiva y el retrato actual figuran como <span className="italic">Pendiente de confirmar</span> hasta incorporar el material aprobado.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <CuratorialFrame slot={presentMilestone.imageSlot} />
          </div>
        </div>
      </section>

      {/* Chronological Editorial Archive */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-b border-[#C2B69D]/45">
        <div className="max-w-xl mb-14">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
            Cronología editorial
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
            Una mirada que evoluciona.
          </h2>
        </div>

        <div className="relative space-y-16">
          {TIMELINE_MILESTONES.map((stage) => (
            <article
              key={stage.index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 border-b border-[#C2B69D]/35 last:border-b-0 last:pb-0"
            >
              <div className="lg:col-span-2">
                <span className="font-serif italic text-3xl text-[#2A2A2A]/50 tabular-nums">
                  {stage.index}
                </span>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#2A2A2A]/60">
                  {stage.disciplineNote}
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
                  {stage.title}
                </h3>
                <div className="w-8 h-px bg-[#D4AF37] my-4" />
                <p className="text-sm leading-relaxed text-[#2A2A2A]/85">
                  {stage.description}
                </p>
                <p className="mt-4 text-xs italic text-[#2A2A2A]/55">
                  {stage.verificationNote}
                </p>
              </div>

              <div className="lg:col-span-5">
                <CuratorialFrame slot={stage.imageSlot} showCaption={false} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-16 bg-[#E8E2D5]/35">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
              ¿Hablamos sobre la dirección visual de tu marca?
            </h2>
            <p className="mt-1 text-sm text-[#2A2A2A]/75">
              Solicita tu Diagnóstico Visual o consulta disponibilidad para una sesión puntual.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/contacto')}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs tracking-[0.12em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors cursor-pointer shrink-0"
          >
            <span>Solicitar Diagnóstico Visual</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
