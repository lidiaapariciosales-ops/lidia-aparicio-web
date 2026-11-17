import React, { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  PUNTUAL_SESSIONS,
  RETAINER_PLANS,
  SITE_IDENTITY,
} from '../data/portfolioContent';

interface ContactoPageProps {
  queryString: string;
  onNavigate: (path: string) => void;
}

export const ContactoPage: React.FC<ContactoPageProps> = ({ queryString, onNavigate }) => {
  const params = new URLSearchParams(queryString);
  const initialVia = params.get('via') === 'puntual' ? 'puntual' : 'retainer';
  const initialPlan = params.get('plan') || 'prestigio';
  const initialSesion = params.get('sesion') || PUNTUAL_SESSIONS[0].id;

  const [mode, setMode] = useState<'retainer' | 'puntual'>(initialVia);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form fields
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [selectedSession, setSelectedSession] = useState(initialSesion);
  const [timeframe, setTimeframe] = useState('Próximos 30 días');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const p = new URLSearchParams(queryString);
    if (p.get('via') === 'puntual') setMode('puntual');
    if (p.get('plan')) {
      setMode('retainer');
      setSelectedPlan(p.get('plan') || 'prestigio');
    }
    if (p.get('sesion')) {
      setMode('puntual');
      setSelectedSession(p.get('sesion') || PUNTUAL_SESSIONS[0].id);
    }
    setSubmitted(false);
    setErrorMsg('');
  }, [queryString]);

  const activePlanObj = RETAINER_PLANS.find((p) => p.id === selectedPlan);
  const activeSessionObj = PUNTUAL_SESSIONS.find((s) => s.id === selectedSession);

  const buildSummaryText = () => {
    if (mode === 'retainer') {
      return [
        'SOLICITUD DE DIAGNÓSTICO VISUAL (RETAINER)',
        `Nombre: ${name}`,
        `Marca / Firma: ${brand}`,
        `Correo: ${email}`,
        `Web / Instagram: ${website || 'No indicado'}`,
        `Plan de interés: ${activePlanObj ? `${activePlanObj.name} (${activePlanObj.priceMonthly})` : selectedPlan}`,
        `Horizonte de inicio: ${timeframe}`,
        `Contexto visual: ${notes}`,
      ].join('\n');
    }
    return [
      'CONSULTA DE SESIÓN PUNTUAL',
      `Nombre: ${name}`,
      `Marca / Proyecto: ${brand || 'Personal'}`,
      `Correo: ${email}`,
      `Tipo de sesión: ${activeSessionObj ? activeSessionObj.title : selectedSession}`,
      `Fecha estimada / Notas: ${notes}`,
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !notes.trim()) {
      setErrorMsg('Por favor, completa nombre, correo y una breve descripción de tu proyecto.');
      return;
    }
    if (mode === 'retainer' && !brand.trim()) {
      setErrorMsg('Para el cuestionario de colaboración mensual necesitamos el nombre de tu marca.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-[#F7F5F0] text-[#2A2A2A]">
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-10 border-b border-[#C2B69D]/45">
        <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
          Contacto · Aplicar
        </p>
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl text-[#2A2A2A]">
              {mode === 'retainer'
                ? 'Solicitar Diagnóstico Visual'
                : 'Contacto directo para sesión puntual'}
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-[#2A2A2A]/80">
              {mode === 'retainer'
                ? 'Cuestionario previo para valorar encaje creativo, cupo disponible (máximo 4 firmas simultáneas) y concertar tu diagnóstico estético de 30 minutos.'
                : 'Vía directa y sin cuestionario de filtro para encargar una sesión puntual de fotografía o vídeo.'}
            </p>
          </div>
        </div>

        {/* Mode Switch */}
        <div className="mt-8 flex flex-wrap gap-6 border-t border-[#C2B69D]/35 pt-6">
          <button
            type="button"
            onClick={() => {
              setMode('retainer');
              setSubmitted(false);
              setErrorMsg('');
            }}
            className={`py-1.5 text-xs tracking-[0.12em] uppercase border-b transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              mode === 'retainer'
                ? 'border-[#D4AF37] text-[#2A2A2A] font-medium'
                : 'border-transparent text-[#2A2A2A]/60 hover:text-[#2A2A2A]'
            }`}
          >
            01 · Cuestionario Retainer (Colaboración mensual)
          </button>

          <button
            type="button"
            onClick={() => {
              setMode('puntual');
              setSubmitted(false);
              setErrorMsg('');
            }}
            className={`py-1.5 text-xs tracking-[0.12em] uppercase border-b transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              mode === 'puntual'
                ? 'border-[#D4AF37] text-[#2A2A2A] font-medium'
                : 'border-transparent text-[#2A2A2A]/60 hover:text-[#2A2A2A]'
            }`}
          >
            02 · Sesión Puntual (Contacto directo)
          </button>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#E8E2D5]/60 border border-[#C2B69D] p-8 sm:p-10">
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/65">
                  Solicitud preparada
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#2A2A2A]">
                  Gracias, {name}.
                </h2>
                <div className="w-10 h-px bg-[#D4AF37] my-5" />
                <p className="text-sm leading-relaxed text-[#2A2A2A]/80">
                  Tu dossier ha quedado estructurado con todos los datos necesarios. Una vez Lidia confirme el correo o sistema de envío definitivo antes del lanzamiento, este formulario entregará la solicitud directamente. Mientras tanto, puedes copiar el resumen generado para enviarlo por tu canal preferido.
                </p>

                <pre className="mt-6 p-5 bg-[#F7F5F0] border border-[#C2B69D]/60 text-xs leading-relaxed text-[#2A2A2A]/85 whitespace-pre-wrap font-sans">
                  {buildSummaryText()}
                </pre>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.12em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Resumen copiado' : 'Copiar resumen'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 text-xs tracking-[0.12em] uppercase border border-[#C2B69D] text-[#2A2A2A] hover:border-[#2A2A2A] transition-colors cursor-pointer"
                  >
                    Editar datos
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {errorMsg && (
                  <div
                    role="alert"
                    className="p-4 bg-[#E8E2D5] border border-[#2A2A2A]/40 text-xs text-[#2A2A2A]"
                  >
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:border-[#2A2A2A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@marca.com"
                      className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:border-[#2A2A2A] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-brand" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                      Marca / Proyecto {mode === 'retainer' ? '*' : '(opcional)'}
                    </label>
                    <input
                      id="contact-brand"
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Nombre de la firma"
                      className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:border-[#2A2A2A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-web" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                      Web o Instagram
                    </label>
                    <input
                      id="contact-web"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https:// o @usuario"
                      className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:border-[#2A2A2A] focus:outline-none"
                    />
                  </div>
                </div>

                {mode === 'retainer' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-plan" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                        Nivel de colaboración
                      </label>
                      <select
                        id="contact-plan"
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] focus:border-[#2A2A2A] focus:outline-none"
                      >
                        {RETAINER_PLANS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} — {p.priceMonthly}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-timeframe" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                        Inicio previsto
                      </label>
                      <select
                        id="contact-timeframe"
                        value={timeframe}
                        onChange={(e) => setTimeframe(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] focus:border-[#2A2A2A] focus:outline-none"
                      >
                        <option value="Inmediato">Inmediato (según cupo)</option>
                        <option value="Próximos 30 días">Próximos 30 días</option>
                        <option value="Próximo trimestre">Próximo trimestre</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="contact-session" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                      Sesión puntual de interés
                    </label>
                    <select
                      id="contact-session"
                      value={selectedSession}
                      onChange={(e) => setSelectedSession(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] focus:border-[#2A2A2A] focus:outline-none"
                    >
                      {PUNTUAL_SESSIONS.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-notes" className="block text-xs tracking-[0.1em] uppercase text-[#2A2A2A]/75 mb-2">
                    {mode === 'retainer'
                      ? '¿Qué historia visual necesita contar tu marca en los próximos meses? *'
                      : 'Cuéntanos qué necesitas fotografiar o rodar, localización y fechas *'}
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={5}
                    required
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contexto, espacios, producto o necesidades de fotografía y vídeo..."
                    className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#C2B69D] text-sm text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:border-[#2A2A2A] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-4 text-xs tracking-[0.14em] uppercase bg-[#2A2A2A] text-[#F7F5F0] hover:bg-[#2A2A2A]/90 transition-colors cursor-pointer"
                  >
                    {mode === 'retainer'
                      ? 'Enviar solicitud de Diagnóstico Visual'
                      : 'Enviar consulta de sesión puntual'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Rail */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-[#E8E2D5]/55 border border-[#C2B69D]/60 p-8">
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
                Canales oficiales
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#2A2A2A]">
                Información de contacto
              </h2>
              <div className="w-8 h-px bg-[#D4AF37] my-5" />
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-[#C2B69D]/35 pb-2">
                  <dt className="text-[#2A2A2A]/60">Correo</dt>
                  <dd>{SITE_IDENTITY.contactChannels.email}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#C2B69D]/35 pb-2">
                  <dt className="text-[#2A2A2A]/60">WhatsApp</dt>
                  <dd>{SITE_IDENTITY.contactChannels.whatsapp}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#C2B69D]/35 pb-2">
                  <dt className="text-[#2A2A2A]/60">Instagram</dt>
                  <dd>{SITE_IDENTITY.contactChannels.instagram}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#C2B69D]/35 pb-2">
                  <dt className="text-[#2A2A2A]/60">Calendario</dt>
                  <dd>{SITE_IDENTITY.contactChannels.calendarUrl}</dd>
                </div>
                <div className="flex justify-between gap-4 pt-1">
                  <dt className="text-[#2A2A2A]/60">Producción</dt>
                  <dd className="text-right">{SITE_IDENTITY.contactChannels.location}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-[#C2B69D]/55 p-8">
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#2A2A2A]/60">
                Recordatorio de cupo
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#2A2A2A]/80">
                La dirección visual mensual mantiene un límite de cuatro firmas simultáneas para preservar la dedicación autoral en cada proyecto.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/colaboraciones')}
                className="mt-5 text-xs tracking-[0.12em] uppercase text-[#2A2A2A] border-b border-[#C2B69D] hover:border-[#2A2A2A] pb-1 cursor-pointer"
              >
                Revisar planes y condiciones
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
