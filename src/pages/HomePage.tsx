import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import {
  COLLECTIONS,
  HERO_MEDIA_SLOTS,
  METHOD_PHASES,
  PROJECTS,
  RETAINER_PLANS,
  SITE_IDENTITY,
} from '../data/portfolioContent';
import { CuratorialFrame } from '../components/CuratorialFrame';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      {/* 1. HERO EDITORIAL CINEMATOGRÁFICO */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-[#C2B69D]/45">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Identity & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs tracking-[0.16em] uppercase text-[#2A2A2A]/70">
                {SITE_IDENTITY.brandName} — {SITE_IDENTITY.brandRole}
              </p>
              <p className="mt-2 text-xs text-[#2A2A2A]/55">
                Concepto editorial: <span className="italic">{SITE_IDENTITY.conceptualName}</span>
              </p>
            </div>

            <div className="my-10 lg:my-auto py-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-[#2A2A2A]">
                {SITE_IDENTITY.heroHeadline}
              </h1>

              <p className="mt-5 text-xs sm:text-sm tracking-[0.14em] uppercase text-[#2A2A2A]/75">
                {SITE_IDENTITY.heroSubtitle}
              </p>

              <div className="w-12 h-px bg-[#D4AF37] my-6" />

              <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#2A2A2A]/80">
                {SITE_IDENTITY.heroLead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate('/contacto')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs tracking-[0.12em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{SITE_IDENTITY.heroCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/universo')}
                  className="inline-flex items-center gap-2 py-2.5 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] border-b border-[#C2B69D] hover:border-[#2A2A2A] transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Descubrir el Universo</span>
                </button>
              </div>
            </div>

            {/* Quiet video readiness note */}
            <div className="pt-6 border-t border-[#C2B69D]/35 flex items-center justify-between gap-4 text-xs text-[#2A2A2A]/60">
              <span className="inline-flex items-center gap-2">
                <Play className="w-3 h-3 text-[#2A2A2A]/55" />
                <span>Espacio preparado para vídeo silencioso con póster fotográfico</span>
              </span>
              <span className="uppercase tracking-wider text-[11px] shrink-0">Pendiente de confirmar</span>
            </div>
          </div>

          {/* Right Column: Curatorial Trio / Primary Passepartout */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
            <div className="sm:col-span-7 flex flex-col">
              <CuratorialFrame
                slot={HERO_MEDIA_SLOTS.primary}
                className="h-full"
                onClick={() => onNavigate('/universo')}
              />
            </div>
            <div className="sm:col-span-5 flex flex-col justify-between gap-4">
              <CuratorialFrame
                slot={HERO_MEDIA_SLOTS.secondaryTop}
                showCaption={false}
                onClick={() => onNavigate('/universo')}
              />
              <CuratorialFrame
                slot={HERO_MEDIA_SLOTS.secondaryBottom}
                showCaption={false}
                onClick={() => onNavigate('/universo')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANIFIESTO EDITORIAL */}
      <section className="bg-[#E8E2D5]/45 border-b border-[#C2B69D]/45 py-16 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
                01 · Manifiesto
              </p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl leading-snug text-[#2A2A2A]">
                {SITE_IDENTITY.manifestoTitle}
              </h2>
              <div className="w-10 h-px bg-[#D4AF37] mt-5" />
            </div>

            <div className="lg:col-span-8 max-w-[68ch] space-y-5 text-sm sm:text-base leading-[1.75] text-[#2A2A2A]/85">
              {SITE_IDENTITY.manifestoParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/sobre-mi')}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] border-b border-[#C2B69D] hover:border-[#2A2A2A] pb-1 transition-colors cursor-pointer"
                >
                  <span>Explorar trayectoria como archivo vivo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNIVERSO: SELECCIÓN DE 4 CAPÍTULOS */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-b border-[#C2B69D]/45">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#C2B69D]/35">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              02 · Universo · Portfolio como exposición
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
              Cuatro colecciones, un mismo lenguaje visual.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/universo')}
            className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] border-b border-[#C2B69D] hover:border-[#2A2A2A] pb-1 transition-colors cursor-pointer self-start sm:self-auto whitespace-nowrap shrink-0"
          >
            <span>Ver exposición completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {PROJECTS.map((project, idx) => {
            const collection = COLLECTIONS.find((c) => c.id === project.collectionId);
            return (
              <article key={project.id} className="flex flex-col">
                <CuratorialFrame
                  slot={project.coverSlot}
                  showCaption={false}
                  onClick={() => onNavigate(`/universo/${project.slug}`)}
                />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-[0.14em] uppercase text-[#2A2A2A]/60 tabular-nums">
                      {collection?.index ?? String(idx + 1).padStart(2, '0')} · {project.collectionTitle}
                      {project.isConceptualSample ? ' · Ejemplo conceptual' : ''}
                    </p>
                    <h3 className="mt-1.5 font-serif text-2xl text-[#2A2A2A]">
                      <a
                        href={`/universo/${project.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`/universo/${project.slug}`);
                        }}
                        className="hover:text-[#2A2A2A]/70 transition-colors"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#2A2A2A]/75 max-w-md">
                      {collection?.focus}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/universo/${project.slug}`)}
                    aria-label={`Abrir capítulo ${project.title}`}
                    className="inline-flex items-center justify-center w-10 h-10 border border-[#C2B69D]/60 text-[#2A2A2A] hover:border-[#2A2A2A] transition-colors shrink-0 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. SÍNTESIS DE EL MÉTODO (ESTUDIO NÓMADA) */}
      <section className="bg-[#E8E2D5]/35 border-b border-[#C2B69D]/45 py-16 sm:py-24">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
                  03 · El Método · Estudio Nómada
                </p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
                  Dirección visual delegada en localización real.
                </h2>
                <div className="w-10 h-px bg-[#D4AF37] my-5" />
                <p className="text-sm leading-relaxed text-[#2A2A2A]/80">
                  Luz suave, sombras reales, materiales nobles y gesto humano. Nos desplazamos al lugar donde sucede tu oficio para registrar la verdad visual sin imposturas.
                </p>
              </div>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onNavigate('/metodo')}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] border-b border-[#C2B69D] hover:border-[#2A2A2A] pb-1 transition-colors cursor-pointer"
                >
                  <span>Conocer El Método completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {METHOD_PHASES.map((phase) => (
                <div
                  key={phase.index}
                  className="bg-[#F7F5F0] border border-[#C2B69D]/55 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif italic text-xl text-[#2A2A2A]/55 tabular-nums">
                      {phase.index}
                    </span>
                    <h3 className="mt-2 font-serif text-xl text-[#2A2A2A]">{phase.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#2A2A2A]/75">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. COLABORACIÓN MENSUAL (PROTAGONISTA) + SESIONES PUNTUALES */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 border-b border-[#C2B69D]/45">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
            04 · Colaboraciones
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
            Dirección visual continuada para marcas que entienden el valor de una identidad coherente.
          </h2>
          <p className="mt-3 text-sm text-[#2A2A2A]/75">
            Cupo máximo de cuatro firmas simultáneas. Compromiso mínimo trimestral, dirección de arte, guionaje, edición y color incluidos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {RETAINER_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#E8E2D5]/55 border border-[#C2B69D]/60 p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-[#2A2A2A]/70">
                  {plan.name}
                </p>
                <p className="mt-3 font-serif text-3xl text-[#2A2A2A] tabular-nums">
                  {plan.priceMonthly}
                </p>
                <div className="w-8 h-px bg-[#D4AF37] my-5" />
                <dl className="space-y-2.5 text-sm text-[#2A2A2A]/80 tabular-nums">
                  <div className="flex justify-between border-b border-[#C2B69D]/35 pb-2">
                    <dt className="text-[#2A2A2A]/60">Rodaje</dt>
                    <dd>{plan.sessionsPerMonth}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#C2B69D]/35 pb-2">
                    <dt className="text-[#2A2A2A]/60">Fotografía</dt>
                    <dd>{plan.photosCount}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#C2B69D]/35 pb-2">
                    <dt className="text-[#2A2A2A]/60">Vídeos</dt>
                    <dd>{plan.videosCount}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-[#2A2A2A]/70">{plan.summary}</p>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onNavigate(`/contacto?plan=${plan.id}`)}
                  className="w-full py-3 px-5 text-xs tracking-[0.12em] uppercase border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#F7F5F0] transition-colors duration-200 cursor-pointer"
                >
                  Solicitar plan {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Two routes footer inside Collaborations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F7F5F0] border border-[#C2B69D]/60 p-6 sm:p-7 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-[#2A2A2A]/55">
                Vía principal · Retainer
              </p>
              <h3 className="mt-1 font-serif text-xl text-[#2A2A2A]">
                Colaboración continuada
              </h3>
              <p className="mt-2 text-sm text-[#2A2A2A]/75">
                Cuestionario de filtro → Diagnóstico estético de 30 min → Acuerdo y reserva de fechas.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/colaboraciones')}
              className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] hover:text-[#2A2A2A]/65 self-start cursor-pointer"
            >
              <span>Ver condiciones completas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#F7F5F0] border border-[#C2B69D]/60 p-6 sm:p-7 flex flex-col justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-[#2A2A2A]/55">
                Vía secundaria · Sin filtro previo
              </p>
              <h3 className="mt-1 font-serif text-xl text-[#2A2A2A]">
                Sesiones puntuales — «Elige tu sesión»
              </h3>
              <p className="mt-2 text-sm text-[#2A2A2A]/75">
                Fotografía, vídeo o producción específica mediante contacto directo por WhatsApp, correo o calendario.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/sesiones-puntuales')}
              className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] hover:text-[#2A2A2A]/65 self-start cursor-pointer"
            >
              <span>Ir a Sesiones puntuales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CIERRE EDITORIAL / CONTACTO */}
      <section className="py-16 sm:py-24 bg-[#F7F5F0]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
            05 · Primer paso
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
            Hablemos de la historia visual que merece tu marca.
          </h2>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto my-6" />
          <p className="text-sm sm:text-base leading-relaxed text-[#2A2A2A]/75">
            Si buscas dirección visual continuada, completa el cuestionario previo para concertar tu diagnóstico estético de 30 minutos. Si necesitas una sesión puntual, puedes escribirnos directamente.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contacto')}
              className="px-7 py-3.5 text-xs tracking-[0.12em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors cursor-pointer"
            >
              {SITE_IDENTITY.heroCta}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/sesiones-puntuales')}
              className="px-7 py-3.5 text-xs tracking-[0.12em] uppercase border border-[#C2B69D] text-[#2A2A2A] hover:border-[#2A2A2A] transition-colors cursor-pointer"
            >
              Elige tu sesión puntual
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
