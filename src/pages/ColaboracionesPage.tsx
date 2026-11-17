import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  FAQ_ITEMS,
  RETAINER_CONDITIONS,
  RETAINER_PLANS,
} from '../data/portfolioContent';

interface ColaboracionesPageProps {
  onNavigate: (path: string) => void;
}

export const ColaboracionesPage: React.FC<ColaboracionesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      {/* Header */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-12 border-b border-[#C2B69D]/45">
        <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
          Colaboraciones · Servicios sin apariencia de agencia
        </p>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl text-[#2A2A2A]">
              Niveles de dirección visual continuada
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#2A2A2A]/75">
              La colaboración mensual es la vía principal para construir un archivo coherente a lo largo del tiempo. {RETAINER_CONDITIONS.maxConcurrentBrands.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Retainer Plans */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 border-b border-[#C2B69D]/45">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {RETAINER_PLANS.map((plan) => (
            <article
              key={plan.id}
              className="bg-[#E8E2D5]/55 border border-[#C2B69D]/65 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-serif text-2xl text-[#2A2A2A]">{plan.name}</h2>
                  <span className="text-[11px] tracking-[0.14em] uppercase text-[#2A2A2A]/60">
                    Retainer mensual
                  </span>
                </div>

                <p className="mt-4 font-serif text-4xl text-[#2A2A2A] tabular-nums">
                  {plan.priceMonthly}
                </p>
                <p className="mt-1 text-xs text-[#2A2A2A]/60">{plan.hoursNote}</p>

                <div className="w-10 h-px bg-[#D4AF37] my-6" />

                <dl className="space-y-3 text-sm tabular-nums">
                  <div className="flex justify-between border-b border-[#C2B69D]/35 pb-2.5">
                    <dt className="text-[#2A2A2A]/60">Rodaje / mes</dt>
                    <dd className="font-medium">{plan.sessionsPerMonth}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#C2B69D]/35 pb-2.5">
                    <dt className="text-[#2A2A2A]/60">Fotografías</dt>
                    <dd className="font-medium">{plan.photosCount}</dd>
                  </div>
                  <div className="flex justify-between border-b border-[#C2B69D]/35 pb-2.5">
                    <dt className="text-[#2A2A2A]/60">Vídeos</dt>
                    <dd className="font-medium">{plan.videosCount}</dd>
                  </div>
                </dl>

                <p className="mt-5 text-sm leading-relaxed text-[#2A2A2A]/80">
                  {plan.summary}
                </p>

                <ul className="mt-5 space-y-2 text-xs text-[#2A2A2A]/75">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden="true" className="text-[#D4AF37]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#C2B69D]/40">
                <button
                  type="button"
                  onClick={() => onNavigate(`/contacto?plan=${plan.id}`)}
                  className="w-full py-3.5 px-6 text-xs tracking-[0.12em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors cursor-pointer"
                >
                  Solicitar Diagnóstico · {plan.name}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Conditions */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F7F5F0] border border-[#C2B69D]/55 p-8">
          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60 mb-4">
              Condiciones incluidas
            </p>
            <ul className="space-y-2.5 text-sm text-[#2A2A2A]/85">
              {RETAINER_CONDITIONS.included.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#D4AF37] font-bold">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60 mb-4">
              Partidas presupuestadas aparte
            </p>
            <ul className="space-y-2.5 text-sm text-[#2A2A2A]/80">
              {RETAINER_CONDITIONS.billedSeparately.map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="text-[#C2B69D]">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Retainer Entry Flow */}
      <section className="bg-[#E8E2D5]/35 border-b border-[#C2B69D]/45 py-14 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
            Proceso de acceso · Retainer
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
            De la solicitud a la reserva de fechas
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {RETAINER_CONDITIONS.entryFlow.map((item) => (
              <div key={item.step} className="bg-[#F7F5F0] border border-[#C2B69D]/55 p-6">
                <span className="font-serif italic text-xl text-[#2A2A2A]/55 tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-2 font-serif text-xl text-[#2A2A2A]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#2A2A2A]/75 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Visible Path: Sesiones Puntuales */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16 border-b border-[#C2B69D]/45">
        <div className="bg-[#E8E2D5]/55 border border-[#C2B69D]/60 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              Segunda vía · Sin cuestionario filtro
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[#2A2A2A]">
              Sesiones puntuales — «Elige tu sesión»
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#2A2A2A]/80 max-w-2xl">
              Si tu proyecto necesita una producción única de fotografía o vídeo sin compromiso mensual, puedes elegir sesión y contactar directamente sin pasar por el filtro del retainer.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              type="button"
              onClick={() => onNavigate('/sesiones-puntuales')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs tracking-[0.12em] uppercase border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-[#F7F5F0] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Ver Sesiones puntuales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              Preguntas frecuentes
            </p>
            <h2 className="mt-2 font-serif text-3xl text-[#2A2A2A]">
              Claridad antes de empezar
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#C2B69D]/45 border-t border-b border-[#C2B69D]/45">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left py-1 cursor-pointer"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#2A2A2A]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#2A2A2A]/65 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-[#2A2A2A]/80 max-w-2xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
