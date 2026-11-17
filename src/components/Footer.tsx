import React from 'react';
import { SITE_IDENTITY } from '../data/portfolioContent';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#C2B69D]/55 bg-[#F7F5F0] text-[#2A2A2A]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C2B69D]/40">
          {/* Identity */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <p className="font-serif text-xl tracking-wide text-[#2A2A2A]">
                {SITE_IDENTITY.brandName}
              </p>
              <p className="mt-1 text-xs tracking-[0.16em] uppercase text-[#2A2A2A]/65">
                {SITE_IDENTITY.brandRole}
              </p>
              <p className="mt-3 text-xs text-[#2A2A2A]/60">
                Publicación editorial conceptual: <span className="italic">{SITE_IDENTITY.conceptualName}</span>
              </p>
            </div>
            <p className="text-xs tracking-[0.14em] uppercase text-[#2A2A2A]/65">
              {SITE_IDENTITY.footerTags}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/55 mb-4">
              Archivo &amp; Estudio
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/universo" onClick={(e) => handleLink(e, '/universo')} className="hover:text-[#2A2A2A]/60 transition-colors">
                  Universo
                </a>
              </li>
              <li>
                <a href="/metodo" onClick={(e) => handleLink(e, '/metodo')} className="hover:text-[#2A2A2A]/60 transition-colors">
                  El Método · Estudio Nómada
                </a>
              </li>
              <li>
                <a href="/colaboraciones" onClick={(e) => handleLink(e, '/colaboraciones')} className="hover:text-[#2A2A2A]/60 transition-colors">
                  Colaboraciones mensuales
                </a>
              </li>
              <li>
                <a href="/sesiones-puntuales" onClick={(e) => handleLink(e, '/sesiones-puntuales')} className="hover:text-[#2A2A2A]/60 transition-colors">
                  Sesiones puntuales · Elige tu sesión
                </a>
              </li>
              <li>
                <a href="/sobre-mi" onClick={(e) => handleLink(e, '/sobre-mi')} className="hover:text-[#2A2A2A]/60 transition-colors">
                  Sobre mí · Trayectoria
                </a>
              </li>
            </ul>
          </div>

          {/* Channels & Quote */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/55 mb-4">
                Contacto &amp; Canales
              </p>
              <dl className="space-y-2 text-xs text-[#2A2A2A]/75">
                <div className="flex justify-between gap-4 border-b border-[#C2B69D]/30 pb-1.5">
                  <dt className="text-[#2A2A2A]/55">Correo</dt>
                  <dd>{SITE_IDENTITY.contactChannels.email}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#C2B69D]/30 pb-1.5">
                  <dt className="text-[#2A2A2A]/55">WhatsApp</dt>
                  <dd>{SITE_IDENTITY.contactChannels.whatsapp}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#C2B69D]/30 pb-1.5">
                  <dt className="text-[#2A2A2A]/55">Instagram</dt>
                  <dd>{SITE_IDENTITY.contactChannels.instagram}</dd>
                </div>
              </dl>
            </div>

            <blockquote className="font-serif italic text-base sm:text-lg text-[#2A2A2A]/85">
              «{SITE_IDENTITY.footerQuote}»
            </blockquote>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#2A2A2A]/55">
          <span>{SITE_IDENTITY.domain} · {new Date().getFullYear()}</span>
          <div className="flex items-center gap-6">
            <a href="/contacto" onClick={(e) => handleLink(e, '/contacto')} className="hover:text-[#2A2A2A] transition-colors">
              Solicitar Diagnóstico Visual
            </a>
            <a href="/legal" onClick={(e) => handleLink(e, '/legal')} className="hover:text-[#2A2A2A] transition-colors">
              Aviso legal y privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
