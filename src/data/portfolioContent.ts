export type AspectRatioType = '16:9' | '4:3' | '3:4' | '1:1';

export interface MediaSlot {
  id: string;
  title: string;
  framing: 'Plano general' | 'Detalle' | 'Retrato' | 'Secuencia' | 'Atmósfera';
  aspectRatio: AspectRatioType;
  src?: string;
  alt: string;
  caption: string;
  statusNote: string;
}

export interface VideoSlot {
  title: string;
  duration: string;
  src?: string;
  posterSrc?: string;
  note: string;
}

export interface CollectionItem {
  id: string;
  index: string;
  slug: string;
  title: string;
  focus: string;
  statusLabel: string;
}

export interface ProjectChapter {
  id: string;
  slug: string;
  chapterCode: string;
  title: string;
  subtitle: string;
  collectionId: string;
  collectionTitle: string;
  isConceptualSample: boolean;
  contextText: string;
  coverSlot: MediaSlot;
  gallerySlots: MediaSlot[];
  videoSlot?: VideoSlot;
  credits: {
    rol: string;
    cliente: string;
    anio: string;
    localizacion: string;
    permisos: string;
  };
}

export interface RetainerPlan {
  id: string;
  name: string;
  sessionsPerMonth: string;
  hoursNote: string;
  photosCount: string;
  videosCount: string;
  priceMonthly: string;
  summary: string;
  highlights: string[];
}

export interface TimelineStage {
  index: string;
  title: string;
  description: string;
  disciplineNote: string;
  verificationNote: string;
  imageSlot: MediaSlot;
}

export interface MethodPhase {
  index: string;
  title: string;
  description: string;
}

export interface PuntualSessionOption {
  id: string;
  title: string;
  focus: string;
  deliverables: string;
  investment: string;
}

export const SITE_IDENTITY = {
  brandName: 'Lidia Aparicio',
  brandRole: 'Exclusive Visual Director',
  conceptualName: 'The Silent Gallery',
  domain: 'lidiaaparicio.com',
  heroHeadline: 'La esencia de lo que merece ser contado.',
  heroSubtitle: 'Fotografía · Cine · Dirección visual',
  heroLead: 'Una mirada artística y estratégica para marcas que entienden el poder de la imagen.',
  heroCta: 'Solicitar Diagnóstico Visual',
  footerQuote: 'No es solo lo que se ve, sino lo que se siente.',
  footerTags: 'Imagen · Narrativa · Estrategia',
  manifestoTitle: 'Una mirada que se contempla. Una historia que permanece.',
  manifestoParagraphs: [
    'Dirección visual delegada, elegancia sobria y narrativa de autor para marcas con esencia. Este espacio nace como una publicación editorial viva: pocas imágenes por pantalla, luz natural, materia honesta y un ritmo de contemplación alejado del ruido comercial.',
    'La fotografía industrial, publicitaria, médica y documental aporta el oficio y la precisión técnica detrás de cada encuadre; aquí se reinterpreta mediante una edición visual cuidada, sin ocultar el camino recorrido.'
  ],
  contactChannels: {
    email: 'Pendiente de confirmar',
    whatsapp: 'Pendiente de confirmar',
    instagram: 'Pendiente de confirmar',
    linkedin: 'Pendiente de confirmar',
    calendarUrl: 'Pendiente de confirmar',
    location: 'Estudio Nómada · Producción en localización',
  },
};

