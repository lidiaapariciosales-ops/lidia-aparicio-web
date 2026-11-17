import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { SITE_IDENTITY } from '../data/portfolioContent';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#2A2A2A]/70 hover:text-[#2A2A2A] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a Inicio</span>
        </button>

        <h1 className="mt-8 font-serif text-3xl sm:text-4xl text-[#2A2A2A]">
          Aviso legal, privacidad y cookies
        </h1>
        <div className="w-10 h-px bg-[#D4AF37] my-6" />

        <div className="space-y-6 text-sm leading-relaxed text-[#2A2A2A]/80">
          <div className="bg-[#E8E2D5]/55 border border-[#C2B69D]/60 p-6">
            <p className="text-xs tracking-[0.14em] uppercase text-[#2A2A2A]/65 mb-2">
              Estado de documentación
            </p>
            <p>
              Pendiente de confirmar antes del lanzamiento. Los textos legales definitivos, datos fiscales del titular de {SITE_IDENTITY.domain} y la política de privacidad/cookies se incorporarán en función de los canales de formulario y alojamiento finalmente aprobados.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#2A2A2A] mb-2">Propiedad intelectual</h2>
            <p>
              Todas las fotografías, piezas audiovisuales y textos editoriales de {SITE_IDENTITY.brandName} ({SITE_IDENTITY.brandRole}) están protegidos por derechos de autor. Ninguna obra puede ser reproducida o distribuida sin autorización expresa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
