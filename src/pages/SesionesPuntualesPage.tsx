import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PUNTUAL_SESSIONS, SITE_IDENTITY } from '../data/portfolioContent';

interface SesionesPuntualesPageProps {
  onNavigate: (path: string) => void;
}

export const SesionesPuntualesPage: React.FC<SesionesPuntualesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-12 border-b border-[#C2B69D]/45">
        <button
          type="button"
          onClick={() => onNavigate('/colaboraciones')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A]/70 hover:text-[#2A2A2A] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Colaboraciones</span>
        </button>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              Sesiones puntuales · Contacto directo sin filtro
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-[#2A2A2A]">
              Elige tu sesión
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#2A2A2A]/80">
              Producciones concretas de fotografía o vídeo para necesidades específicas, con reserva o contacto directo sin cuestionario previo.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 border-b border-[#C2B69D]/45">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {PUNTUAL_SESSIONS.map((session, idx) => (
            <article
              key={session.id}
              className="bg-[#E8E2D5]/55 border border-[#C2B69D]/60 p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif italic text-xl text-[#2A2A2A]/55 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-2 font-serif text-2xl text-[#2A2A2A]">
                  {session.title}
                </h2>
                <div className="w-8 h-px bg-[#D4AF37] my-5" />
                <p className="text-sm leading-relaxed text-[#2A2A2A]/80">
                  {session.focus}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-[#2A2A2A]/65">
                  {session.deliverables}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#C2B69D]/40">
                <div className="flex items-baseline justify-between text-xs mb-5">
                  <span className="uppercase tracking-wider text-[#2A2A2A]/60">Inversión</span>
                  <span className="font-medium text-[#2A2A2A]">{session.investment}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate(`/contacto?via=puntual&sesion=${session.id}`)}
                  className="w-full py-3 px-5 text-xs tracking-[0.12em] uppercase border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#F7F5F0] transition-colors cursor-pointer"
                >
                  Consultar esta sesión
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
              Canales directos para sesiones puntuales
            </h2>
            <p className="mt-2 text-sm text-[#2A2A2A]/75">
              Los enlaces directos de WhatsApp y calendario de reserva se activarán al confirmar los canales definitivos antes del lanzamiento.
            </p>
          </div>
          <div className="md:col-span-6 bg-[#E8E2D5]/45 border border-[#C2B69D]/55 p-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-[#C2B69D]/35 pb-2">
              <span className="text-[#2A2A2A]/60">WhatsApp directo</span>
              <span>{SITE_IDENTITY.contactChannels.whatsapp}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-[#C2B69D]/35 pb-2">
              <span className="text-[#2A2A2A]/60">Calendario de reserva</span>
              <span>{SITE_IDENTITY.contactChannels.calendarUrl}</span>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('/contacto?via=puntual')}
                className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] border-b border-[#2A2A2A] pb-1 cursor-pointer"
              >
                <span>Ir al formulario directo de sesión puntual</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
