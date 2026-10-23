import type { Dictionary } from "./es";

/**
 * Français (vouvoiement, como pide el B2B en francés): empresas francófonas que
 * contratan en remoto y negocios franceses instalados en España. Mismo enfoque
 * que el inglés. Tipografía francesa: espacio de no separación (` `) antes
 * de los dos puntos.
 */
export const fr: Dictionary = {
  meta: {
    title: "Logiciels sur mesure pour PME · Pedro Fernández",
    description:
      "Développeur freelance basé en Espagne, en télétravail avec des entreprises de toute l’Europe. Outils internes sur mesure et IA. Premier appel offert.",
  },
  skipLink: "Aller au contenu",
  newTab: "(s’ouvre dans un nouvel onglet)",
  nav: {
    label: "Sections",
    home: "pedrofm, retour en haut",
    sections: {
      servicios: "Services",
      casos: "Projets",
      opiniones: "Avis",
      "donde-me-has-visto": "Conférences et articles",
      proceso: "Ma méthode",
      "sobre-mi": "Qui suis-je",
    },
    cta: "Parlez-moi de votre projet",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },
  hero: {
    title: { start: "Digitalisez votre PME et", highlight: "gagnez des heures", end: "chaque semaine." },
    lead: "Je développe des outils internes et des solutions d’IA sur mesure pour résoudre les problèmes de votre entreprise. En télétravail depuis l’Espagne, à l’heure européenne.",
    primary: "Parlez-moi de votre projet",
    secondary: "Voir les réalisations",
    resultsLabel: "Résultats de projets récents",
    resultPrefix: "Étude de cas :",
    results: {
      biocultura: {
        title: "Toute la gestion de l’événement au même endroit",
        project: "Intranet BioCultura",
      },
      "signature-recognition": {
        title: "Des signatures vérifiées à partir d’une photo",
        project: "Signature recognition",
      },
      apcoatings: { title: "De nouveaux prospects grâce au chatbot", project: "APCoatings" },
    },
  },
  servicios: {
    title: "Services",
    intro:
      "Logiciels sur mesure et intelligence artificielle pour les PME. Dites-moi ce qui fait perdre du temps à votre équipe et nous verrons comment y remédier.",
    items: [
      {
        title: "Logiciels sur mesure",
        lead: "Un outil adapté à votre façon de travailler.",
        body: "Je développe des applications internes pour gérer les stocks, les tâches et les projets. Les données aujourd’hui éparpillées dans des fichiers Excel sont réunies en un seul endroit où toute l’équipe peut travailler.",
      },
      {
        title: "Intelligence artificielle",
        lead: "De l’aide pour les demandes, les données et les tâches répétitives.",
        body: "Je crée des chatbots pour répondre à vos clients et des assistants qui analysent des données, organisent l’information et préparent le travail de votre équipe. Nous partons d’une tâche précise que vous voulez résoudre.",
      },
    ],
  },
  casos: {
    title: "Projets réels de digitalisation de PME",
    before: "Avant",
    now: "Maintenant",
    readFull: "Lire l’étude de cas complète",
    hideFull: "Masquer l’étude de cas complète",
    pause: "Mettre la vidéo en pause",
    play: "Lire la vidéo",
    items: {
      biocultura: {
        name: "Intranet BioCultura",
        result: "Toute la gestion de l’événement au même endroit.",
        before:
          "Chez VidaSana, qui organise les salons BioCultura en Espagne, les propositions d’activités arrivaient par courriel et via un site vieillissant. Toute l’équipe partageait un seul compte et les intervenants apparaissaient en double.",
        now: "Un formulaire public recueille les propositions et un espace privé permet de les examiner, de les valider et de les publier, avec un compte par personne, des filtres et l’export vers Excel.",
        detail: [
          "Les propositions d’activités étaient gérées par courriel et via un site vieillissant où personne ne trouvait rien : l’interface ne guidait pas, et chaque tâche commençait par chercher où se trouvait chaque chose et comment elle fonctionnait.",
          "En dessous, le problème était pire. Les utilisateurs étaient écrits en dur dans le code et toute l’équipe partageait un seul compte. La base de données n’imposait pas l’unicité, si bien que des enregistrements comme les intervenants apparaissaient en double et qu’il était impossible de filtrer. Il n’y avait pas non plus d’export vers Excel.",
          "L’intranet remet tout à plat : un formulaire public pour recevoir les propositions et un espace privé pour les examiner, les valider et les publier, avec un compte par personne, des enregistrements uniques, des filtres qui fonctionnent et l’export vers Excel.",
        ],
        videoLabel:
          "Vidéo sans son, en anglais : une activité passe de la proposition au programme de BioCultura.",
        linkLabel: "Voir le projet sur LinkedIn",
      },
      apcoatings: {
        name: "Chatbot APCoatings",
        result: "Les visites du site deviennent des prospects qualifiés.",
        before:
          "Sur le site d’Abad Pinturas, une entreprise espagnole de peinture, quiconque avait une question précise devait chercher la réponse entre le catalogue et des fiches techniques que tout le monde ne comprend pas.",
        now: "Le chatbot croise le catalogue avec les fiches techniques et recommande le bon produit en langage simple, à toute heure. L’équipe reçoit la demande déjà orientée.",
        detail: [
          "Les visiteurs du site d’APCoatings arrivent souvent avec une question très précise : quel produit utiliser pour une surface ou une situation donnée. La réponse existe, mais elle est répartie entre le catalogue et les fiches techniques, et rédigée dans un langage que tout le monde ne maîtrise pas.",
          "Le chatbot croise le catalogue du site avec ces fiches techniques et recommande un produit selon le cas d’usage, en l’expliquant en langage simple. Il fonctionne à toute heure, même quand personne n’est là pour répondre.",
          "Ainsi, une visite qui serait repartie sans réponse devient un prospect qualifié, et l’équipe reçoit la demande déjà orientée.",
        ],
        videoLabel:
          "Vidéo sans son, en anglais : le chatbot d’APCoatings recommande un système de peinture à un client.",
        linkLabel: "apcoatings.net",
      },
      "signature-recognition": {
        name: "Signature recognition",
        result: "Des signatures vérifiées à partir d’une photo, sans contrôle manuel.",
        before:
          "Dans le gestionnaire d’autorisations de Jield BV, utilisé dans des laboratoires, les autorisations sont signées à la main sur papier. Savoir quelles signatures manquaient obligeait à les vérifier une par une.",
        now: "Une photo du papier signé suffit, même avec des ombres ou prise de biais : le service repère chaque case et vérifie si elle est signée. S’il ne peut pas en lire une, il demande une autre photo.",
        detail: [
          "Jield BV propose un gestionnaire d’autorisations utilisé dans des laboratoires. Les autorisations sont signées à la main sur papier, et savoir qui avait signé et quelles signatures manquaient imposait de les vérifier une à une.",
          "J’ai développé un service avec FastAPI et OpenCV qui ajoute à chaque case de signature du PDF deux marqueurs ArUco et un code DataMatrix contenant son identifiant. À la réception d’une photo du papier signé, le service localise les cases, corrige la perspective de chacune et compare l’encre au papier qui l’entoure pour détecter si elle est signée.",
          "Le gestionnaire d’autorisations sait ainsi quelles signatures sont présentes et lesquelles manquent, sans contrôle manuel ni scanner. La comparaison avec le papier permet de traiter les ombres et les photos prises de biais, même depuis des téléphones basiques. Si l’identifiant d’une case est illisible, le service demande une autre photo plutôt que d’attribuer la signature à la mauvaise personne.",
        ],
        videoLabel:
          "Vidéo sans son, en anglais : à partir d’une photo, le service détecte quelles cases d’une autorisation sont signées.",
        linkLabel: "jield.dev",
      },
    },
  },
  opiniones: {
    title: "Ce qu’en disent mes clients",
    quote: [
      "J’ai eu le plaisir de travailler avec Pedro sur l’intégration d’un chatbot d’IA au site d’Abad Pinturas (apcoatings.net), et le résultat a dépassé nos attentes.",
      "Ce qui distingue Pedro des autres développeurs, c’est qu’il ne se contente pas de livrer du code : il comprend le métier du client et oriente chaque décision technique vers un objectif concret. Dans notre cas, transformer le trafic du site en opportunités commerciales.",
      "Je souligne tout particulièrement sa communication transparente tout au long du projet, sa capacité à traduire des notions techniques en termes compréhensibles et son engagement envers le résultat final.",
      "Sans aucun doute un partenaire de confiance pour tout projet de technologie appliquée à l’entreprise. Je le recommande sans réserve.",
    ],
    quoteLang: null,
    translatedNote: "Traduit de l’espagnol.",
    more: "Lire la suite",
    less: "Réduire",
    toggleSuffix: " : avis d’Antonio Miralles Abad",
    role: "Gérant · Abad Pinturas S.L.",
    client: "Client",
  },
  apariciones: {
    title: "Conférences, articles et autres interventions",
    label: "Conférences et articles",
    carousel: "carrousel",
    prev: "Élément précédent",
    next: "Élément suivant",
    goTo: "Aller à l’élément",
    items: {
      biocultura: {
        alt: "Pedro Fernández en conférence à BioCultura Madrid 2025",
        category: "Conférence, en espagnol",
        title: "BioCultura Madrid 2025 · L’IA dans les processus de certification",
        linkLabel: "Voir la conférence sur LinkedIn",
      },
      medium: {
        alt: "Pedro Fernández, auteur des articles publiés sur Medium",
        category: "Articles",
        title: "Mes articles sur l’informatique, publiés sur Medium",
        linkLabel: "Lire sur medium.com/@pedrofm",
      },
    },
  },
  proceso: {
    title: "Ma méthode",
    lead: "Vous traitez directement avec moi, du premier appel à la livraison.",
    cta: "Parlez-moi de votre projet",
    steps: [
      {
        title: "Vous me dites ce dont vous avez besoin",
        body: "Nous commençons par un appel vidéo gratuit de 30 minutes pour comprendre votre fonctionnement et cerner le problème. Si je ne peux pas vous aider, je vous le dis.",
      },
      {
        title: "Nous fixons le périmètre et le prix",
        body: "Je vous envoie une proposition qui détaille ce que je vais faire, les délais et un devis ferme en euros. Tout est validé avant d’écrire la moindre ligne de code.",
      },
      {
        title: "Vous testez au fur et à mesure",
        body: "Pendant le développement, je vous montre des versions utilisables. Nous les passons en revue ensemble pour vérifier que l’outil colle à votre façon de travailler.",
      },
      {
        title: "Nous passons en production",
        body: "Je vous livre l’outil opérationnel et je forme votre équipe à son utilisation. Après la livraison, je reste disponible pour le support.",
      },
    ],
  },
  sobreMi: {
    portraitAlt: "Portrait de Pedro Fernández Muñoz",
    paragraphs: [
      "Je suis Pedro, développeur freelance basé à Alcoy, en Espagne. Je travaille à distance avec des entreprises de toute l’Europe, et en présentiel avec celles installées en Espagne, pour digitaliser leurs opérations : moins de tâches manuelles, moins d’erreurs et des outils réellement utilisés.",
      "Avec moi, vous parlez toujours à la même personne : celle qui comprend votre problème est celle qui le programme. Pas de commerciaux entre nous, pas de projets qui passent entre cinq mains.",
      "Je travaille en français, en anglais, en espagnol et en valencien, à l’heure d’Europe centrale et dans le cadre du RGPD.",
    ],
    credentialsLabel: "Garanties techniques :",
    credentials:
      "diplômé en administration de systèmes et certifié AWS. Je développe avec Next.js, React, Laravel, Go, TypeScript et Node.js, sur une infrastructure AWS ou sur vos propres serveurs.",
  },
  contacto: {
    title: "Parlez-moi de votre projet",
    lead: "Étude et devis gratuits et sans engagement. Je vous dis franchement si je peux vous aider.",
    email: "Écrivez-moi :",
    reply: "Réponse en moins de 24 h",
  },
  footer: {
    tagline:
      "Logiciels sur mesure pour les PME de toute l’Europe. Depuis Alcoy, en Espagne, en télétravail.",
    contact: "Contact",
    legalTitle: "Mentions légales et confidentialité",
    legal:
      "Responsable du traitement : Pedro Fernández Muñoz (Alcoy, Alicante, Espagne). Ce site n’utilise ni cookies de suivi ni formulaires qui stockent des données. Les données personnelles que vous me communiquez par courriel, téléphone ou WhatsApp servent uniquement à répondre à votre demande et à préparer une proposition, conformément au RGPD (UE) 2016/679 et à la loi espagnole LOPDGDD 3/2018. Elles ne sont ni cédées à des tiers ni utilisées à des fins publicitaires. Vous pouvez exercer vos droits d’accès, de rectification et d’effacement en écrivant à",
    place: "Alcoy, Espagne",
    backToTop: "Retour en haut",
  },
  notFound: {
    label: "Erreur 404",
    title: "Cette page n’existe pas",
    body: "Le lien est peut-être mal saisi, ou la page n’existe plus. Tout ce qui concerne les logiciels sur mesure pour votre PME se trouve sur la page d’accueil.",
    cta: "Retour à l’accueil",
  },
  jsonLd: {
    jobTitle: "Développeur de logiciels freelance",
    serviceType: "Développement de logiciels sur mesure",
    catalogName: "Services de développement logiciel pour PME",
    services: [
      {
        name: "Logiciels internes sur mesure",
        description:
          "Applications de gestion des stocks, des tâches et des projets qui remplacent les fichiers Excel et les processus manuels de l’entreprise.",
      },
      {
        name: "Outils d’intelligence artificielle",
        description:
          "Chatbots de service client, analyse de données et assistants qui répondent et préparent le travail de l’équipe.",
      },
    ],
    knowsAbout: [
      "Digitalisation des PME",
      "Logiciels de gestion sur mesure",
      "Intelligence artificielle appliquée à l’entreprise",
      "Développement web",
    ],
    personDescription:
      "Développeur de logiciels freelance basé à Alcoy (Alicante, Espagne). Aide les PME de toute l’Europe à digitaliser leurs opérations avec des outils internes et de l’IA.",
    country: "Espagne",
    europe: "Union européenne",
  },
};
