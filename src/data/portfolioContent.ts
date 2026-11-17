import autor1Img from '../images/autor-1.jpg';
import autor2Img from '../images/autor-2.jpg';
import cocina1Img from '../images/cocina-1.jpg';
import comida1Img from '../images/comida-1.jpg';
import comida2Img from '../images/comida-2.jpg';
import editorial1Img from '../images/editorial-1.jpg';
import editorial2Img from '../images/editorial-2.jpg';
import producto1Img from '../images/producto-1.jpg';

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
    title: 'Editorial de moda bajo estructura metálica',
    framing: 'Retrato',
    aspectRatio: '3:4',
    src: editorial2Img,
    alt: 'Fotografía editorial de moda con americana de cuadros y pantalón de cuero bajo estructura arquitectónica',
    caption: 'Narrativa y arquitectura · Serie editorial',
    statusNote: 'Archivo real',
  },
  secondaryTop: {
    id: 'hero-detail-1',
    title: 'Composición gastronómica entre libros de arte y lino',
    framing: 'Detalle',
    aspectRatio: '4:3',
    src: comida1Img,
    alt: 'Bodegón cenital gastronómico con libros de arte, cerámica artesanal y lino natural',
    caption: 'Materia & Oficio · Composición cenital',
    statusNote: 'Archivo real',
  },
  secondaryBottom: {
    id: 'hero-atmosphere-1',
    title: 'Interior clásico Cadillac en rojo y cromo',
    framing: 'Detalle',
    aspectRatio: '4:3',
    src: producto1Img,
    alt: 'Fotografía de detalle del salpicadero y volante clásico de época en rojo y marfil',
    caption: 'Producto & Detalle · Luz natural',
    statusNote: 'Archivo real',
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
    title: 'Materia, Mesa & Oficio',
    subtitle: 'Gastronomía, coctelería, producto y dirección de arte en luz natural',
    collectionId: 'materia',
    collectionTitle: 'Materia & Oficio',
    isConceptualSample: false,
    contextText:
      'Selección de fotografía gastronómica, coctelería y producto donde la composición editorial, los materiales nobles —lino, cerámica, cemento, cromo— y el contraluz real construyen el carácter de cada pieza sin filtros uniformes.',
    coverSlot: {
      id: 'p1-cover',
      title: 'Mesa editorial con libros de arte y cerámica',
      framing: 'Plano general',
      aspectRatio: '4:3',
      src: comida1Img,
      alt: 'Vista cenital de mesa con lino blanco, cerámica artesanal, café y libros de arte',
      caption: 'Fig. 01 · Composición editorial gastronómica sobre cemento y lino',
      statusNote: 'Archivo real',
    },
    gallerySlots: [
      {
        id: 'p1-01',
        title: 'Coctelería en contraluz sobre barra',
        framing: 'Detalle',
        aspectRatio: '3:4',
        src: cocina1Img,
        alt: 'Vaso alto de cóctel con pepino iluminado a contraluz junto a utensilios de coctelería',
        caption: 'Fig. 02 · Luz trasera y vidrio en coctelería de autor',
        statusNote: 'Archivo real',
      },
      {
        id: 'p1-02',
        title: 'Bodegón sobre terciopelo y prensa editorial',
        framing: 'Plano general',
        aspectRatio: '4:3',
        src: comida2Img,
        alt: 'Composición cenital con repostería artesanal, revistas abiertas, flores y terciopelo',
        caption: 'Fig. 03 · Diálogo entre gastronomía, textura textil y publicación impresa',
        statusNote: 'Archivo real',
      },
      {
        id: 'p1-03',
        title: 'Detalle de salpicadero clásico y cromados',
        framing: 'Detalle',
        aspectRatio: '4:3',
        src: producto1Img,
        alt: 'Detalle del interior de un automóvil clásico con volante marfil y salpicadero rojo',
        caption: 'Fig. 04 · Fotografía de producto y materia clásica en luz diurna',
        statusNote: 'Archivo real',
      },
      {
        id: 'p1-04',
        title: 'Secuencia de taller y proceso artesanal',
        framing: 'Secuencia',
        aspectRatio: '16:9',
        alt: 'Espacio reservado para futura secuencia de taller o proceso artesanal',
        caption: 'Fig. 05 · Espacio reservado para ampliación de serie',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p1-05',
        title: 'Detalle de manos y oficio',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Espacio reservado para fotografía de manos y oficio',
        caption: 'Fig. 06 · Espacio reservado para ampliación de serie',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    videoSlot: {
      title: 'Making-of o pieza breve de proceso artesanal',
      duration: 'Pendiente de confirmar',
      posterSrc: comida1Img,
      note: 'Espacio reservado para vídeo silencioso con póster fotográfico',
    },
    credits: {
      rol: 'Fotografía y dirección visual',
      cliente: 'Pendiente de confirmar',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Archivo aportado para portfolio',
    },
  },
  {
    id: 'espacios-002',
    slug: 'arquitectura-y-atmosfera',
    chapterCode: 'Capítulo — 002',
    title: 'Espacios & Arquitectura',
    subtitle: 'Volúmenes urbanos, interiores singulares y perspectiva',
    collectionId: 'espacios',
    collectionTitle: 'Espacios & Arquitectura',
    isConceptualSample: false,
    contextText:
      'Diálogo entre el sujeto, el objeto y el espacio que los envuelve: estructuras metálicas, plazas monumentales entre bruma de agua e interiores de época capturados con perspectiva limpia.',
    coverSlot: {
      id: 'p2-cover',
      title: 'Arquitectura metálica y línea de fuga',
      framing: 'Retrato',
      aspectRatio: '3:4',
      src: editorial2Img,
      alt: 'Retrato editorial en pasarela arquitectónica con vigas metálicas y fuga en perspectiva',
      caption: 'Fig. 01 · Estructura industrial y perspectiva arquitectónica',
      statusNote: 'Archivo real',
    },
    gallerySlots: [
      {
        id: 'p2-01',
        title: 'Interior de automóvil clásico',
        framing: 'Plano general',
        aspectRatio: '4:3',
        src: producto1Img,
        alt: 'Interior de coche clásico rojo y marfil con instrumentación cromada',
        caption: 'Fig. 02 · Diseño interior y geometría de época',
        statusNote: 'Archivo real',
      },
      {
        id: 'p2-02',
        title: 'Torre histórica y bruma de fuente',
        framing: 'Retrato',
        aspectRatio: '3:4',
        src: editorial1Img,
        alt: 'Figura editorial frente a fuente monumental y torre del reloj entre bruma de agua',
        caption: 'Fig. 03 · Arquitectura histórica y atmósfera abierta',
        statusNote: 'Archivo real',
      },
      {
        id: 'p2-03',
        title: 'Espacio interior en luz natural',
        framing: 'Plano general',
        aspectRatio: '4:3',
        alt: 'Espacio reservado para reportaje de interiores y arquitectura',
        caption: 'Fig. 04 · Espacio reservado para ampliación de archivo',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p2-04',
        title: 'Detalle constructivo y sombra real',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Espacio reservado para detalle arquitectónico',
        caption: 'Fig. 05 · Espacio reservado para ampliación de archivo',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p2-05',
        title: 'Panorámica espacial',
        framing: 'Secuencia',
        aspectRatio: '16:9',
        alt: 'Espacio reservado para vista panorámica de arquitectura',
        caption: 'Fig. 06 · Espacio reservado para ampliación de archivo',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    credits: {
      rol: 'Fotografía y dirección visual',
      cliente: 'Pendiente de confirmar',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Archivo aportado para portfolio',
    },
  },
  {
    id: 'narrativa-003',
    slug: 'narrativa-humana-retrato',
    chapterCode: 'Capítulo — 003',
    title: 'Narrativa Humana',
    subtitle: 'Retrato editorial, presencia escénica y gestos con carácter',
    collectionId: 'narrativa',
    collectionTitle: 'Narrativa Humana',
    isConceptualSample: false,
    contextText:
      'Retratos editoriales donde el vestuario, la actitud y la luz natural construyen presencia sin artificio. Cada encuadre combina fuerza compositiva con cercanía humana.',
    coverSlot: {
      id: 'p3-cover',
      title: 'Retrato editorial frente a fuente monumental',
      framing: 'Retrato',
      aspectRatio: '3:4',
      src: editorial1Img,
      alt: 'Retrato de cuerpo entero con vestido escultórico de pétalos multicolores frente a fuente y torre',
      caption: 'Fig. 01 · Retrato editorial y puesta en escena exterior',
      statusNote: 'Archivo real',
    },
    gallerySlots: [
      {
        id: 'p3-01',
        title: 'Retrato urbano bajo estructura',
        framing: 'Retrato',
        aspectRatio: '3:4',
        src: editorial2Img,
        alt: 'Retrato editorial con americana sastre, pantalón de cuero y botas de ante',
        caption: 'Fig. 02 · Retrato de moda y carácter arquitectónico',
        statusNote: 'Archivo real',
      },
      {
        id: 'p3-02',
        title: 'Retrato inmerso en agua y luz frondosa',
        framing: 'Retrato',
        aspectRatio: '3:4',
        src: autor1Img,
        alt: 'Retrato conceptual de mujer en el agua con corona dorada y ornamentos botánicos',
        caption: 'Fig. 03 · Retrato simbólico en entorno natural',
        statusNote: 'Archivo real',
      },
      {
        id: 'p3-03',
        title: 'Gesto espontáneo bajo luz tamizada',
        framing: 'Retrato',
        aspectRatio: '4:3',
        src: autor2Img,
        alt: 'Retrato luminoso en bosque con flores y luz solar filtrada',
        caption: 'Fig. 04 · Expresión natural en exterior boscoso',
        statusNote: 'Archivo real',
      },
      {
        id: 'p3-04',
        title: 'Escena documental de industria o clínica',
        framing: 'Plano general',
        aspectRatio: '16:9',
        alt: 'Espacio reservado para archivo documental industrial o médico',
        caption: 'Fig. 05 · Espacio reservado para ampliación documental',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p3-05',
        title: 'Retrato en contexto de oficio',
        framing: 'Retrato',
        aspectRatio: '4:3',
        alt: 'Espacio reservado para retrato en taller o estudio',
        caption: 'Fig. 06 · Espacio reservado para ampliación documental',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    credits: {
      rol: 'Fotografía y dirección artística',
      cliente: 'Pendiente de confirmar',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Archivo aportado para portfolio',
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
      'Territorio de exploración creativa propia: personajes simbólicos, botánica, agua, vestuario escultórico y narrativas de fantasía tratadas con el rigor técnico del estudio.',
    coverSlot: {
      id: 'p4-cover',
      title: 'Personaje botánico en agua oscura',
      framing: 'Retrato',
      aspectRatio: '3:4',
      src: autor1Img,
      alt: 'Retrato artístico en el agua con corona solar dorada, frutas y vegetación de bosque',
      caption: 'Fig. 01 · Serie conceptual · Agua, fruta y oro orgánico',
      statusNote: 'Archivo real',
    },
    gallerySlots: [
      {
        id: 'p4-01',
        title: 'Escena floral de fantasía en luz de bosque',
        framing: 'Plano general',
        aspectRatio: '4:3',
        src: autor2Img,
        alt: 'Escena de fantasía en bosque verde con peonías, pastel floral y luz solar suave',
        caption: 'Fig. 02 · Serie conceptual · Jardín encantado y luz filtrada',
        statusNote: 'Archivo real',
      },
      {
        id: 'p4-02',
        title: 'Silueta escultórica entre bruma',
        framing: 'Retrato',
        aspectRatio: '3:4',
        src: editorial1Img,
        alt: 'Figura de pie sobre piedra junto a chorros de agua y vestido de escamas de color',
        caption: 'Fig. 03 · Vestuario escultórico y atmósfera etérea',
        statusNote: 'Archivo real',
      },
      {
        id: 'p4-03',
        title: 'Estudio cromático en sombra',
        framing: 'Detalle',
        aspectRatio: '3:4',
        alt: 'Espacio reservado para próxima lámina de obra de autor',
        caption: 'Fig. 04 · Espacio reservado para ampliación de serie',
        statusNote: 'Pendiente de confirmar',
      },
      {
        id: 'p4-04',
        title: 'Secuencia cinematográfica',
        framing: 'Secuencia',
        aspectRatio: '16:9',
        alt: 'Espacio reservado para fotograma cinematográfico',
        caption: 'Fig. 05 · Espacio reservado para ampliación de serie',
        statusNote: 'Pendiente de confirmar',
      },
    ],
    videoSlot: {
      title: 'Ensayo visual en movimiento',
      duration: 'Pendiente de confirmar',
      posterSrc: autor2Img,
      note: 'Espacio reservado para pieza audiovisual de autor',
    },
    credits: {
      rol: 'Dirección artística y fotografía',
      cliente: 'Obra personal / Pendiente de confirmar',
      anio: 'Pendiente de confirmar',
      localizacion: 'Pendiente de confirmar',
      permisos: 'Archivo aportado para portfolio',
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
    verificationNote: 'Muestra visual comercial de archivo · Fechas y clientes pendientes de confirmar',
    imageSlot: {
      id: 'tl-02',
      title: 'Archivo publicitario y producto',
      framing: 'Plano general',
      aspectRatio: '4:3',
      src: producto1Img,
      alt: 'Fotografía de detalle de automóvil clásico como muestra de oficio técnico',
      caption: 'Archivo · Fotografía comercial y detalle técnico',
      statusNote: 'Archivo real',
    },
  },
  {
    index: '03',
    title: 'La evolución creativa',
    description:
      'Incorporación del lenguaje cinematográfico, el movimiento pausado y nuevas herramientas de dirección visual para unir imagen fija y narrativa audiovisual en un mismo criterio.',
    disciplineNote: 'Lenguaje cinematográfico y dirección creativa',
    verificationNote: 'Muestra de dirección artística · Fechas e hitos pendientes de documentar',
    imageSlot: {
      id: 'tl-03',
      title: 'Dirección artística y obra conceptual',
      framing: 'Retrato',
      aspectRatio: '3:4',
      src: autor1Img,
      alt: 'Retrato artístico en entorno natural como muestra de evolución creativa',
      caption: 'Archivo · Dirección artística',
      statusNote: 'Archivo real',
    },
  },
  {
    index: '04',
    title: 'El presente',
    description:
      'Lidia Aparicio — Exclusive Visual Director. Dirección visual delegada para marcas con esencia, uniendo 20 años de oficio confirmado con una curaduría contemporánea.',
    disciplineNote: 'Dirección visual delegada · Estudio Nómada',
    verificationNote: 'Retrato actual de la autora y biografía definitiva pendientes de confirmar',
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
