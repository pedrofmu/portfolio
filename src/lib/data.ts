export type Solution = {
  title: string;
  description: string;
  outcome: string;
  icon: "speech" | "smile" | "plant";
};

export type CaseStudy = {
  title: string;
  client: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
};

export const hero = {
  name: "Pedro FM",
  title: "OPTIMIZA, AUTOMATIZA\nY DIGITALIZA TU NEGOCIO",
  subtitle: "Desarrollo de software \na medida para PYMES",
};

export const solutions: Solution[] = [
  {
    title: "PROGRAMAS\nINTERNOS",
    description:
      "Desarrollo de aplicaciones internas adaptadas a los procesos de tu empresa: gestion de inventario, control de tareas, seguimiento de proyectos...",
    outcome: "REDUCE ERRORES Y ELIMINA PROCESOS MANUALES",
    icon: "speech",
  },
  {
    title: "HERRAMIENTAS CON\nIA",
    description:
      "Implementacion de inteligencia artificial en tus sistemas: bots para contestar clientes, analisis de datos, asistentes inteligentes...",
    outcome: "AUMENTA PRODUCTIVIDAD Y REDUCE TAREAS REPETITIVAS",
    icon: "smile",
  },
  {
    title: "AUTOMATIZACIONES",
    description:
      "Conecto tus herramientas existentes (CRM, facturacion, email, APIs, pagos) para automatizar procesos repetitivos y evitar trabajo manual.",
    outcome: "MENOS TAREAS MANUALES Y MAYOR EFICIENCIA OPERATIVA",
    icon: "plant",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "SoloDB (Iris)",
    client: "Con: JieldBV",
    description:
    "Herramienta que recibe y organiza automáticamente los archivos subidos por los usuarios a SoloDB. Menos errores, cero fricción.",
    image: "/assets/caso-iris.jpg",
    imageAlt: "Interfaz de SoloDB mostrando la organización de experimentos",
    link: "https://solodb.net/",
  },
{
  title: "Chatbot APCoatings",
  client: "Con: ABAD PINTURAS S.L.",
  description:
  "Chatbot de IA que transforma contenido técnico en respuestas claras y convierte visitas en leads cualificados para el equipo comercial.",
  image: "/assets/caso-apcoatings.webp",
  imageAlt: "Chatbot con IA integrado en la web de APCoatings",
  link: "https://apcoatings.net/",
},
{
  title: "Agenda B2B",
  client: "Con: Yolanda Muñoz del Águila",
  description:
  "App que empareja empresas por intereses y genera agendas de reuniones útiles en minutos. Estrenada en la I Jornada Profesional Biocultura Madrid 2024.",
  image: "/assets/caso-agenda-b2b.webp",
  imageAlt: "Agenda de reuniones B2B generada automáticamente",
  link: "https://github.com/pedrofmu/match-jornada-profesional",
},
];

export const about = {
  name: "Pedro Fernandez Munoz",
  role: "Desarrollador de sistemas empresariales",
  photo: "/assets/pedro-fernandez.jpg",
  photoAlt: "Retrato de Pedro Fernandez Munoz",
  paragraphs: [
    "Soy **Pedro Fernández Muñoz** y ayudo a empresas a mejorar su operativa con sistemas internos, integraciones y automatización de procesos.",
    "Tengo el título de **Administración de Sistemas** y certificaciones de **Amazon Web Services (AWS)**. Puedes ver todos mis certificados __aquí__.",
    "Desarrollo soluciones a medida con NextJS, React, Laravel, Go, PHP, TypeScript y Node.js, siempre enfocadas en resultados reales para el negocio.",
    "También diseño y despliego infraestructuras fiables, tanto en la nube con AWS como en servidores locales con Linux y Windows Server.",
  ],
};

export const contact = {
  title: "ENTREMOS EN\nCONTACTO",
  description:
    "Optimiza, automatiza y agiliza tu negocio enviando un correo a:",
  cta: "ENVIAR EMAIL",
  href: "mailto:hola@pedrofm.dev",
};
