import { TALK_DOWNLOADS } from "../../lib/charla";
import type { TalkDictionary } from "./types";

/**
 * «IA sin humo» en valencià (norma de l’AVL: treballe, teua, hui, faena). La
 * xarrada es va fer en castellà: el títol es manté tal com es va anunciar, i
 * les diapositives i els cartells estan en castellà. Els menús de les eines
 * es citen com apareixen en la seua versió en castellà, que és la que veu la
 * majoria del públic.
 */
export const ca: TalkDictionary = {
  ui: {
    talkTitle: "IA sin humo",
    subtitle: "El que sí que t’estalvia temps i el que no hauries de fer mai.",
    byline: "Xarrada de Pedro Fernández Muñoz a BioCultura Madrid 2026, el 27 de novembre. Es va fer en castellà.",
    updated: "Actualitzat: novembre de 2026",
    copy: "Copia",
    copied: "Copiat",
    downloadZip: "Descarrega el ZIP",
    zipMeta: "Per a Claude i Gemini",
    viewSource: "Mira-la a GitHub",
    skillBy: (author, repo, k) => `De ${author}, en el repositori ${repo} (més de ${k}.000 estrelles a GitHub).`,
    where: "On ix",
    slides: (n) =>
      n.length === 1 ? `Diapositiva ${n[0]}` : `Diapositives ${n.slice(0, -1).join(", ")} i ${n.at(-1)}`,
    notOnScreen: "No ix en pantalla: de paraula o per al torn de preguntes",
    posters: {
      badAlt:
        "Cartell de MuesliEco fet amb un encàrrec d’una línia: fons verd fosc, un bol de muesli, el lema «Del campo a tu cuenco», «[TU TIENDA O WEB]» i «Bueno para ti, bueno para la tierra».",
      badCaption:
        "**Malament.** Es va inventar el lema, on comprar-lo («[TU TIENDA O WEB]») i «bueno para la tierra», una afirmació ambiental genèrica.",
      goodAlt:
        "Cartell de MuesliEco fet amb els cinc ingredients: fons crema, «Pruébalo gratis», un bol amb els ingredients, els segells «Sin azúcar añadido», «Ingredientes de proximidad» i «Ecológico certificado UE», i «Sírvete aquí» al peu.",
      goodCaption:
        "**Bé.** «Pruébalo gratis», «Sírvete aquí» per al dispensador i «Ecológico certificado UE», que és concret i verificable. Tot i això, «Ingredientes de proximidad» caldria poder demostrar-ho: revisa sempre.",
    },
    resourceNames: {
      "contexto-de-empresa": "Plantilla de context d’empresa",
      encargos: "Encàrrecs que funcionen",
      skills: "Skills que valen la pena",
      conectores: "Guia de connectors",
      privacidad: "Llista de privacitat",
      greenwashing: "Greenwashing: frases que cal evitar",
      "politica-de-uso": "Política d’ús de la IA",
      fuentes: "Fonts de la xarrada",
    },
    resourcesLabel: "Recursos de la xarrada",
    contactTitle: "T’has quedat amb dubtes?",
    contactBody:
      "Conta’m el teu cas per correu o per WhatsApp. Si et puc ajudar, ho veiem en una telefonada o en persona; si no, t’ho dic.",
    emailCta: "Escriu-me per correu",
    whatsappCta: "Escriu-me per WhatsApp",
    homeCta: "Veure més de Pedro Fernández Muñoz",
  },

  home: {
    title: "IA sin humo: recursos de la xarrada a BioCultura Madrid 2026",
    description:
      "Resum, plantilles, skills, guies pas a pas i fonts de la xarrada «IA sin humo» de Pedro Fernández Muñoz a BioCultura Madrid 2026.",
    lead: "Ací tens tot el que va eixir en la xarrada: el resum, les plantilles, les guies pas a pas i la font de cada dada. Sense registrar-te.",
    sections: [
      {
        id: "recursos",
        title: "Recursos",
        intro: "En l’orde en què van eixir en la xarrada.",
        blocks: [
          {
            type: "resources",
            items: [
              {
                resource: "contexto-de-empresa",
                body: "Qui eres, què vens i com parles, en un document per a apegar en la IA. Amb un exemple omplit.",
              },
              { resource: "encargos", body: "El cartell de MuesliEco, mal fet i ben fet, i prompts llestos per a copiar." },
              { resource: "skills", body: "Les que ja porta Claude i les públiques que de veritat valen la pena, amb com instal·lar-les." },
              {
                resource: "conectores",
                body: "Quins connectors hi ha en cada eina, què demanar-los i com activar-los sense donar més claus de les necessàries.",
              },
              {
                resource: "privacidad",
                body: "Desactiva l’entrenament, revisa els teus enllaços compartits i usa dades de clients sense problemes.",
              },
              {
                resource: "greenwashing",
                body: "Frases que cal evitar, què posar en lloc seu i què diu la llei. Per a imprimir.",
              },
              {
                resource: "politica-de-uso",
                body: "Una pàgina perquè el teu equip sàpia què es pot fer amb la IA i què no.",
              },
              { resource: "fuentes", body: "Cada dada de la xarrada amb el seu enllaç, ordenada per diapositiva." },
            ],
          },
          {
            type: "downloads",
            items: [
              {
                href: `${TALK_DOWNLOADS}/ia-sin-humo-diapositivas.pdf`,
                label: "Diapositives de la xarrada",
                meta: "PDF, 4 MB, en castellà",
              },
            ],
          },
        ],
      },
      {
        id: "diagnostico",
        title: "La uses, però et servix?",
        intro: "Quasi tots la usem ja. La qüestió és si ens dona resultats o només textos que sonen bé.",
        blocks: [
          {
            type: "p",
            text: "En un estudi amb 5.179 agents d’atenció al client, la IA va augmentar un **14 %** les consultes resoltes per hora, i un **34 %** en els menys experimentats ([font](@fuentes#f2)). Més capacitat amb el mateix equip. Però cal saber usar-la, per quatre motius:",
          },
          {
            type: "defs",
            items: [
              {
                term: "Tira a allò genèric",
                body: "I el teu client ho nota: al 49 % li sembla malament que les empreses usen IA en la publicitat, i només el 27 % confia que la usen de manera responsable. Són dades dels EUA, però la tendència és clara ([font](@fuentes#f4)).",
              },
              {
                term: "Et dona la raó",
                body: "Tendix a complaure i quasi mai diu «no ho sé». OpenAI va retirar el 2025 una actualització de ChatGPT per massa afalagadora ([font](@fuentes#f6)).",
              },
              { term: "Pot filtrar les teues dades", body: "Al proveïdor de la IA o a internet. [Com evitar-ho](@privacidad)." },
              {
                term: "Pots perdre temps",
                body: "Encara que tingues la sensació d’anar més ràpid: en un estudi, programadors experts van tardar un 19 % més amb IA i creien haver anat un 20 % més ràpid ([font](@fuentes#f8)).",
              },
            ],
          },
          {
            type: "p",
            text: "I pots tindre **problemes legals**. Usar IA és legal; usar-la sense cura, no sempre:",
          },
          {
            type: "defs",
            items: [
              {
                term: "Dades de clients",
                body: "Als Països Baixos, un empleat d’una consulta mèdica va apegar dades de pacients en un xatbot. Va ser una bretxa de dades que va caldre notificar ([font](@fuentes#f32)).",
              },
              {
                term: "Afirmacions ambientals",
                body: "La IA escriu «sostenible» sense parpellejar, i la Directiva (UE) 2024/825 ho prohibix si no ho pots demostrar. [Què dir en lloc seu](@greenwashing).",
              },
              {
                term: "El que diu el teu xatbot",
                body: "Respons tu, no la IA. Air Canada va al·legar davant d’un tribunal que el seu xatbot era responsable dels seus actes, i va perdre ([font](@fuentes#f29)). A més, des del 2 d’agost de 2026 ha d’avisar que és una IA.",
              },
              {
                term: "Dades inventades",
                body: "El TSJ de Galícia va multar amb 1.800 € un advocat per un recurs amb 24 cites falses ([font](@fuentes#f20)).",
              },
            ],
          },
        ],
      },
      {
        id: "para-que-sirve",
        title: "Per al que la IA és boníssima",
        intro: "Com funciona, el just per a saber quan pots fiar-te’n.",
        blocks: [
          {
            type: "p",
            text: "Un model de llenguatge **prediu la paraula més probable** segons el que va aprendre de quantitats enormes de text. Per això sona a veritat, però no sap si ho és: quan li falta una dada, no calla, sinó que ompli el buit amb alguna cosa que sona bé. Això és «al·lucinar».",
          },
          { type: "p", text: "Brilla en les tasques de llegir, escriure i ordenar que hui et menjen hores:" },
          {
            type: "defs",
            items: [
              {
                term: "Fer tasques amb passos clars i definits",
                body: "Si saps explicar com es fa, la IA pot fer-ho. Per exemple, passar tres albarans en PDF a una taula: de mitja hora copiant línies a mà a 2 minuts revisant-la.",
              },
              {
                term: "Analitzar dades",
                body: "Resumir molta informació i traure’n el que importa: les 3 queixes que més es repetixen en 200 ressenyes, o els requisits, terminis i documentació d’una subvenció en una pàgina.",
              },
              {
                term: "Redactar informació que ja tens clara",
                body: "Tu poses les idees i les dades; ella les convertix en un bon text. El que no ha de fer és inventar-se el contingut.",
              },
            ],
          },
          {
            type: "note",
            text: "Els prompts d’estos exemples, llestos per a copiar, estan en [Encàrrecs que funcionen](@encargos#prompts).",
          },
        ],
      },
      {
        id: "como-sacarle-partido",
        title: "Com traure-li partit de veritat",
        intro: "Tu dirigixes. La IA fa la faena pesada.",
        blocks: [
          {
            type: "p",
            text: "La IA apareix en capes: dins de les teues eines (Notion, Canva, el teu programa de facturació), en automatitzacions (Zapier, Make, n8n), amb els teus arxius i el teu ordinador (aplicacions d’escriptori i modes agent) i en el xat que ja coneixes (ChatGPT, Claude, Gemini). Davall de totes hi ha un model que prediu text, així que **el que ve a continuació val per a totes**.",
          },
          { type: "p", text: "**Els cinc ingredients d’un bon encàrrec:**" },
          {
            type: "defs",
            items: [
              { term: "Context", body: "Qui eres i per a què és." },
              { term: "Objectiu", body: "Què vols exactament." },
              { term: "Que et pregunte", body: "Abans de començar, perquè no supose res." },
              { term: "Regles", body: "El que no ha de fer." },
              { term: "Com validar-se", body: "Que es revise com ho faria el teu client." },
            ],
          },
          {
            type: "p",
            text: "**Cuida el context.** Una IA amb el context net respon millor: un projecte per tema, amb els teus documents i instruccions fixes; una conversa per tasca, perquè les converses eternes s’embruten i la IA ho mescla tot; i un document amb el teu [context d’empresa](@contexto-de-empresa), que s’escriu una vegada i servix sempre.",
          },
          {
            type: "p",
            text: "**Dona-li superpoders.** Les [skills](@skills) són el que sap fer: instruccions guardades que usa sola quan toca. Els [connectors](@conectores) són allò a què pot accedir: el teu correu, els teus documents, el teu calendari o la teua botiga.",
          },
          {
            type: "p",
            text: "**No saps on s’activa alguna cosa?** Pregunta-li a la mateixa IA: ella t’explica com usar projectes, skills o connectors en l’eina que uses.",
          },
        ],
      },
      {
        id: "lo-que-nunca",
        title: "El que no has de fer mai",
        intro: "El que et pot costar diners, clients o una sanció.",
        blocks: [
          {
            type: "defs",
            items: [
              {
                term: "Deixar que entrene amb les teues dades sense saber-ho",
                body: "En els comptes personals de ChatGPT, Gemini i Claude pot estar activat. Es desactiva en un minut: [pas a pas](@privacidad#entrenamiento).",
              },
              {
                term: "Compartir enllaços sense pensar",
                body: "Quasi 4.500 converses compartides de ChatGPT van aparéixer en Google el 2025, algunes amb dades personals. [Revisa els teus](@privacidad#enlaces).",
              },
              {
                term: "Usar dades de clients sense anonimitzar-les",
                body: "Usar dades, sí, però bé: sense noms ni dades identificatives, i amb més cura si són de salut. [Com fer-ho](@privacidad#datos-de-clientes).",
              },
              {
                term: "Fiar-te’n sense comprovar",
                body: "S’inventa coses amb tota la seguretat: 19 sentències inexistents citades davant del Tribunal Constitucional, 48 cites falses en un recurs davant del TSJ de Canàries, i Deloitte va tornar part d’un informe de 440.000 dòlars australians amb referències inventades. **La IA t’apunta a les dades; tu comproves que existixen.** Obri les fonts, demana la part exacta del document i revisa el doble allò que no té marxa arrere: enviar, publicar, esborrar o pagar.",
              },
              {
                term: "Caure en el greenwashing",
                body: "El 53 % de les afirmacions ambientals analitzades a la UE eren vagues, enganyoses o infundades. [Frases que cal evitar i què posar](@greenwashing).",
              },
              {
                term: "Perdre la teua veu",
                body: "Si tot sona a ChatGPT, deixa de sonar a tu. El 75 % accepta que una empresa use IA per a idees i esborranys si ho diu; el 62 % rebutja que s’inventen persones o veus amb IA. **La IA redacta, tu signes.**",
              },
            ],
          },
          {
            type: "note",
            text: "Perquè tot el teu equip ho tinga clar, tens una [plantilla de política d’ús de la IA](@politica-de-uso) d’una pàgina.",
          },
        ],
      },
      {
        id: "ideas",
        title: "Tres idees per a emportar-te",
        blocks: [
          {
            type: "ideas",
            items: [
              "Rendix segons el context i les eines que li dones.",
              "Hi ha usos que encara no estàs aprofitant.",
              "La IA redacta, tu signes. Que no et lleve la teua veu.",
            ],
          },
          {
            type: "p",
            text: "**La teua tasca per a dilluns:** tria **una** tasca repetitiva i prova-la amb el que has vist hui. T’encalles? Pregunta-li a la mateixa IA com fer-ho.",
          },
        ],
      },
      {
        id: "preguntas",
        title: "Preguntes freqüents",
        intro: "Les que solen eixir en el torn de preguntes, amb resposta curta.",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Quina eina em recomanes?",
                a: [
                  "La que ja uses, ben configurada. Si hi has de posar dades de clients, un pla d’empresa. El que de veritat canvia els resultats és el que vam veure en la xarrada: context, revisió i cura amb les dades.",
                ],
              },
              {
                q: "És legal usar IA en el meu negoci? He d’avisar els meus clients?",
                a: [
                  "Usar-la és legal. Cal avisar quan un client parla amb un xatbot (des del 2 d’agost de 2026) i en les imatges, vídeos o àudios que semblen reals. Per a un text de màrqueting que tu revises i signes, hui no hi ha una obligació general d’etiquetar-lo ([font](@fuentes#f28)).",
                  "La llei espanyola d’IA està en tramitació al Congrés i portarà el seu propi règim de sancions ([font](@fuentes#f30)).",
                ],
              },
              {
                q: "Puc posar un xatbot en la meua web?",
                a: [
                  "Sí, si respon amb les teues dades: enviaments, al·lèrgens, punts de venda. Però el que diga és responsabilitat teua, ha d’avisar que és una IA i, en al·lèrgens o salut, ha de citar la fitxa oficial i enllaçar-la en lloc de respondre amb les seues paraules.",
                  "La majoria de negocis no el necessiten: amb el que vam veure en la xarrada, n’hi ha prou. Si el teu cas va més enllà, [escriu-me](mailto:hola@pedrofm.dev).",
                ],
              },
              {
                q: "Ja s’aplica a Espanya això del greenwashing?",
                a: [
                  "Espanya encara no ha transposat la directiva, però no és una pròrroga: el greenwashing ja es pot perseguir amb les lleis actuals de publicitat, competència deslleial i consumidors. Escriu ja com si estiguera en vigor. [Més detall](@greenwashing#espana).",
                ],
              },
              {
                q: "I les propietats de salut?",
                a: [
                  "Només pots usar les autoritzades, amb la seua redacció i les seues condicions: estan en el Reglament (UE) 432/2012 i en el cercador de l’AESAN ([font](@fuentes#f24)).",
                ],
              },
              {
                q: "Quant costa?",
                a: [
                  "Des de gratis (amb les precaucions de privacitat) fins a plans individuals i d’equip de pagament mensual. Per a començar a usar-la amb dades de clients sol bastar el pla d’empresa més bàsic. Consulta els preus actuals en la web de cada eina.",
                ],
              },
              {
                q: "I l’impacte ambiental de la IA?",
                a: [
                  "Una consulta de text consumix poc: segons Google, uns 0,24 Wh i unes cinc gotes d’aigua, com veure la tele menys de nou segons. Però són dades de la mateixa empresa, no inclouen l’entrenament, i les imatges, els vídeos i els agents gasten bastant més. El consum total dels centres de dades sí que és un problema real ([font](@fuentes#f31)).",
                  "El meu criteri: usa-la on t’estalvie faena de veritat, no per a generar per generar.",
                ],
              },
              {
                q: "Em llevarà la faena?",
                a: [
                  "Canvia tasques, sobretot les repetitives. Les dades diuen que ajuda més a qui comença que a l’expert ([font](@fuentes#f2)). Implica el teu equip en el que s’automatitza; no ho imposes.",
                ],
              },
              {
                q: "Han multat alguna empresa per posar dades en ChatGPT?",
                a: [
                  "Els casos documentats que cite, als Països Baixos, són bretxes de dades que va caldre notificar, sense multa coneguda. A qui sí que han multat és a una empresa d’IA: Itàlia va multar OpenAI amb 15 milions d’euros el 2024 per entrenar amb dades personals sense una base legal adequada, i OpenAI va recórrer ([font](@fuentes#f32)).",
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
      title: "Plantilla de context d’empresa",
      description:
        "Plantilla perquè la IA sàpia qui eres, què vens i com parles, amb un exemple omplit i on apegar-la en ChatGPT, Claude i Gemini.",
      lead: "Un document amb qui eres, què vens, a qui i com parles. L’escrius una vegada, l’apegues en les instruccions d’un projecte i la IA deixa de respondre’t com a un desconegut.",
      sections: [
        {
          id: "como-usarla",
          title: "Com usar-la",
          blocks: [
            {
              type: "steps",
              items: [
                "Copia la plantilla de davall.",
                "Ompli-la. Són 15 o 20 minuts; esborra el que no s’aplique al teu negoci.",
                "Apega-la on la IA la llija sempre: en les instruccions d’un projecte (mira [on apegar-la](#donde-pegarla)).",
                "Prova-la: demana-li un text i comprova que respecta les teues regles.",
              ],
            },
            {
              type: "prompt",
              title: "Et fa mandra omplir-la? Que t’entreviste la IA",
              text: "Vull omplir esta plantilla de context d’empresa. Fes-me les preguntes d’una en una, espera la meua resposta i, al final, torna’m la plantilla completa. Si no sé alguna cosa, deixa-la entre claudàtors.\n\n[apega ací la plantilla]",
            },
          ],
        },
        {
          id: "plantilla",
          title: "La plantilla",
          intro: "Les regles fixes del final són les que més es noten: que no invente dades i que no use afirmacions ambientals genèriques.",
          blocks: [{ type: "file", file: "contexto-de-empresa.md", title: "Plantilla de context d’empresa" }],
        },
        {
          id: "ejemplo",
          title: "Exemple omplit: MuesliEco",
          intro: "El negoci inventat dels cartells de la xarrada. Fixa’t en com són de concretes les afirmacions permeses.",
          blocks: [{ type: "file", file: "contexto-muesli-eco.md", title: "Context d’empresa de MuesliEco" }],
        },
        {
          id: "donde-pegarla",
          title: "On apegar-la",
          intro: "Per a un tema, en un projecte (o en una skill a Gemini). Per a tot el que faces, en les instruccions generals. Els menús són els de la versió en castellà de cada eina.",
          blocks: [
            {
              type: "table",
              head: ["Eina", "Per a un tema concret", "Per a tot el que faces"],
              rows: [
                [
                  "ChatGPT",
                  "Crea un projecte i apega el text en les seues instruccions: menú ••• del projecte, «Configuración del proyecto».",
                  "En la personalització del teu compte, en les instruccions personalitzades.",
                ],
                [
                  "Claude",
                  "Crea un projecte i apega el text en les instruccions del projecte.",
                  "En la configuració del teu perfil, en les preferències personals.",
                ],
                [
                  "Gemini",
                  "Crea una skill: Personalizar → Skills → Crear → Crear manualmente, i apega el text en les instruccions.",
                  "Ajustes → Contexto personal → Tus instrucciones para Gemini → Añadir.",
                ],
              ],
            },
            {
              type: "note",
              text: "Les Gems de Gemini s’estan retirant: en els comptes personals es convertixen en skills i desapareixen el 17 de desembre de 2026. Si en tenies alguna, descarrega abans els seus arxius ([ajuda de Google](https://support.google.com/gemini/answer/18560919?hl=es)).",
            },
            {
              type: "p",
              text: "Afig també al projecte els teus documents: fitxes de producte, certificats, tarifes. Així la IA cita d’ací en compte d’inventar. I si no trobes un menú, pregunta-li a la mateixa IA: «On pose instruccions fixes per a un projecte?».",
            },
          ],
        },
      ],
    },

    encargos: {
      title: "Encàrrecs que funcionen",
      description:
        "Els cinc ingredients d’un bon encàrrec a la IA, el cartell de MuesliEco mal fet i ben fet, i prompts llestos per a copiar.",
      lead: "El mateix encàrrec dona un cartell genèric o un que funciona. La diferència són cinc ingredients i un parell de minuts més.",
      sections: [
        {
          id: "cartel",
          title: "El cartell de MuesliEco",
          intro: "«Fes-me un cartell per a patrocinar el meu muesli ecològic.» Això va ser tot el que li vaig demanar a la IA la primera vegada. Els cartells estan en castellà, com en la xarrada.",
          blocks: [
            { type: "posters" },
            {
              type: "prompt",
              title: "L’encàrrec bo, amb els cinc ingredients",
              text: "Context. Soc MuesliEco, venc muesli ecològic i el patrocinaré a BioCultura.\nObjectiu. Fes-me un cartell per al dispensador.\nPreguntes. Abans de començar, demana’m les dades que necessites. No suposes res.\nRegles. Res de genèric. Fàcil de llegir, sense sobrecarregar.\nValidació. Mira’l com ho faria una família davant del dispensador, digues què no et convenceria i millora’l.",
              note: "El cartell bo es va fer, a més, amb la skill brandkit de Claude, que li dona una marca, uns colors i una tipografia coherents sense descriure’ls. Si la teua eina no la té, afig a l’encàrrec la teua paleta de colors, les teues tipografies i el teu logotip, o demana-li que et pregunte per la teua identitat visual abans de dissenyar.",
            },
          ],
        },
        {
          id: "ingredientes",
          title: "Els cinc ingredients",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Context",
                  body: "Qui eres i per a què és. Si ho tens en el teu [context d’empresa](@contexto-de-empresa), no cal repetir-ho.",
                },
                { term: "Objectiu", body: "Què vols exactament: format, extensió i on s’usarà." },
                {
                  term: "Que et pregunte",
                  body: "Abans de començar, perquè no supose res. És l’ingredient que més s’oblida i el que més canvia el resultat.",
                },
                { term: "Regles", body: "El que no ha de fer: res de genèric, no inventar dades, no eixir-se del teu to." },
                { term: "Com validar-se", body: "Que es revise com ho faria el teu client abans de donar-t’ho." },
              ],
            },
            {
              type: "prompt",
              title: "Plantilla d’encàrrec",
              text: "Context: Soc [qui eres] i açò és per a [per a què i per a qui].\nObjectiu: [què vols exactament, amb format i extensió].\nPreguntes: Abans de començar, fes-me les preguntes que necessites. No suposes res.\nRegles: [el que no ha de fer: res de genèric, no inventes dades, to…].\nValidació: Quan ho tingues, llig-ho com [el teu client tipus], digues-me què no el convenceria i millora-ho.",
            },
          ],
        },
        {
          id: "prompts",
          title: "Prompts llestos per a copiar",
          intro: "Canvia el que va entre claudàtors. Els de correu, Drive, calendari i botiga estan en la [guia de connectors](@conectores#que-pedirle).",
          blocks: [
            {
              type: "prompt",
              title: "Albarans o factures a una taula",
              text: "T’adjunte [nombre] albarans en PDF. Passa’ls a una taula amb estes columnes: proveïdor, data, núm. d’albarà, producte, quantitat, unitat, preu unitari i total de línia.\nRegles:\n- Copia les dades tal com apareixen. No calcules ni completes res que no estiga en el document.\n- Si una dada no es llig bé o falta, deixa la cel·la buida i escriu «REVISAR» en una columna d’observacions.\n- Al final, digues-me quantes línies has tret de cada albarà perquè ho puga comprovar.",
              note: "Revisa la taula amb els originals abans d’usar-la. En Claude, la skill d’Excel te la torna directament com a full de càlcul.",
            },
            {
              type: "prompt",
              title: "Les queixes que més es repetixen en les teues ressenyes",
              text: "Et passe [nombre] ressenyes de clients. Agrupa-les per tema i digues-me les 3 queixes que més es repetixen.\nPer a cada queixa: quantes ressenyes la mencionen, dues frases literals d’exemple i una idea concreta per a solucionar-la.\nNo inventes ressenyes ni xifres: si alguna cosa no està clara, digues-m’ho.",
              note: "Lleva abans els noms dels clients: [com anonimitzar](@privacidad#datos-de-clientes).",
            },
            {
              type: "prompt",
              title: "Les bases d’una subvenció en una pàgina",
              text: "T’adjunte les bases de [nom de la convocatòria]. Resumix-les en una pàgina per a una empresa com la meua: [sector, nombre d’empleats, comunitat autònoma].\n- Requisits per a poder demanar-la.\n- Terminis, amb dates exactes.\n- Documentació que cal presentar.\n- Quant es pot rebre i quines despeses cobrix.\nIndica en cada punt la pàgina i l’apartat de les bases d’on ho traus. Si les bases no ho diuen, escriu «No ho indica». Al final, digues-me si la meua empresa pareix complir els requisits i què hauria de confirmar.",
              note: "Comprova en les bases les dates i els imports abans de presentar res.",
            },
            {
              type: "prompt",
              title: "Que et pregunte abans de començar",
              text: "Abans de respondre, fes-me les preguntes que necessites per a fer-ho bé, d’una en una. No comences fins que et diga «endavant».",
            },
            {
              type: "prompt",
              title: "Revisar un text com ho faria el teu client",
              text: "Llig este text com si fores [client tipus: p. ex., una mare que compra ecològic en una herboristeria i llig les etiquetes]. Digues-me amb sinceritat què no entendries, què no et creuries i què et faria no comprar. Després, proposa una versió millorada sense inventar dades.\n\n[apega ací el text]",
            },
            {
              type: "prompt",
              title: "Assajar una negociació difícil",
              text: "Assajarem una negociació. Tu eres [el proveïdor d’envasos] i no vols abaixar el preu perquè [motiu realista]. Jo soc [el teu paper] i vull [objectiu]. Posa’m objeccions realistes, d’una en una, i no cedisques fàcilment. Quan diga «fi», digues-me què he fet bé, quins arguments m’han faltat i quina frase m’ha debilitat.",
            },
            {
              type: "prompt",
              title: "Comprovar d’on ix cada dada",
              text: "Per a cada dada o afirmació de la teua resposta, dona’m la font amb el seu enllaç i copia la frase exacta del document que ho diu. Si no tens una font, digues-ho clarament en lloc de suposar.",
              note: "I després obri els enllaços: la IA t’apunta a les dades; tu comproves que existixen.",
            },
          ],
        },
      ],
    },

    skills: {
      title: "Skills que valen la pena",
      description:
        "Què són les skills, les que ja porta Claude i les públiques més usades per a textos, clients, xarxes i SEO, amb com instal·lar-les en Claude, Gemini i ChatGPT.",
      lead: "Una skill són instruccions guardades que la IA usa sola quan toca. No cal escriure-les des de zero: n’hi ha moltes de públiques, gratuïtes i usades per milers de persones. Estes són les que de veritat li servixen a una pime.",
      sections: [
        {
          id: "tres-formas",
          title: "Tres maneres de tindre-les",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Les que ja porta la teua eina",
                  body: "Claude porta skills d’Anthropic per a crear i llegir documents de Word, Excel, PowerPoint i PDF (per exemple, passar albarans a un full de càlcul); brandkit, que crea la identitat visual d’una marca i és la del cartell bo de [MuesliEco](@encargos#cartel); i skill-creator, que t’ajuda a crear les teues. Estan en Personalizar → Skills.",
                },
                {
                  term: "Les que busques a internet",
                  body: "Moltes són gratuïtes i les mantenen autors amb milers d’usuaris darrere. Davall tens una selecció, amb enllaç al seu origen.",
                },
                {
                  term: "Les que crees tu",
                  body: "Per al que és molt teu, com el to de la teua marca o com respons a un client enfadat. No cal programar: [crea-la amb la IA](#crea-la-tuya).",
                },
              ],
            },
            {
              type: "p",
              text: "**Abans d’instal·lar una skill d’internet**, recorda que són instruccions que la IA seguirà. Comprova:",
            },
            {
              type: "list",
              items: [
                "**Qui la publica:** millor la mateixa eina o algú amb trajectòria i molts usuaris.",
                "**Què diu:** és text. Llig-la per damunt; si no entens què fa, no la instal·les.",
                "**Què demana:** desconfia si vol connectar-se a servicis, enviar dades fora o executar programes que la tasca no necessita.",
              ],
            },
          ],
        },
        {
          id: "textos",
          title: "Per a escriure millor i que no sone a IA",
          intro: "Les tres lleven els tics típics dels textos fets amb IA.",
          blocks: [
            { type: "skill", id: "copywriting" },
            { type: "skill", id: "copy-editing" },
            { type: "skill", id: "humanizer" },
          ],
        },
        {
          id: "clientes",
          title: "Clients, xarxes i correu",
          blocks: [
            { type: "skill", id: "customer-research" },
            { type: "skill", id: "social" },
            { type: "skill", id: "emails" },
          ],
        },
        {
          id: "seo",
          title: "Que et troben en Google i en la IA",
          blocks: [
            { type: "skill", id: "seo-audit" },
            { type: "skill", id: "ai-seo" },
            {
              type: "note",
              text: "Si uses Claude Code, [claude-seo](https://github.com/AgriciDaniel/claude-seo) (més de 30.000 estrelles a GitHub) fa auditories SEO completes de la teua web. Cal instal·lar Python, així que no és per a començar.",
            },
          ],
        },
        {
          id: "instalar",
          title: "Com instal·lar-les",
          intro: "Els menús són els de la versió en castellà de cada eina i canvien sovint. Si no trobes alguna cosa, pregunta-li a la mateixa IA: «Com puge una skill?».",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Claude",
                  body: "En tots els plans, també el gratuït. Activa «Crear y editar archivos» en Configuración → Capacidades. Descarrega el ZIP de la skill, ves a Personalizar → Skills, prem + → Crear skill → Subir una skill i tria el ZIP tal qual, sense descomprimir-lo ([ajuda d’Anthropic](https://support.claude.com/en/articles/12512180-use-skills-in-claude)).",
                },
                {
                  term: "Gemini",
                  body: "En comptes personals de majors de 18 anys. Des de la web o l’aplicació de Mac: Personalizar → Skills → Crear → Subir, i tria el mateix ZIP o l’arxiu SKILL.md ([ajuda de Google](https://support.google.com/gemini/answer/17094296?hl=es)). Les skills substituïxen les Gems.",
                },
                {
                  term: "ChatGPT",
                  body: "Les skills només estan en els plans Business, Enterprise i Edu: Plugins → Directorio → Skills → Crear → Subir desde tu ordenador ([ajuda d’OpenAI](https://help.openai.com/en/articles/20001066-skills-in-chatgpt)). En Free, Plus o Pro, obri el SKILL.md de la skill a GitHub, copia’l i apega’l en les instruccions d’un projecte.",
                },
              ],
            },
            {
              type: "note",
              text: "Les de marketingskills estan en anglés i pensades sobretot per a empreses de programari, però responen en l’idioma en què els escrigues i funcionen igual de bé per a una botiga. humanizer no publica un ZIP per a Claude: en Gemini n’hi ha prou amb pujar el seu SKILL.md, i en Claude, copy-editing fa una faena pareguda i ja ve llesta.",
            },
          ],
        },
        {
          id: "crea-la-tuya",
          title: "Crea la teua",
          intro: "Per al que no trobes fet: demana-li-ho a la IA i escriviu-la junts.",
          blocks: [
            {
              type: "p",
              text: "En Claude, la skill skill-creator et guia pas a pas. En Gemini, Personalizar → Skills → Crear → Crear con Gemini. O usa este prompt en qualsevol de les tres:",
            },
            {
              type: "prompt",
              title: "Crea’m una skill",
              text: "Vull crear una skill per a [tasca que repetisc, p. ex., respondre ressenyes de clients]. Fes-me les preguntes que necessites, d’una en una, sobre com ho faig jo, quines regles seguisc i quins errors vull evitar. Quan en tingues prou, escriu-la amb un nom curt en minúscules i amb guions, una descripció de quan usar-la (menys de 200 caràcters) i les instruccions pas a pas.",
            },
            {
              type: "p",
              text: "Quan la tingues, prova-la amb un cas real, corregix el que no et convença i puja-la com les de dalt.",
            },
          ],
        },
      ],
    },

    conectores: {
      title: "Guia de connectors",
      description:
        "Com connectar la IA a Gmail, Google Drive, el calendari i la teua botiga en línia, pas a pas i amb els permisos justos.",
      lead: "Un connector li dona a la IA accés a una de les teues eines: el teu correu, els teus documents, el teu calendari, la teua botiga o el teu CRM. Molts s’activen amb un clic, sense programar, i canvien el que pot fer per tu.",
      sections: [
        {
          id: "que-pedirle",
          title: "Què li pots demanar",
          intro: "Els quatre exemples de la xarrada, amb un poc més de detall perquè isquen bé a la primera.",
          blocks: [
            {
              type: "prompt",
              title: "Gmail",
              text: "Revisa els correus de comandes que han arribat hui. Per a cada un, prepara una resposta que confirme la comanda i el termini d’enviament habitual ([termini]). Deixa-les en esborranys; no envies res.",
              note: "En esborranys: tu revises cada resposta i l’envies.",
            },
            {
              type: "prompt",
              title: "Google Drive",
              text: "Busca en el meu Drive l’últim pressupost de la impremta i compara’l amb este que t’adjunte: preu per unitat, terminis, despeses d’enviament i condicions. Digues-me quin convé i per què, citant la part de cada document.",
            },
            {
              type: "prompt",
              title: "Calendari",
              text: "Quins buits d’almenys 2 hores tinc dijous entre les 9 i les 18 per a visitar proveïdors? No crees cap cita.",
            },
            {
              type: "prompt",
              title: "La teua botiga en línia",
              text: "Quins 10 productes es van vendre més a l’octubre, en unitats i en euros? Compara-ho amb setembre i assenyala el que més ha canviat.",
              note: "Si uses Shopify, Claude té connector oficial. Amb WooCommerce, PrestaShop o Holded, exporta l’informe de vendes en CSV, lleva-li les dades de clients i passa-li’l: per a esta pregunta funciona igual.",
            },
          ],
        },
        {
          id: "cuales-hay",
          title: "Quins connectors hi ha",
          intro: "Els oficials que més li servixen a una pime, segons el directori de cada eina al novembre de 2026.",
          blocks: [
            {
              type: "table",
              head: ["Connector", "Per a què", "Claude", "ChatGPT", "Gemini"],
              rows: [
                [
                  "Gmail, Google Drive i Google Calendar",
                  "Buscar i resumir correus, documents i cites; preparar esborranys i crear esdeveniments.",
                  "Sí, en tots els plans",
                  "Google Drive",
                  "Sí",
                ],
                [
                  "Microsoft 365: Outlook, OneDrive, SharePoint i Teams",
                  "El mateix, si el teu correu i els teus arxius estan en Microsoft.",
                  "Sí (amb compte personal, només Outlook i OneDrive)",
                  "Outlook, SharePoint i Teams",
                  "—",
                ],
                ["Shopify", "Vendes, productes, estoc i comandes de la teua botiga.", "Sí", "—", "Només als EUA"],
                [
                  "Canva",
                  "Crear i editar dissenys amb les teues plantilles.",
                  "Sí",
                  "Sí",
                  "Amb compte personal, encara no en castellà ni en valencià",
                ],
                ["Notion", "Buscar i actualitzar les teues pàgines i bases de dades.", "Sí", "Sí", "—"],
                ["HubSpot", "Clients, oportunitats i campanyes del teu CRM.", "Sí", "—", "—"],
                ["Google Analytics", "Visites i vendes de la teua web.", "—", "—", "Amb compte personal"],
                ["Dropbox o Box", "Buscar i resumir els teus arxius.", "—", "Box", "Dropbox"],
              ],
            },
            {
              type: "note",
              text: "«—» vol dir que no l’hem trobat en el seu directori oficial; els directoris creixen cada mes, així que mira el de la teua eina. Alguns connectors demanen un compte de pagament del mateix servici. WooCommerce, PrestaShop i Holded no tenen connector oficial en cap de les tres.",
            },
          ],
        },
        {
          id: "mas-ideas",
          title: "Més idees per a demanar-li",
          blocks: [
            {
              type: "prompt",
              title: "Canva",
              text: "Amb el meu kit de marca de Canva, crea tres versions d’una publicació d’Instagram per a anunciar que ja tenim el muesli de tardor. Deixa-les en Canva perquè les revise; no publiques res.",
            },
            {
              type: "prompt",
              title: "Shopify",
              text: "Quins productes tenen menys de 10 unitats en estoc i es venen totes les setmanes? Fes-me una llista per a reposar, amb el que vam vendre de cada un l’últim mes.",
            },
            {
              type: "prompt",
              title: "Notion",
              text: "Busca en Notion les notes de l’última fira i resumix-me quins contactes van quedar pendents de telefonar i per què.",
            },
            {
              type: "prompt",
              title: "HubSpot",
              text: "Quines herboristeries no ens han fet una comanda en els últims 3 mesos? Prepara’m un esborrany de correu per a cada una, sense enviar-lo.",
            },
            {
              type: "prompt",
              title: "Google Analytics",
              text: "Des de quines ciutats ens van visitar més el mes passat i quines pàgines van veure abans de comprar?",
            },
            {
              type: "prompt",
              title: "Outlook",
              text: "Busca els correus del proveïdor d’envasos sobre l’última comanda i resumix-me què està pendent i de qui depén.",
            },
          ],
        },
        {
          id: "activar",
          title: "Com activar-los",
          intro: "Els menús són els de la versió en castellà de cada eina i canvien sovint. Si no trobes alguna cosa, pregunta-li a la mateixa IA: «Com connecte el meu Gmail amb tu?».",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Claude",
                  body: "Personalizar → Conectores, tria Gmail, Google Drive o Google Calendar, inicia la sessió amb Google i accepta els permisos. Estan en tots els plans, també el gratuït. En cada xat, prem + → Conectores per a activar només els que necessites. Gmail pot preparar esborranys, i abans d’enviar et demana permís ([ajuda d’Anthropic](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)).",
                },
                {
                  term: "ChatGPT",
                  body: "Configuración → Plugins, tria l’aplicació (Google Drive, Gmail…) i prem «Conectar». En un xat, escriu @ o prem + per a usar-la. Tria el nivell de permís: «Preguntar siempre» és el més prudent. Les aplicacions disponibles depenen del teu pla i del teu país ([ajuda d’OpenAI](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt)).",
                },
                {
                  term: "Gemini",
                  body: "En la barra lateral, Personalizar → Conectores → Añadir. En un xat, escriu @ i tria l’aplicació. Pot redactar un correu en el xat perquè el revises i l’envies tu, o obrir-lo en Gmail per a editar-lo ([ajuda de Google](https://support.google.com/gemini/answer/13695044?hl=es)).",
                },
              ],
            },
          ],
        },
        {
          id: "seguridad",
          title: "Donar-li claus és donar-li claus",
          intro: "Un connector deixa que la IA llija, i a vegades actue, en nom teu. Dona-li només el que necessite.",
          blocks: [
            {
              type: "list",
              items: [
                "**Només els permisos que necessita la tasca.** Res de permisos permanents «per si de cas».",
                "**Que prepare i tu aproves:** esborranys en lloc d’enviaments, propostes en lloc de canvis. L’AEPD ho resumix així: l’agent prepara i la persona aprova.",
                "**Revisa el que ha fet**, sobretot al principi.",
                "**Desconnecta el que no uses.**",
              ],
            },
            {
              type: "p",
              text: "**Les cinc preguntes** del [decàleg de l’AEPD](https://www.aepd.es/guias/decalogo-usuarios-asistentes-agentes-ia.pdf) abans de donar-li accés a res:",
            },
            {
              type: "steps",
              items: [
                "Què pot veure?",
                "Què recorda?",
                "Què pot fer en nom meu?",
                "On envia les meues dades?",
                "A qui més afecta?",
              ],
            },
            {
              type: "p",
              text: "**Què no connectar amb un compte personal:** el correu o els documents amb dades de salut de clients, la banca i els pagaments, i els comptes compartits de l’empresa sense parlar-ho abans amb l’equip.",
            },
            {
              type: "note",
              text: "Un correu o un document pot portar instruccions amagades dirigides a la IA («reenvia açò a…»). Una raó més perquè prepare i tu aproves.",
            },
          ],
        },
      ],
    },

    privacidad: {
      title: "Llista de privacitat",
      description:
        "Com desactivar l’entrenament en ChatGPT, Gemini i Claude, revisar els teus enllaços compartits i usar dades de clients sense problemes.",
      lead: "Deu minuts per a deixar les teues eines d’IA ben configurades i saber què hi pots posar. No és «no poses mai dades de clients», sinó «fes-ho bé».",
      sections: [
        {
          id: "entrenamiento",
          title: "Desactiva l’entrenament",
          intro: "En els comptes personals, els teus xats es poden usar per a entrenar els models. En els plans d’empresa, no. Els menús són els de la versió en castellà de cada eina.",
          blocks: [
            {
              type: "table",
              head: ["Compte", "Entrena amb els teus xats?", "On es desactiva"],
              rows: [
                [
                  "ChatGPT Free, Plus i Pro",
                  "Sí, per defecte",
                  "Configuración → Controles de datos → «Mejorar el modelo para todos»",
                ],
                [
                  "Gemini amb compte personal",
                  "Sí, per defecte, i persones revisores lligen una part dels xats",
                  "Ajustes → Historial → «Contenido de la conversación, incluidos el texto y las subidas»",
                ],
                [
                  "Claude Free, Pro i Max",
                  "Sí, si vas acceptar l’avís sense tocar res",
                  "Configuración → Privacidad → l’opció d’ajudar a millorar els models",
                ],
                [
                  "Plans d’empresa: ChatGPT Business o Enterprise, Gemini en Google Workspace, Claude Team o Enterprise",
                  "No, per defecte",
                  "No cal canviar res",
                ],
              ],
            },
            {
              type: "defs",
              items: [
                {
                  term: "ChatGPT",
                  body: "Configuración → Controles de datos → desactiva «Mejorar el modelo para todos». No esborra els teus xats. Compte: si valores una resposta amb el polze, eixa conversa es pot usar igualment. Per a una cosa puntual, usa un **xat temporal**: no s’usa per a entrenar, encara que es guarda fins a 30 dies per seguretat ([ajuda d’OpenAI](https://help.openai.com/en/articles/7730893-data-controls-faq)).",
                },
                {
                  term: "Gemini",
                  body: "En gemini.google.com, Ajustes → Historial (abans es deia «Actividad en las apps de Gemini»), i desmarca «Contenido de la conversación, incluidos el texto y las subidas», o desactiva l’historial sencer. Tot i això, Google guarda els xats uns dos mesos per a respondre’t i per seguretat, i els que han llegit persones revisores es conserven fins a tres anys encara que esborres l’historial. Per a una cosa puntual, usa un **xat temporal**, al costat de «Nuevo chat» ([ajuda de Google](https://support.google.com/gemini/answer/13278892?hl=es)).",
                },
                {
                  term: "Claude",
                  body: "Configuración → Privacidad, i desactiva l’opció d’ajudar a millorar els models ([enllaç directe](https://claude.ai/settings/data-privacy-controls)). Activada, els teus xats es poden guardar fins a 5 anys; desactivada, 30 dies. Per a una cosa puntual, usa un **xat d’incògnit**: la icona del fantasma, dalt a la dreta d’un xat nou ([ajuda d’Anthropic](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings)).",
                },
              ],
            },
          ],
        },
        {
          id: "enlaces",
          title: "Revisa els teus enllaços compartits",
          intro: "Un enllaç de «compartir» el veu qualsevol que el tinga, i pot acabar en un cercador.",
          blocks: [
            {
              type: "p",
              text: "A l’estiu de 2025 van aparéixer en Google quasi 4.500 converses compartides de ChatGPT, algunes amb dades personals ([font](@fuentes#f18)). OpenAI va retirar l’opció en qüestió d’hores, però revisa els enllaços que hages creat:",
            },
            {
              type: "defs",
              items: [
                {
                  term: "ChatGPT",
                  body: "Configuración → Controles de datos → Enlaces compartidos → Gestionar. Pots esborrar-los d’un en un o tots alhora.",
                },
                {
                  term: "Gemini",
                  body: "Ajustes → Tus enlaces públicos, o directament en [gemini.google.com/sharing](https://gemini.google.com/sharing). També els pots esborrar tots.",
                },
                { term: "Claude", body: "Obri el xat compartit i deixa de compartir-lo des del botó Compartir." },
              ],
            },
            {
              type: "note",
              text: "Esborrar l’enllaç no esborra les còpies que altres ja hagen guardat. Abans de compartir, pensa si t’importaria que ho llegira qualsevol.",
            },
          ],
        },
        {
          id: "datos-de-clientes",
          title: "Abans d’apegar dades de clients",
          intro: "Usar dades, sí. Però bé.",
          blocks: [
            { type: "p", text: "**Fes-te quatre preguntes:**" },
            {
              type: "list",
              items: [
                "La IA necessita esta dada per a la tasca?",
                "Estic en un pla d’empresa o en un compte personal?",
                "Tinc desactivat l’entrenament?",
                "M’importaria que açò acabara publicat?",
              ],
            },
            {
              type: "p",
              text: "**Lleva noms i dades identificatives.** Canvia els noms per «Client A», «Client B», i esborra:",
            },
            {
              type: "list",
              items: [
                "DNI o NIF.",
                "Telèfons, correus i adreces.",
                "Números de comanda, de client o de compte bancari.",
                "Fotos i signatures.",
                "Qualsevol detall que permeta endevinar qui és: un càrrec únic, una adreça exacta.",
              ],
            },
            {
              type: "p",
              text: "En un full de càlcul, esborra eixes columnes abans de pujar-lo. I si et basten les dades agregades (vendes per producte, queixes per tema), passa-li només això.",
            },
            {
              type: "note",
              text: "Als Països Baixos, un empleat d’una consulta mèdica va apegar dades de pacients en un xatbot, i va ser una bretxa de dades que va caldre notificar ([font](@fuentes#f32)). L’autoritat recomana dir clarament a l’equip quines dades es poden usar i quines no: per a això està la [política d’ús](@politica-de-uso).",
            },
          ],
        },
        {
          id: "datos-sensibles",
          title: "Salut i fotos d’altres persones",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Dades de salut, amb més cura",
                  body: "Són una categoria especial del RGPD (art. 9). Per a tractar-les amb una IA normalment necessites el consentiment explícit de la persona i un contracte d’encarregat del tractament amb el proveïdor (art. 28), que donen els plans d’empresa i no els comptes personals. Si les tractes sovint (herboristeria, dietètica, teràpies), parla abans amb el teu assessor de protecció de dades.",
                },
                {
                  term: "Fotos d’altres persones",
                  body: "Mai per a crear contingut nou (muntatges, anuncis, avatars) sense el seu permís. És una de les recomanacions del decàleg de l’AEPD [«Cuidado con lo que le confIAs»](https://www.aepd.es/guias/recomendaciones-ia-aepd.pdf).",
                },
              ],
            },
          ],
        },
      ],
    },

    greenwashing: {
      title: "Greenwashing: frases que cal evitar",
      description:
        "Frases ambientals genèriques que convé evitar, alternatives concretes, el que prohibix la Directiva (UE) 2024/825 i com està a Espanya.",
      lead: "La IA escriu «sostenible» sense parpellejar. Este full t’ajuda a canviar les frases genèriques per altres que pots demostrar. Imprimix-lo i tin-lo a mà.",
      sections: [
        {
          id: "frases",
          title: "Frases que cal evitar i què posar en lloc seu",
          intro: "Les alternatives només valen si són veritat i ho pots demostrar.",
          blocks: [
            {
              type: "table",
              head: ["Evita", "Millor, si ho pots demostrar"],
              rows: [
                [
                  "«Sostenible», «eco-friendly», «verd»",
                  "«Elaborat amb ingredients d’agricultura ecològica certificada», amb el logotip ecològic de la UE.",
                ],
                ["«Envàs ecològic»", "«Envàs de cartó reciclable: deposita’l en el contenidor blau.»"],
                [
                  "«Respectuós amb el planeta», «bo per a la terra»",
                  "El concret: «Civada cultivada a [lloc] per [productor]», «Sense plàstic en l’envàs».",
                ],
                [
                  "«Neutre en carboni», «petjada zero», si és per compensar emissions",
                  "El que reduïxes de veritat, amb dades: «Hem reduït un [X] % el plàstic de l’envàs respecte a [any]».",
                ],
                [
                  "«Serem neutres el 2030»",
                  "Només amb un pla detallat, metes mesurables i la supervisió d’un tercer independent. Si no el tens, no ho digues.",
                ],
                [
                  "Un segell propi («Compromís Verd»)",
                  "Només segells certificats per tercers o creats per autoritats públiques.",
                ],
                ["«Natural» com a argument ambiental", "L’ingredient o el procés concret."],
                [
                  "«Reforça les defenses», «depura»",
                  "Només declaracions de salut autoritzades, amb la seua redacció exacta: busca-les en l’[AESAN](https://aesan.gob.es/seguridad-alimentaria/informacion-alimentaria/declaraciones-nutricionales).",
                ],
              ],
            },
          ],
        },
        {
          id: "directiva",
          title: "El que prohibix la Directiva (UE) 2024/825",
          intro: "Aplicable a la UE des del 27 de setembre de 2026 ([font](@fuentes#f21)).",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "«Verd», «sostenible», «respectuós»…",
                  body: "Sense un comportament ambiental excel·lent reconegut, com l’Etiqueta Ecològica de la UE o altres etiquetes oficials.",
                },
                {
                  term: "«Neutre en carboni» per compensar",
                  body: "Afirmar un impacte neutre, reduït o positiu gràcies a compensacions d’emissions.",
                },
                {
                  term: "Segells sense certificació",
                  body: "Segells de sostenibilitat sense certificació d’un tercer ni el suport d’una autoritat pública.",
                },
                {
                  term: "Promeses sense pla",
                  body: "«Neutres el 2030» sense un pla detallat i realista, supervisat per un tercer independent.",
                },
                {
                  term: "La part pel tot",
                  body: "Presentar com de tot el producte o de tota l’empresa una cosa que només afecta una part.",
                },
                {
                  term: "L’obligatori com a mèrit",
                  body: "Presentar com un avantatge propi una cosa que la llei exigix a tots els productes d’eixa categoria.",
                },
              ],
            },
            {
              type: "note",
              text: "El logotip ecològic de la UE és un segell oficial: usa’l. El que no val és saltar d’«ecològic certificat» a «sostenible» sense més.",
            },
          ],
        },
        {
          id: "espana",
          title: "I a Espanya?",
          blocks: [
            {
              type: "p",
              text: "Espanya encara no ha transposat la directiva: el termini va véncer el 27 de març de 2026, la Llei de Consum Sostenible continua en tramitació i la Comissió Europea va obrir un procediment d’infracció al maig de 2026 ([font](@fuentes#f22)).",
            },
            {
              type: "p",
              text: "Però **no és una pròrroga**. La publicitat enganyosa ja es pot perseguir amb la Llei de Competència Deslleial, la Llei General de Publicitat i la llei de consumidors, que els tribunals interpreten a la llum de la directiva. I si vens en països que sí que l’han transposada, se t’apliquen les seues normes. **Escriu ja com si estiguera en vigor.**",
            },
          ],
        },
        {
          id: "con-ia",
          title: "Que la IA t’ajude a no caure-hi",
          blocks: [
            {
              type: "steps",
              items: [
                "Afig la regla al teu [context d’empresa](@contexto-de-empresa): així deixa de colar-te frases genèriques des del principi.",
                "Escriu i revisa els teus textos amb la skill [copywriting](@skills#skill-copywriting): no fa afirmacions que no es puguen justificar.",
                "O usa este prompt ràpid:",
              ],
            },
            {
              type: "prompt",
              title: "Revisió antigreenwashing",
              text: "Revisa este text abans de publicar-lo. Assenyala qualsevol afirmació ambiental genèrica («sostenible», «verd», «respectuós amb el planeta»…), qualsevol neutralitat de carboni basada en compensacions, els segells sense certificació i les propietats de salut. Per a cada una, proposa una alternativa concreta i verificable sense inventar dades: si et falta una dada, escriu [DADA PER CONFIRMAR]. Els meus certificats i les dades que puc demostrar són: [llista].\n\n[apega ací el text]",
            },
            { type: "note", text: "Este full és orientatiu i no substituïx el consell d’un assessor legal." },
          ],
        },
      ],
    },

    "politica-de-uso": {
      title: "Plantilla de política d’ús de la IA",
      description: "Una política d’ús de la IA d’una pàgina per al teu equip, llesta per a adaptar, en text i en Word.",
      lead: "Una pàgina perquè tot el teu equip sàpia per a què s’usa la IA, amb quins comptes i què no es fa mai. Copia-la, adapta-la en 20 minuts i compartix-la.",
      sections: [
        {
          id: "por-que",
          title: "Per què tindre-la",
          blocks: [
            {
              type: "p",
              text: "Quasi huit de cada deu persones que usen IA en la faena porten les seues pròpies eines ([font](@fuentes#f25)). Sense regles, cadascú posa les dades que li pareix en el compte que té a mà.",
            },
            {
              type: "p",
              text: "A més, el Reglament Europeu d’IA demana a les empreses que la usen **prendre mesures per a donar suport a la formació** del seu equip, sense exigir un nivell concret ([font](@fuentes#f26)). Una política d’una pàgina i una reunió per a explicar-la són un bon primer pas.",
            },
          ],
        },
        {
          id: "plantilla",
          title: "La plantilla",
          intro: "Ompli el que va entre claudàtors i esborra el que no s’aplique.",
          blocks: [
            {
              type: "file",
              file: "politica-us-ia.md",
              title: "Política d’ús de la IA",
              downloads: [
                {
                  href: `${TALK_DOWNLOADS}/ca/politica-us-ia.docx`,
                  label: "Descarrega-la en Word",
                  meta: ".docx, per a editar-la",
                },
              ],
            },
          ],
        },
        {
          id: "implantarla",
          title: "Com implantar-la",
          blocks: [
            {
              type: "steps",
              items: [
                "**Adapta-la** al teu negoci: eines, dades i responsable.",
                "**Explica-la** en una reunió curta, amb exemples del vostre dia a dia: què sí, què no i a qui preguntar.",
                "**Demana que cada persona la llija i la signe**, i guarda’n una còpia: és la teua constància de formació.",
                "**Revisa-la** cada sis mesos o quan canvieu d’eina.",
              ],
            },
            {
              type: "note",
              text: "Inspirada en la [política interna d’IA generativa de l’AEPD](@fuentes#f27), en versió pime. No substituïx el consell d’un assessor.",
            },
          ],
        },
      ],
    },

    fuentes: {
      title: "Fonts de la xarrada",
      description: "Totes les fonts de les dades de la xarrada «IA sin humo», ordenades per diapositiva i amb enllaç.",
      lead: "Cada dada de la xarrada amb el seu enllaç. Si dubtes d’alguna, comprova-la amb un clic: la IA t’apunta a les dades; tu comproves que existixen.",
      sections: [
        {
          id: "diagnostico",
          title: "Diagnòstic",
          intro: "Diapositives 4 a 7.",
          blocks: [{ type: "sources", ids: ["F2", "F4", "F5", "F6", "F7", "F8", "F32", "F29", "F28"] }],
        },
        {
          id: "como-funciona",
          title: "Com funciona",
          intro: "Diapositives 9 i 10.",
          blocks: [{ type: "sources", ids: ["F9", "F10"] }],
        },
        {
          id: "sacarle-partido",
          title: "Com traure-li partit",
          intro: "Diapositiva 20.",
          blocks: [{ type: "sources", ids: ["F11"] }],
        },
        {
          id: "lo-que-nunca",
          title: "El que no has de fer mai",
          intro: "Diapositives 25 a 32.",
          blocks: [
            { type: "sources", ids: ["F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F23"] },
          ],
        },
        {
          id: "preguntas",
          title: "Per al torn de preguntes",
          blocks: [{ type: "sources", ids: ["F1", "F3", "F22", "F24", "F30", "F31"] }],
        },
        {
          id: "politica",
          title: "Per a la política d’ús",
          blocks: [{ type: "sources", ids: ["F25", "F26", "F27"] }],
        },
      ],
    },
  },

  sources: {
    F1: {
      title: "INE: Enquesta sobre l’ús de TIC i del comerç electrònic en les empreses (22/10/2026)",
      claim:
        "El 33,6 % de les empreses de 10 o més empleats va usar IA en el primer trimestre de 2026, i el 21,4 % de les de menys de 10. L’INE avisa que no és estrictament comparable amb anys anteriors.",
    },
    F2: {
      title: "Brynjolfsson, Li i Raymond: «Generative AI at Work» (NBER, 2023; publicat en revista el 2025)",
      claim:
        "Amb 5.179 agents d’atenció al client, la IA va pujar les consultes resoltes per hora un 14 % de mitjana i un 34 % en els menys experimentats, amb un efecte mínim en els més experts.",
    },
    F3: {
      title: "Dell’Acqua et al.: «Navigating the Jagged Technological Frontier» (Harvard Business School, 2023)",
      claim:
        "Amb 758 consultors de BCG: en tasques dins de la «frontera» de la IA, un 12,2 % més de tasques, un 25,1 % més ràpid i un 40 % més de qualitat. En una tasca fora d’ella, els qui van usar IA van tindre 19 punts menys de probabilitat d’encertar.",
    },
    F4: {
      title: "Gallup i Bentley University: «Americans Aren’t Sold on Businesses Using AI in Advertising» (maig de 2026)",
      claim:
        "Enquesta a 3.270 adults dels EUA: el 49 % veu malament que les empreses usen IA en publicitat (32 % neutral, 19 % bé). El 75 % accepta que s’use per a idees i primers esborranys si es diu clarament, i el 62 % rebutja que es creen persones o veus amb IA, encara que s’avise.",
    },
    F5: {
      title: "Gallup i Bentley University: Business in Society Report (2026)",
      claim:
        "Només el 27 % dels estatunidencs confia que les empreses usen la IA de manera responsable (31 % el 2025).",
    },
    F6: {
      title: "OpenAI: «Sycophancy in GPT-4o: what happened and what we’re doing about it» (29/04/2025)",
      claim:
        "OpenAI va retirar una actualització de ChatGPT per ser excessivament afalagadora. Ho atribuïx a haver-se recolzat massa en la valoració immediata dels usuaris.",
    },
    F7: {
      title: "OpenAI: «Why language models hallucinate» (05/09/2025)",
      claim:
        "OpenAI explica que l’entrenament i les avaluacions habituals premien endevinar en lloc de reconéixer que no se sap una cosa, com un examen tipus test en què deixar la resposta en blanc sempre puntua zero.",
    },
    F8: {
      title:
        "METR: «Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity» (10/07/2025)",
      claim:
        "Assaig amb 16 programadors experts i 246 tasques reals en els seus propis projectes: amb IA van tardar un 19 % més, i després continuaven creient que havien anat un 20 % més ràpid. Eren experts, en projectes que coneixien molt bé i amb eines de principis de 2025: mostra que la sensació d’anar ràpid enganya, no que la IA no servisca.",
    },
    F32: {
      title:
        "Autoriteit Persoonsgegevens (Països Baixos): bretxes de dades per usar xatbots d’IA en la faena (agost de 2024 i desembre de 2025)",
      claim:
        "L’autoritat neerlandesa de protecció de dades va rebre notificacions de bretxes causades per empleats que van posar dades personals en xatbots: dades mèdiques de pacients en una consulta de medicina de família i adreces de clients en una empresa de telecomunicacions. El 2025 va avisar que van en augment. A banda, al desembre de 2024 l’autoritat italiana va multar OpenAI amb 15 milions d’euros per entrenar ChatGPT amb dades personals sense una base legal adequada (OpenAI va recórrer).",
    },
    F29: {
      title: "Moffatt contra Air Canada, 2024 BCCRT 149 (Colúmbia Britànica, 14/02/2024)",
      claim:
        "El xatbot d’Air Canada va informar malament un client sobre una tarifa. L’aerolínia va al·legar que el xatbot era responsable dels seus actes, i el tribunal ho va rebutjar: l’empresa respon de tota la informació de la seua web, vinga d’una pàgina o d’un xatbot.",
    },
    F28: {
      title: "Reglament Europeu d’IA, art. 50 (transparència), aplicable des del 2/08/2026",
      claim:
        "Obliga que les persones sàpien que parlen amb una IA (llevat que siga evident) i a assenyalar els continguts ultrarealistes («deepfakes»). Si una empresa munta un xatbot amb la seua pròpia marca, pot quedar subjecta a estes obligacions.",
    },
    F9: {
      title: "Anthropic: «Tracing the thoughts of a large language model» (27/03/2025)",
      claim:
        "Anthropic reconeix que no entén com els seus models fan la majoria del que fan i presenta tècniques per a «mirar dins». Una de les troballes: en escriure poesia, el model planifica la rima abans d’arribar-hi.",
    },
    F10: {
      title:
        "Bender, Gebru, McMillan-Major i Mitchell: «On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?» (FAccT 2021)",
      claim:
        "L’article que va popularitzar la metàfora del «lloro estocàstic». Ja advertia també dels costos ambientals dels models grans.",
    },
    F11: {
      title: "AEPD: «Asistentes y agentes de IA. Decálogo para personas usuarias» (27/10/2026)",
      claim:
        "Cinc preguntes abans d’usar un agent: què pot veure, què recorda, què pot fer en nom teu, on envia les teues dades i si afecta altres persones. La idea clau: l’agent prepara i la persona aprova, sense permisos permanents.",
    },
    F12: {
      title: "Reglament General de Protecció de Dades (RGPD), Reglament (UE) 2016/679",
      claim:
        "Art. 9: categories especials de dades, entre les quals les de salut. Art. 28: contracte amb l’encarregat del tractament.",
    },
    F13: {
      title: "Llei Orgànica 3/2018, de Protecció de Dades Personals i garantia dels drets digitals (LOPDGDD)",
      claim: "La llei espanyola que completa el RGPD.",
    },
    F14: {
      title: "AEPD: decàleg «Cuidado con lo que le confIAs» (27/01/2026)",
      claim:
        "Recomana no compartir amb la IA dades personals (nom, adreça, telèfon, DNI, imatges de persones) ni informació mèdica, financera o contractual, i no usar mai imatges d’altres persones per a crear contingut nou.",
    },
    F15: {
      title: "OpenAI: controls de dades i privacitat en els plans d’empresa",
      claim:
        "En ChatGPT Free, Plus i Pro, l’ús dels teus xats per a entrenar està activat per defecte i es desactiva en Configuración → Controles de datos → «Mejorar el modelo para todos». En ChatGPT Business, Enterprise, Edu i l’API no s’entrena amb les teues dades per defecte.",
    },
    F16: {
      title: "Google: privacitat de les aplicacions de Gemini i de Gemini en Google Workspace",
      claim:
        "En l’aplicació de Gemini, l’ús dels xats per a millorar els servicis ve activat per defecte en majors de 18 anys. Persones revisores lligen una part dels xats, que es conserven fins a tres anys encara que esborres l’historial; amb l’historial desactivat, els xats es guarden uns dos mesos. En Google Workspace, Google no usa el teu contingut per a entrenar models sense el teu permís.",
    },
    F17: {
      title: "Anthropic: «Updates to Consumer Terms and Privacy Policy» (28/08/2025)",
      claim:
        "Des d’aleshores, en Claude Free, Pro i Max cal triar si es permet entrenar amb els teus xats, i el botó principal de l’avís ho deixava activat. Si es permet, les dades es conserven fins a 5 anys; si no, 30 dies. No afecta els plans comercials (Team, Enterprise i API).",
    },
    F18: {
      title: "Xats de ChatGPT indexats en Google (juliol i agost de 2025)",
      claim:
        "Es van trobar quasi 4.500 converses compartides indexades en Google, algunes amb temes personals i delicats. OpenAI va retirar en qüestió d’hores l’opció de fer els enllaços visibles en cercadors i va demanar que es desindexaren.",
    },
    F19: {
      title: "Deloitte Austràlia torna part d’un informe amb errors atribuïts a la IA (octubre de 2025)",
      claim:
        "Un informe de 237 pàgines per al Govern australià, de 440.000 dòlars australians, amb referències inexistents i una cita inventada atribuïda a una jutgessa. Deloitte va tornar l’últim pagament, i la versió corregida reconeix l’ús d’IA generativa.",
    },
    F20: {
      title: "Advocats sancionats a Espanya per cites inventades",
      claim:
        "Tribunal Constitucional (setembre de 2024): advertiment per citar 19 sentències inexistents. TSJ de Canàries (2026): sanció per un recurs amb 48 cites falses. TSJ de Galícia (juliol de 2026): multa de 1.800 € per 24 cites falses; el tribunal recorda que usar IA no està prohibit, però que no substituïx el criteri professional.",
    },
    F21: {
      title: "Directiva (UE) 2024/825, d’apoderament dels consumidors per a la transició ecològica",
      claim:
        "Prohibix les afirmacions ambientals genèriques sense un comportament ambiental excel·lent reconegut, els segells de sostenibilitat sense certificació ni suport públic, les afirmacions d’impacte neutre, reduït o positiu basades en compensacions i les promeses de futur sense un pla detallat supervisat per un tercer independent. Termini de transposició: 27/03/2026. Aplicació: 27/09/2026.",
    },
    F22: {
      title: "Estat de la transposició a Espanya (tardor de 2026)",
      claim:
        "Espanya no la va transposar a temps: la Comissió va obrir un procediment d’infracció el 28/05/2026 i la Llei de Consum Sostenible continua en tramitació. Mentrestant, el greenwashing es pot perseguir amb la Llei de Competència Deslleial, la Llei General de Publicitat i la Llei General per a la Defensa dels Consumidors, interpretades d’acord amb la directiva.",
    },
    F23: {
      title: "Comissió Europea: estudi de 2020 sobre al·legacions ambientals",
      claim:
        "El 53,3 % de les al·legacions ambientals examinades a la UE eren vagues, enganyoses o infundades, i el 40 % no tenia suport.",
    },
    F24: {
      title: "Declaracions de propietats saludables: Reglament (CE) 1924/2006 i Reglament (UE) 432/2012",
      claim:
        "Només es poden usar les declaracions de propietats saludables autoritzades, amb les seues condicions. L’AESAN té una pàgina i un cercador de les autoritzades.",
    },
    F30: {
      title: "Projecte de Llei Orgànica per al bon ús i la governança de la IA (Espanya)",
      claim:
        "Aprovat pel Consell de Ministres el 26/05/2026 i en tramitació al Congrés. Preveu multes de fins a 35 milions d’euros i situa l’AESIA com a supervisora. Fins que s’aprove, no es pot multar amb ella.",
    },
    F31: {
      title: "Google: «Measuring the environmental impact of AI inference» (agost de 2025)",
      claim:
        "Segons Google, una consulta de text mitjana en Gemini consumix 0,24 Wh, emet 0,03 g de CO₂e i gasta 0,26 ml d’aigua. Són dades de la mateixa empresa: no inclouen l’entrenament, la xarxa ni el dispositiu de l’usuari, i hi ha experts que critiquen que no compten l’aigua indirecta.",
    },
    F25: {
      title: "Microsoft i LinkedIn: Work Trend Index 2024",
      claim:
        "El 75 % dels treballadors del coneixement usa IA en la faena, i el 78 % d’ells porta les seues pròpies eines (80 % a Europa). Només el 39 % ha rebut formació de la seua empresa. És un estudi d’una empresa que ven IA: pren-lo com a orde de magnitud.",
    },
    F26: {
      title: "Reglament Europeu d’IA, art. 4, reformat pel Reglament (UE) 2026/1744",
      claim:
        "Des del 27/07/2026, l’art. 4 demana «prendre mesures per a donar suport» a l’alfabetització en IA del personal, en lloc de «garantir un nivell suficient», i aclarix que no cal garantir un nivell concret.",
    },
    F27: {
      title: "AEPD: Política general interna per a l’ús d’IA generativa (27/11/2025)",
      claim:
        "La política interna de la mateixa AEPD, la primera d’este tipus en el sector públic espanyol. Un bon model, en gran, per a una política d’una pàgina.",
    },
  },

  skills: {
    copywriting: {
      title: "textos per a la teua web",
      body: "Escriu o reescriu la teua pàgina d’inici, una fitxa de producte o un titular. Primer mira el que ja tens i només canvia el que cal, i no fa afirmacions que no es puguen justificar: just el que demana la llei contra el greenwashing.",
    },
    "copy-editing": {
      title: "revisar i polir textos",
      body: "Corregix, escurça i polix un text que ja tens sense reescriure’l sencer, i lleva les frases que delaten que l’ha escrit una IA.",
    },
    humanizer: {
      title: "que no sone a IA",
      body: "La més popular per a això: reescriu un text que sona a ChatGPT perquè sone a qui el signa, sense canviar el que diu. Busca desenes de tics, com els contrastos «no és X, és Y» o els tancaments d’una sola línia.",
    },
    "customer-research": {
      title: "el perfil del teu client",
      body: "La que va eixir en la xarrada. Analitza ressenyes, enquestes o comentaris de clients i et diu què volen dir de veritat, què pots concloure amb seguretat i què preguntar després. Lleva abans els noms dels teus clients ([com](@privacidad#datos-de-clientes)).",
    },
    social: {
      title: "contingut per a xarxes",
      body: "Idees, publicacions, carrusels i guions de vídeo curt per a Instagram, Facebook, LinkedIn o TikTok, i un calendari per a no improvisar cada setmana.",
    },
    emails: {
      title: "correus automàtics",
      body: "Dissenya o millora seqüències de correu: la benvinguda a qui s’apunta al teu butlletí, el seguiment després d’una compra o recuperar clients que fa temps que no compren.",
    },
    "seo-audit": {
      title: "per què no apareixes en Google",
      body: "Diagnostica el SEO de la teua web: per què ha baixat el trànsit, per què una pàgina no ix o si els títols estan bé. Inclou SEO local, clau si vens en la teua zona.",
    },
    "ai-seo": {
      title: "aparéixer en les respostes de la IA",
      body: "Cada vegada més clients pregunten a ChatGPT o a Perplexity en lloc de buscar en Google. Et diu què fer perquè la IA et cite i et recomane.",
    },
  },
};
