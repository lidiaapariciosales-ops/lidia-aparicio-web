import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_MEDIA_SLOTS, METHOD_PHASES } from '../data/portfolioContent';
import { CuratorialFrame } from '../components/CuratorialFrame';

interface MetodoPageProps {
  onNavigate: (path: string) => void;
}

const IMAGE_CRITERIA = [
  {
    title: 'Luz y materia',
    detail: 'Luz suave, sombras reales y respeto por las texturas nobles sin aplicar filtros beige uniformes a todo el archivo.',
  },
  {
    title: 'Plano general y detalle',
    detail: 'Equilibrio entre la arquitectura que sitúa el contexto y el gesto humano o artesanal que revela el oficio.',
  },
  {
    title: 'Cine pausado',
    detail: 'Movimiento sereno en fotografía y vídeo, evitando efectos invasivos y priorizando la contemplación.',
  },
  {
    title: 'Edición delegada',
    detail: 'Dirección de arte, guionaje, rodaje, selección y color integrados bajo un único criterio autoral.',
  },
];

export const MetodoPage: React.FC<MetodoPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      {/* Intro */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-14 border-b border-[#C2B69D]/45">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              El Método · Estudio Nómada
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-[#2A2A2A]">
              Producción en localización, criterio editorial de principio a fin.
            </h1>
            <div className="w-12 h-px bg-[#D4AF37] my-6" />
            <p className="text-sm sm:text-base leading-relaxed text-[#2A2A2A]/80 max-w-xl">
              En lugar de trasladar artificialmente una marca a un plató neutro, el Estudio Nómada acude al espacio donde ocurre tu trabajo: talleres, estudios de arquitectura, fábricas, hoteles o clínicas. El método ordena el rodaje para que puedas delegar por completo la dirección visual.
            </p>
          </div>
          <div className="lg:col-span-6">
            <CuratorialFrame slot={HERO_MEDIA_SLOTS.secondaryTop} />
          </div>
        </div>
      </section>

      {/* 4 Phases */}
      <section className="bg-[#E8E2D5]/40 border-b border-[#C2B69D]/45 py-16 sm:py-20">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              Secuencia de trabajo
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
              Cómo se construye cada entrega visual
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {METHOD_PHASES.map((phase) => (
              <div
                key={phase.index}
                className="bg-[#F7F5F0] border border-[#C2B69D]/55 p-8"
              >
                <p className="font-serif italic text-2xl text-[#2A2A2A]/50 tabular-nums">
                  {phase.index}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-[#2A2A2A]">
                  {phase.title}
                </h3>
                <div className="w-8 h-px bg-[#D4AF37] my-4" />
                <p className="text-sm leading-relaxed text-[#2A2A2A]/80">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Treatment Criteria */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
              Tratamiento de imagen
            </p>
            <h2 className="mt-2 font-serif text-3xl text-[#2A2A2A]">
              Principios visuales de posproducción
            </h2>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#C2B69D]/45 border-t border-b border-[#C2B69D]/45">
            {IMAGE_CRITERIA.map((item) => (
              <div key={item.title} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <h3 className="sm:col-span-4 font-serif text-xl text-[#2A2A2A]">
                  {item.title}
                </h3>
                <p className="sm:col-span-8 text-sm leading-relaxed text-[#2A2A2A]/80">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <button
            type="button"
            onClick={() => onNavigate('/colaboraciones')}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs tracking-[0.12em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors cursor-pointer"
          >
            <span>Explorar planes de colaboración</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