export const HERO_MEDIA_SLOTS: {
  primary: MediaSlot;
  secondaryTop: MediaSlot;
  secondaryBottom: MediaSlot;
  videoPreview: VideoSlot;
} = {
  primary: {
    id: 'hero-main',
    title: 'Retrato de autor o secuencia arquitectónica principal',
    framing: 'Retrato',
    aspectRatio: '3:4',
    alt: 'Espacio reservado para el retrato principal o fotograma de cabecera de Lidia Aparicio',
    caption: 'Cabecera editorial · Formato 3:4 con passepartout fino',
    statusNote: 'Pendiente de confirmar',
  },
  secondaryTop: {
    id: 'hero-detail-1',
    title: 'Materia noble y luz natural lateral',
    framing: 'Detalle',
    aspectRatio: '4:3',
    alt: 'Espacio reservado para detalle de textura, cerámica o proceso artesanal',
    caption: 'Estudio de materia · Plano detalle',
    statusNote: 'Pendiente de confirmar',
  },
  secondaryBottom: {
    id: 'hero-atmosphere-1',
    title: 'Atmósfera exterior o arquitectura silenciosa',
    framing: 'Atmósfera',
    aspectRatio: '4:3',
    alt: 'Espacio reservado para plano general arquitectónico o paisaje',
    caption: 'Plano general · Luz natural',
    statusNote: 'Pendiente de confirmar',
  },
  videoPreview: {
    title: 'Pieza audiovisual de apertura (sin sonido automático)',
    duration: 'Pendiente de confirmar',
    note: 'Vídeo ligero con póster fotográfico y respeto a movimiento reducido',
  },
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: 'espacios',
    index: '01',
    slug: 'espacios-arquitectura',
    title: 'Espacios & Arquitectura',
    focus: 'Arquitectura, interiores, espacios y atmósferas.',
    statusLabel: 'Colección curatorial editable',
  },
  {
    id: 'materia',
    index: '02',
    slug: 'materia-oficio',
    title: 'Materia & Oficio',
    focus: 'Artesanía, producto, fabricación y detalles.',
    statusLabel: 'Colección curatorial editable',
  },
  {
    id: 'narrativa',
    index: '03',
    slug: 'narrativa-humana',
    title: 'Narrativa Humana',
    focus: 'Retrato, documental, personas y gestos.',
    statusLabel: 'Colección curatorial editable',
  },
  {
    id: 'autor',
    index: '04',
    slug: 'obra-de-autor',
    title: 'Obra de Autor',
    focus: 'Series conceptuales, fantasía y exploración creativa.',
    statusLabel: 'Colección curatorial editable',
  },
];

