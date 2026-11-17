import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_IDENTITY } from '../data/portfolioContent';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Universo', path: '/universo' },
  { label: 'El Método', path: '/metodo' },
  { label: 'Colaboraciones', path: '/colaboraciones' },
  { label: 'Sobre mí', path: '/sobre-mi' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#C2B69D]/40">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="font-serif text-lg sm:text-xl tracking-wide text-[#2A2A2A] whitespace-nowrap shrink-0"
          >
            {SITE_IDENTITY.brandName}
          </a>

          {/* Zone 2: 5 clean single-line navigation links */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.path);
                  }}
                  className={`relative py-1 text-[13px] tracking-[0.06em] whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    active ? 'text-[#2A2A2A] font-medium' : 'text-[#2A2A2A]/70 hover:text-[#2A2A2A]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 -bottom-0.5 h-px bg-[#D4AF37]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/contacto"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/contacto');
              }}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.1em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Solicitar Diagnóstico
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú de navegación"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#2A2A2A] hover:bg-[#E8E2D5]/60 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Drawer (inspired by moodboard's warm graphite menu) */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-50 bg-[#2A2A2A] text-[#F7F5F0] flex flex-col justify-between p-6 sm:p-10"
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg tracking-wide text-[#F7F5F0]">
              {SITE_IDENTITY.brandName}
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
              className="inline-flex items-center justify-center w-11 h-11 text-[#F7F5F0] hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav aria-label="Menú móvil" className="my-auto flex flex-col">
            {[...NAV_LINKS, { label: 'Contacto', path: '/contacto' }].map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.path);
                  setMobileOpen(false);
                }}
                className="py-4 border-b border-[#F7F5F0]/15 font-serif text-2xl text-[#F7F5F0] hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {isActive(item.path) && <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37]">Actual</span>}
              </a>
            ))}
            <a
              href="/sesiones-puntuales"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/sesiones-puntuales');
                setMobileOpen(false);
              }}
              className="py-4 text-sm tracking-[0.1em] uppercase text-[#C2B69D] hover:text-[#F7F5F0] transition-colors"
            >
              Sesiones puntuales · Elige tu sesión →
            </a>
          </nav>

          <div className="pt-6 border-t border-[#F7F5F0]/15 flex items-center justify-between text-xs text-[#C2B69D]">
            <span>{SITE_IDENTITY.brandRole}</span>
            <span>{SITE_IDENTITY.conceptualName}</span>
          </div>
        </div>
      )}
    </>
  );
};
