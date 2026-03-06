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
  title: "OPTIMIZA, AUTOMATIZA\nY AGILIZA TU EMPRESA",
  subtitle: "Integra las nuevas tecnologias\nen los procesos de tu negocio",
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
    title: "Generador de agenda B2B",
    client: "Con: Yolanda Munoz del Aguila",
    description:
      "Esta aplicacion conecto empresas con intereses compatibles para organizar reuniones utiles durante la I Jornada Profesional Biocultura Madrid 2024.",
    image: "/assets/caso-agenda-b2b.jpg",
    imageAlt: "Captura de hoja de calculo del generador de agenda B2B",
    link: "https://github.com/pedrofmu/match-jornada-profesional",
  },
  {
    title: "SoloDb",
    client: "Con: JieldBV",
    description:
      "SoloDB ayuda a equipos de investigacion a guardar sus experimentos y resultados de forma ordenada, para que cualquiera pueda entenderlos y repetirlos.",
    image: "/assets/caso-solodb.webp",
    imageAlt: "Diagrama de simplicidad usado en la plataforma SoloDb",
    link: "https://solodb.net/",
  },
  {
    title: "Iris",
    client: "Con: JieldBV",
    description:
      "Iris es una herramienta que recibe y organiza los archivos que suben las personas usuarias a SoloDB, para que todo llegue bien y sin complicaciones.",
    image: "/assets/caso-iris.jpg",
    imageAlt: "Diagrama de flujo y estados de la herramienta Iris",
    link: "https://pedrofm.dev/project-demo/iris-docs.pdf",
  },
];

export const about = {
  name: "Pedro Fernandez Munoz",
  role: "Desarrollador de sistemas empresariales",
  photo: "/assets/pedro-fernandez.jpg",
  photoAlt: "Retrato de Pedro Fernandez Munoz",
  paragraphs: [
    "Soy **Pedro Fernández Muñoz**, desarrollador especializado en sistemas internos, integraciones y automatización de procesos empresariales.",
    "Tengo el titulo de **Administración de sistemas** y certificaciones de **Amazon web services**. Puedes ver todos mis certificados __aquí__.",
    "Para ayudarte en tu negocio utilizo herramientas como: NextJS, React, Laravel, Go, PHP, Typescript y NodeJS.",
    "Ademas tengo experiencia desplegando la infraestructura tanto en sistemas en la nube con AWS como en local con linux y windows server.",
  ],
};

export const contact = {
  title: "ENTREMOS EN\nCONTACTO",
  description:
    "Optimiza, automatiza y agiliza tu negocio enviando un correo a:\nhola@pedrofm.dev",
  cta: "ENVIAR EMAIL",
  href: "mailto:hola@pedrofm.dev",
};