export const PROJECTS: ProjectChapter[] = [
  {
    id: 'estudio-001',
    slug: 'la-belleza-de-lo-esencial',
    chapterCode: 'Estudio visual — 001',
    title: 'La belleza de lo esencial',
    subtitle: 'Ejemplo conceptual de estructura monográfica · Materia y gesto',
    collectionId: 'materia',
    collectionTitle: 'Materia & Oficio',
    isConceptualSample: true,
    contextText:
      'Capítulo conceptual de referencia para mostrar la estructura editorial de cada reportaje. El texto contextual, los créditos definitivos y las fotografías reales se incorporarán una vez seleccionados los archivos de estudio.',
    coverSlot: {
      id: 'p1-cover',
      title: 'Portada de capítulo — Plano general de espacio y luz',
      framing: 'Plano general',
      aspectRatio: '4:3',
      alt: 'Portada reservada para el capítulo La belleza de lo esencial',
      caption: 'Fig. 01 · Portada de apertura en passepartout editorial',
      statusNote: 'Pendiente de confirmar',
    },
    gallerySlots: [
      {
        id: 'p1-01',
        title: 'Gesto artesanal sobre materia prima',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para fotografía de manos y oficio artesanal',
        caption: 'Fig. 02 · Gesto humano y proceso de taller',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p1-02',
        title: 'Textura superficial y sombra real',
        framing: 'Detalle',
        aspectRatio: '1:1',
        alt: 'Lámina reservada para textura mineral o textil bajo luz suave',
        caption: 'Fig. 03 · Estudio de textura sin filtros uniformes',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p1-03',
        title: 'Composición de objeto en reposo',
        framing: 'Plano general',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para pieza terminada en entorno natural',
        caption: 'Fig. 04 · Encuadre deliberado en superficie noble',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p1-04',
        title: 'Secuencia de luz cambiante',
        framing: 'Secuencia',
        aspectRatio: '16:9',
        alt: 'Lámina reservada para secuencia panorámica de taller',
        caption: 'Fig. 05 · Atmósfera de jornada en localización',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p1-05',
        title: 'Detalle de acabado y herramienta',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para detalle de herramienta y oficio',
        caption: 'Fig. 06 · Registro documental del proceso',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p1-06',
        title: 'Cierre contemplativo del capítulo',
        framing: 'Atmósfera',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para fotografía de cierre',
        caption: 'Fig. 07 · Cierre visual de la serie',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    videoSlot: {
      title: 'Making-of o pieza breve de proceso artesanal (ceramista / taller)',
      duration: 'Pendiente de confirmar',
      note: 'Espacio reservado para vídeo silencioso con póster fotográfico',
    },
    credits: {
      rol: 'Pendiente de confirmar',
      cliente: 'Pendiente de confirmar (ejemplo conceptual)',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Pendiente de confirmar antes de publicación definitiva',
    },
  },
  {
    id: 'espacios-002',
    slug: 'arquitectura-y-atmosfera',
    chapterCode: 'Capítulo — 002',
    title: 'Espacios & Arquitectura',
    subtitle: 'Interiores, volúmenes y diálogo con la luz natural',
    collectionId: 'espacios',
    collectionTitle: 'Espacios & Arquitectura',
    isConceptualSample: false,
    contextText:
      'Colección reservada para reportajes de arquitectura, hoteles, espacios comerciales, cafeterías con carácter y estudios donde la luz construye el relato sin artificios.',
    coverSlot: {
      id: 'p2-cover',
      title: 'Portada arquitectónica — Volumen y sombra real',
      framing: 'Plano general',
      aspectRatio: '16:9',
      alt: 'Portada reservada para serie de arquitectura e interiores',
      caption: 'Fig. 01 · Plano general de arquitectura y luz natural',
      statusNote: 'Pendiente de confirmar',
    },
    gallerySlots: [
      {
        id: 'p2-01',
        title: 'Umbral interior-exterior',
        framing: 'Plano general',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para transición espacial interior-exterior',
        caption: 'Fig. 02 · Perspectiva arquitectónica limpia',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p2-02',
        title: 'Material constructivo en detalle',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para piedra, madera o cal bajo luz rasante',
        caption: 'Fig. 03 · Materialidad y temperatura de luz',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p2-03',
        title: 'Rincón de hospitalidad / café',
        framing: 'Atmósfera',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para mesa o barra en luz de mañana',
        caption: 'Fig. 04 · Escena cotidiana elevada',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p2-04',
        title: 'Simetría y silencio espacial',
        framing: 'Plano general',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para composición simétrica interior',
        caption: 'Fig. 05 · Ritmo compositivo en sala',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p2-05',
        title: 'Detalle de mobiliario y sombra',
        framing: 'Detalle',
        aspectRatio: '1:1',
        alt: 'Lámina reservada para mobiliario de autor',
        caption: 'Fig. 06 · Proporción y quietud',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p2-06',
        title: 'Panorámica de conjunto',
        framing: 'Secuencia',
        aspectRatio: '16:9',
        alt: 'Lámina reservada para vista amplia del espacio',
        caption: 'Fig. 07 · Lectura completa del entorno',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    credits: {
      rol: 'Pendiente de confirmar',
      cliente: 'Pendiente de confirmar',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Pendiente de confirmar',
    },
  },
  {
    id: 'narrativa-003',
    slug: 'narrativa-humana-retrato',
    chapterCode: 'Capítulo — 003',
    title: 'Narrativa Humana',
    subtitle: 'Retrato editorial, fotografía documental y gestos reales',
    collectionId: 'narrativa',
    collectionTitle: 'Narrativa Humana',
    isConceptualSample: false,
    contextText:
      'Archivo dedicado a las personas detrás de cada proyecto: retratos honestos, fotografía documental, entornos industriales o clínicos donde la dignidad del oficio y el gesto humano protagonizan la escena.',
    coverSlot: {
      id: 'p3-cover',
      title: 'Retrato editorial — Luz de ventana',
      framing: 'Retrato',
      aspectRatio: '3:4',
      alt: 'Portada reservada para retrato editorial en luz natural',
      caption: 'Fig. 01 · Retrato principal con presencia serena',
      statusNote: 'Pendiente de confirmar',
    },
    gallerySlots: [
      {
        id: 'p3-01',
        title: 'Retrato en contexto de trabajo',
        framing: 'Retrato',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para retrato ambiental en localización',
        caption: 'Fig. 02 · Entorno real y mirada directa',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p3-02',
        title: 'Gesto y concentración',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para gesto de manos o perfil',
        caption: 'Fig. 03 · El detalle que narra el oficio',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p3-03',
        title: 'Escena documental de industria o clínica',
        framing: 'Plano general',
        aspectRatio: '16:9',
        alt: 'Lámina reservada para archivo documental industrial o médico',
        caption: 'Fig. 04 · Precisión técnica y humanidad',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p3-04',
        title: 'Secuencia de movimiento y pausa',
        framing: 'Secuencia',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para secuencia documental',
        caption: 'Fig. 05 · Cadencia narrativa',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p3-05',
        title: 'Vestuario vintage / carácter personal',
        framing: 'Retrato',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para retrato con vestuario editorial',
        caption: 'Fig. 06 · Textura textil y expresión',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p3-06',
        title: 'Retrato de cierre',
        framing: 'Atmósfera',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para fotografía de cierre documental',
        caption: 'Fig. 07 · Silencio y permanencia',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    credits: {
      rol: 'Pendiente de confirmar',
      cliente: 'Pendiente de confirmar',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Pendiente de confirmar',
    },
  },
  {
    id: 'autor-004',
    slug: 'obra-de-autor-exploracion',
    chapterCode: 'Capítulo — 004',
    title: 'Obra de Autor',
    subtitle: 'Series conceptuales, fantasía e investigación visual',
    collectionId: 'autor',
    collectionTitle: 'Obra de Autor',
    isConceptualSample: false,
    contextText:
      'Espacio de investigación visual propia: series conceptuales, personajes de fantasía, paisajes atemporales y ensayos cinematográficos donde la dirección artística explora nuevos territorios simbólicos.',
    coverSlot: {
      id: 'p4-cover',
      title: 'Serie conceptual — Encuadre de apertura',
      framing: 'Atmósfera',
      aspectRatio: '16:9',
      alt: 'Portada reservada para obra de autor y serie conceptual',
      caption: 'Fig. 01 · Investigación visual y dirección artística',
      statusNote: 'Pendiente de confirmar',
    },
    gallerySlots: [
      {
        id: 'p4-01',
        title: 'Personaje y puesta en escena',
        framing: 'Retrato',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para personaje conceptual o fantasía',
        caption: 'Fig. 02 · Vestuario, luz y símbolo',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p4-02',
        title: 'Geometría natural y horizonte',
        framing: 'Plano general',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para paisaje minimalista',
        caption: 'Fig. 03 · Línea de horizonte y materia',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p4-03',
        title: 'Estudio cromático en sombra',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Lámina reservada para ensayo de claroscuro',
        caption: 'Fig. 04 · Claroscuro sin contraste agresivo',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p4-04',
        title: 'Secuencia cinematográfica',
        framing: 'Secuencia',
        aspectRatio: '16:9',
        alt: 'Lámina reservada para fotograma cinematográfico',
        caption: 'Fig. 05 · Lenguaje de cine pausado',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p4-05',
        title: 'Fragmento orgánico',
        framing: 'Detalle',
        aspectRatio: '1:1',
        alt: 'Lámina reservada para detalle orgánico o botánico',
        caption: 'Fig. 06 · Fragilidad y forma',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p4-06',
        title: 'Epílogo visual',
        framing: 'Atmósfera',
        aspectRatio: '4:3',
        alt: 'Lámina reservada para imagen final de serie de autor',
        caption: 'Fig. 07 · Cierre de exposición',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    videoSlot: {
      title: 'Ensayo visual en movimiento',
      duration: 'Pendiente de confirmar',
      note: 'Espacio reservado para pieza audiovisual de autor',
    },
    credits: {
      rol: 'Pendiente de confirmar',
      cliente: 'Obra personal / Pendiente de confirmar',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Pendiente de confirmar',
    },
  },
];

export const METHOD_PHASES: MethodPhase[] = [
  {
    index: '01',
    title: 'Diagnóstico estético y guionaje',
    description:
      'Antes de encender una cámara definimos qué merece ser contado. Analizamos la identidad de la marca, los espacios reales y el ritmo narrativo para redactar un guion visual claro y delegable.',
  },
  {
    index: '02',
    title: 'Dirección de arte curada',
    description:
      'Selección coherente de luz, materiales nobles, estilismo y encuadres deliberados. Combinamos planos generales que sitúan el espacio con detalles cercanos que transmiten tacto y oficio.',
  },
  {
    index: '03',
    title: 'Estudio Nómada en localización',
    description:
      'En lugar de sacar a la marca de su entorno, el equipo y el equipo técnico se desplazan al taller, estudio, arquitectura o fábrica. Trabajamos con luz suave, sombras reales y mínima fricción operativa.',
  },
  {
    index: '04',
    title: 'Edición, ritmo y color fiel',
    description:
      'Selección exigente —solo permanece lo que sostiene el conjunto— y tratamiento cromático respetuoso con cada escena, evitando filtros uniformes artificiales para conservar la verdad de la materia.',
  },
];

export const RETAINER_PLANS: RetainerPlan[] = [
  {
    id: 'maestria',
    name: 'Maestría',
    sessionsPerMonth: '1 jornada / mes',
    hoursNote: 'Jornada de rodaje presencial',
    photosCount: '12 fotografías',
    videosCount: '4 vídeos',
    priceMonthly: '1.800 €/mes',
    summary: 'Dirección visual continuada para mantener una presencia editorial serena y constante.',
    highlights: [
      'Dirección de arte y guionaje incluidos',
      'Edición fotográfica y etalonaje incluidos',
      '1 ronda de ajustes menores (5 días tras entrega)',
      'Compromiso mínimo de 3 meses',
    ],
  },
  {
    id: 'prestigio',
    name: 'Prestigio',
    sessionsPerMonth: '2 jornadas / mes',
    hoursNote: 'Dos jornadas de producción',
    photosCount: '24 fotografías',
    videosCount: '8 vídeos',
    priceMonthly: '2.900 €/mes',
    summary: 'Cobertura visual amplia para marcas activas con lanzamientos, espacios o piezas de oficio periódicas.',
    highlights: [
      'Dirección de arte y guionaje incluidos',
      'Edición fotográfica y etalonaje incluidos',
      '1 ronda de ajustes menores (5 días tras entrega)',
      'Compromiso mínimo de 3 meses',
    ],
  },
  {
    id: 'signature',
    name: 'Signature',
    sessionsPerMonth: '3 jornadas / mes',
    hoursNote: 'Tres jornadas de producción integral',
    photosCount: '40 fotografías',
    videosCount: '12 vídeos',
    priceMonthly: '4.200 €/mes',
    summary: 'Dirección visual integral para firmas que requieren archivo editorial completo en fotografía y cine.',
    highlights: [
      'Dirección de arte y guionaje incluidos',
      'Edición fotográfica y etalonaje incluidos',
      '1 ronda de ajustes menores (5 días tras entrega)',
      'Compromiso mínimo de 3 meses',
    ],
  },
];

export const RETAINER_CONDITIONS = {
  maxConcurrentBrands: 'Cupo máximo de cuatro firmas simultáneas',
  included: [
    'Dirección de arte, guionaje, edición y tratamiento de color.',
    'Compromiso mínimo de 3 meses para construir coherencia visual real.',
    'Una ronda de ajustes menores dentro de los 5 días posteriores a la entrega.',
    'Trabajo por objetivos creativos y entregables, sin auditorías de horas.',
  ],
  billedSeparately: [
    'Casting y honorarios de modelos.',
    'Maquillaje, peluquería y estilismo externo.',
    'Desplazamientos fuera de zona habitual, alojamiento y dietas.',
    'Alquiler de espacios singulares y permisos de rodaje.',
  ],
  entryFlow: [
    { step: '01', title: 'Cuestionario de filtro', detail: 'Compartes el momento de tu marca, referencias y objetivos.' },
    { step: '02', title: 'Diagnóstico estético de 30 min', detail: 'Evaluamos encaje creativo, ritmo visual y disponibilidad de cupo.' },
    { step: '03', title: 'Acuerdo y reserva de fechas', detail: 'Activamos el calendario trimestral y comenzamos la dirección visual.' },
  ],
};

export const PUNTUAL_SESSIONS: PuntualSessionOption[] = [
  {
    id: 'puntual-espacio',
    title: 'Sesión de Espacio & Arquitectura',
    focus: 'Reportaje puntual de interiores, estudio, hotel o espacio comercial.',
    deliverables: 'Selección editada de fotografía editorial y secuencia opcional · Pendiente de confirmar alcance cerrado',
    investment: 'Pendiente de confirmar',
  },
  {
    id: 'puntual-retrato',
    title: 'Retrato de Autor & Marca Personal',
    focus: 'Sesión individual para fundadores, creadores, artistas o equipos directivos.',
    deliverables: 'Retratos en luz natural y contexto profesional · Pendiente de confirmar alcance cerrado',
    investment: 'Pendiente de confirmar',
  },
  {
    id: 'puntual-oficio',
    title: 'Materia, Producto & Oficio',
    focus: 'Cobertura específica de colección artesanal, producto o proceso de taller.',
    deliverables: 'Planos generales, detalles y pieza audiovisual breve opcional · Pendiente de confirmar',
    investment: 'Pendiente de confirmar',
  },
];

export const TIMELINE_MILESTONES: TimelineStage[] = [
  {
    index: '01',
    title: 'Los comienzos',
    description:
      'Primeros trabajos y construcción disciplinada de una mirada profesional, aprendiendo a leer la luz natural y la composición antes que el artificio.',
    disciplineNote: 'Base técnica y sensibilidad editorial',
    verificationNote: 'Etapa narrativa provisional · Fechas e hitos pendientes de documentar',
    imageSlot: {
      id: 'tl-01',
      title: 'Archivo de comienzos',
      framing: 'Atmósfera',
      aspectRatio: '4:3',
      alt: 'Espacio reservado para imagen de archivo de los comienzos de Lidia Aparicio',
      caption: 'Archivo · Etapa 01',
      statusNote: 'Pendiente de confirmar',
    },
  },
  {
    index: '02',
    title: 'La experiencia',
    description:
      'Años de fotografía industrial, médica, publicitaria y documental. Un recorrido exigente que aporta rigor, solvencia en entornos complejos y respeto absoluto por la realidad del trabajo.',
    disciplineNote: 'Fotografía industrial · Médica · Publicitaria · Documental',
    verificationNote: 'Etapa narrativa provisional · Clientes, fechas y proyectos pendientes de confirmar',
    imageSlot: {
      id: 'tl-02',
      title: 'Archivo industrial, médico y documental',
      framing: 'Plano general',
      aspectRatio: '4:3',
      alt: 'Espacio reservado para fotografía representativa de trayectoria industrial o documental',
      caption: 'Archivo · Etapa 02',
      statusNote: 'Pendiente de confirmar',
    },
  },
  {
    index: '03',
    title: 'La evolución creativa',
    description:
      'Incorporación del lenguaje cinematográfico, el movimiento pausado y nuevas herramientas de dirección visual para unir imagen fija y narrativa audiovisual en un mismo criterio.',
    disciplineNote: 'Lenguaje cinematográfico y dirección creativa',
    verificationNote: 'Etapa narrativa provisional · Fechas e hitos pendientes de documentar',
    imageSlot: {
      id: 'tl-03',
      title: 'Evolución audiovisual',
      framing: 'Secuencia',
      aspectRatio: '4:3',
      alt: 'Espacio reservado para imagen de rodaje o evolución audiovisual',
      caption: 'Archivo · Etapa 03',
      statusNote: 'Pendiente de confirmar',
    },
  },
  {
    index: '04',
    title: 'El presente',
    description:
      'Lidia Aparicio — Exclusive Visual Director. Dirección visual delegada para marcas con esencia, uniendo 20 años de oficio confirmado con una curaduría contemporánea.',
    disciplineNote: 'Dirección visual delegada · Estudio Nómada',
    verificationNote: 'Retrato actual y biografía definitiva pendientes de confirmar',
    imageSlot: {
      id: 'tl-04',
      title: 'Retrato actual — Lidia Aparicio',
      framing: 'Retrato',
      aspectRatio: '3:4',
      alt: 'Espacio reservado para el retrato actual de Lidia Aparicio',
      caption: 'Retrato de autora · Pendiente de confirmar',
      statusNote: 'Pendiente de confirmar',
    },
  },
];

export const FAQ_ITEMS = [
  {
    question: '¿Por qué trabajar con una colaboración mensual en lugar de sesiones aisladas?',
    answer:
      'La identidad visual necesita continuidad. Una colaboración mensual (mínimo 3 meses) permite construir un archivo coherente entre fotografía, cine y dirección de arte sin empezar de cero en cada campaña. Para necesidades concretas existe siempre la vía de sesiones puntuales («Elige tu sesión»).',
  },
  {
    question: '¿Cuántas marcas pueden acceder simultáneamente al servicio mensual?',
    answer:
      'El cupo máximo es de cuatro firmas simultáneas para garantizar dedicación directa, dirección personal y ausencia de delegación mecánica.',
  },
  {
    question: '¿Cómo funciona el Estudio Nómada si mi empresa está en otra ciudad?',
    answer:
      'La producción se realiza directamente en tu localización real. Los desplazamientos habituales cercanos se coordinan en el diagnóstico; desplazamientos específicos, alojamiento, dietas o alquiler de espacios y permisos se presupuestan de forma transparente aparte.',
  },
  {
    question: '¿Qué ocurre después de enviar el cuestionario de diagnóstico?',
    answer:
      'Revisamos el encaje y concertamos un diagnóstico estético de 30 minutos para valorar objetivos, calendario y disponibilidad antes de formalizar la reserva de fechas.',
  },
];
