import type { Dictionary } from "./es";

/**
 * Valencià (norma de l'AVL: treballe, teua, hui, faena): pymes de l'Alcoià,
 * el Comtat y la Comunitat Valenciana. Pone por delante la cercanía y el
 * trato en persona. La cita del cliente se queda en castellano, su original.
 */
export const ca: Dictionary = {
  meta: {
    title: "Programari a mida per a pimes a Alcoi · Pedro Fernández",
    /** 145 caracteres: «programador», Alcoi y las comarcas de alrededor, que Google resalta si se buscan. */
    description:
      "Programador freelance a Alcoi. Programari a mida i IA per a pimes de l’Alcoià, el Comtat, la Vall d’Albaida i Alacant. Primera telefonada gratis.",
  },
  skipLink: "Salta al contingut",
  newTab: "(s’obri en una pestanya nova)",
  nav: {
    label: "Seccions",
    home: "pedrofm, torna a l’inici",
    sections: {
      servicios: "Serveis",
      casos: "Projectes",
      opiniones: "Opinions",
      "donde-me-has-visto": "On m’has vist",
      proceso: "Com treballe",
      "sobre-mi": "Sobre mi",
    },
    cta: "Conta’m el teu cas",
    openMenu: "Obri el menú",
    closeMenu: "Tanca el menú",
    language: "Idioma",
  },
  hero: {
    title: { start: "Digitalitza la teua pime i", highlight: "recupera hores", end: "cada setmana." },
    lead: "Des d’Alcoi, desenvolupe sistemes interns i eines amb IA a mida per a resoldre els problemes del teu negoci.",
    primary: "Conta’m el teu cas",
    secondary: "Veure casos d’èxit",
    resultsLabel: "Resultats de projectes recents",
    resultPrefix: "Cas d’èxit:",
    results: {
      biocultura: {
        title: "Tota la gestió de l’esdeveniment en un sol lloc",
        project: "Intranet BioCultura",
      },
      "signature-recognition": {
        title: "Signatures comprovades des d’una foto",
        project: "Signature recognition",
      },
      apcoatings: { title: "Nous clients potencials des del xatbot", project: "APCoatings" },
    },
  },
  servicios: {
    title: "Serveis",
    intro:
      "Programari a mida i intel·ligència artificial per a pimes. Conta’m què li lleva temps al teu equip i veiem com resoldre-ho.",
    items: [
      {
        title: "Programes a mida",
        lead: "Una eina que s’adapte a la teua manera de treballar.",
        body: "Desenvolupe aplicacions internes per a gestionar inventari, tasques i projectes. Les dades que hui tens repartides en fulls d’Excel passen a un lloc on tot l’equip pot treballar.",
      },
      {
        title: "Intel·ligència artificial",
        lead: "Ajuda amb les consultes, les dades i la faena repetitiva.",
        body: "Cree xatbots per a atendre els teus clients i assistents que analitzen dades, ordenen informació i preparen faena per al teu equip. Partim d’una tasca concreta que vulgues resoldre.",
      },
    ],
  },
  casos: {
    title: "Casos reals de digitalització de pimes",
    before: "Abans",
    now: "Ara",
    readFull: "Llegir el cas complet",
    hideFull: "Amagar el cas complet",
    pause: "Pausar el vídeo",
    play: "Reproduir el vídeo",
    items: {
      biocultura: {
        name: "Intranet BioCultura",
        result: "Tota la gestió de l’esdeveniment en un sol lloc.",
        before:
          "A VidaSana, les propostes d’activitats arribaven per correu i a una web antiquada. Tot l’equip compartia un compte i els ponents eixien duplicats.",
        now: "Un formulari públic arreplega les propostes i un panell privat servix per a revisar-les, validar-les i publicar-les, amb un compte per persona, filtres i exportació a Excel.",
        detail: [
          "Les propostes d’activitats es gestionaven per correu i a través d’una web antiquada en què ningú no trobava res: la interfície no guiava, i cada tasca començava per esbrinar on estava cada cosa i com s’usava.",
          "Per davall, el problema era pitjor. Els usuaris estaven escrits en el mateix codi i tot l’equip compartia un únic compte. La base de dades no exigia unicitat, així que registres com els ponents apareixien duplicats i filtrar era impossible. Tampoc no hi havia manera d’exportar a Excel.",
          "La intranet ho reordena de dalt a baix: un formulari públic per a rebre les propostes i un panell privat per a revisar-les, validar-les i publicar-les, amb un compte per persona, registres únics, filtres que funcionen i exportació a Excel.",
        ],
        videoLabel:
          "Vídeo sense so, en castellà: una activitat passa de la proposta al programa de BioCultura.",
        linkLabel: "Veure el projecte a LinkedIn",
      },
      apcoatings: {
        name: "Xatbot APCoatings",
        result: "Les visites a la web es convertixen en clients potencials qualificats.",
        before:
          "A la web d’Abad Pinturas, qui tenia un dubte concret havia de buscar la resposta entre el catàleg i unes fitxes tècniques que no tothom entén.",
        now: "El xatbot creua el catàleg amb les fitxes tècniques i recomana el producte en llenguatge planer, a qualsevol hora. L’equip rep la consulta ja encaminada.",
        detail: [
          "Qui entra a la web d’APCoatings sol arribar amb un dubte molt concret: quin producte usar per a una superfície o una situació determinada. La resposta existix, però està repartida entre el catàleg i les fitxes tècniques, i escrita en un llenguatge que no tothom domina.",
          "El xatbot creua el catàleg de la web amb eixes fitxes tècniques i recomana producte segons el cas d’ús, explicant-ho en llenguatge planer. Funciona a qualsevol hora, també quan no hi ha ningú a l’altra banda.",
          "Així una visita que se n’hauria anat sense resposta es convertix en un client potencial qualificat, i l’equip rep la consulta ja encaminada.",
        ],
        videoLabel:
          "Vídeo sense so, en castellà: el xatbot d’APCoatings recomana un sistema de pintura a un client.",
        linkLabel: "apcoatings.net",
      },
      "signature-recognition": {
        name: "Signature recognition",
        result: "Signatures comprovades des d’una foto, sense revisió manual.",
        before:
          "En el gestor de permisos de Jield BV, que s’usa en laboratoris, els permisos se signen a mà en paper. Saber quines signatures faltaven obligava a revisar-los un per un.",
        now: "Basta una foto del paper signat, encara que tinga ombres o estiga en angle: el servei troba cada casella i comprova si està signada. Si no en pot llegir una, demana una altra foto.",
        detail: [
          "Jield BV té un gestor de permisos que s’usa en laboratoris. Els permisos se signen a mà en paper, i saber qui ha signat i quines signatures falten requeria revisar-los un per un.",
          "Desenvolupí un servei amb FastAPI i OpenCV que afig a cada casella de signatura del PDF dos marcadors ArUco i un codi DataMatrix amb el seu identificador. En rebre una foto del paper signat, el servei localitza les caselles, corregix la perspectiva de cadascuna i compara la tinta amb el paper del voltant per a detectar si està signada.",
          "Així, el gestor de permisos sap quines signatures hi ha i quines falten, sense revisió manual ni escàner. La comparació amb el paper permet treballar amb ombres i fotos fetes en angle, fins i tot des de mòbils bàsics. Si no es pot llegir l’identificador d’una casella, el servei demana una altra foto en lloc d’atribuir la signatura a una persona equivocada.",
        ],
        videoLabel:
          "Vídeo sense so, en castellà: el servei detecta quines caselles d’un permís estan signades a partir d’una foto.",
        linkLabel: "jield.dev",
      },
    },
  },
  opiniones: {
    title: "El que diuen els qui ja treballen amb mi",
    quote: [
      "He tenido el placer de trabajar con Pedro en la integración de un chatbot con IA para la web de Abad Pinturas (apcoatings.net), y el resultado ha superado las expectativas.",
      "Lo que distingue a Pedro de otros desarrolladores es que no se limita a entregar código: entiende el negocio del cliente y orienta cada decisión técnica hacia un objetivo real. En nuestro caso, convertir el tráfico web en oportunidades comerciales.",
      "Destaco especialmente su comunicación transparente durante todo el proceso, su capacidad para traducir conceptos técnicos en términos comprensibles, y su compromiso con el resultado final.",
      "Sin duda un partner de confianza para cualquier proyecto de tecnología aplicada a negocio. Lo recomiendo sin reservas.",
    ],
    quoteLang: "es",
    translatedNote: null,
    more: "Llegir més",
    less: "Llegir menys",
    toggleSuffix: " de l’opinió d’Antonio Miralles Abad",
    role: "Gerent · Abad Pinturas S.L.",
    client: "Client de Pedro",
  },
  apariciones: {
    title: "Xarrades, articles i altres aparicions",
    label: "On m’has vist",
    carousel: "carrusel",
    prev: "Aparició anterior",
    next: "Aparició següent",
    goTo: "Anar a l’aparició",
    items: {
      biocultura: {
        alt: "Ponència de Pedro Fernández a BioCultura Madrid 2025",
        category: "Ponència",
        title: "BioCultura Madrid 2025 · La IA en els processos de certificació",
        linkLabel: "Veure la ponència a LinkedIn",
      },
      medium: {
        alt: "Pedro Fernández, autor dels articles publicats a Medium",
        category: "Articles",
        title: "Escric sobre informàtica a Medium",
        linkLabel: "Llegir a medium.com/@pedrofm",
      },
    },
  },
  proceso: {
    title: "Com treballe",
    lead: "Parles directament amb mi, des de la primera conversa fins a l’entrega.",
    cta: "Conta’m el teu cas",
    steps: [
      {
        title: "Em contes què necessites",
        body: "Comencem amb una conversa gratuïta de 30 minuts, per telèfon o en persona si eres prop d’Alcoi, per a entendre com treballeu i on està el problema. Si no et puc ajudar, t’ho dic.",
      },
      {
        title: "Acordem abast i preu",
        body: "Et passe una proposta amb el que faré, els terminis i un pressupost tancat. Ho deixem acordat abans de començar a programar.",
      },
      {
        title: "Proves els avanços",
        body: "Durant el desenvolupament et mostre versions que pots usar. Les revisem junts per a comprovar que l’eina encaixa amb la vostra faena.",
      },
      {
        title: "Ho posem en marxa",
        body: "T’entregue l’eina funcionant i ensenye el teu equip a usar-la. Després de l’entrega, continue disponible per a donar-vos suport.",
      },
    ],
  },
  sobreMi: {
    portraitAlt: "Retrat de Pedro Fernández Muñoz",
    paragraphs: [
      "Em dic Pedro i treballe com a programador i desenvolupador de programari freelance a Alcoi. Ajude pimes de l’Alcoià, el Comtat i tota la Comunitat Valenciana, en persona o en remot, a digitalitzar les seues operacions: menys faena manual, menys errors i eines que de veritat s’usen.",
      "Quan treballes amb mi, parles sempre amb la mateixa persona: qui entén el teu problema és qui el programa. Sense comercials pel mig, sense projectes que passen per cinc mans.",
    ],
    credentialsLabel: "Garantia tècnica:",
    credentials:
      "titulat en Administració de Sistemes i certificat per AWS. Desenvolupe amb Next.js, React, Laravel, Go, TypeScript i Node.js, amb infraestructura a AWS o en els teus propis servidors.",
  },
  contacto: {
    title: "Conta’m el teu cas",
    lead: "Valoració i pressupost del projecte gratuïts i sense compromís. Et dic clar si et puc ajudar.",
    email: "Escriu-me:",
    reply: "Resposta en menys de 24\u00a0h",
  },
  footer: {
    tagline:
      "Desenvolupament de programari a mida per a pimes valencianes. Des d’Alcoi, en persona o en remot.",
    contact: "Contacte",
    legalTitle: "Avís legal i privacitat",
    legal:
      "Responsable: Pedro Fernández Muñoz (Alcoi, Alacant). Este lloc no utilitza galetes de seguiment ni formularis que emmagatzemen dades. Les dades personals que em facilites per correu electrònic, telèfon o WhatsApp s’utilitzen únicament per a respondre la teua consulta i preparar una proposta, d’acord amb el RGPD (UE) 2016/679 i la LOPDGDD 3/2018. No se cedixen a tercers ni s’usen amb finalitats publicitàries. Pots exercir els teus drets d’accés, rectificació i supressió escrivint a",
    place: "Alcoi, Alacant",
    backToTop: "Tornar amunt",
  },
  notFound: {
    label: "Error 404",
    title: "Esta pàgina no existix",
    body: "Potser l’enllaç està mal escrit o la pàgina ja no hi és. Tot el que busques sobre programari a mida per a la teua pime és a la pàgina principal.",
    cta: "Tornar a l’inici",
  },
  jsonLd: {
    jobTitle: "Desenvolupador de programari freelance",
    serviceType: "Desenvolupament de programari a mida",
    catalogName: "Serveis de desenvolupament de programari per a pimes",
    services: [
      {
        name: "Programes interns a mida",
        description:
          "Aplicacions de gestió per a inventari, tasques i projectes que substituïxen els fulls d’Excel i els processos manuals de l’empresa.",
      },
      {
        name: "Eines amb intel·ligència artificial",
        description:
          "Xatbots d’atenció al client, anàlisi de dades i assistents que responen i preparen la faena de l’equip.",
      },
    ],
    knowsAbout: [
      "Digitalització de pimes",
      "Programari de gestió a mida",
      "Intel·ligència artificial aplicada al negoci",
      "Desenvolupament web",
    ],
    personDescription:
      "Desenvolupador de programari freelance a Alcoi (Alacant). Ajuda pimes de l’Alcoià, el Comtat, la Vall d’Albaida, l’Alacantí i el Vinalopó a digitalitzar les seues operacions amb programes interns i IA.",
    country: "Espanya",
    europe: "Unió Europea",
  },
};
