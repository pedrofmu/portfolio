/**
 * Castellano: pymes de toda España, desde Alcoy y en remoto, y en persona en
 * las comarcas de alrededor (ver `SITE.areaServed`). Es el diccionario de
 * referencia: su forma es el tipo `Dictionary` que cumplen los demás.
 */
export const es = {
  meta: {
    /** 60 caracteres: entra entero en el SERP. Primero el servicio, luego el nombre. */
    title: "Desarrollo de software a medida para pymes · Pedro Fernández",
    /**
     * 146 caracteres: por debajo del corte del SERP. El título no lleva ciudad
     * (se trabaja con toda España); la señal local va aquí: «programador» y
     * «Alcoy», «Alicante» y «alrededores», que Google resalta si se buscan.
     */
    description:
      "Programador freelance en Alcoy. Software a medida e IA para pymes de Alicante y alrededores, y en remoto para toda España. Primera llamada gratis.",
  },
  skipLink: "Saltar al contenido",
  newTab: "(se abre en una pestaña nueva)",
  nav: {
    label: "Secciones",
    home: "pedrofm, volver al inicio",
    sections: {
      servicios: "Servicios",
      casos: "Proyectos",
      opiniones: "Opiniones",
      "donde-me-has-visto": "Dónde me has visto",
      proceso: "Cómo trabajo",
      "sobre-mi": "Quién soy",
    },
    cta: "Cuéntame tu caso",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
  },
  hero: {
    title: { start: "Digitaliza tu pyme y", highlight: "recupera horas", end: "cada semana." },
    lead: "Desarrollo sistemas internos y herramientas con IA a medida para resolver los problemas de tu negocio.",
    primary: "Cuéntame tu caso",
    secondary: "Ver casos de éxito",
    resultsLabel: "Resultados de proyectos recientes",
    resultPrefix: "Caso de éxito:",
    results: {
      biocultura: {
        title: "Toda la gestión del evento en un solo sitio",
        project: "Intranet BioCultura",
      },
      "signature-recognition": {
        title: "Firmas comprobadas desde una foto",
        project: "Signature recognition",
      },
      apcoatings: { title: "Nuevos leads desde el chatbot", project: "APCoatings" },
    },
  },
  servicios: {
    title: "Servicios",
    intro:
      "Software a medida e inteligencia artificial para pymes. Cuéntame qué le quita tiempo a tu equipo y vemos cómo resolverlo.",
    items: [
      {
        title: "Programas a medida",
        lead: "Una herramienta que encaje con tu forma de trabajar.",
        body: "Desarrollo aplicaciones internas para gestionar inventario, tareas y proyectos. Los datos que hoy tienes repartidos en Excels pasan a un sitio donde todo el equipo puede trabajar.",
      },
      {
        title: "Inteligencia artificial",
        lead: "Ayuda con las consultas, los datos y el trabajo repetitivo.",
        body: "Creo chatbots para atender a tus clientes y asistentes que analizan datos, ordenan información y preparan trabajo para tu equipo. Partimos de una tarea concreta que quieras resolver.",
      },
    ],
  },
  casos: {
    title: "Casos reales de digitalización de pymes",
    before: "Antes",
    now: "Ahora",
    readFull: "Leer el caso completo",
    hideFull: "Ocultar el caso completo",
    pause: "Pausar vídeo",
    play: "Reproducir vídeo",
    items: {
      biocultura: {
        name: "Intranet BioCultura",
        result: "Toda la gestión del evento en un solo sitio.",
        before:
          "En VidaSana, las propuestas de actividades llegaban por correo y a una web anticuada. Todo el equipo compartía una cuenta y los ponentes salían duplicados.",
        now: "Un formulario público recoge las propuestas y un panel privado sirve para revisarlas, validarlas y publicarlas, con una cuenta por persona, filtros y exportación a Excel.",
        detail: [
          "Las propuestas de actividades se gestionaban por correo y a través de una web anticuada en la que nadie encontraba nada: la interfaz no guiaba, y cada tarea empezaba por averiguar dónde estaba cada cosa y cómo se usaba.",
          "Por debajo el problema era peor. Los usuarios estaban escritos en el propio código y todo el equipo compartía una única cuenta. La base de datos no exigía unicidad, así que registros como los ponentes aparecían duplicados y filtrar era imposible. Tampoco había forma de exportar a Excel.",
          "La intranet lo reordena de arriba abajo: un formulario público para recibir las propuestas y un panel privado para revisarlas, validarlas y publicarlas, con una cuenta por persona, registros únicos, filtros que funcionan y exportación a Excel.",
        ],
        videoLabel:
          "Vídeo sin sonido: una actividad pasa de la propuesta al programa de BioCultura.",
        linkLabel: "Ver el proyecto en LinkedIn",
      },
      apcoatings: {
        name: "Chatbot APCoatings",
        result: "Las visitas a la web se convierten en leads cualificados.",
        before:
          "En la web de Abad Pinturas, quien tenía una duda concreta debía buscar la respuesta entre el catálogo y unas fichas técnicas que no todo el mundo entiende.",
        now: "El chatbot cruza el catálogo con las fichas técnicas y recomienda el producto en lenguaje llano, a cualquier hora. El equipo recibe la consulta ya encauzada.",
        detail: [
          "Quien entra en la web de APCoatings suele llegar con una duda muy concreta: qué producto usar para una superficie o una situación determinada. La respuesta existe, pero está repartida entre el catálogo y las fichas técnicas, y escrita en un lenguaje que no todo el mundo maneja.",
          "El chatbot cruza el catálogo de la web con esas fichas técnicas y recomienda producto según el caso de uso, explicándolo en lenguaje llano. Funciona a cualquier hora, también cuando no hay nadie al otro lado.",
          "Así una visita que se habría ido sin respuesta se convierte en un lead cualificado, y el equipo recibe la consulta ya encauzada.",
        ],
        videoLabel:
          "Vídeo sin sonido: el chatbot de APCoatings recomienda un sistema de pintura a un cliente.",
        linkLabel: "apcoatings.net",
      },
      "signature-recognition": {
        name: "Signature recognition",
        result: "Firmas comprobadas desde una foto, sin revisión manual.",
        before:
          "En el gestor de permisos de Jield BV, que se usa en laboratorios, los permisos se firman a mano en papel. Saber qué firmas faltaban obligaba a revisarlos uno a uno.",
        now: "Basta una foto del papel firmado, aunque tenga sombras o esté en ángulo: el servicio encuentra cada casilla y comprueba si está firmada. Si no puede leer una, pide otra foto.",
        detail: [
          "Jield BV tiene un gestor de permisos que se usa en laboratorios. Los permisos se firman a mano en papel, y saber quién ha firmado y qué firmas faltan requería revisar cada uno.",
          "Desarrollé un servicio con FastAPI y OpenCV que añade a cada casilla de firma del PDF dos marcadores ArUco y un código DataMatrix con su identificador. Al recibir una foto del papel firmado, el servicio localiza las casillas, corrige la perspectiva de cada una y compara la tinta con el papel de alrededor para detectar si está firmada.",
          "Así, el gestor de permisos sabe qué firmas están y cuáles faltan, sin revisión manual ni escáner. La comparación con el papel permite trabajar con sombras y fotos tomadas en ángulo, incluso desde móviles básicos. Si no se puede leer el identificador de una casilla, el servicio pide otra foto en lugar de atribuir la firma a una persona equivocada.",
        ],
        videoLabel:
          "Vídeo sin sonido: el servicio detecta qué casillas de un permiso están firmadas a partir de una foto.",
        linkLabel: "jield.dev",
      },
    },
  },
  opiniones: {
    title: "Lo que dicen quienes ya trabajan conmigo",
    quote: [
      "He tenido el placer de trabajar con Pedro en la integración de un chatbot con IA para la web de Abad Pinturas (apcoatings.net), y el resultado ha superado las expectativas.",
      "Lo que distingue a Pedro de otros desarrolladores es que no se limita a entregar código: entiende el negocio del cliente y orienta cada decisión técnica hacia un objetivo real. En nuestro caso, convertir el tráfico web en oportunidades comerciales.",
      "Destaco especialmente su comunicación transparente durante todo el proceso, su capacidad para traducir conceptos técnicos en términos comprensibles, y su compromiso con el resultado final.",
      "Sin duda un partner de confianza para cualquier proyecto de tecnología aplicada a negocio. Lo recomiendo sin reservas.",
    ],
    /** Idioma de la cita si no es el de la página (las palabras originales, en castellano). */
    quoteLang: null as "es" | null,
    /** Aviso de traducción: nunca se presenta una traducción como palabras literales del cliente. */
    translatedNote: null as string | null,
    more: "Leer más",
    less: "Leer menos",
    toggleSuffix: " de la opinión de Antonio Miralles Abad",
    role: "Gerente · Abad Pinturas S.L.",
    client: "Cliente de Pedro",
  },
  apariciones: {
    title: "Charlas, artículos y otras apariciones",
    label: "Dónde me has visto",
    carousel: "carrusel",
    prev: "Aparición anterior",
    next: "Aparición siguiente",
    goTo: "Ir a la aparición",
    items: {
      biocultura: {
        alt: "Ponencia de Pedro Fernández en BioCultura Madrid 2025",
        category: "Ponencia",
        title: "BioCultura Madrid 2025 · La IA en los procesos de certificación",
        linkLabel: "Ver la ponencia en LinkedIn",
      },
      medium: {
        alt: "Pedro Fernández, autor de los artículos publicados en Medium",
        category: "Artículos",
        title: "Escribo sobre informática en Medium",
        linkLabel: "Leer en medium.com/@pedrofm",
      },
    },
  },
  proceso: {
    title: "Cómo trabajo",
    lead: "Hablas directamente conmigo, desde la primera llamada hasta la entrega.",
    cta: "Cuéntame tu caso",
    steps: [
      {
        title: "Me cuentas qué necesitas",
        body: "Empezamos con una llamada gratuita de 30 minutos para entender cómo trabajáis y dónde está el problema. Si no te puedo ayudar, te lo digo.",
      },
      {
        title: "Acordamos alcance y precio",
        body: "Te paso una propuesta con lo que voy a hacer, los plazos y un presupuesto cerrado. Lo dejamos acordado antes de empezar a programar.",
      },
      {
        title: "Pruebas los avances",
        body: "Durante el desarrollo te enseño versiones que puedes usar. Las revisamos juntos para comprobar que la herramienta encaja con vuestro trabajo.",
      },
      {
        title: "Lo ponemos en marcha",
        body: "Te entrego la herramienta funcionando y enseño a tu equipo a usarla. Después de la entrega, sigo disponible para daros soporte.",
      },
    ],
  },
  sobreMi: {
    portraitAlt: "Retrato de Pedro Fernández Muñoz",
    paragraphs: [
      "Soy Pedro, programador y desarrollador de software freelance en Alcoy (Alicante). Trabajo con pymes de toda España, en remoto o en persona, para digitalizar sus operaciones: menos trabajo manual, menos errores y herramientas que de verdad se usan.",
      "Cuando trabajas conmigo, hablas siempre con la misma persona: quien entiende tu problema es quien lo programa. Sin comerciales de por medio, sin proyectos que pasan por cinco manos.",
    ],
    credentialsLabel: "Garantía técnica:",
    credentials:
      "titulado en Administración de Sistemas y certificado por AWS. Desarrollo con Next.js, React, Laravel, Go, TypeScript y Node.js, con infraestructura en AWS o en tus propios servidores.",
  },
  contacto: {
    title: "Cuéntame tu caso",
    lead: "Valoración y presupuesto del proyecto gratuitos y sin compromiso. Te digo claro si te puedo ayudar.",
    email: "Escríbeme:",
    reply: "Respuesta en menos de 24\u00a0h",
  },
  footer: {
    tagline:
      "Desarrollo de software a medida para pymes de toda España. Desde Alcoy (Alicante), en remoto.",
    contact: "Contacto",
    legalTitle: "Aviso legal y privacidad",
    /** Termina justo antes del email, que va enlazado detrás. */
    legal:
      "Responsable: Pedro Fernández Muñoz (Alcoy, Alicante). Este sitio no utiliza cookies de seguimiento ni formularios que almacenen datos. Los datos personales que me facilites por email, teléfono o WhatsApp se utilizan únicamente para responder a tu consulta y preparar una propuesta, conforme al RGPD (UE) 2016/679 y a la LOPDGDD 3/2018. No se ceden a terceros ni se usan con fines publicitarios. Puedes ejercer tus derechos de acceso, rectificación y supresión escribiendo a",
    place: "Alcoy, Alicante",
    backToTop: "Volver arriba",
  },
  notFound: {
    label: "Error 404",
    title: "Esta página no existe",
    body: "Puede que el enlace esté mal escrito o que la página ya no esté. Todo lo que busques sobre software a medida para tu pyme está en la página principal.",
    cta: "Volver al inicio",
  },
  jsonLd: {
    jobTitle: "Desarrollador de software freelance",
    serviceType: "Desarrollo de software a medida",
    catalogName: "Servicios de desarrollo de software para pymes",
    services: [
      {
        name: "Programas internos a medida",
        description:
          "Aplicaciones de gestión para inventario, tareas y proyectos que sustituyen los Excels y los procesos manuales de la empresa.",
      },
      {
        name: "Herramientas con inteligencia artificial",
        description:
          "Chatbots de atención al cliente, análisis de datos y asistentes que responden y preparan el trabajo del equipo.",
      },
    ],
    knowsAbout: [
      "Digitalización de pymes",
      "Software de gestión a medida",
      "Inteligencia artificial aplicada a negocio",
      "Desarrollo web",
    ],
    personDescription:
      "Desarrollador de software freelance en Alcoy (Alicante). Ayuda a pymes de la provincia de Alicante y de toda España a digitalizar sus operaciones con programas internos e IA.",
    country: "España",
    europe: "Unión Europea",
  },
};

export type Dictionary = typeof es;
