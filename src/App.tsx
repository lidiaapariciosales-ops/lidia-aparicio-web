/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { UniversoPage } from './pages/UniversoPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { MetodoPage } from './pages/MetodoPage';
import { ColaboracionesPage } from './pages/ColaboracionesPage';
import { SesionesPuntualesPage } from './pages/SesionesPuntualesPage';
import { SobreMiPage } from './pages/SobreMiPage';
import { ContactoPage } from './pages/ContactoPage';
import { LegalPage } from './pages/LegalPage';

interface RouteLocation {
  pathname: string;
  search: string;
}

export default function App() {
  const [location, setLocation] = useState<RouteLocation>(() => ({
    pathname: window.location.pathname || '/',
    search: window.location.search || '',
  }));

  useEffect(() => {
    const onPopState = () => {
      setLocation({
        pathname: window.location.pathname || '/',
        search: window.location.search || '',
      });
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (target: string) => {
    const [rawPath, rawSearch] = target.split('?');
    const normalizedPath = rawPath || '/';
    const normalizedSearch = rawSearch ? `?${rawSearch}` : '';
    const fullUrl = `${normalizedPath}${normalizedSearch}`;

    if (window.location.pathname + window.location.search !== fullUrl) {
      window.history.pushState({}, '', fullUrl);
    }
    setLocation({ pathname: normalizedPath, search: normalizedSearch });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const path = location.pathname;

    if (path === '/' || path === '') {
      return <HomePage onNavigate={navigate} />;
    }
    if (path === '/universo') {
      return <UniversoPage onNavigate={navigate} />;
    }
    if (path.startsWith('/universo/')) {
      const slug = path.replace('/universo/', '').replace(/\/$/, '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (path === '/metodo') {
      return <MetodoPage onNavigate={navigate} />;
    }
    if (path === '/colaboraciones') {
      return <ColaboracionesPage onNavigate={navigate} />;
    }
    if (path === '/sesiones-puntuales') {
      return <SesionesPuntualesPage onNavigate={navigate} />;
    }
    if (path === '/sobre-mi') {
      return <SobreMiPage onNavigate={navigate} />;
    }
    if (path === '/contacto') {
      return <ContactoPage queryString={location.search} onNavigate={navigate} />;
    }
    if (path === '/legal') {
      return <LegalPage onNavigate={navigate} />;
    }

    return <HomePage onNavigate={navigate} />;
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#2A2A2A]">
        <Navbar currentPath={location.pathname} onNavigate={navigate} />

        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          {renderPage()}
        </motion.main>

        <Footer onNavigate={navigate} />
      </div>
    </MotionConfig>
  );
}
