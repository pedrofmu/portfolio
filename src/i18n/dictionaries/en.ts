import type { Dictionary } from "./es";

/**
 * English (británico): empresas de fuera de España que contratan en remoto y
 * negocios de habla inglesa instalados en España. Pone por delante el trabajo
 * en remoto, la hora europea, el RGPD y la facturación en euros. Es también el
 * idioma por defecto (x-default).
 */
export const en: Dictionary = {
  meta: {
    title: "Custom software for small businesses · Pedro Fernández",
    description:
      "Freelance software developer based in Spain, working remotely with companies across Europe. Custom internal tools and AI. First call free.",
  },
  skipLink: "Skip to content",
  newTab: "(opens in a new tab)",
  nav: {
    label: "Sections",
    home: "pedrofm, back to top",
    sections: {
      servicios: "Services",
      casos: "Projects",
      opiniones: "Testimonials",
      "donde-me-has-visto": "Talks and articles",
      proceso: "How I work",
      "sobre-mi": "About me",
    },
    cta: "Tell me about your project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    title: { start: "Digitalise your business and", highlight: "win back hours", end: "every week." },
    lead: "I build custom internal systems and AI tools that solve your business’s problems. Remotely from Spain, on European time.",
    primary: "Tell me about your project",
    secondary: "See case studies",
    resultsLabel: "Results from recent projects",
    resultPrefix: "Case study:",
    results: {
      biocultura: {
        title: "All event management in one place",
        project: "BioCultura intranet",
      },
      "signature-recognition": {
        title: "Signatures checked from a photo",
        project: "Signature recognition",
      },
      apcoatings: { title: "New leads from the chatbot", project: "APCoatings" },
    },
  },
  servicios: {
    title: "Services",
    intro:
      "Custom software and artificial intelligence for small and medium-sized businesses. Tell me what eats up your team’s time and we’ll work out how to fix it.",
    items: [
      {
        title: "Custom software",
        lead: "A tool that fits the way you work.",
        body: "I build internal applications to manage stock, tasks and projects. The data you now have scattered across spreadsheets moves to one place where the whole team can work.",
      },
      {
        title: "Artificial intelligence",
        lead: "Help with enquiries, data and repetitive work.",
        body: "I build chatbots to look after your customers and assistants that analyse data, organise information and prepare work for your team. We start from one specific task you want to solve.",
      },
    ],
  },
  casos: {
    title: "Real digitalisation projects for small businesses",
    before: "Before",
    now: "Now",
    readFull: "Read the full case study",
    hideFull: "Hide the full case study",
    pause: "Pause video",
    play: "Play video",
    items: {
      biocultura: {
        name: "BioCultura intranet",
        result: "All event management in one place.",
        before:
          "At VidaSana, which runs the BioCultura fairs in Spain, activity proposals arrived by email and through an outdated website. The whole team shared one account, and speakers showed up twice.",
        now: "A public form collects the proposals and a private dashboard is used to review, approve and publish them, with one account per person, filters and export to Excel.",
        detail: [
          "Activity proposals were handled by email and through an outdated website where nobody could find anything: the interface gave no guidance, and every task began with working out where things were and how they worked.",
          "Underneath, the problem was worse. Users were hard-coded and the whole team shared a single account. The database didn’t enforce uniqueness, so records such as speakers appeared twice and filtering was impossible. There was no way to export to Excel either.",
          "The intranet reorganises it from top to bottom: a public form to receive proposals and a private dashboard to review, approve and publish them, with one account per person, unique records, filters that work and export to Excel.",
        ],
        videoLabel: "Silent video: an activity goes from proposal to the BioCultura programme.",
        linkLabel: "See the project on LinkedIn",
      },
      apcoatings: {
        name: "APCoatings chatbot",
        result: "Website visits turn into qualified leads.",
        before:
          "On the website of Abad Pinturas, a Spanish paint company, anyone with a specific question had to hunt for the answer in the catalogue and in technical data sheets not everyone understands.",
        now: "The chatbot cross-references the catalogue with the data sheets and recommends the right product in plain language, at any hour. The team receives the enquiry already narrowed down.",
        detail: [
          "People who visit the APCoatings website usually arrive with a very specific question: which product to use for a given surface or situation. The answer exists, but it is spread across the catalogue and the technical data sheets, and written in language not everyone is comfortable with.",
          "The chatbot cross-references the website’s catalogue with those data sheets and recommends products for each use case, explaining them in plain language. It works at any hour, including when nobody is on the other end.",
          "So a visit that would have left without an answer becomes a qualified lead, and the team receives the enquiry already narrowed down.",
        ],
        videoLabel: "Silent video: the APCoatings chatbot recommends a paint system to a customer.",
        linkLabel: "apcoatings.net",
      },
      "signature-recognition": {
        name: "Signature recognition",
        result: "Signatures checked from a photo, with no manual review.",
        before:
          "In Jield BV’s permit manager, used in laboratories, permits are signed by hand on paper. Finding out which signatures were missing meant checking them one by one.",
        now: "A photo of the signed paper is enough, even with shadows or taken at an angle: the service finds each box and checks whether it is signed. If it can’t read one, it asks for another photo.",
        detail: [
          "Jield BV has a permit manager used in laboratories. Permits are signed by hand on paper, and knowing who had signed and which signatures were missing meant reviewing each one.",
          "I built a service with FastAPI and OpenCV that adds two ArUco markers and a DataMatrix code with its identifier to every signature box in the PDF. When it receives a photo of the signed paper, the service locates the boxes, corrects the perspective of each one and compares the ink with the surrounding paper to detect whether it is signed.",
          "As a result, the permit manager knows which signatures are there and which are missing, without manual review or a scanner. Comparing against the paper means it copes with shadows and photos taken at an angle, even from basic phones. If a box’s identifier can’t be read, the service asks for another photo rather than attributing the signature to the wrong person.",
        ],
        videoLabel:
          "Silent video: the service detects which boxes on a permit are signed from a photo.",
        linkLabel: "jield.dev",
      },
    },
  },
  opiniones: {
    title: "What clients say",
    quote: [
      "I had the pleasure of working with Pedro on integrating an AI chatbot into the Abad Pinturas website (apcoatings.net), and the result exceeded our expectations.",
      "What sets Pedro apart from other developers is that he doesn’t just deliver code: he understands the client’s business and steers every technical decision towards a real goal. In our case, turning web traffic into sales opportunities.",
      "I especially value his transparent communication throughout the process, his ability to translate technical concepts into understandable terms, and his commitment to the final result.",
      "Without a doubt a trusted partner for any project applying technology to business. I recommend him without reservation.",
    ],
    quoteLang: null,
    translatedNote: "Translated from Spanish.",
    more: "Read more",
    less: "Read less",
    toggleSuffix: ": Antonio Miralles Abad’s review",
    role: "General manager · Abad Pinturas S.L.",
    client: "Client",
  },
  apariciones: {
    title: "Talks, articles and other appearances",
    label: "Talks and articles",
    carousel: "carousel",
    prev: "Previous item",
    next: "Next item",
    goTo: "Go to item",
    items: {
      biocultura: {
        alt: "Pedro Fernández speaking at BioCultura Madrid 2025",
        category: "Talk, in Spanish",
        title: "BioCultura Madrid 2025 · AI in certification processes",
        linkLabel: "See the talk on LinkedIn",
      },
      medium: {
        alt: "Pedro Fernández, author of the articles published on Medium",
        category: "Articles",
        title: "I write about software on Medium",
        linkLabel: "Read on medium.com/@pedrofm",
      },
    },
  },
  proceso: {
    title: "How I work",
    lead: "You deal with me directly, from the first call to delivery.",
    cta: "Tell me about your project",
    steps: [
      {
        title: "You tell me what you need",
        body: "We start with a free 30-minute video call to understand how you work and where the problem is. If I can’t help you, I’ll say so.",
      },
      {
        title: "We agree on scope and price",
        body: "I send you a proposal with what I’ll do, the timeline and a fixed quote in euros. We agree on it before any code is written.",
      },
      {
        title: "You test as we go",
        body: "During development I show you versions you can use. We review them together to make sure the tool fits the way you work.",
      },
      {
        title: "We go live",
        body: "I hand over the tool up and running and show your team how to use it. After delivery, I’m still available for support.",
      },
    ],
  },
  sobreMi: {
    portraitAlt: "Portrait of Pedro Fernández Muñoz",
    paragraphs: [
      "I’m Pedro, a freelance software developer based in Alcoy, Spain. I work remotely with companies across Europe, and in person with businesses in Spain, to digitalise their operations: less manual work, fewer errors and tools people actually use.",
      "When you work with me, you always talk to the same person: whoever understands your problem is the one who builds the solution. No salespeople in between, no projects passed through five pairs of hands.",
      "I work in English, Spanish, French and Valencian, on Central European Time and under EU data protection law (GDPR).",
    ],
    credentialsLabel: "Credentials:",
    credentials:
      "qualified in Systems Administration and AWS certified. I build with Next.js, React, Laravel, Go, TypeScript and Node.js, with infrastructure on AWS or on your own servers.",
  },
  contacto: {
    title: "Tell me about your project",
    lead: "A free, no-obligation assessment and quote. I’ll tell you plainly whether I can help.",
    email: "Email me:",
    reply: "Reply within 24\u00a0h",
  },
  footer: {
    tagline:
      "Custom software for small businesses across Europe. Based in Alcoy, Spain, working remotely.",
    contact: "Contact",
    legalTitle: "Legal notice and privacy",
    legal:
      "Data controller: Pedro Fernández Muñoz (Alcoy, Alicante, Spain). This site uses no tracking cookies and no forms that store data. Any personal data you give me by email, phone or WhatsApp is used only to answer your enquiry and prepare a proposal, in accordance with the GDPR (EU) 2016/679 and Spain’s LOPDGDD 3/2018. It is not shared with third parties or used for advertising. You can exercise your rights of access, rectification and erasure by writing to",
    place: "Alcoy, Spain",
    backToTop: "Back to top",
  },
  notFound: {
    label: "Error 404",
    title: "This page doesn’t exist",
    body: "The link may be mistyped, or the page may no longer be here. Everything about custom software for your business is on the home page.",
    cta: "Back to home",
  },
  jsonLd: {
    jobTitle: "Freelance software developer",
    serviceType: "Custom software development",
    catalogName: "Software development services for small businesses",
    services: [
      {
        name: "Custom internal software",
        description:
          "Management applications for stock, tasks and projects that replace a company’s spreadsheets and manual processes.",
      },
      {
        name: "AI-powered tools",
        description:
          "Customer-service chatbots, data analysis and assistants that answer questions and prepare the team’s work.",
      },
    ],
    knowsAbout: [
      "Small business digitalisation",
      "Custom management software",
      "AI applied to business",
      "Web development",
    ],
    personDescription:
      "Freelance software developer based in Alcoy (Alicante, Spain). Helps small businesses across Europe digitalise their operations with internal tools and AI.",
    country: "Spain",
    europe: "European Union",
  },
};
