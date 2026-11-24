import { TALK_DOWNLOADS } from "../../lib/charla";
import type { TalkDictionary } from "./types";

/**
 * Charla «IA sin humo» en castellano: el idioma en que se dio. Es la versión
 * de referencia; ca y en la siguen sección a sección.
 */
export const es: TalkDictionary = {
  ui: {
    talkTitle: "IA sin humo",
    subtitle: "Lo que sí te ahorra tiempo y lo que no deberías hacer nunca.",
    byline: "Charla de Pedro Fernández Muñoz en BioCultura Madrid 2026, el 27 de noviembre.",
    updated: "Actualizado: noviembre de 2026",
    copy: "Copiar",
    copied: "Copiado",
    downloadZip: "Descargar el ZIP",
    zipMeta: "Para Claude y Gemini",
    viewSource: "Ver en GitHub",
    skillBy: (author, repo, k) => `De ${author}, en el repositorio ${repo} (más de ${k}.000 estrellas en GitHub).`,
    where: "Dónde sale",
    slides: (n) =>
      n.length === 1 ? `Diapositiva ${n[0]}` : `Diapositivas ${n.slice(0, -1).join(", ")} y ${n.at(-1)}`,
    notOnScreen: "No sale en pantalla: de palabra o para el turno de preguntas",
    posters: {
      badAlt:
        "Cartel de MuesliEco hecho con un encargo de una línea: fondo verde oscuro, un cuenco de muesli, el lema «Del campo a tu cuenco», «[TU TIENDA O WEB]» y «Bueno para ti, bueno para la tierra».",
      badCaption:
        "**Mal.** Se inventó el lema, dónde comprarlo («[TU TIENDA O WEB]») y «bueno para la tierra», una afirmación ambiental genérica.",
      goodAlt:
        "Cartel de MuesliEco hecho con los cinco ingredientes: fondo crema, «Pruébalo gratis», un cuenco con sus ingredientes, los sellos «Sin azúcar añadido», «Ingredientes de proximidad» y «Ecológico certificado UE», y «Sírvete aquí» al pie.",
      goodCaption:
        "**Bien.** «Pruébalo gratis», «Sírvete aquí» para el dispensador y «Ecológico certificado UE», que es concreto y verificable. Aun así, «Ingredientes de proximidad» habría que poder demostrarlo: revisa siempre.",
    },
    resourceNames: {
      "contexto-de-empresa": "Plantilla de contexto de empresa",
      encargos: "Encargos que funcionan",
      skills: "Skills que merecen la pena",
      conectores: "Guía de conectores",
      privacidad: "Checklist de privacidad",
      greenwashing: "Greenwashing: frases a evitar",
      "politica-de-uso": "Política de uso de IA",
      fuentes: "Fuentes de la charla",
    },
    resourcesLabel: "Recursos de la charla",
    contactTitle: "¿Te has quedado con dudas?",
    contactBody:
      "Cuéntame tu caso por email o por WhatsApp. Si te puedo ayudar, lo vemos en una llamada; si no, te lo digo.",
    emailCta: "Escríbeme por email",
    whatsappCta: "Escríbeme por WhatsApp",
    homeCta: "Ver más de Pedro Fernández Muñoz",
  },

  home: {
    title: "IA sin humo: recursos de la charla en BioCultura Madrid 2026",
    description:
      "Resumen, plantillas, skills, guías paso a paso y fuentes de la charla «IA sin humo» de Pedro Fernández Muñoz en BioCultura Madrid 2026.",
    lead: "Aquí tienes todo lo que salió en la charla: el resumen, las plantillas, las guías paso a paso y la fuente de cada dato. Sin registrarte.",
    sections: [
      {
        id: "recursos",
        title: "Recursos",
        intro: "En el orden en que salieron en la charla.",
        blocks: [
          {
            type: "resources",
            items: [
              {
                resource: "contexto-de-empresa",
                body: "Quién eres, qué vendes y cómo hablas, en un documento para pegar en la IA. Con un ejemplo relleno.",
              },
              { resource: "encargos", body: "El cartel de MuesliEco, mal y bien, y prompts listos para copiar." },
              { resource: "skills", body: "Las que ya trae Claude y las públicas que de verdad merecen la pena, con cómo instalarlas." },
              {
                resource: "conectores",
                body: "Qué conectores hay en cada herramienta, qué pedirles y cómo activarlos sin dar más llaves de las necesarias.",
              },
              {
                resource: "privacidad",
                body: "Desactiva el entrenamiento, revisa tus enlaces compartidos y mete datos de clientes sin líos.",
              },
              { resource: "greenwashing", body: "Frases a evitar, qué poner en su lugar y lo que dice la ley. Para imprimir." },
              {
                resource: "politica-de-uso",
                body: "Una página para que tu equipo sepa qué se puede hacer con la IA y qué no.",
              },
              { resource: "fuentes", body: "Cada dato de la charla con su enlace, ordenado por diapositiva." },
            ],
          },
          {
            type: "downloads",
            items: [
              {
                href: `${TALK_DOWNLOADS}/ia-sin-humo-diapositivas.pdf`,
                label: "Diapositivas de la charla",
                meta: "PDF, 4 MB",
              },
            ],
          },
        ],
      },
      {
        id: "diagnostico",
        title: "La usas, pero ¿te sirve?",
        intro: "Casi todos la usamos ya. La pregunta es si nos da resultados o solo textos que suenan bien.",
        blocks: [
          {
            type: "p",
            text: "En un estudio con 5.179 agentes de atención al cliente, la IA aumentó un **14 %** las consultas resueltas por hora, y un **34 %** en los menos experimentados ([fuente](@fuentes#f2)). Más capacidad con el mismo equipo. Pero hay que saber usarla, por cuatro motivos:",
          },
          {
            type: "defs",
            items: [
              {
                term: "Tira a lo genérico",
                body: "Y tu cliente lo nota: al 49 % le parece mal que las empresas usen IA en su publicidad, y solo el 27 % confía en que la usen de forma responsable. Son datos de EE. UU., pero la tendencia es clara ([fuente](@fuentes#f4)).",
              },
              {
                term: "Te da la razón",
                body: "Tiende a complacer y casi nunca dice «no lo sé». OpenAI retiró en 2025 una actualización de ChatGPT por demasiado aduladora ([fuente](@fuentes#f6)).",
              },
              {
                term: "Puede filtrar tus datos",
                body: "Al proveedor de la IA o a internet. [Cómo evitarlo](@privacidad).",
              },
              {
                term: "Puedes perder tiempo",
                body: "Aunque sientas que vas más rápido: en un estudio, programadores expertos tardaron un 19 % más con IA y creían haber ido un 20 % más rápido ([fuente](@fuentes#f8)).",
              },
            ],
          },
          {
            type: "p",
            text: "Y puedes tener **problemas legales**. Usar IA es legal; usarla sin cuidado, no siempre:",
          },
          {
            type: "defs",
            items: [
              {
                term: "Datos de clientes",
                body: "En Países Bajos, un empleado de una consulta médica pegó datos de pacientes en un chatbot. Fue una brecha de datos que hubo que notificar ([fuente](@fuentes#f32)).",
              },
              {
                term: "Afirmaciones ambientales",
                body: "La IA escribe «sostenible» sin pestañear, y la Directiva (UE) 2024/825 lo prohíbe si no lo puedes demostrar. [Qué decir en su lugar](@greenwashing).",
              },
              {
                term: "Lo que dice tu chatbot",
                body: "Respondes tú, no la IA. Air Canada alegó ante un tribunal que su chatbot era responsable de sus propios actos, y perdió ([fuente](@fuentes#f29)). Además, desde el 2 de agosto de 2026 tiene que avisar de que es una IA.",
              },
              {
                term: "Datos inventados",
                body: "El TSJ de Galicia multó con 1.800 € a un abogado por un recurso con 24 citas falsas ([fuente](@fuentes#f20)).",
              },
            ],
          },
        ],
      },
      {
        id: "para-que-sirve",
        title: "Para lo que la IA es buenísima",
        intro: "Cómo funciona, lo justo para saber cuándo fiarte.",
        blocks: [
          {
            type: "p",
            text: "Un modelo de lenguaje **predice la palabra más probable** según lo que aprendió de cantidades enormes de texto. Por eso suena a verdad, pero no sabe si lo es: cuando le falta un dato, no se calla, sino que rellena con algo que suena bien. Eso es «alucinar».",
          },
          { type: "p", text: "Brilla en las tareas de leer, escribir y ordenar que hoy te comen horas:" },
          {
            type: "defs",
            items: [
              {
                term: "Hacer tareas con pasos claros y definidos",
                body: "Si sabes explicar cómo se hace, la IA puede hacerlo. Por ejemplo, pasar tres albaranes en PDF a una tabla: de media hora copiando líneas a mano a 2 minutos revisándola.",
              },
              {
                term: "Analizar datos",
                body: "Resumir mucha información y sacar lo importante: las 3 quejas que más se repiten en 200 reseñas, o los requisitos, plazos y documentación de una subvención en una página.",
              },
              {
                term: "Redactar información que ya tienes clara",
                body: "Tú pones las ideas y los datos; ella los convierte en un buen texto. Lo que no debe hacer es inventarse el contenido.",
              },
            ],
          },
          {
            type: "note",
            text: "Los prompts de estos ejemplos, listos para copiar, están en [Encargos que funcionan](@encargos#prompts).",
          },
        ],
      },
      {
        id: "como-sacarle-partido",
        title: "Cómo sacarle partido de verdad",
        intro: "Tú diriges. La IA hace el trabajo pesado.",
        blocks: [
          {
            type: "p",
            text: "La IA aparece en capas: dentro de tus herramientas (Notion, Canva, tu programa de facturación), en automatizaciones (Zapier, Make, n8n), con tus archivos y tu ordenador (apps de escritorio y modos agente) y en el chat que ya conoces (ChatGPT, Claude, Gemini). Debajo de todas hay un modelo que predice texto, así que **lo que sigue vale para todas**.",
          },
          { type: "p", text: "**Los cinco ingredientes de un buen encargo:**" },
          {
            type: "defs",
            items: [
              { term: "Contexto", body: "Quién eres y para qué es." },
              { term: "Objetivo", body: "Qué quieres exactamente." },
              { term: "Que te pregunte", body: "Antes de empezar, para que no asuma." },
              { term: "Reglas", body: "Lo que no debe hacer." },
              { term: "Cómo validarse", body: "Que se revise como lo haría tu cliente." },
            ],
          },
          {
            type: "p",
            text: "**Cuida el contexto.** Una IA con contexto limpio responde mejor: un proyecto por tema, con tus documentos e instrucciones fijas; una conversación por tarea, porque las conversaciones eternas se ensucian y la IA mezcla cosas; y un documento con tu [contexto de empresa](@contexto-de-empresa), que se escribe una vez y sirve siempre.",
          },
          {
            type: "p",
            text: "**Dale superpoderes.** Las [skills](@skills) son lo que sabe hacer: instrucciones guardadas que usa sola cuando le tocan. Los [conectores](@conectores) son a lo que puede acceder: tu correo, tus documentos, tu calendario o tu tienda.",
          },
          {
            type: "p",
            text: "**¿No sabes dónde se activa algo?** Pregúntale a la propia IA: ella misma te explica cómo usar proyectos, skills o conectores en la herramienta que uses.",
          },
        ],
      },
      {
        id: "lo-que-nunca",
        title: "Lo que nunca debes hacer",
        intro: "Lo que puede costarte dinero, clientes o una sanción.",
        blocks: [
          {
            type: "defs",
            items: [
              {
                term: "Dejar que entrene con tus datos sin saberlo",
                body: "En las cuentas personales de ChatGPT, Gemini y Claude puede estar activado. Se desactiva en un minuto: [paso a paso](@privacidad#entrenamiento).",
              },
              {
                term: "Compartir enlaces sin pensar",
                body: "Casi 4.500 conversaciones compartidas de ChatGPT aparecieron en Google en 2025, algunas con datos personales. [Revisa los tuyos](@privacidad#enlaces).",
              },
              {
                term: "Meter datos de clientes sin anonimizar",
                body: "Meter datos, sí, pero bien: sin nombres ni datos identificativos, y con más cuidado si son de salud. [Cómo hacerlo](@privacidad#datos-de-clientes).",
              },
              {
                term: "Fiarte sin comprobar",
                body: "Se inventa cosas con total seguridad: 19 sentencias inexistentes citadas ante el Tribunal Constitucional, 48 citas falsas en un recurso ante el TSJ de Canarias, y Deloitte devolvió parte de un informe de 440.000 dólares australianos con referencias inventadas. **La IA te apunta a los datos; tú compruebas que existen.** Abre las fuentes, pide la parte exacta del documento y revisa el doble lo que no tiene vuelta atrás: enviar, publicar, borrar o pagar.",
              },
              {
                term: "Caer en el greenwashing",
                body: "El 53 % de las afirmaciones ambientales analizadas en la UE eran vagas, engañosas o infundadas. [Frases a evitar y qué poner](@greenwashing).",
              },
              {
                term: "Perder tu voz",
                body: "Si todo suena a ChatGPT, deja de sonar a ti. El 75 % acepta que una empresa use IA para ideas y borradores si lo dice; el 62 % rechaza que se inventen personas o voces con IA. **La IA redacta, tú firmas.**",
              },
            ],
          },
          {
            type: "note",
            text: "Para que todo tu equipo lo tenga claro, tienes una [plantilla de política de uso de IA](@politica-de-uso) de una página.",
          },
        ],
      },
      {
        id: "ideas",
        title: "Tres ideas para llevarte",
        blocks: [
          {
            type: "ideas",
            items: [
              "Rinde según el contexto y las herramientas que le das.",
              "Hay usos que aún no estás aprovechando.",
              "La IA redacta, tú firmas. Que no te quite tu voz.",
            ],
          },
          {
            type: "p",
            text: "**Tu tarea para el lunes:** elige **una** tarea repetitiva y pruébala con lo de hoy. ¿Te atascas? Pregúntale a la propia IA cómo hacerlo.",
          },
        ],
      },
      {
        id: "preguntas",
        title: "Preguntas frecuentes",
        intro: "Las que suelen salir en el turno de preguntas, con respuesta corta.",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "¿Qué herramienta me recomiendas?",
                a: [
                  "La que ya uses, bien configurada. Si vas a meter datos de clientes, un plan de empresa. Lo que de verdad cambia los resultados es lo de la charla: contexto, revisión y datos con cuidado.",
                ],
              },
              {
                q: "¿Es legal usar IA en mi negocio? ¿Tengo que avisar a mis clientes?",
                a: [
                  "Usarla es legal. Hay que avisar cuando un cliente habla con un chatbot (desde el 2 de agosto de 2026) y en las imágenes, vídeos o audios que parezcan reales. Para un texto de marketing que tú revisas y firmas, hoy no hay una obligación general de etiquetarlo ([fuente](@fuentes#f28)).",
                  "La ley española de IA está en tramitación en el Congreso y traerá su propio régimen de sanciones ([fuente](@fuentes#f30)).",
                ],
              },
              {
                q: "¿Puedo poner un chatbot en mi web?",
                a: [
                  "Sí, si responde con tus datos: envíos, alérgenos, puntos de venta. Pero lo que diga es responsabilidad tuya, tiene que avisar de que es una IA y, en alérgenos o salud, debe citar la ficha oficial y enlazarla en lugar de responder con sus palabras.",
                  "La mayoría de negocios no lo necesita: con lo de la charla, basta. Si tu caso va más allá, [escríbeme](mailto:hola@pedrofm.dev).",
                ],
              },
              {
                q: "¿Ya se aplica en España lo del greenwashing?",
                a: [
                  "España aún no ha transpuesto la directiva, pero no es una prórroga: el greenwashing ya se puede perseguir con las leyes actuales de publicidad, competencia desleal y consumidores. Escribe ya como si estuviera en vigor. [Más detalle](@greenwashing#espana).",
                ],
              },
              {
                q: "¿Y las propiedades de salud?",
                a: [
                  "Solo puedes usar las autorizadas, con su redacción y sus condiciones: están en el Reglamento (UE) 432/2012 y en el buscador de la AESAN ([fuente](@fuentes#f24)).",
                ],
              },
              {
                q: "¿Cuánto cuesta?",
                a: [
                  "Desde gratis (con las precauciones de privacidad) hasta planes individuales y de equipo de pago mensual. Para empezar a usarla con datos de clientes suele bastar el plan de empresa más básico. Consulta los precios actuales en la web de cada herramienta.",
                ],
              },
              {
                q: "¿Y el impacto ambiental de la IA?",
                a: [
                  "Una consulta de texto consume poco: según Google, unos 0,24 Wh y unas cinco gotas de agua, como ver la tele menos de nueve segundos. Pero son datos de la propia empresa, no incluyen el entrenamiento, y las imágenes, los vídeos y los agentes gastan bastante más. El consumo total de los centros de datos sí es un problema real ([fuente](@fuentes#f31)).",
                  "Mi criterio: úsala donde te ahorre trabajo de verdad, no para generar por generar.",
                ],
              },
              {
                q: "¿Me va a quitar el trabajo?",
                a: [
                  "Cambia tareas, sobre todo las repetitivas. Los datos dicen que ayuda más a quien empieza que al experto ([fuente](@fuentes#f2)). Implica a tu equipo en lo que se automatiza; no lo impongas.",
                ],
              },
              {
                q: "¿Han multado a alguna empresa por meter datos en ChatGPT?",
                a: [
                  "Los casos documentados que cito, en Países Bajos, son brechas de datos que hubo que notificar, sin multa conocida. A quien sí han multado es a una empresa de IA: Italia multó a OpenAI con 15 millones de euros en 2024 por entrenar con datos personales sin base legal adecuada, y OpenAI recurrió ([fuente](@fuentes#f32)).",
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  resources: {
    "contexto-de-empresa": {
      title: "Plantilla de contexto de empresa",
      description:
        "Plantilla para que la IA sepa quién eres, qué vendes y cómo hablas, con un ejemplo relleno y dónde pegarla en ChatGPT, Claude y Gemini.",
      lead: "Un documento con quién eres, qué vendes, a quién y cómo hablas. Lo escribes una vez, lo pegas en las instrucciones de un proyecto y la IA deja de responderte como a un desconocido.",
      sections: [
      {
          id: "como-usarla",
          title: "Cómo usarla",
          blocks: [
            {
              type: "steps",
              items: [
                "Copia la plantilla de abajo.",
                "Rellénala. Son 15 o 20 minutos; borra lo que no aplique a tu negocio.",
                "Pégala donde la IA la lea siempre: en las instrucciones de un proyecto (mira [dónde pegarla](#donde-pegarla)).",
                "Pruébala: pídele un texto y comprueba que respeta tus reglas.",
              ],
            },
            {
              type: "prompt",
              title: "¿Te da pereza rellenarla? Que te entreviste la IA",
              text: "Quiero rellenar esta plantilla de contexto de empresa. Hazme las preguntas de una en una, espera mi respuesta y, al final, devuélveme la plantilla completa. Si algo no lo sé, déjalo entre corchetes.\n\n[pega aquí la plantilla]",
            },
          ],
        },
        {
          id: "plantilla",
          title: "La plantilla",
          intro: "Las reglas fijas del final son las que más se notan: que no invente datos y que no use afirmaciones ambientales genéricas.",
          blocks: [{ type: "file", file: "contexto-de-empresa.md", title: "Plantilla de contexto de empresa" }],
        },
        {
          id: "ejemplo",
          title: "Ejemplo relleno: MuesliEco",
          intro: "El negocio inventado de los carteles de la charla. Fíjate en lo concretas que son las afirmaciones permitidas.",
          blocks: [{ type: "file", file: "contexto-muesli-eco.md", title: "Contexto de empresa de MuesliEco" }],
        },
        {
          id: "donde-pegarla",
          title: "Dónde pegarla",
          intro: "Para un tema, en un proyecto (o una skill en Gemini). Para todo lo que hagas, en las instrucciones generales.",
          blocks: [
            {
              type: "table",
              head: ["Herramienta", "Para un tema concreto", "Para todo lo que hagas"],
              rows: [
                [
                  "ChatGPT",
                  "Crea un proyecto y pega el texto en sus instrucciones: menú ••• del proyecto, «Configuración del proyecto».",
                  "En la personalización de tu cuenta, en las instrucciones personalizadas.",
                ],
                [
                  "Claude",
                  "Crea un proyecto y pega el texto en las instrucciones del proyecto.",
                  "En la configuración de tu perfil, en las preferencias personales.",
                ],
                [
                  "Gemini",
                  "Crea una skill: Personalizar → Skills → Crear → Crear manualmente, y pega el texto en las instrucciones.",
                  "Ajustes → Contexto personal → Tus instrucciones para Gemini → Añadir.",
                ],
              ],
            },
            {
              type: "note",
              text: "Las Gems de Gemini se están retirando: en las cuentas personales se convierten en skills y desaparecen el 17 de diciembre de 2026. Si tenías una, descarga antes sus archivos ([ayuda de Google](https://support.google.com/gemini/answer/18560919?hl=es)).",
            },
            {
              type: "p",
              text: "Añade también al proyecto tus documentos: fichas de producto, certificados, tarifas. Así la IA cita de ahí en vez de inventar. Y si no encuentras un menú, pregúntale a la propia IA: «¿Dónde pongo instrucciones fijas para un proyecto?».",
            },
          ],
        },
      ],
    },

    encargos: {
      title: "Encargos que funcionan",
      description:
        "Los cinco ingredientes de un buen encargo a la IA, el cartel de MuesliEco mal y bien, y prompts listos para copiar.",
      lead: "El mismo encargo da un cartel genérico o uno que funciona. La diferencia son cinco ingredientes y un par de minutos más.",
      sections: [
        {
          id: "cartel",
          title: "El cartel de MuesliEco",
          intro: "«Hazme un cartel para patrocinar mi muesli ecológico.» Eso fue todo lo que le pedí a la IA la primera vez.",
          blocks: [
            { type: "posters" },
            {
              type: "prompt",
              title: "El encargo bueno, con los cinco ingredientes",
              text: "Contexto. Soy MuesliEco, vendo muesli ecológico y voy a patrocinarlo en BioCultura.\nObjetivo. Hazme un cartel para el dispensador.\nPreguntas. Antes de empezar, pídeme los datos que necesites. No asumas nada.\nReglas. Nada genérico. Fácil de leer, sin sobrecargar.\nValidación. Míralo como una familia delante del dispensador, di qué no te convencería y mejóralo.",
              note: "El cartel bueno se hizo además con la skill brandkit de Claude, que le da marca, colores y tipografía coherentes sin describirlos. Si tu herramienta no la tiene, añade al encargo tu paleta de colores, tus tipografías y tu logotipo, o pídele que te pregunte por tu identidad visual antes de diseñar.",
            },
          ],
        },
        {
          id: "ingredientes",
          title: "Los cinco ingredientes",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Contexto",
                  body: "Quién eres y para qué es. Si lo tienes en tu [contexto de empresa](@contexto-de-empresa), no hace falta repetirlo.",
                },
                { term: "Objetivo", body: "Qué quieres exactamente: formato, extensión y dónde se va a usar." },
                {
                  term: "Que te pregunte",
                  body: "Antes de empezar, para que no asuma. Es el ingrediente que más se olvida y el que más cambia el resultado.",
                },
                { term: "Reglas", body: "Lo que no debe hacer: nada genérico, no inventar datos, no salirse de tu tono." },
                { term: "Cómo validarse", body: "Que se revise como lo haría tu cliente antes de dártelo." },
              ],
            },
            {
              type: "prompt",
              title: "Plantilla de encargo",
              text: "Contexto: Soy [quién eres] y esto es para [para qué y para quién].\nObjetivo: [qué quieres exactamente, con formato y extensión].\nPreguntas: Antes de empezar, hazme las preguntas que necesites. No asumas nada.\nReglas: [lo que no debe hacer: nada genérico, no inventes datos, tono…].\nValidación: Cuando lo tengas, léelo como [tu cliente tipo], dime qué no le convencería y mejóralo.",
            },
          ],
        },
        {
          id: "prompts",
          title: "Prompts listos para copiar",
          intro: "Cambia lo que va entre corchetes. Los de correo, Drive, calendario y tienda están en la [guía de conectores](@conectores#que-pedirle).",
          blocks: [
            {
              type: "prompt",
              title: "Albaranes o facturas a una tabla",
              text: "Te adjunto [número] albaranes en PDF. Pásalos a una tabla con estas columnas: proveedor, fecha, nº de albarán, producto, cantidad, unidad, precio unitario y total de línea.\nReglas:\n- Copia los datos tal como aparecen. No calcules ni completes nada que no esté en el documento.\n- Si un dato no se lee bien o falta, deja la celda vacía y escribe «REVISAR» en una columna de observaciones.\n- Al final, dime cuántas líneas has sacado de cada albarán para que pueda comprobarlo.",
              note: "Revisa la tabla contra los originales antes de usarla. En Claude, la skill de Excel te la devuelve directamente como hoja de cálculo.",
            },
            {
              type: "prompt",
              title: "Las quejas que más se repiten en tus reseñas",
              text: "Te paso [número] reseñas de clientes. Agrúpalas por tema y dime las 3 quejas que más se repiten.\nPara cada queja: cuántas reseñas la mencionan, dos frases literales de ejemplo y una idea concreta para solucionarla.\nNo inventes reseñas ni cifras: si algo no está claro, dímelo.",
              note: "Quita antes los nombres de los clientes: [cómo anonimizar](@privacidad#datos-de-clientes).",
            },
            {
              type: "prompt",
              title: "Las bases de una subvención en una página",
              text: "Te adjunto las bases de [nombre de la convocatoria]. Resúmelas en una página para una empresa como la mía: [sector, nº de empleados, comunidad autónoma].\n- Requisitos para poder pedirla.\n- Plazos, con fechas exactas.\n- Documentación que hay que presentar.\n- Cuánto se puede recibir y qué gastos cubre.\nIndica en cada punto la página y el apartado de las bases de donde lo sacas. Si las bases no lo dicen, escribe «No lo indica». Al final, dime si mi empresa parece cumplir los requisitos y qué tendría que confirmar.",
              note: "Comprueba en las bases las fechas y los importes antes de presentar nada.",
            },
            {
              type: "prompt",
              title: "Que te pregunte antes de empezar",
              text: "Antes de responder, hazme las preguntas que necesites para hacerlo bien, de una en una. No empieces hasta que te diga «adelante».",
            },
            {
              type: "prompt",
              title: "Revisar un texto como lo haría tu cliente",
              text: "Lee este texto como si fueras [cliente tipo: p. ej., una madre que compra ecológico en un herbolario y lee las etiquetas]. Dime con sinceridad qué no entenderías, qué no te creerías y qué te haría no comprar. Después, propón una versión mejorada sin inventar datos.\n\n[pega aquí el texto]",
            },
            {
              type: "prompt",
              title: "Ensayar una negociación difícil",
              text: "Vamos a ensayar una negociación. Tú eres [el proveedor de envases] y no quieres bajar el precio porque [motivo realista]. Yo soy [tu papel] y quiero [objetivo]. Ponme objeciones realistas, de una en una, y no cedas fácilmente. Cuando diga «fin», dime qué he hecho bien, qué argumentos me han faltado y qué frase me ha debilitado.",
            },
            {
              type: "prompt",
              title: "Comprobar de dónde sale cada dato",
              text: "Para cada dato o afirmación de tu respuesta, dame la fuente con su enlace y copia la frase exacta del documento que lo dice. Si no tienes una fuente, dilo claramente en lugar de suponer.",
              note: "Y luego abre los enlaces: la IA te apunta a los datos; tú compruebas que existen.",
            },
          ],
        },
      ],
    },

    skills: {
      title: "Skills que merecen la pena",
      description:
        "Qué son las skills, las que ya trae Claude y las públicas más usadas para textos, clientes, redes y SEO, con cómo instalarlas en Claude, Gemini y ChatGPT.",
      lead: "Una skill son instrucciones guardadas que la IA usa sola cuando le tocan. No hace falta escribirlas desde cero: hay muchas públicas, gratuitas y usadas por miles de personas. Estas son las que de verdad le sirven a una pyme.",
      sections: [
        {
          id: "tres-formas",
          title: "Tres formas de tenerlas",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Las que ya trae tu herramienta",
                  body: "Claude trae skills de Anthropic para crear y leer documentos de Word, Excel, PowerPoint y PDF (por ejemplo, pasar albaranes a una hoja de cálculo); brandkit, que crea la identidad visual de una marca y es la del cartel bueno de [MuesliEco](@encargos#cartel); y skill-creator, que te ayuda a crear las tuyas. Están en Personalizar → Skills.",
                },
                {
                  term: "Las que buscas en internet",
                  body: "Muchas son gratis y las mantienen autores con miles de usuarios detrás. Abajo tienes una selección, con enlace a su origen.",
                },
                {
                  term: "Las que creas tú",
                  body: "Para lo muy tuyo, como el tono de tu marca o cómo respondes a un cliente enfadado. No hace falta programar: [créala con la IA](#crea-la-tuya).",
                },
              ],
            },
            {
              type: "p",
              text: "**Antes de instalar una skill de internet**, recuerda que son instrucciones que la IA va a seguir. Comprueba:",
            },
            {
              type: "list",
              items: [
                "**Quién la publica:** mejor la propia herramienta o alguien con trayectoria y muchos usuarios.",
                "**Qué dice:** es texto. Léela por encima; si no entiendes lo que hace, no la instales.",
                "**Qué pide:** desconfía si quiere conectarse a servicios, enviar datos fuera o ejecutar programas que la tarea no necesita.",
              ],
            },
          ],
        },
        {
          id: "textos",
          title: "Para escribir mejor y que no suene a IA",
          intro: "Las tres quitan los tics típicos de los textos hechos con IA.",
          blocks: [
            { type: "skill", id: "copywriting" },
            { type: "skill", id: "copy-editing" },
            { type: "skill", id: "humanizer" },
          ],
        },
        {
          id: "clientes",
          title: "Clientes, redes y correo",
          blocks: [
            { type: "skill", id: "customer-research" },
            { type: "skill", id: "social" },
            { type: "skill", id: "emails" },
          ],
        },
        {
          id: "seo",
          title: "Que te encuentren en Google y en la IA",
          blocks: [
            { type: "skill", id: "seo-audit" },
            { type: "skill", id: "ai-seo" },
            {
              type: "note",
              text: "Si usas Claude Code, [claude-seo](https://github.com/AgriciDaniel/claude-seo) (más de 30.000 estrellas en GitHub) hace auditorías SEO completas de tu web. Necesita instalar Python, así que no es para empezar.",
            },
          ],
        },
        {
          id: "instalar",
          title: "Cómo instalarlas",
          intro: "Los menús cambian a menudo. Si no encuentras algo, pregúntale a la propia IA: «¿Cómo subo una skill?».",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Claude",
                  body: "En todos los planes, también el gratuito. Activa «Crear y editar archivos» en Configuración → Capacidades. Descarga el ZIP de la skill, ve a Personalizar → Skills, pulsa + → Crear skill → Subir una skill y elige el ZIP tal cual, sin descomprimirlo ([ayuda de Anthropic](https://support.claude.com/en/articles/12512180-use-skills-in-claude)).",
                },
                {
                  term: "Gemini",
                  body: "En cuentas personales de mayores de 18. Desde la web o la app de Mac: Personalizar → Skills → Crear → Subir, y elige el mismo ZIP o el archivo SKILL.md ([ayuda de Google](https://support.google.com/gemini/answer/17094296?hl=es)). Las skills sustituyen a las Gems.",
                },
                {
                  term: "ChatGPT",
                  body: "Las skills solo están en los planes Business, Enterprise y Edu: Plugins → Directorio → Skills → Crear → Subir desde tu ordenador ([ayuda de OpenAI](https://help.openai.com/en/articles/20001066-skills-in-chatgpt)). En Free, Plus o Pro, abre el SKILL.md de la skill en GitHub, cópialo y pégalo en las instrucciones de un proyecto.",
                },
              ],
            },
            {
              type: "note",
              text: "Las de marketingskills están en inglés y pensadas sobre todo para empresas de software, pero responden en el idioma en que les escribas y funcionan igual de bien para una tienda. humanizer no publica un ZIP para Claude: en Gemini basta con subir su SKILL.md, y en Claude, copy-editing hace un trabajo parecido y ya viene lista.",
            },
          ],
        },
        {
          id: "crea-la-tuya",
          title: "Crea la tuya",
          intro: "Para lo que no encuentres hecho: pídeselo a la IA y escribidla juntos.",
          blocks: [
            {
              type: "p",
              text: "En Claude, la skill skill-creator te guía paso a paso. En Gemini, Personalizar → Skills → Crear → Crear con Gemini. O usa este prompt en cualquiera de las tres:",
            },
            {
              type: "prompt",
              title: "Créame una skill",
              text: "Quiero crear una skill para [tarea que repito, p. ej., responder reseñas de clientes]. Hazme las preguntas que necesites, de una en una, sobre cómo lo hago yo, qué reglas sigo y qué errores quiero evitar. Cuando tengas suficiente, escríbela con un nombre corto en minúsculas y con guiones, una descripción de cuándo usarla (menos de 200 caracteres) y las instrucciones paso a paso.",
            },
            {
              type: "p",
              text: "Cuando la tengas, pruébala con un caso real, corrige lo que no te convenza y súbela como las de arriba.",
            },
          ],
        },
      ],
    },

    conectores: {
      title: "Guía de conectores",
      description:
        "Cómo conectar la IA a Gmail, Google Drive, el calendario y tu tienda online, paso a paso y con los permisos justos.",
      lead: "Un conector le da a la IA acceso a una de tus herramientas: tu correo, tus documentos, tu calendario, tu tienda o tu CRM. Muchos se activan con un clic, sin programar, y cambian lo que puede hacer por ti.",
      sections: [
        {
          id: "que-pedirle",
          title: "Qué puedes pedirle",
          intro: "Los cuatro ejemplos de la charla, con algo más de detalle para que salgan bien a la primera.",
          blocks: [
            {
              type: "prompt",
              title: "Gmail",
              text: "Revisa los correos de pedidos que han llegado hoy. Para cada uno, prepara una respuesta que confirme el pedido y el plazo de envío habitual ([plazo]). Déjalas en borradores; no envíes nada.",
              note: "En borradores: tú revisas cada respuesta y la envías.",
            },
            {
              type: "prompt",
              title: "Google Drive",
              text: "Busca en mi Drive el último presupuesto de la imprenta y compáralo con este que te adjunto: precio por unidad, plazos, gastos de envío y condiciones. Dime cuál conviene y por qué, citando la parte de cada documento.",
            },
            {
              type: "prompt",
              title: "Calendario",
              text: "¿Qué huecos de al menos 2 horas tengo el jueves entre las 9 y las 18 para visitar a proveedores? No crees ninguna cita.",
            },
            {
              type: "prompt",
              title: "Tu tienda online",
              text: "¿Qué 10 productos se vendieron más en octubre, en unidades y en euros? Compáralo con septiembre y señala lo que más ha cambiado.",
              note: "Si usas Shopify, Claude tiene conector oficial. Con WooCommerce, PrestaShop o Holded, exporta el informe de ventas en CSV, quítale los datos de clientes y pásaselo: para esta pregunta funciona igual.",
            },
          ],
        },
        {
          id: "cuales-hay",
          title: "Qué conectores hay",
          intro: "Los oficiales que más le sirven a una pyme, según el directorio de cada herramienta en noviembre de 2026.",
          blocks: [
            {
              type: "table",
              head: ["Conector", "Para qué", "Claude", "ChatGPT", "Gemini"],
              rows: [
                [
                  "Gmail, Google Drive y Google Calendar",
                  "Buscar y resumir correos, documentos y citas; preparar borradores y crear eventos.",
                  "Sí, en todos los planes",
                  "Google Drive",
                  "Sí",
                ],
                [
                  "Microsoft 365: Outlook, OneDrive, SharePoint y Teams",
                  "Lo mismo, si tu correo y tus archivos están en Microsoft.",
                  "Sí (con cuenta personal, solo Outlook y OneDrive)",
                  "Outlook, SharePoint y Teams",
                  "—",
                ],
                ["Shopify", "Ventas, productos, stock y pedidos de tu tienda.", "Sí", "—", "Solo en EE. UU."],
                [
                  "Canva",
                  "Crear y editar diseños con tus plantillas.",
                  "Sí",
                  "Sí",
                  "Con cuenta personal, aún no en español",
                ],
                ["Notion", "Buscar y actualizar tus páginas y bases de datos.", "Sí", "Sí", "—"],
                ["HubSpot", "Clientes, oportunidades y campañas de tu CRM.", "Sí", "—", "—"],
                ["Google Analytics", "Visitas y ventas de tu web.", "—", "—", "Con cuenta personal"],
                ["Dropbox o Box", "Buscar y resumir tus archivos.", "—", "Box", "Dropbox"],
              ],
            },
            {
              type: "note",
              text: "«—» quiere decir que no lo hemos encontrado en su directorio oficial; los directorios crecen cada mes, así que mira el de tu herramienta. Algunos conectores piden una cuenta de pago del propio servicio. WooCommerce, PrestaShop y Holded no tienen conector oficial en ninguna de las tres.",
            },
          ],
        },
        {
          id: "mas-ideas",
          title: "Más ideas para pedirle",
          blocks: [
            {
              type: "prompt",
              title: "Canva",
              text: "Con mi kit de marca de Canva, crea tres versiones de una publicación de Instagram para anunciar que ya tenemos el muesli de otoño. Déjalas en Canva para que las revise; no publiques nada.",
            },
            {
              type: "prompt",
              title: "Shopify",
              text: "¿Qué productos tienen menos de 10 unidades en stock y se venden todas las semanas? Hazme una lista para reponer, con lo que vendimos de cada uno el último mes.",
            },
            {
              type: "prompt",
              title: "Notion",
              text: "Busca en Notion las notas de la última feria y resúmeme qué contactos quedaron pendientes de llamar y por qué.",
            },
            {
              type: "prompt",
              title: "HubSpot",
              text: "¿Qué herbolarios no nos han hecho un pedido en los últimos 3 meses? Prepárame un borrador de correo para cada uno, sin enviarlo.",
            },
            {
              type: "prompt",
              title: "Google Analytics",
              text: "¿Desde qué ciudades nos visitaron más el mes pasado y qué páginas vieron antes de comprar?",
            },
            {
              type: "prompt",
              title: "Outlook",
              text: "Busca los correos del proveedor de envases sobre el último pedido y resúmeme qué está pendiente y de quién depende.",
            },
          ],
        },
        {
          id: "activar",
          title: "Cómo activarlos",
          intro: "Los menús cambian a menudo. Si no encuentras algo, pregúntale a la propia IA: «¿Cómo conecto mi Gmail contigo?».",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Claude",
                  body: "Personalizar → Conectores, elige Gmail, Google Drive o Google Calendar, inicia sesión con Google y acepta los permisos. Están en todos los planes, también el gratuito. En cada chat, pulsa + → Conectores para activar solo los que necesites. Gmail puede preparar borradores, y antes de enviar te pide permiso ([ayuda de Anthropic](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)).",
                },
                {
                  term: "ChatGPT",
                  body: "Configuración → Plugins, elige la app (Google Drive, Gmail…) y pulsa «Conectar». En un chat, escribe @ o pulsa + para usarla. Elige el nivel de permiso: «Preguntar siempre» es el más prudente. Las apps disponibles dependen de tu plan y tu país ([ayuda de OpenAI](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt)).",
                },
                {
                  term: "Gemini",
                  body: "En la barra lateral, Personalizar → Conectores → Añadir. En un chat, escribe @ y elige la app. Puede redactar un correo en el chat para que lo revises y lo envíes tú, o abrirlo en Gmail para editarlo ([ayuda de Google](https://support.google.com/gemini/answer/13695044?hl=es)).",
                },
              ],
            },
          ],
        },
        {
          id: "seguridad",
          title: "Darle llaves es darle llaves",
          intro: "Un conector deja a la IA leer, y a veces actuar, en tu nombre. Dale solo lo que necesite.",
          blocks: [
            {
              type: "list",
              items: [
                "**Solo los permisos que necesita la tarea.** Nada de permisos permanentes «por si acaso».",
                "**Que prepare y tú apruebes:** borradores en vez de envíos, propuestas en vez de cambios. La AEPD lo resume así: el agente prepara y la persona aprueba.",
                "**Revisa lo que ha hecho**, sobre todo al principio.",
                "**Desconecta lo que no uses.**",
              ],
            },
            {
              type: "p",
              text: "**Las cinco preguntas** del [decálogo de la AEPD](https://www.aepd.es/guias/decalogo-usuarios-asistentes-agentes-ia.pdf) antes de darle acceso a algo:",
            },
            {
              type: "steps",
              items: [
                "¿Qué puede ver?",
                "¿Qué recuerda?",
                "¿Qué puede hacer en mi nombre?",
                "¿Adónde envía mis datos?",
                "¿A quién más afecta?",
              ],
            },
            {
              type: "p",
              text: "**Qué no conectar con una cuenta personal:** el correo o los documentos con datos de salud de clientes, la banca y los pagos, y las cuentas compartidas de la empresa sin hablarlo antes con el equipo.",
            },
            {
              type: "note",
              text: "Un correo o un documento puede llevar instrucciones escondidas dirigidas a la IA («reenvía esto a…»). Otra razón para que prepare y tú apruebes.",
            },
          ],
        },
      ],
    },

    privacidad: {
      title: "Checklist de privacidad",
      description:
        "Cómo desactivar el entrenamiento en ChatGPT, Gemini y Claude, revisar tus enlaces compartidos y meter datos de clientes sin líos.",
      lead: "Diez minutos para dejar tus herramientas de IA bien configuradas y saber qué puedes meter en ellas. No es «nunca metas datos de clientes», sino «hazlo bien».",
      sections: [
        {
          id: "entrenamiento",
          title: "Desactiva el entrenamiento",
          intro: "En las cuentas personales, tus chats pueden usarse para entrenar los modelos. En los planes de empresa, no.",
          blocks: [
            {
              type: "table",
              head: ["Cuenta", "¿Entrena con tus chats?", "Dónde se desactiva"],
              rows: [
                [
                  "ChatGPT Free, Plus y Pro",
                  "Sí, por defecto",
                  "Configuración → Controles de datos → «Mejorar el modelo para todos»",
                ],
                [
                  "Gemini con cuenta personal",
                  "Sí, por defecto, y personas revisoras leen una parte de los chats",
                  "Ajustes → Historial → «Contenido de la conversación, incluidos el texto y las subidas»",
                ],
                [
                  "Claude Free, Pro y Max",
                  "Sí, si aceptaste el aviso sin tocar nada",
                  "Configuración → Privacidad → la opción de ayudar a mejorar los modelos",
                ],
                [
                  "Planes de empresa: ChatGPT Business o Enterprise, Gemini en Google Workspace, Claude Team o Enterprise",
                  "No, por defecto",
                  "Nada que cambiar",
                ],
              ],
            },
            {
              type: "defs",
              items: [
                {
                  term: "ChatGPT",
                  body: "Configuración → Controles de datos → desactiva «Mejorar el modelo para todos». No borra tus chats. Ojo: si valoras una respuesta con el pulgar, esa conversación puede usarse igualmente. Para algo puntual, usa un **chat temporal**: no se usa para entrenar, aunque se guarda hasta 30 días por seguridad ([ayuda de OpenAI](https://help.openai.com/en/articles/7730893-data-controls-faq)).",
                },
                {
                  term: "Gemini",
                  body: "En gemini.google.com, Ajustes → Historial (antes se llamaba «Actividad en las apps de Gemini»), y desmarca «Contenido de la conversación, incluidos el texto y las subidas», o desactiva el historial entero. Aun así, Google guarda los chats unos dos meses para responderte y por seguridad, y los que han leído personas revisoras se conservan hasta tres años aunque borres el historial. Para algo puntual, usa un **chat temporal**, junto a «Nuevo chat» ([ayuda de Google](https://support.google.com/gemini/answer/13278892?hl=es)).",
                },
                {
                  term: "Claude",
                  body: "Configuración → Privacidad, y desactiva la opción de ayudar a mejorar los modelos ([enlace directo](https://claude.ai/settings/data-privacy-controls)). Activada, tus chats pueden guardarse hasta 5 años; desactivada, 30 días. Para algo puntual, usa un **chat de incógnito**: el icono del fantasma, arriba a la derecha de un chat nuevo ([ayuda de Anthropic](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings)).",
                },
              ],
            },
          ],
        },
        {
          id: "enlaces",
          title: "Revisa tus enlaces compartidos",
          intro: "Un enlace de «compartir» lo ve cualquiera que lo tenga, y puede acabar en un buscador.",
          blocks: [
            {
              type: "p",
              text: "En el verano de 2025 aparecieron en Google casi 4.500 conversaciones compartidas de ChatGPT, algunas con datos personales ([fuente](@fuentes#f18)). OpenAI retiró la opción en cuestión de horas, pero revisa los enlaces que hayas creado:",
            },
            {
              type: "defs",
              items: [
                {
                  term: "ChatGPT",
                  body: "Configuración → Controles de datos → Enlaces compartidos → Gestionar. Puedes borrarlos de uno en uno o todos a la vez.",
                },
                {
                  term: "Gemini",
                  body: "Ajustes → Tus enlaces públicos, o directamente en [gemini.google.com/sharing](https://gemini.google.com/sharing). También puedes borrarlos todos.",
                },
                {
                  term: "Claude",
                  body: "Abre el chat compartido y deja de compartirlo desde el botón Compartir.",
                },
              ],
            },
            {
              type: "note",
              text: "Borrar el enlace no borra las copias que otros ya hayan guardado. Antes de compartir, piensa si te importaría que lo leyera cualquiera.",
            },
          ],
        },
        {
          id: "datos-de-clientes",
          title: "Antes de pegar datos de clientes",
          intro: "Meter datos, sí. Pero bien.",
          blocks: [
            { type: "p", text: "**Hazte cuatro preguntas:**" },
            {
              type: "list",
              items: [
                "¿La IA necesita este dato para la tarea?",
                "¿Estoy en un plan de empresa o en una cuenta personal?",
                "¿Tengo desactivado el entrenamiento?",
                "¿Me importaría que esto acabara publicado?",
              ],
            },
            {
              type: "p",
              text: "**Quita nombres y datos identificativos.** Cambia los nombres por «Cliente A», «Cliente B», y borra:",
            },
            {
              type: "list",
              items: [
                "DNI o NIF.",
                "Teléfonos, correos y direcciones.",
                "Números de pedido, de cliente o de cuenta bancaria.",
                "Fotos y firmas.",
                "Cualquier detalle que permita adivinar quién es: un cargo único, una dirección exacta.",
              ],
            },
            {
              type: "p",
              text: "En una hoja de cálculo, borra esas columnas antes de subirla. Y si te bastan los datos agregados (ventas por producto, quejas por tema), pásale solo eso.",
            },
            {
              type: "note",
              text: "En Países Bajos, un empleado de una consulta médica pegó datos de pacientes en un chatbot, y fue una brecha de datos que hubo que notificar ([fuente](@fuentes#f32)). La autoridad recomienda decir claramente al equipo qué datos se pueden meter y cuáles no: para eso está la [política de uso](@politica-de-uso).",
            },
          ],
        },
        {
          id: "datos-sensibles",
          title: "Salud y fotos de otras personas",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Datos de salud, con más cuidado",
                  body: "Son una categoría especial del RGPD (art. 9). Para tratarlos con una IA normalmente necesitas el consentimiento explícito de la persona y un contrato de encargado del tratamiento con el proveedor (art. 28), que dan los planes de empresa y no las cuentas personales. Si los tratas a menudo (herbolario, dietética, terapias), habla antes con tu asesor de protección de datos.",
                },
                {
                  term: "Fotos de otras personas",
                  body: "Nunca para crear contenido nuevo (montajes, anuncios, avatares) sin su permiso. Es una de las recomendaciones del decálogo de la AEPD [«Cuidado con lo que le confIAs»](https://www.aepd.es/guias/recomendaciones-ia-aepd.pdf).",
                },
              ],
            },
          ],
        },
      ],
    },

    greenwashing: {
      title: "Greenwashing: frases a evitar",
      description:
        "Frases ambientales genéricas que conviene evitar, alternativas concretas, lo que prohíbe la Directiva (UE) 2024/825 y su estado en España.",
      lead: "La IA escribe «sostenible» sin pestañear. Esta hoja te ayuda a cambiar las frases genéricas por otras que puedes demostrar. Imprímela y tenla a mano.",
      sections: [
        {
          id: "frases",
          title: "Frases a evitar y qué poner en su lugar",
          intro: "Las alternativas solo valen si son verdad y lo puedes demostrar.",
          blocks: [
            {
              type: "table",
              head: ["Evita", "Mejor, si lo puedes demostrar"],
              rows: [
                [
                  "«Sostenible», «eco-friendly», «verde»",
                  "«Elaborado con ingredientes de agricultura ecológica certificada», con el logotipo ecológico de la UE.",
                ],
                ["«Envase ecológico»", "«Envase de cartón reciclable: deposítalo en el contenedor azul.»"],
                [
                  "«Respetuoso con el planeta», «bueno para la tierra»",
                  "Lo concreto: «Avena cultivada en [lugar] por [productor]», «Sin plástico en el envase».",
                ],
                [
                  "«Neutro en carbono», «huella cero», si es por compensar emisiones",
                  "Lo que reduces de verdad, con datos: «Hemos reducido un [X] % el plástico del envase respecto a [año]».",
                ],
                [
                  "«Seremos neutros en 2030»",
                  "Solo con un plan detallado, metas medibles y supervisión de un tercero independiente. Si no lo tienes, no lo digas.",
                ],
                [
                  "Un sello propio («Compromiso Verde»)",
                  "Solo sellos certificados por terceros o creados por autoridades públicas.",
                ],
                ["«Natural» como argumento ambiental", "El ingrediente o el proceso concreto."],
                [
                  "«Refuerza las defensas», «depura»",
                  "Solo declaraciones de salud autorizadas, con su redacción exacta: búscalas en la [AESAN](https://aesan.gob.es/seguridad-alimentaria/informacion-alimentaria/declaraciones-nutricionales).",
                ],
              ],
            },
          ],
        },
        {
          id: "directiva",
          title: "Lo que prohíbe la Directiva (UE) 2024/825",
          intro: "Aplicable en la UE desde el 27 de septiembre de 2026 ([fuente](@fuentes#f21)).",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "«Verde», «sostenible», «respetuoso»…",
                  body: "Sin un comportamiento ambiental excelente reconocido, como la Etiqueta Ecológica de la UE u otras etiquetas oficiales.",
                },
                {
                  term: "«Neutro en carbono» por compensar",
                  body: "Afirmar un impacto neutro, reducido o positivo gracias a compensaciones de emisiones.",
                },
                {
                  term: "Sellos sin certificación",
                  body: "Sellos de sostenibilidad sin certificación de un tercero ni respaldo de una autoridad pública.",
                },
                {
                  term: "Promesas sin plan",
                  body: "«Neutros en 2030» sin un plan detallado y realista, supervisado por un tercero independiente.",
                },
                {
                  term: "La parte por el todo",
                  body: "Presentar como de todo el producto o de toda la empresa algo que solo afecta a una parte.",
                },
                {
                  term: "Lo obligatorio como mérito",
                  body: "Presentar como una ventaja propia algo que la ley exige a todos los productos de esa categoría.",
                },
              ],
            },
            {
              type: "note",
              text: "El logotipo ecológico de la UE es un sello oficial: úsalo. Lo que no vale es saltar de «ecológico certificado» a «sostenible» a secas.",
            },
          ],
        },
        {
          id: "espana",
          title: "¿Y en España?",
          blocks: [
            {
              type: "p",
              text: "España aún no ha transpuesto la directiva: el plazo venció el 27 de marzo de 2026, la Ley de Consumo Sostenible sigue en tramitación y la Comisión Europea abrió un procedimiento de infracción en mayo de 2026 ([fuente](@fuentes#f22)).",
            },
            {
              type: "p",
              text: "Pero **no es una prórroga**. La publicidad engañosa ya se puede perseguir con la Ley de Competencia Desleal, la Ley General de Publicidad y la ley de consumidores, que los tribunales interpretan a la luz de la directiva. Y si vendes en países que sí la han transpuesto, se te aplican sus normas. **Escribe ya como si estuviera en vigor.**",
            },
          ],
        },
        {
          id: "con-ia",
          title: "Que la IA te ayude a no caer",
          blocks: [
            {
              type: "steps",
              items: [
                "Añade la regla a tu [contexto de empresa](@contexto-de-empresa): así deja de colarte frases genéricas desde el principio.",
                "Escribe y revisa tus textos con la skill [copywriting](@skills#skill-copywriting): no hace afirmaciones que no se puedan respaldar.",
                "O usa este prompt rápido:",
              ],
            },
            {
              type: "prompt",
              title: "Revisión antigreenwashing",
              text: "Revisa este texto antes de publicarlo. Señala cualquier afirmación ambiental genérica («sostenible», «verde», «respetuoso con el planeta»…), cualquier neutralidad de carbono basada en compensaciones, los sellos sin certificación y las propiedades de salud. Para cada una, propón una alternativa concreta y verificable sin inventar datos: si te falta uno, escribe [DATO A CONFIRMAR]. Mis certificados y los datos que puedo demostrar son: [lista].\n\n[pega aquí el texto]",
            },
            {
              type: "note",
              text: "Esta hoja es orientativa y no sustituye el consejo de un asesor legal.",
            },
          ],
        },
      ],
    },

    "politica-de-uso": {
      title: "Plantilla de política de uso de IA",
      description:
        "Una política de uso de la IA de una página para tu equipo, lista para adaptar, en texto y en Word.",
      lead: "Una página para que todo tu equipo sepa para qué se usa la IA, con qué cuentas y qué no se hace nunca. Cópiala, adáptala en 20 minutos y compártela.",
      sections: [
        {
          id: "por-que",
          title: "Por qué tenerla",
          blocks: [
            {
              type: "p",
              text: "Casi ocho de cada diez personas que usan IA en el trabajo llevan sus propias herramientas ([fuente](@fuentes#f25)). Sin reglas, cada uno mete los datos que le parece en la cuenta que tiene a mano.",
            },
            {
              type: "p",
              text: "Además, el Reglamento Europeo de IA pide a las empresas que la usan **tomar medidas para apoyar la formación** de su equipo, sin exigir un nivel concreto ([fuente](@fuentes#f26)). Una política de una página y una reunión para explicarla son un buen primer paso.",
            },
          ],
        },
        {
          id: "plantilla",
          title: "La plantilla",
          intro: "Rellena lo que va entre corchetes y borra lo que no aplique.",
          blocks: [
            {
              type: "file",
              file: "politica-uso-ia.md",
              title: "Política de uso de la IA",
              downloads: [
                {
                  href: `${TALK_DOWNLOADS}/es/politica-uso-ia.docx`,
                  label: "Descargar en Word",
                  meta: ".docx, para editarla",
                },
              ],
            },
          ],
        },
        {
          id: "implantarla",
          title: "Cómo implantarla",
          blocks: [
            {
              type: "steps",
              items: [
                "**Adáptala** a tu negocio: herramientas, datos y responsable.",
                "**Explícala** en una reunión corta, con ejemplos de vuestro día a día: qué sí, qué no y a quién preguntar.",
                "**Pide que cada persona la lea y la firme**, y guarda una copia: es tu constancia de formación.",
                "**Revísala** cada seis meses o cuando cambiéis de herramienta.",
              ],
            },
            {
              type: "note",
              text: "Inspirada en la [política interna de IA generativa de la AEPD](@fuentes#f27), en versión pyme. No sustituye el consejo de un asesor.",
            },
          ],
        },
      ],
    },

    fuentes: {
      title: "Fuentes de la charla",
      description:
        "Todas las fuentes de los datos de la charla «IA sin humo», ordenadas por diapositiva y con enlace.",
      lead: "Cada dato de la charla con su enlace. Si dudas de alguno, compruébalo en un clic: la IA te apunta a los datos; tú compruebas que existen.",
      sections: [
        {
          id: "diagnostico",
          title: "Diagnóstico",
          intro: "Diapositivas 4 a 7.",
          blocks: [{ type: "sources", ids: ["F2", "F4", "F5", "F6", "F7", "F8", "F32", "F29", "F28"] }],
        },
        {
          id: "como-funciona",
          title: "Cómo funciona",
          intro: "Diapositivas 9 y 10.",
          blocks: [{ type: "sources", ids: ["F9", "F10"] }],
        },
        {
          id: "sacarle-partido",
          title: "Cómo sacarle partido",
          intro: "Diapositiva 20.",
          blocks: [{ type: "sources", ids: ["F11"] }],
        },
        {
          id: "lo-que-nunca",
          title: "Lo que nunca debes hacer",
          intro: "Diapositivas 25 a 32.",
          blocks: [
            { type: "sources", ids: ["F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F23"] },
          ],
        },
        {
          id: "preguntas",
          title: "Para el turno de preguntas",
          blocks: [{ type: "sources", ids: ["F1", "F3", "F22", "F24", "F30", "F31"] }],
        },
        {
          id: "politica",
          title: "Para la política de uso",
          blocks: [{ type: "sources", ids: ["F25", "F26", "F27"] }],
        },
      ],
    },
  },

  sources: {
    F1: {
      title: "INE: Encuesta sobre el uso de TIC y del comercio electrónico en las empresas (22/10/2026)",
      claim:
        "El 33,6 % de las empresas de 10 o más empleados usó IA en el primer trimestre de 2026, y el 21,4 % de las de menos de 10. El INE avisa de que no es estrictamente comparable con años anteriores.",
    },
    F2: {
      title: "Brynjolfsson, Li y Raymond: «Generative AI at Work» (NBER, 2023; publicado en revista en 2025)",
      claim:
        "Con 5.179 agentes de atención al cliente, la IA subió las consultas resueltas por hora un 14 % de media y un 34 % en los menos experimentados, con un efecto mínimo en los más expertos.",
    },
    F3: {
      title: "Dell’Acqua et al.: «Navigating the Jagged Technological Frontier» (Harvard Business School, 2023)",
      claim:
        "Con 758 consultores de BCG: en tareas dentro de la «frontera» de la IA, un 12,2 % más de tareas, un 25,1 % más rápido y un 40 % más de calidad. En una tarea fuera de ella, quienes usaron IA tuvieron 19 puntos menos de probabilidad de acertar.",
    },
    F4: {
      title: "Gallup y Bentley University: «Americans Aren’t Sold on Businesses Using AI in Advertising» (mayo de 2026)",
      claim:
        "Encuesta a 3.270 adultos de EE. UU.: el 49 % ve mal que las empresas usen IA en publicidad (32 % neutral, 19 % bien). El 75 % acepta que se use para ideas y primeros borradores si se dice claramente, y el 62 % rechaza que se creen personas o voces con IA, aunque se avise.",
    },
    F5: {
      title: "Gallup y Bentley University: Business in Society Report (2026)",
      claim:
        "Solo el 27 % de los estadounidenses confía en que las empresas usen la IA de forma responsable (31 % en 2025).",
    },
    F6: {
      title: "OpenAI: «Sycophancy in GPT-4o: what happened and what we’re doing about it» (29/04/2025)",
      claim:
        "OpenAI retiró una actualización de ChatGPT por ser excesivamente aduladora. Lo atribuye a haberse apoyado demasiado en la valoración inmediata de los usuarios.",
    },
    F7: {
      title: "OpenAI: «Why language models hallucinate» (05/09/2025)",
      claim:
        "OpenAI explica que el entrenamiento y las evaluaciones habituales premian adivinar frente a reconocer que no se sabe algo, como un examen tipo test en el que dejar la respuesta en blanco siempre puntúa cero.",
    },
    F8: {
      title:
        "METR: «Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity» (10/07/2025)",
      claim:
        "Ensayo con 16 programadores expertos y 246 tareas reales en sus propios proyectos: con IA tardaron un 19 % más, y después seguían creyendo que habían ido un 20 % más rápido. Eran expertos, en proyectos que conocen muy bien y con herramientas de principios de 2025: muestra que la sensación de ir rápido engaña, no que la IA no sirva.",
    },
    F32: {
      title:
        "Autoriteit Persoonsgegevens (Países Bajos): brechas de datos por usar chatbots de IA en el trabajo (agosto de 2024 y diciembre de 2025)",
      claim:
        "La autoridad neerlandesa de protección de datos recibió notificaciones de brechas causadas por empleados que metieron datos personales en chatbots: datos médicos de pacientes en una consulta de medicina de familia y direcciones de clientes en una empresa de telecomunicaciones. En 2025 avisó de que van en aumento. Aparte, en diciembre de 2024 la autoridad italiana multó a OpenAI con 15 millones de euros por entrenar ChatGPT con datos personales sin base legal adecuada (OpenAI recurrió).",
    },
    F29: {
      title: "Moffatt contra Air Canada, 2024 BCCRT 149 (Columbia Británica, 14/02/2024)",
      claim:
        "El chatbot de Air Canada informó mal a un cliente sobre una tarifa. La aerolínea alegó que el chatbot era responsable de sus actos, y el tribunal lo rechazó: la empresa responde de toda la información de su web, venga de una página o de un chatbot.",
    },
    F28: {
      title: "Reglamento Europeo de IA, art. 50 (transparencia), aplicable desde el 2/08/2026",
      claim:
        "Obliga a que las personas sepan que hablan con una IA (salvo que sea evidente) y a señalar los contenidos ultrarrealistas («deepfakes»). Si una empresa monta un chatbot con su propia marca, puede quedar sujeta a estas obligaciones.",
    },
    F9: {
      title: "Anthropic: «Tracing the thoughts of a large language model» (27/03/2025)",
      claim:
        "Anthropic reconoce que no entiende cómo sus modelos hacen la mayoría de lo que hacen y presenta técnicas para «mirar dentro». Uno de los hallazgos: al escribir poesía, el modelo planifica la rima antes de llegar a ella.",
    },
    F10: {
      title:
        "Bender, Gebru, McMillan-Major y Mitchell: «On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?» (FAccT 2021)",
      claim:
        "El artículo que popularizó la metáfora del «loro estocástico». Ya advertía también de los costes ambientales de los modelos grandes.",
    },
    F11: {
      title: "AEPD: «Asistentes y agentes de IA. Decálogo para personas usuarias» (27/10/2026)",
      claim:
        "Cinco preguntas antes de usar un agente: qué puede ver, qué recuerda, qué puede hacer en tu nombre, adónde envía tus datos y si afecta a otras personas. La idea clave: el agente prepara y la persona aprueba, sin permisos permanentes.",
    },
    F12: {
      title: "Reglamento General de Protección de Datos (RGPD), Reglamento (UE) 2016/679",
      claim:
        "Art. 9: categorías especiales de datos, entre ellas los de salud. Art. 28: contrato con el encargado del tratamiento.",
    },
    F13: {
      title:
        "Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)",
      claim: "La ley española que completa el RGPD.",
    },
    F14: {
      title: "AEPD: decálogo «Cuidado con lo que le confIAs» (27/01/2026)",
      claim:
        "Recomienda no compartir con la IA datos personales (nombre, dirección, teléfono, DNI, imágenes de personas) ni información médica, financiera o contractual, y no usar nunca imágenes de otras personas para crear contenido nuevo.",
    },
    F15: {
      title: "OpenAI: controles de datos y privacidad en los planes de empresa",
      claim:
        "En ChatGPT Free, Plus y Pro, el uso de tus chats para entrenar está activado por defecto y se desactiva en Configuración → Controles de datos → «Mejorar el modelo para todos». En ChatGPT Business, Enterprise, Edu y la API no se entrena con tus datos por defecto.",
    },
    F16: {
      title: "Google: privacidad de las apps de Gemini y de Gemini en Google Workspace",
      claim:
        "En la app de Gemini, el uso de los chats para mejorar los servicios viene activado por defecto en mayores de 18. Personas revisoras leen una parte de los chats, que se conservan hasta tres años aunque borres el historial; con el historial desactivado, los chats se guardan unos dos meses. En Google Workspace, Google no usa tu contenido para entrenar modelos sin tu permiso.",
    },
    F17: {
      title: "Anthropic: «Updates to Consumer Terms and Privacy Policy» (28/08/2025)",
      claim:
        "Desde entonces, en Claude Free, Pro y Max hay que elegir si se permite entrenar con tus chats, y el botón principal del aviso lo dejaba activado. Si se permite, los datos se conservan hasta 5 años; si no, 30 días. No afecta a los planes comerciales (Team, Enterprise y API).",
    },
    F18: {
      title: "Chats de ChatGPT indexados en Google (julio y agosto de 2025)",
      claim:
        "Se encontraron casi 4.500 conversaciones compartidas indexadas en Google, algunas con temas personales y delicados. OpenAI retiró en cuestión de horas la opción de hacer los enlaces visibles en buscadores y pidió que se desindexaran.",
    },
    F19: {
      title: "Deloitte Australia devuelve parte de un informe con errores atribuidos a la IA (octubre de 2025)",
      claim:
        "Un informe de 237 páginas para el Gobierno australiano, de 440.000 dólares australianos, con referencias inexistentes y una cita inventada atribuida a una jueza. Deloitte devolvió el último pago, y la versión corregida reconoce el uso de IA generativa.",
    },
    F20: {
      title: "Abogados sancionados en España por citas inventadas",
      claim:
        "Tribunal Constitucional (septiembre de 2024): apercibimiento por citar 19 sentencias inexistentes. TSJ de Canarias (2026): sanción por un recurso con 48 citas falsas. TSJ de Galicia (julio de 2026): multa de 1.800 € por 24 citas falsas; el tribunal recuerda que usar IA no está prohibido, pero que no sustituye el criterio profesional.",
    },
    F21: {
      title: "Directiva (UE) 2024/825, de empoderamiento de los consumidores para la transición ecológica",
      claim:
        "Prohíbe las afirmaciones ambientales genéricas sin un comportamiento ambiental excelente reconocido, los sellos de sostenibilidad sin certificación ni respaldo público, las afirmaciones de impacto neutro, reducido o positivo basadas en compensaciones y las promesas de futuro sin un plan detallado supervisado por un tercero independiente. Plazo de transposición: 27/03/2026. Aplicación: 27/09/2026.",
    },
    F22: {
      title: "Estado de la transposición en España (otoño de 2026)",
      claim:
        "España no transpuso a tiempo: la Comisión abrió un procedimiento de infracción el 28/05/2026 y la Ley de Consumo Sostenible sigue en tramitación. Mientras tanto, el greenwashing se puede perseguir con la Ley de Competencia Desleal, la Ley General de Publicidad y la Ley General para la Defensa de los Consumidores, interpretadas conforme a la directiva.",
    },
    F23: {
      title: "Comisión Europea: estudio de 2020 sobre alegaciones ambientales",
      claim:
        "El 53,3 % de las alegaciones ambientales examinadas en la UE eran vagas, engañosas o infundadas, y el 40 % no tenía respaldo.",
    },
    F24: {
      title: "Declaraciones de propiedades saludables: Reglamento (CE) 1924/2006 y Reglamento (UE) 432/2012",
      claim:
        "Solo se pueden usar las declaraciones de propiedades saludables autorizadas, con sus condiciones. La AESAN tiene una página y un buscador de las autorizadas.",
    },
    F30: {
      title: "Proyecto de Ley Orgánica para el buen uso y la gobernanza de la IA (España)",
      claim:
        "Aprobado por el Consejo de Ministros el 26/05/2026 y en tramitación en el Congreso. Prevé multas de hasta 35 millones de euros y sitúa a la AESIA como supervisora. Hasta que se apruebe, no se puede multar con ella.",
    },
    F31: {
      title: "Google: «Measuring the environmental impact of AI inference» (agosto de 2025)",
      claim:
        "Según Google, una consulta de texto mediana en Gemini consume 0,24 Wh, emite 0,03 g de CO₂e y gasta 0,26 ml de agua. Son datos de la propia empresa: no incluyen el entrenamiento, la red ni el dispositivo del usuario, y hay expertos que critican que no cuentan el agua indirecta.",
    },
    F25: {
      title: "Microsoft y LinkedIn: Work Trend Index 2024",
      claim:
        "El 75 % de los trabajadores del conocimiento usa IA en el trabajo, y el 78 % de ellos lleva sus propias herramientas (80 % en Europa). Solo el 39 % ha recibido formación de su empresa. Es un estudio de una empresa que vende IA: tómalo como orden de magnitud.",
    },
    F26: {
      title: "Reglamento Europeo de IA, art. 4, reformado por el Reglamento (UE) 2026/1744",
      claim:
        "Desde el 27/07/2026, el art. 4 pide «tomar medidas para apoyar» la alfabetización en IA del personal, en lugar de «garantizar un nivel suficiente», y aclara que no hay que garantizar un nivel concreto.",
    },
    F27: {
      title: "AEPD: Política general interna para el uso de IA generativa (27/11/2025)",
      claim:
        "La política interna de la propia AEPD, la primera de este tipo en el sector público español. Un buen modelo, en grande, para una política de una página.",
    },
  },

  skills: {
    copywriting: {
      title: "textos para tu web",
      body: "Escribe o reescribe tu página de inicio, una ficha de producto o un titular. Primero mira lo que ya tienes y solo cambia lo necesario, y no hace afirmaciones que no se puedan respaldar: justo lo que pide la ley contra el greenwashing.",
    },
    "copy-editing": {
      title: "revisar y pulir textos",
      body: "Corrige, acorta y pule un texto que ya tienes sin reescribirlo entero, y quita las frases que delatan que lo escribió una IA.",
    },
    humanizer: {
      title: "que no suene a IA",
      body: "La más popular para esto: reescribe un texto que suena a ChatGPT para que suene a quien lo firma, sin cambiar lo que dice. Busca decenas de tics, como los contrastes «no es X, es Y» o los cierres de una sola línea.",
    },
    "customer-research": {
      title: "el perfil de tu cliente",
      body: "La que salió en la charla. Analiza reseñas, encuestas o comentarios de clientes y te dice qué significan de verdad, qué puedes concluir con seguridad y qué preguntar después. Quita antes los nombres de tus clientes ([cómo](@privacidad#datos-de-clientes)).",
    },
    social: {
      title: "contenido para redes",
      body: "Ideas, publicaciones, carruseles y guiones de vídeo corto para Instagram, Facebook, LinkedIn o TikTok, y un calendario para no improvisar cada semana.",
    },
    emails: {
      title: "correos automáticos",
      body: "Diseña o mejora secuencias de correo: la bienvenida a quien se apunta a tu boletín, el seguimiento tras una compra o recuperar a clientes que hace tiempo que no compran.",
    },
    "seo-audit": {
      title: "por qué no apareces en Google",
      body: "Diagnostica el SEO de tu web: por qué ha bajado el tráfico, por qué una página no sale o si los títulos están bien. Incluye SEO local, clave si vendes en tu zona.",
    },
    "ai-seo": {
      title: "aparecer en las respuestas de la IA",
      body: "Cada vez más clientes preguntan a ChatGPT o a Perplexity en lugar de buscar en Google. Te dice qué hacer para que la IA te cite y te recomiende.",
    },
  },
};
