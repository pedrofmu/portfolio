import { TALK_DOWNLOADS } from "../../lib/charla";
import type { TalkDictionary } from "./types";

/**
 * «IA sin humo» in British English. The talk was given in Spanish: the title
 * stays as it was announced, and the slides and the posters are in Spanish.
 */
export const en: TalkDictionary = {
  ui: {
    talkTitle: "IA sin humo",
    subtitle: "What actually saves you time with AI, and what you should never do.",
    byline: "A talk by Pedro Fernández Muñoz at BioCultura Madrid 2026, on 27 November. Given in Spanish.",
    updated: "Updated: November 2026",
    copy: "Copy",
    copied: "Copied",
    downloadZip: "Download the ZIP",
    zipMeta: "For Claude and Gemini",
    viewSource: "View on GitHub",
    skillBy: (author, repo, k) => `By ${author}, in the ${repo} repository (over ${k},000 stars on GitHub).`,
    where: "Where it appears",
    slides: (n) =>
      n.length === 1 ? `Slide ${n[0]}` : `Slides ${n.slice(0, -1).join(", ")} and ${n.at(-1)}`,
    notOnScreen: "Not on screen: mentioned aloud or kept for questions",
    posters: {
      badAlt:
        "MuesliEco poster made from a one-line request: dark green background, a bowl of muesli, the slogan ‘Del campo a tu cuenco’ (from the field to your bowl), ‘[TU TIENDA O WEB]’ (your shop or website) and ‘Bueno para ti, bueno para la tierra’ (good for you, good for the earth).",
      badCaption:
        "**Bad.** It made up the slogan, where to buy it (‘[YOUR SHOP OR WEBSITE]’) and ‘good for the earth’, a generic environmental claim.",
      goodAlt:
        "MuesliEco poster made with the five ingredients: cream background, ‘Pruébalo gratis’ (try it for free), a bowl with its ingredients, the labels ‘No added sugar’, ‘Locally sourced ingredients’ and ‘EU certified organic’, and ‘Sírvete aquí’ (help yourself) at the bottom.",
      goodCaption:
        "**Good.** ‘Try it for free’, ‘Help yourself’ for the dispenser and ‘EU certified organic’, which is specific and verifiable. Even so, ‘locally sourced ingredients’ would need to be backed up: always check.",
    },
    resourceNames: {
      "contexto-de-empresa": "Business context template",
      encargos: "Requests that work",
      skills: "Skills worth installing",
      conectores: "Connectors guide",
      privacidad: "Privacy checklist",
      greenwashing: "Greenwashing: phrases to avoid",
      "politica-de-uso": "AI use policy",
      fuentes: "Sources",
    },
    resourcesLabel: "Talk resources",
    contactTitle: "Still have questions?",
    contactBody:
      "Tell me about your case by email or WhatsApp. If I can help, we’ll go through it on a call; if I can’t, I’ll tell you.",
    emailCta: "Email me",
    whatsappCta: "Message me on WhatsApp",
    homeCta: "More from Pedro Fernández Muñoz",
  },

  home: {
    title: "IA sin humo: resources from the BioCultura Madrid 2026 talk",
    description:
      "Summary, templates, skills, step-by-step guides and sources from Pedro Fernández Muñoz’s talk on using AI in small businesses at BioCultura Madrid 2026.",
    lead: "Everything from the talk in one place: the summary, the templates, the step-by-step guides and the source for every figure. No sign-up needed.",
    sections: [
      {
        id: "recursos",
        title: "Resources",
        intro: "In the order they came up in the talk.",
        blocks: [
          {
            type: "resources",
            items: [
              {
                resource: "contexto-de-empresa",
                body: "Who you are, what you sell and how you talk, in one document to paste into the AI. With a filled-in example.",
              },
              { resource: "encargos", body: "The MuesliEco poster, done badly and done well, and prompts ready to copy." },
              { resource: "skills", body: "The ones Claude already has and the public ones that are genuinely worth it, with how to install them." },
              {
                resource: "conectores",
                body: "Which connectors each tool offers, what to ask them and how to switch them on without handing over more keys than needed.",
              },
              {
                resource: "privacidad",
                body: "Turn off training, check your shared links and work with customer data safely.",
              },
              { resource: "greenwashing", body: "Phrases to avoid, what to say instead and what the law says. Printable." },
              { resource: "politica-de-uso", body: "One page so your team knows what they can and can’t do with AI." },
              { resource: "fuentes", body: "Every figure from the talk with its link, in slide order." },
            ],
          },
          {
            type: "downloads",
            items: [
              {
                href: `${TALK_DOWNLOADS}/ia-sin-humo-diapositivas.pdf`,
                label: "Slides from the talk",
                meta: "PDF, 4 MB, in Spanish",
              },
            ],
          },
        ],
      },
      {
        id: "diagnostico",
        title: "You use it, but is it working for you?",
        intro: "Almost all of us use it already. The question is whether it gets results or just text that sounds good.",
        blocks: [
          {
            type: "p",
            text: "In a study of 5,179 customer support agents, AI increased the queries resolved per hour by **14%**, and by **34%** for the least experienced ([source](@fuentes#f2)). More capacity with the same team. But you need to know how to use it, for four reasons:",
          },
          {
            type: "defs",
            items: [
              {
                term: "It drifts towards the generic",
                body: "And your customers notice: 49% dislike businesses using AI in their advertising, and only 27% trust them to use it responsibly. These are US figures, but the trend is clear ([source](@fuentes#f4)).",
              },
              {
                term: "It tells you you’re right",
                body: "It tends to please and hardly ever says ‘I don’t know’. In 2025 OpenAI rolled back a ChatGPT update for being too sycophantic ([source](@fuentes#f6)).",
              },
              { term: "It can leak your data", body: "To the AI provider or to the internet. [How to avoid it](@privacidad)." },
              {
                term: "It can waste your time",
                body: "Even when it feels faster: in one study, experienced developers took 19% longer with AI and believed they had been 20% faster ([source](@fuentes#f8)).",
              },
            ],
          },
          { type: "p", text: "And you can run into **legal trouble**. Using AI is legal; using it carelessly isn’t always:" },
          {
            type: "defs",
            items: [
              {
                term: "Customer data",
                body: "In the Netherlands, an employee at a GP practice pasted patients’ data into a chatbot. It was a data breach that had to be reported ([source](@fuentes#f32)).",
              },
              {
                term: "Environmental claims",
                body: "AI writes ‘sustainable’ without blinking, and Directive (EU) 2024/825 bans it if you can’t prove it. [What to say instead](@greenwashing).",
              },
              {
                term: "What your chatbot says",
                body: "You’re responsible, not the AI. Air Canada argued in court that its chatbot was responsible for its own actions, and lost ([source](@fuentes#f29)). And since 2 August 2026 a chatbot must say that it’s an AI.",
              },
              {
                term: "Made-up facts",
                body: "The High Court of Galicia fined a lawyer €1,800 for an appeal with 24 fake citations ([source](@fuentes#f20)).",
              },
            ],
          },
        ],
      },
      {
        id: "para-que-sirve",
        title: "What AI is brilliant at",
        intro: "How it works, just enough to know when to trust it.",
        blocks: [
          {
            type: "p",
            text: "A language model **predicts the most likely next word** based on what it learnt from huge amounts of text. That’s why it sounds right without knowing whether it is: when it’s missing a fact, it doesn’t stay quiet, it fills the gap with something plausible. That’s ‘hallucinating’.",
          },
          { type: "p", text: "It shines at the reading, writing and sorting tasks that eat up your hours:" },
          {
            type: "defs",
            items: [
              {
                term: "Tasks with clear, defined steps",
                body: "If you can explain how it’s done, AI can do it. For example, turning three PDF delivery notes into a table: from half an hour copying lines by hand to 2 minutes checking it.",
              },
              {
                term: "Analysing information",
                body: "Summarising a lot of information and pulling out what matters: the 3 most repeated complaints in 200 reviews, or a grant’s requirements, deadlines and paperwork on one page.",
              },
              {
                term: "Writing up what you already know",
                body: "You bring the ideas and the facts; it turns them into good text. What it mustn’t do is make up the content.",
              },
            ],
          },
          {
            type: "note",
            text: "The prompts for these examples, ready to copy, are in [Requests that work](@encargos#prompts).",
          },
        ],
      },
      {
        id: "como-sacarle-partido",
        title: "How to really get the most out of it",
        intro: "You’re in charge. AI does the heavy lifting.",
        blocks: [
          {
            type: "p",
            text: "AI comes in layers: inside your tools (Notion, Canva, your invoicing software), in automations (Zapier, Make, n8n), with your files and your computer (desktop apps and agent modes) and in the chat you already know (ChatGPT, Claude, Gemini). Underneath them all is a model that predicts text, so **what follows works for all of them**.",
          },
          { type: "p", text: "**The five ingredients of a good request:**" },
          {
            type: "defs",
            items: [
              { term: "Context", body: "Who you are and what it’s for." },
              { term: "Goal", body: "Exactly what you want." },
              { term: "Let it ask you", body: "Before it starts, so it doesn’t assume." },
              { term: "Rules", body: "What it mustn’t do." },
              { term: "How to check itself", body: "Have it review the work the way your customer would." },
            ],
          },
          {
            type: "p",
            text: "**Keep the context clean.** An AI with clean context answers better: one project per topic, with your documents and standing instructions; one conversation per task, because endless conversations get messy and the AI mixes things up; and one document with your [business context](@contexto-de-empresa), written once and used every time.",
          },
          {
            type: "p",
            text: "**Give it superpowers.** [Skills](@skills) are what it knows how to do: saved instructions it uses by itself when they apply. [Connectors](@conectores) are what it can reach: your email, your documents, your calendar or your shop.",
          },
          {
            type: "p",
            text: "**Can’t find where to turn something on?** Ask the AI itself: it will explain how to use projects, skills or connectors in whatever tool you use.",
          },
        ],
      },
      {
        id: "lo-que-nunca",
        title: "What you should never do",
        intro: "What can cost you money, customers or a fine.",
        blocks: [
          {
            type: "defs",
            items: [
              {
                term: "Let it train on your data without knowing",
                body: "On personal ChatGPT, Gemini and Claude accounts it may be switched on. It takes a minute to turn off: [step by step](@privacidad#entrenamiento).",
              },
              {
                term: "Share links without thinking",
                body: "Nearly 4,500 shared ChatGPT conversations showed up on Google in 2025, some with personal data. [Check yours](@privacidad#enlaces).",
              },
              {
                term: "Paste customer data without anonymising it",
                body: "Using data is fine if you do it properly: no names or identifying details, and extra care with health data. [How to do it](@privacidad#datos-de-clientes).",
              },
              {
                term: "Trust it without checking",
                body: "It makes things up with total confidence: 19 non-existent rulings cited before Spain’s Constitutional Court, 48 fake citations in an appeal before the High Court of the Canary Islands, and Deloitte refunded part of an AU$440,000 report with invented references. **AI points you to the facts; you check they exist.** Open the sources, ask for the exact passage and double-check anything you can’t undo: sending, publishing, deleting or paying.",
              },
              {
                term: "Fall into greenwashing",
                body: "53% of the environmental claims examined in the EU were vague, misleading or unfounded. [Phrases to avoid and what to say](@greenwashing).",
              },
              {
                term: "Lose your voice",
                body: "If everything sounds like ChatGPT, it stops sounding like you. 75% accept a business using AI for ideas and drafts if it says so; 62% reject made-up people or voices. **AI drafts, you sign.**",
              },
            ],
          },
          {
            type: "note",
            text: "So your whole team is on the same page, there’s a one-page [AI use policy template](@politica-de-uso).",
          },
        ],
      },
      {
        id: "ideas",
        title: "Three ideas to take away",
        blocks: [
          {
            type: "ideas",
            items: [
              "It performs according to the context and tools you give it.",
              "There are uses you’re not taking advantage of yet.",
              "AI drafts, you sign. Don’t let it take your voice.",
            ],
          },
          {
            type: "p",
            text: "**Your homework for Monday:** pick **one** repetitive task and try it with what you learnt today. Stuck? Ask the AI itself how to do it.",
          },
        ],
      },
      {
        id: "preguntas",
        title: "Frequently asked questions",
        intro: "The ones that usually come up at question time, with short answers.",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Which tool do you recommend?",
                a: [
                  "The one you already use, set up properly. If you’ll be working with customer data, a business plan. What really changes the results is what the talk covers: context, checking and care with data.",
                ],
              },
              {
                q: "Is it legal to use AI in my business? Do I have to tell my customers?",
                a: [
                  "Using it is legal. Under the EU AI Act you must tell people when they’re talking to a chatbot (since 2 August 2026) and label images, video or audio that look real. For marketing copy that you check and sign off, there’s currently no general duty to label it ([source](@fuentes#f28)).",
                  "Spain’s own AI law is going through Parliament and will bring its own penalties ([source](@fuentes#f30)).",
                ],
              },
              {
                q: "Can I put a chatbot on my website?",
                a: [
                  "Yes, if it answers from your own information: shipping, allergens, stockists. But what it says is your responsibility, it must say that it’s an AI and, on allergens or health, it should quote and link the official product sheet instead of answering in its own words.",
                  "Most businesses don’t need one: what the talk covers is enough. If your case goes further, [email me](mailto:hola@pedrofm.dev).",
                ],
              },
              {
                q: "Do the greenwashing rules already apply in Spain?",
                a: [
                  "Spain hasn’t transposed the directive yet, but that isn’t a grace period: greenwashing can already be pursued under existing advertising, unfair competition and consumer law. Write as if it were already in force. [More detail](@greenwashing#espana).",
                ],
              },
              {
                q: "What about health claims?",
                a: [
                  "You can only use authorised claims, with their wording and conditions: they’re listed in Regulation (EU) 432/2012 and in the EU Register of health claims ([source](@fuentes#f24)).",
                ],
              },
              {
                q: "How much does it cost?",
                a: [
                  "From free (with the privacy precautions) to individual and team plans paid monthly. To start using it with customer data, the most basic business plan is usually enough. Check current prices on each tool’s website.",
                ],
              },
              {
                q: "What about AI’s environmental impact?",
                a: [
                  "A single text query uses little: according to Google, about 0.24 Wh and five drops of water, like watching TV for under nine seconds. But those are the company’s own figures, they don’t include training, and images, video and agents use much more. The total consumption of data centres is a real problem ([source](@fuentes#f31)).",
                  "My rule of thumb: use it where it really saves you work, not to generate for the sake of it.",
                ],
              },
              {
                q: "Will it take my job?",
                a: [
                  "It changes tasks, especially repetitive ones. The evidence says it helps beginners more than experts ([source](@fuentes#f2)). Involve your team in what gets automated; don’t impose it.",
                ],
              },
              {
                q: "Has any company been fined for putting data into ChatGPT?",
                a: [
                  "The documented cases I cite, in the Netherlands, are data breaches that had to be reported, with no known fine. An AI company has been fined, though: Italy fined OpenAI €15 million in 2024 for training on personal data without an adequate legal basis, and OpenAI appealed ([source](@fuentes#f32)).",
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
      title: "Business context template",
      description:
        "A template so the AI knows who you are, what you sell and how you talk, with a filled-in example and where to paste it in ChatGPT, Claude and Gemini.",
      lead: "One document with who you are, what you sell, to whom and how you talk. Write it once, paste it into a project’s instructions and the AI stops answering you like a stranger.",
      sections: [
        {
          id: "como-usarla",
          title: "How to use it",
          blocks: [
            {
              type: "steps",
              items: [
                "Copy the template below.",
                "Fill it in. It takes 15 to 20 minutes; delete whatever doesn’t apply to your business.",
                "Paste it where the AI always reads it: in a project’s instructions (see [where to paste it](#donde-pegarla)).",
                "Test it: ask for a piece of text and check it follows your rules.",
              ],
            },
            {
              type: "prompt",
              title: "Can’t face filling it in? Let the AI interview you",
              text: "I want to fill in this business context template. Ask me the questions one at a time, wait for my answer and, at the end, give me back the completed template. If I don’t know something, leave it in square brackets.\n\n[paste the template here]",
            },
          ],
        },
        {
          id: "plantilla",
          title: "The template",
          intro: "The standing rules at the end make the biggest difference: no made-up facts and no generic environmental claims.",
          blocks: [{ type: "file", file: "contexto-de-empresa.md", title: "Business context template" }],
        },
        {
          id: "ejemplo",
          title: "Filled-in example: MuesliEco",
          intro: "The made-up business from the posters in the talk. Notice how specific the allowed claims are.",
          blocks: [{ type: "file", file: "contexto-muesli-eco.md", title: "MuesliEco business context" }],
        },
        {
          id: "donde-pegarla",
          title: "Where to paste it",
          intro: "For one topic, in a project (or a skill in Gemini). For everything you do, in the general instructions.",
          blocks: [
            {
              type: "table",
              head: ["Tool", "For one topic", "For everything you do"],
              rows: [
                [
                  "ChatGPT",
                  "Create a project and paste the text into its instructions: the project’s ••• menu, ‘Project settings’.",
                  "In your account’s personalisation, under custom instructions.",
                ],
                [
                  "Claude",
                  "Create a project and paste the text into the project instructions.",
                  "In your profile settings, under personal preferences.",
                ],
                [
                  "Gemini",
                  "Create a skill: Customize → Skills → Create → Create manually, and paste the text into the instructions.",
                  "Settings → Personal context → Your instructions for Gemini → Add.",
                ],
              ],
            },
            {
              type: "note",
              text: "Gemini Gems are being retired: on personal accounts they turn into skills and disappear on 17 December 2026. If you had one, download its files first ([Google help](https://support.google.com/gemini/answer/18560919?hl=en)).",
            },
            {
              type: "p",
              text: "Add your documents to the project too: product sheets, certificates, price lists. That way the AI quotes from them instead of inventing. And if you can’t find a menu, ask the AI itself: ‘Where do I put standing instructions for a project?’",
            },
          ],
        },
      ],
    },

    encargos: {
      title: "Requests that work",
      description:
        "The five ingredients of a good AI request, the MuesliEco poster done badly and done well, and prompts ready to copy.",
      lead: "The same request can produce a generic poster or one that works. The difference is five ingredients and a couple more minutes.",
      sections: [
        {
          id: "cartel",
          title: "The MuesliEco poster",
          intro: "‘Make me a poster to promote my organic muesli.’ That was all I asked the AI the first time. The posters are in Spanish, as in the talk.",
          blocks: [
            { type: "posters" },
            {
              type: "prompt",
              title: "The good request, with the five ingredients",
              text: "Context. I’m MuesliEco, I sell organic muesli and I’m going to promote it at BioCultura.\nGoal. Make me a poster for the dispenser.\nQuestions. Before you start, ask me for any information you need. Don’t assume anything.\nRules. Nothing generic. Easy to read, not cluttered.\nCheck. Look at it as a family standing in front of the dispenser would, say what wouldn’t convince you and improve it.",
              note: "The good poster also used Claude’s brandkit skill, which gives it a consistent brand, colours and typography without describing them. If your tool doesn’t have it, add your colour palette, fonts and logo to the request, or ask it to question you about your visual identity before designing.",
            },
          ],
        },
        {
          id: "ingredientes",
          title: "The five ingredients",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Context",
                  body: "Who you are and what it’s for. If it’s in your [business context](@contexto-de-empresa), you don’t need to repeat it.",
                },
                { term: "Goal", body: "Exactly what you want: format, length and where it will be used." },
                {
                  term: "Let it ask you",
                  body: "Before it starts, so it doesn’t assume. It’s the most forgotten ingredient and the one that changes the result most.",
                },
                { term: "Rules", body: "What it mustn’t do: nothing generic, no made-up facts, nothing off your tone." },
                { term: "How to check itself", body: "Have it review the work the way your customer would before handing it over." },
              ],
            },
            {
              type: "prompt",
              title: "Request template",
              text: "Context: I’m [who you are] and this is for [what and who it’s for].\nGoal: [exactly what you want, with format and length].\nQuestions: Before you start, ask me any questions you need. Don’t assume anything.\nRules: [what it mustn’t do: nothing generic, don’t make up facts, tone…].\nCheck: When you have it, read it as [your typical customer], tell me what wouldn’t convince them and improve it.",
            },
          ],
        },
        {
          id: "prompts",
          title: "Prompts ready to copy",
          intro: "Change whatever is in square brackets. The ones for email, Drive, calendar and shop are in the [connectors guide](@conectores#que-pedirle).",
          blocks: [
            {
              type: "prompt",
              title: "Delivery notes or invoices into a table",
              text: "I’m attaching [number] delivery notes as PDFs. Put them into a table with these columns: supplier, date, delivery note number, product, quantity, unit, unit price and line total.\nRules:\n- Copy the data exactly as it appears. Don’t calculate or fill in anything that isn’t in the document.\n- If a value is unreadable or missing, leave the cell empty and write ‘CHECK’ in a notes column.\n- At the end, tell me how many lines you took from each delivery note so I can check.",
              note: "Check the table against the originals before using it. In Claude, the Excel skill gives it back to you as a spreadsheet straight away.",
            },
            {
              type: "prompt",
              title: "The most repeated complaints in your reviews",
              text: "Here are [number] customer reviews. Group them by topic and tell me the 3 most repeated complaints.\nFor each complaint: how many reviews mention it, two verbatim example quotes and one concrete idea to fix it.\nDon’t make up reviews or figures: if something isn’t clear, tell me.",
              note: "Remove customers’ names first: [how to anonymise](@privacidad#datos-de-clientes).",
            },
            {
              type: "prompt",
              title: "A grant’s rules on one page",
              text: "I’m attaching the rules for [name of the grant]. Summarise them on one page for a business like mine: [sector, number of employees, region].\n- Eligibility requirements.\n- Deadlines, with exact dates.\n- Documents to submit.\n- How much you can get and which costs it covers.\nFor each point, give the page and section of the rules it comes from. If the rules don’t say, write ‘Not stated’. At the end, tell me whether my business seems to meet the requirements and what I would need to confirm.",
              note: "Check the dates and amounts in the rules before submitting anything.",
            },
            {
              type: "prompt",
              title: "Ask me first",
              text: "Before you answer, ask me the questions you need to do this well, one at a time. Don’t start until I say ‘go ahead’.",
            },
            {
              type: "prompt",
              title: "Review a text the way your customer would",
              text: "Read this text as if you were [typical customer: e.g. a parent who buys organic at a health food shop and reads every label]. Tell me honestly what you wouldn’t understand, what you wouldn’t believe and what would stop you buying. Then suggest an improved version without making up any facts.\n\n[paste the text here]",
            },
            {
              type: "prompt",
              title: "Rehearse a difficult negotiation",
              text: "Let’s rehearse a negotiation. You’re [the packaging supplier] and you don’t want to lower the price because [realistic reason]. I’m [your role] and I want [goal]. Raise realistic objections, one at a time, and don’t give in easily. When I say ‘stop’, tell me what I did well, which arguments I was missing and which sentence weakened my position.",
            },
            {
              type: "prompt",
              title: "Check where every fact comes from",
              text: "For each fact or claim in your answer, give me the source with its link and copy the exact sentence from the document that says it. If you don’t have a source, say so clearly instead of guessing.",
              note: "Then open the links: AI points you to the facts; you check they exist.",
            },
          ],
        },
      ],
    },

    skills: {
      title: "Skills worth installing",
      description:
        "What skills are, the ones Claude already has and the most-used public ones for copy, customers, social media and SEO, with how to install them in Claude, Gemini and ChatGPT.",
      lead: "A skill is a set of saved instructions the AI uses by itself when they apply. You don’t need to write them from scratch: there are plenty of public, free ones used by thousands of people. These are the ones that genuinely help a small business.",
      sections: [
        {
          id: "tres-formas",
          title: "Three ways to get them",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "The ones your tool already has",
                  body: "Claude comes with Anthropic skills for creating and reading Word, Excel, PowerPoint and PDF documents (for example, turning delivery notes into a spreadsheet); brandkit, which creates a brand’s visual identity and made the good [MuesliEco](@encargos#cartel) poster; and skill-creator, which helps you build your own. You’ll find them under Customize → Skills.",
                },
                {
                  term: "The ones you find online",
                  body: "Many are free and maintained by authors with thousands of users. Below is a selection, with links to where they come from.",
                },
                {
                  term: "The ones you create",
                  body: "For things that are very much yours, such as your brand voice or how you reply to an angry customer. No coding needed: [create it with the AI](#crea-la-tuya).",
                },
              ],
            },
            {
              type: "p",
              text: "**Before installing a skill from the internet**, remember it’s a set of instructions the AI will follow. Check:",
            },
            {
              type: "list",
              items: [
                "**Who publishes it:** ideally the tool itself or someone with a track record and many users.",
                "**What it says:** it’s text. Skim it; if you don’t understand what it does, don’t install it.",
                "**What it asks for:** be wary if it wants to connect to services, send data elsewhere or run programs the task doesn’t need.",
              ],
            },
          ],
        },
        {
          id: "textos",
          title: "To write better and not sound like AI",
          intro: "All three strip out the usual tells of AI-written text.",
          blocks: [
            { type: "skill", id: "copywriting" },
            { type: "skill", id: "copy-editing" },
            { type: "skill", id: "humanizer" },
          ],
        },
        {
          id: "clientes",
          title: "Customers, social media and email",
          blocks: [
            { type: "skill", id: "customer-research" },
            { type: "skill", id: "social" },
            { type: "skill", id: "emails" },
          ],
        },
        {
          id: "seo",
          title: "Get found on Google and by AI",
          blocks: [
            { type: "skill", id: "seo-audit" },
            { type: "skill", id: "ai-seo" },
            {
              type: "note",
              text: "If you use Claude Code, [claude-seo](https://github.com/AgriciDaniel/claude-seo) (over 30,000 stars on GitHub) runs full SEO audits of your website. It needs Python installed, so it’s not one to start with.",
            },
          ],
        },
        {
          id: "instalar",
          title: "How to install them",
          intro: "Menus change often. If you can’t find something, ask the AI itself: ‘How do I upload a skill?’",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Claude",
                  body: "On every plan, including the free one. Turn on ‘Create and edit files’ in Settings → Capabilities. Download the skill’s ZIP, go to Customize → Skills, click + → Create skill → Upload a skill and choose the ZIP as it is, without unzipping it ([Anthropic help](https://support.claude.com/en/articles/12512180-use-skills-in-claude)).",
                },
                {
                  term: "Gemini",
                  body: "On personal accounts for over-18s. From the web or the Mac app: Customize → Skills → Create → Upload, and choose the same ZIP or the SKILL.md file ([Google help](https://support.google.com/gemini/answer/17094296?hl=en)). Skills replace Gems.",
                },
                {
                  term: "ChatGPT",
                  body: "Skills are only on the Business, Enterprise and Edu plans: Plugins → Plugin Directory → Skills → Create → Upload from your computer ([OpenAI help](https://help.openai.com/en/articles/20001066-skills-in-chatgpt)). On Free, Plus or Pro, open the skill’s SKILL.md on GitHub, copy it and paste it into a project’s instructions.",
                },
              ],
            },
            {
              type: "note",
              text: "The marketingskills ones are written mainly with software companies in mind, but they work just as well for a shop and reply in whatever language you write in. humanizer doesn’t publish a ZIP for Claude: in Gemini, uploading its SKILL.md is enough, and in Claude, copy-editing does a similar job and comes ready to upload.",
            },
          ],
        },
        {
          id: "crea-la-tuya",
          title: "Create your own",
          intro: "For anything you can’t find ready-made: ask the AI and write it together.",
          blocks: [
            {
              type: "p",
              text: "In Claude, the skill-creator skill walks you through it. In Gemini, Customize → Skills → Create → Create with Gemini. Or use this prompt in any of the three:",
            },
            {
              type: "prompt",
              title: "Create a skill for me",
              text: "I want to create a skill for [a task I repeat, e.g. replying to customer reviews]. Ask me the questions you need, one at a time, about how I do it, which rules I follow and which mistakes I want to avoid. When you have enough, write it with a short lowercase name with hyphens, a description of when to use it (under 200 characters) and step-by-step instructions.",
            },
            {
              type: "p",
              text: "Once you have it, test it on a real case, fix what doesn’t convince you and upload it like the ones above.",
            },
          ],
        },
      ],
    },

    conectores: {
      title: "Connectors guide",
      description:
        "How to connect AI to Gmail, Google Drive, your calendar and your online shop, step by step and with just the right permissions.",
      lead: "A connector gives the AI access to one of your tools: your email, your documents, your calendar, your shop or your CRM. Many switch on with one click, no coding, and they change what it can do for you.",
      sections: [
        {
          id: "que-pedirle",
          title: "What you can ask it",
          intro: "The four examples from the talk, with a bit more detail so they work first time.",
          blocks: [
            {
              type: "prompt",
              title: "Gmail",
              text: "Go through today’s order emails. For each one, draft a reply confirming the order and the usual delivery time ([time]). Leave them as drafts; don’t send anything.",
              note: "As drafts: you check each reply and send it.",
            },
            {
              type: "prompt",
              title: "Google Drive",
              text: "Find the printer’s latest quote in my Drive and compare it with the one I’m attaching: unit price, lead times, shipping costs and terms. Tell me which is better and why, quoting the relevant part of each document.",
            },
            {
              type: "prompt",
              title: "Calendar",
              text: "Which slots of at least 2 hours do I have free on Thursday between 9:00 and 18:00 to visit suppliers? Don’t create any events.",
            },
            {
              type: "prompt",
              title: "Your online shop",
              text: "Which 10 products sold best in October, in units and in euros? Compare with September and point out what changed most.",
              note: "If you use Shopify, Claude has an official connector. With WooCommerce, PrestaShop or Holded, export the sales report as a CSV, remove customer data and give it that: it works just as well for this question.",
            },
          ],
        },
        {
          id: "cuales-hay",
          title: "Which connectors exist",
          intro: "The official ones most useful to a small business, according to each tool’s directory in November 2026.",
          blocks: [
            {
              type: "table",
              head: ["Connector", "What for", "Claude", "ChatGPT", "Gemini"],
              rows: [
                [
                  "Gmail, Google Drive and Google Calendar",
                  "Search and summarise email, documents and appointments; draft replies and create events.",
                  "Yes, on every plan",
                  "Google Drive",
                  "Yes",
                ],
                [
                  "Microsoft 365: Outlook, OneDrive, SharePoint and Teams",
                  "The same, if your email and files are on Microsoft.",
                  "Yes (personal accounts: Outlook and OneDrive only)",
                  "Outlook, SharePoint and Teams",
                  "—",
                ],
                ["Shopify", "Your shop’s sales, products, stock and orders.", "Yes", "—", "US only"],
                ["Canva", "Create and edit designs with your templates.", "Yes", "Yes", "Personal accounts"],
                ["Notion", "Search and update your pages and databases.", "Yes", "Yes", "—"],
                ["HubSpot", "Your CRM’s contacts, deals and campaigns.", "Yes", "—", "—"],
                ["Google Analytics", "Your website’s visits and sales.", "—", "—", "Personal accounts"],
                ["Dropbox or Box", "Search and summarise your files.", "—", "Box", "Dropbox"],
              ],
            },
            {
              type: "note",
              text: "‘—’ means we didn’t find it in the official directory; directories grow every month, so check your tool’s. Some connectors need a paid account with the service itself. WooCommerce, PrestaShop and Holded have no official connector in any of the three.",
            },
          ],
        },
        {
          id: "mas-ideas",
          title: "More ideas to ask for",
          blocks: [
            {
              type: "prompt",
              title: "Canva",
              text: "Using my Canva brand kit, create three versions of an Instagram post announcing our autumn muesli is in. Leave them in Canva for me to review; don’t publish anything.",
            },
            {
              type: "prompt",
              title: "Shopify",
              text: "Which products have fewer than 10 units in stock and sell every week? Give me a restocking list, with how many of each we sold last month.",
            },
            {
              type: "prompt",
              title: "Notion",
              text: "Find my notes from the last trade fair in Notion and summarise which contacts I still need to call and why.",
            },
            {
              type: "prompt",
              title: "HubSpot",
              text: "Which health food shops haven’t placed an order in the last 3 months? Draft an email for each one, without sending it.",
            },
            {
              type: "prompt",
              title: "Google Analytics",
              text: "Which cities sent us the most visits last month, and which pages did people view before buying?",
            },
            {
              type: "prompt",
              title: "Outlook",
              text: "Find the packaging supplier’s emails about our last order and summarise what’s outstanding and who it depends on.",
            },
          ],
        },
        {
          id: "activar",
          title: "How to switch them on",
          intro: "Menus change often. If you can’t find something, ask the AI itself: ‘How do I connect my Gmail to you?’",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Claude",
                  body: "Customize → Connectors, choose Gmail, Google Drive or Google Calendar, sign in with Google and accept the permissions. They’re on every plan, including the free one. In each chat, click + → Connectors to turn on only the ones you need. Gmail can prepare drafts, and it asks permission before sending ([Anthropic help](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)).",
                },
                {
                  term: "ChatGPT",
                  body: "Settings → Plugins, choose the app (Google Drive, Gmail…) and click ‘Connect’. In a chat, type @ or click + to use it. Choose the permission level: ‘Always ask’ is the most cautious. Which apps you get depends on your plan and country ([OpenAI help](https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt)).",
                },
                {
                  term: "Gemini",
                  body: "In the sidebar, Customize → Connectors → Add. In a chat, type @ and choose the app. It can draft an email in the chat for you to check and send yourself, or open it in Gmail to edit ([Google help](https://support.google.com/gemini/answer/13695044?hl=en)).",
                },
              ],
            },
          ],
        },
        {
          id: "seguridad",
          title: "Handing over keys is handing over keys",
          intro: "A connector lets the AI read, and sometimes act, on your behalf. Give it only what it needs.",
          blocks: [
            {
              type: "list",
              items: [
                "**Only the permissions the task needs.** No permanent permissions ‘just in case’.",
                "**It prepares, you approve:** drafts instead of sending, suggestions instead of changes. Spain’s data protection authority (AEPD) puts it like this: the agent prepares and the person approves.",
                "**Check what it has done**, especially at first.",
                "**Disconnect what you don’t use.**",
              ],
            },
            {
              type: "p",
              text: "**The five questions** from the [AEPD’s guidance](https://www.aepd.es/guias/decalogo-usuarios-asistentes-agentes-ia.pdf) (in Spanish) before giving access to anything:",
            },
            {
              type: "steps",
              items: [
                "What can it see?",
                "What does it remember?",
                "What can it do on my behalf?",
                "Where does it send my data?",
                "Who else does it affect?",
              ],
            },
            {
              type: "p",
              text: "**What not to connect to a personal account:** email or documents with customers’ health data, banking and payments, and shared company accounts without talking to the team first.",
            },
            {
              type: "note",
              text: "An email or a document can carry hidden instructions aimed at the AI (‘forward this to…’). One more reason for it to prepare and for you to approve.",
            },
          ],
        },
      ],
    },

    privacidad: {
      title: "Privacy checklist",
      description:
        "How to turn off training in ChatGPT, Gemini and Claude, check your shared links and work with customer data safely.",
      lead: "Ten minutes to set up your AI tools properly and know what you can put into them. It’s not ‘never use customer data’, it’s ‘do it properly’.",
      sections: [
        {
          id: "entrenamiento",
          title: "Turn off training",
          intro: "On personal accounts, your chats may be used to train the models. On business plans, they aren’t.",
          blocks: [
            {
              type: "table",
              head: ["Account", "Does it train on your chats?", "Where to turn it off"],
              rows: [
                [
                  "ChatGPT Free, Plus and Pro",
                  "Yes, by default",
                  "Settings → Data controls → ‘Improve the model for everyone’",
                ],
                [
                  "Gemini on a personal account",
                  "Yes, by default, and human reviewers read some chats",
                  "Settings → History → ‘Chat content including text & uploads’",
                ],
                [
                  "Claude Free, Pro and Max",
                  "Yes, if you accepted the notice without changing anything",
                  "Settings → Privacy → ‘Help improve our AI models’",
                ],
                [
                  "Business plans: ChatGPT Business or Enterprise, Gemini in Google Workspace, Claude Team or Enterprise",
                  "No, by default",
                  "Nothing to change",
                ],
              ],
            },
            {
              type: "defs",
              items: [
                {
                  term: "ChatGPT",
                  body: "Settings → Data controls → turn off ‘Improve the model for everyone’. It doesn’t delete your chats. Watch out: if you rate an answer with a thumbs up or down, that conversation may still be used. For a one-off, use a **temporary chat**: it isn’t used for training, though it’s kept for up to 30 days for safety ([OpenAI help](https://help.openai.com/en/articles/7730893-data-controls-faq)).",
                },
                {
                  term: "Gemini",
                  body: "On gemini.google.com, Settings → History (formerly ‘Gemini Apps Activity’), and untick ‘Chat content including text & uploads’, or turn history off altogether. Even so, Google keeps chats for around two months to respond and for safety, and those read by human reviewers are kept for up to three years even if you delete your history. For a one-off, use a **temporary chat**, next to ‘New chat’ ([Google help](https://support.google.com/gemini/answer/13278892?hl=en)).",
                },
                {
                  term: "Claude",
                  body: "Settings → Privacy, and turn off ‘Help improve our AI models’ ([direct link](https://claude.ai/settings/data-privacy-controls)). With it on, your chats may be kept for up to 5 years; with it off, 30 days. For a one-off, use an **incognito chat**: the ghost icon at the top right of a new chat ([Anthropic help](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings)).",
                },
              ],
            },
          ],
        },
        {
          id: "enlaces",
          title: "Check your shared links",
          intro: "Anyone with a ‘share’ link can see it, and it can end up in a search engine.",
          blocks: [
            {
              type: "p",
              text: "In summer 2025, nearly 4,500 shared ChatGPT conversations showed up on Google, some with personal data ([source](@fuentes#f18)). OpenAI removed the option within hours, but check the links you’ve created:",
            },
            {
              type: "defs",
              items: [
                {
                  term: "ChatGPT",
                  body: "Settings → Data controls → Shared links → Manage. You can delete them one by one or all at once.",
                },
                {
                  term: "Gemini",
                  body: "Settings → Your public links, or go straight to [gemini.google.com/sharing](https://gemini.google.com/sharing). You can also delete them all.",
                },
                { term: "Claude", body: "Open the shared chat and stop sharing it from the Share button." },
              ],
            },
            {
              type: "note",
              text: "Deleting the link doesn’t delete copies others have already saved. Before sharing, ask yourself whether you’d mind anyone reading it.",
            },
          ],
        },
        {
          id: "datos-de-clientes",
          title: "Before pasting customer data",
          intro: "Using data is fine. Just do it properly.",
          blocks: [
            { type: "p", text: "**Ask yourself four questions:**" },
            {
              type: "list",
              items: [
                "Does the AI need this data for the task?",
                "Am I on a business plan or a personal account?",
                "Have I turned off training?",
                "Would I mind if this ended up public?",
              ],
            },
            {
              type: "p",
              text: "**Remove names and identifying details.** Replace names with ‘Customer A’, ‘Customer B’, and delete:",
            },
            {
              type: "list",
              items: [
                "ID or tax numbers.",
                "Phone numbers, email and postal addresses.",
                "Order, customer or bank account numbers.",
                "Photos and signatures.",
                "Any detail that gives away who they are: a unique job title, an exact address.",
              ],
            },
            {
              type: "p",
              text: "In a spreadsheet, delete those columns before uploading it. And if totals are enough (sales by product, complaints by topic), give it only that.",
            },
            {
              type: "note",
              text: "In the Netherlands, an employee at a GP practice pasted patients’ data into a chatbot, and it was a data breach that had to be reported ([source](@fuentes#f32)). The authority recommends telling staff clearly which data they can and can’t use: that’s what the [use policy](@politica-de-uso) is for.",
            },
          ],
        },
        {
          id: "datos-sensibles",
          title: "Health data and other people’s photos",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "Health data needs extra care",
                  body: "It’s a special category under the GDPR (Art. 9). To process it with an AI you usually need the person’s explicit consent and a data processing agreement with the provider (Art. 28), which business plans offer and personal accounts don’t. If you handle it often (health food shop, nutrition, therapies), talk to your data protection adviser first.",
                },
                {
                  term: "Other people’s photos",
                  body: "Never use them to create new content (composites, ads, avatars) without their permission. It’s one of the recommendations in the AEPD’s guidance [‘Cuidado con lo que le confIAs’](https://www.aepd.es/guias/recomendaciones-ia-aepd.pdf) (in Spanish).",
                },
              ],
            },
          ],
        },
      ],
    },

    greenwashing: {
      title: "Greenwashing: phrases to avoid",
      description:
        "Generic environmental phrases to avoid, specific alternatives, what Directive (EU) 2024/825 bans and where Spain stands.",
      lead: "AI writes ‘sustainable’ without blinking. This sheet helps you swap generic phrases for ones you can prove. Print it and keep it handy.",
      sections: [
        {
          id: "frases",
          title: "Phrases to avoid and what to say instead",
          intro: "The alternatives only work if they’re true and you can prove them.",
          blocks: [
            {
              type: "table",
              head: ["Avoid", "Better, if you can prove it"],
              rows: [
                [
                  "‘Sustainable’, ‘eco-friendly’, ‘green’",
                  "‘Made with certified organic ingredients’, with the EU organic logo.",
                ],
                ["‘Eco packaging’", "‘Recyclable cardboard packaging: put it in the paper recycling.’"],
                [
                  "‘Kind to the planet’, ‘good for the earth’",
                  "The specifics: ‘Oats grown in [place] by [producer]’, ‘Plastic-free packaging’.",
                ],
                [
                  "‘Carbon neutral’, ‘zero footprint’, if based on offsetting",
                  "What you actually reduce, with figures: ‘We’ve cut the plastic in our packaging by [X]% since [year]’.",
                ],
                [
                  "‘We’ll be carbon neutral by 2030’",
                  "Only with a detailed plan, measurable targets and oversight by an independent third party. If you don’t have one, don’t say it.",
                ],
                [
                  "Your own label (‘Green Promise’)",
                  "Only labels certified by third parties or set up by public authorities.",
                ],
                ["‘Natural’ as an environmental argument", "The specific ingredient or process."],
                [
                  "‘Boosts your immunity’, ‘detox’",
                  "Only authorised health claims, with their exact wording: look them up in the [EU Register of health claims](https://food.ec.europa.eu/food-safety/labelling-and-nutrition/nutrition-and-health-claims/eu-register-health-claims_en).",
                ],
              ],
            },
          ],
        },
        {
          id: "directiva",
          title: "What Directive (EU) 2024/825 bans",
          intro: "Applies in the EU from 27 September 2026 ([source](@fuentes#f21)).",
          blocks: [
            {
              type: "defs",
              items: [
                {
                  term: "‘Green’, ‘sustainable’, ‘eco-friendly’…",
                  body: "Without recognised excellent environmental performance, such as the EU Ecolabel or other official labels.",
                },
                {
                  term: "‘Carbon neutral’ through offsetting",
                  body: "Claiming a neutral, reduced or positive impact thanks to emissions offsetting.",
                },
                {
                  term: "Uncertified labels",
                  body: "Sustainability labels without third-party certification or backing from a public authority.",
                },
                {
                  term: "Promises without a plan",
                  body: "‘Neutral by 2030’ without a detailed, realistic plan overseen by an independent third party.",
                },
                {
                  term: "The part for the whole",
                  body: "Presenting something that only applies to part of the product or business as if it applied to all of it.",
                },
                {
                  term: "Legal requirements as a selling point",
                  body: "Presenting something the law requires of every product in that category as your own advantage.",
                },
              ],
            },
            {
              type: "note",
              text: "The EU organic logo is an official label: use it. What doesn’t work is jumping from ‘certified organic’ to plain ‘sustainable’.",
            },
          ],
        },
        {
          id: "espana",
          title: "What about Spain?",
          blocks: [
            {
              type: "p",
              text: "Spain hasn’t transposed the directive yet: the deadline passed on 27 March 2026, the Sustainable Consumption Act is still going through the legislative process and the European Commission opened infringement proceedings in May 2026 ([source](@fuentes#f22)).",
            },
            {
              type: "p",
              text: "But **it isn’t a grace period**. Misleading advertising can already be pursued under Spain’s Unfair Competition Act, General Advertising Act and consumer protection law, which courts read in the light of the directive. And if you sell in countries that have transposed it, their rules apply to you. **Write as if it were already in force.**",
            },
          ],
        },
        {
          id: "con-ia",
          title: "Let AI help you stay clear",
          blocks: [
            {
              type: "steps",
              items: [
                "Add the rule to your [business context](@contexto-de-empresa): it stops slipping in generic phrases from the start.",
                "Write and review your copy with the [copywriting](@skills#skill-copywriting) skill: it won’t make claims that can’t be backed up.",
                "Or use this quick prompt:",
              ],
            },
            {
              type: "prompt",
              title: "Anti-greenwashing check",
              text: "Review this text before I publish it. Flag any generic environmental claim (‘sustainable’, ‘green’, ‘kind to the planet’…), any carbon neutrality based on offsetting, uncertified labels and health claims. For each one, suggest a specific, verifiable alternative without making up facts: if one is missing, write [FACT TO CONFIRM]. My certifications and the facts I can prove are: [list].\n\n[paste the text here]",
            },
            { type: "note", text: "This sheet is for guidance and doesn’t replace advice from a legal adviser." },
          ],
        },
      ],
    },

    "politica-de-uso": {
      title: "AI use policy template",
      description: "A one-page AI use policy for your team, ready to adapt, as text and as a Word document.",
      lead: "One page so your whole team knows what AI is used for, with which accounts and what is never done. Copy it, adapt it in 20 minutes and share it.",
      sections: [
        {
          id: "por-que",
          title: "Why have one",
          blocks: [
            {
              type: "p",
              text: "Nearly eight in ten people who use AI at work bring their own tools ([source](@fuentes#f25)). Without rules, everyone puts whatever data they like into whichever account is to hand.",
            },
            {
              type: "p",
              text: "On top of that, the EU AI Act asks businesses that use AI to **take measures to support their staff’s AI literacy**, without requiring a specific level ([source](@fuentes#f26)). A one-page policy and a meeting to explain it are a good first step.",
            },
          ],
        },
        {
          id: "plantilla",
          title: "The template",
          intro: "Fill in what’s in square brackets and delete what doesn’t apply.",
          blocks: [
            {
              type: "file",
              file: "ai-use-policy.md",
              title: "AI use policy",
              downloads: [
                {
                  href: `${TALK_DOWNLOADS}/en/ai-use-policy.docx`,
                  label: "Download as Word",
                  meta: ".docx, to edit",
                },
              ],
            },
          ],
        },
        {
          id: "implantarla",
          title: "How to roll it out",
          blocks: [
            {
              type: "steps",
              items: [
                "**Adapt it** to your business: tools, data and who’s responsible.",
                "**Explain it** in a short meeting, with examples from your day-to-day work: what’s fine, what isn’t and who to ask.",
                "**Ask everyone to read and sign it**, and keep a copy: it’s your record of training.",
                "**Review it** every six months or whenever you change tools.",
              ],
            },
            {
              type: "note",
              text: "Inspired by the [AEPD’s internal policy on generative AI](@fuentes#f27), scaled down for small businesses. It doesn’t replace advice from an adviser.",
            },
          ],
        },
      ],
    },

    fuentes: {
      title: "Sources",
      description: "Every source behind the figures in the talk «IA sin humo», in slide order and with links.",
      lead: "Every figure from the talk with its link. If you doubt one, check it in a click: AI points you to the facts; you check they exist.",
      sections: [
        {
          id: "diagnostico",
          title: "Diagnosis",
          intro: "Slides 4 to 7.",
          blocks: [{ type: "sources", ids: ["F2", "F4", "F5", "F6", "F7", "F8", "F32", "F29", "F28"] }],
        },
        {
          id: "como-funciona",
          title: "How it works",
          intro: "Slides 9 and 10.",
          blocks: [{ type: "sources", ids: ["F9", "F10"] }],
        },
        {
          id: "sacarle-partido",
          title: "Getting the most out of it",
          intro: "Slide 20.",
          blocks: [{ type: "sources", ids: ["F11"] }],
        },
        {
          id: "lo-que-nunca",
          title: "What you should never do",
          intro: "Slides 25 to 32.",
          blocks: [
            { type: "sources", ids: ["F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F23"] },
          ],
        },
        {
          id: "preguntas",
          title: "For question time",
          blocks: [{ type: "sources", ids: ["F1", "F3", "F22", "F24", "F30", "F31"] }],
        },
        {
          id: "politica",
          title: "For the use policy",
          blocks: [{ type: "sources", ids: ["F25", "F26", "F27"] }],
        },
      ],
    },
  },

  sources: {
    F1: {
      title: "INE (Spain’s statistics office): survey on ICT and e-commerce use in businesses (22 October 2026, in Spanish)",
      claim:
        "33.6% of businesses with 10 or more employees used AI in the first quarter of 2026, and 21.4% of those with fewer than 10. The INE warns the figures aren’t strictly comparable with previous years.",
    },
    F2: {
      title: "Brynjolfsson, Li and Raymond: ‘Generative AI at Work’ (NBER, 2023; published in a journal in 2025)",
      claim:
        "Across 5,179 customer support agents, AI raised queries resolved per hour by 14% on average and by 34% for the least experienced, with minimal effect on the most experienced.",
    },
    F3: {
      title: "Dell’Acqua et al.: ‘Navigating the Jagged Technological Frontier’ (Harvard Business School, 2023)",
      claim:
        "With 758 BCG consultants: on tasks inside AI’s ‘frontier’, 12.2% more tasks, 25.1% faster and 40% higher quality. On a task outside it, those using AI were 19 percentage points less likely to get it right.",
    },
    F4: {
      title: "Gallup and Bentley University: ‘Americans Aren’t Sold on Businesses Using AI in Advertising’ (May 2026)",
      claim:
        "Survey of 3,270 US adults: 49% view businesses using AI in advertising negatively (32% neutral, 19% positive). 75% accept it for ideas and first drafts if it’s clearly disclosed, and 62% reject AI-generated people or voices, even with a disclosure.",
    },
    F5: {
      title: "Gallup and Bentley University: Business in Society Report (2026)",
      claim: "Only 27% of Americans trust businesses to use AI responsibly (31% in 2025).",
    },
    F6: {
      title: "OpenAI: ‘Sycophancy in GPT-4o: what happened and what we’re doing about it’ (29 April 2025)",
      claim:
        "OpenAI rolled back a ChatGPT update for being overly sycophantic, which it put down to leaning too heavily on short-term user feedback.",
    },
    F7: {
      title: "OpenAI: ‘Why language models hallucinate’ (5 September 2025)",
      claim:
        "OpenAI explains that standard training and evaluation reward guessing over admitting uncertainty, like a multiple-choice test where leaving an answer blank always scores zero.",
    },
    F8: {
      title: "METR: ‘Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity’ (10 July 2025)",
      claim:
        "A trial with 16 experienced developers and 246 real tasks in their own projects: with AI they took 19% longer, and afterwards still believed they had been 20% faster. They were experts, on projects they knew well, with early-2025 tools: it shows the feeling of speed is misleading, not that AI is useless.",
    },
    F32: {
      title:
        "Autoriteit Persoonsgegevens (Netherlands): data breaches from using AI chatbots at work (August 2024 and December 2025)",
      claim:
        "The Dutch data protection authority received reports of breaches caused by employees entering personal data into chatbots: patients’ medical data at a GP practice and customer addresses at a telecoms company. In 2025 it warned the reports are increasing. Separately, in December 2024 Italy’s data protection authority fined OpenAI €15 million for training ChatGPT on personal data without an adequate legal basis (OpenAI appealed).",
    },
    F29: {
      title: "Moffatt v. Air Canada, 2024 BCCRT 149 (British Columbia, 14 February 2024)",
      claim:
        "Air Canada’s chatbot gave a customer wrong information about a fare. The airline argued the chatbot was responsible for its own actions, and the tribunal rejected it: a company is responsible for all the information on its website, whether it comes from a static page or a chatbot.",
    },
    F28: {
      title: "EU AI Act, Art. 50 (transparency), applicable from 2 August 2026",
      claim:
        "People must be told when they’re interacting with an AI (unless it’s obvious) and hyper-realistic content (‘deepfakes’) must be labelled. A business running a chatbot under its own brand may be subject to these obligations.",
    },
    F9: {
      title: "Anthropic: ‘Tracing the thoughts of a large language model’ (27 March 2025)",
      claim:
        "Anthropic acknowledges it doesn’t understand how its models do most of what they do and presents techniques to ‘look inside’. One finding: when writing poetry, the model plans the rhyme before it gets there.",
    },
    F10: {
      title:
        "Bender, Gebru, McMillan-Major and Mitchell: ‘On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?’ (FAccT 2021)",
      claim:
        "The paper that popularised the ‘stochastic parrot’ metaphor. It also already warned about the environmental costs of large models.",
    },
    F11: {
      title: "AEPD (Spain’s data protection authority): guidance for users of AI assistants and agents (27 October 2026, in Spanish)",
      claim:
        "Five questions before using an agent: what it can see, what it remembers, what it can do on your behalf, where it sends your data and whether it affects other people. The key idea: the agent prepares and the person approves, with no permanent permissions.",
    },
    F12: {
      title: "General Data Protection Regulation (GDPR), Regulation (EU) 2016/679",
      claim: "Art. 9: special categories of data, including health data. Art. 28: agreement with the data processor.",
    },
    F13: {
      title: "Organic Law 3/2018 on Personal Data Protection and Digital Rights (LOPDGDD, Spain)",
      claim: "The Spanish law that complements the GDPR.",
    },
    F14: {
      title: "AEPD: guidance ‘Cuidado con lo que le confIAs’ (27 January 2026, in Spanish)",
      claim:
        "Recommends not sharing personal data with AI (name, address, phone number, ID, images of people) or medical, financial or contractual information, and never using other people’s images to create new content.",
    },
    F15: {
      title: "OpenAI: data controls, and privacy on business plans",
      claim:
        "On ChatGPT Free, Plus and Pro, using your chats for training is on by default and is turned off in Settings → Data controls → ‘Improve the model for everyone’. On ChatGPT Business, Enterprise, Edu and the API, your data isn’t used for training by default.",
    },
    F16: {
      title: "Google: privacy in the Gemini apps and in Gemini for Google Workspace",
      claim:
        "In the Gemini app, using chats to improve services is on by default for over-18s. Human reviewers read some chats, which are kept for up to three years even if you delete your history; with history off, chats are kept for around two months. In Google Workspace, Google doesn’t use your content to train models without your permission.",
    },
    F17: {
      title: "Anthropic: ‘Updates to Consumer Terms and Privacy Policy’ (28 August 2025)",
      claim:
        "Since then, Claude Free, Pro and Max users must choose whether to allow training on their chats, and the notice’s main button left it switched on. If allowed, data is kept for up to 5 years; if not, 30 days. It doesn’t affect commercial plans (Team, Enterprise and API).",
    },
    F18: {
      title: "ChatGPT chats indexed by Google (July and August 2025)",
      claim:
        "Nearly 4,500 shared conversations were found indexed on Google, some on personal and sensitive topics. OpenAI removed the option to make links discoverable within hours and asked search engines to de-index them.",
    },
    F19: {
      title: "Deloitte Australia refunds part of a report with errors attributed to AI (October 2025)",
      claim:
        "A 237-page report for the Australian government, worth AU$440,000, with non-existent references and a made-up quote attributed to a judge. Deloitte refunded the final payment, and the corrected version acknowledges the use of generative AI.",
    },
    F20: {
      title: "Lawyers sanctioned in Spain for made-up citations",
      claim:
        "Constitutional Court (September 2024): a warning for citing 19 non-existent rulings. High Court of the Canary Islands (2026): a sanction for an appeal with 48 fake citations. High Court of Galicia (July 2026): a €1,800 fine for 24 fake citations; the court stresses that using AI isn’t banned, but it doesn’t replace professional judgement.",
    },
    F21: {
      title: "Directive (EU) 2024/825 on empowering consumers for the green transition",
      claim:
        "Bans generic environmental claims without recognised excellent environmental performance, sustainability labels without certification or public backing, neutral, reduced or positive impact claims based on offsetting, and future performance claims without a detailed plan overseen by an independent third party. Transposition deadline: 27 March 2026. Applies from 27 September 2026.",
    },
    F22: {
      title: "Transposition in Spain (autumn 2026, in Spanish)",
      claim:
        "Spain missed the deadline: the Commission opened infringement proceedings on 28 May 2026 and the Sustainable Consumption Act is still in progress. Meanwhile, greenwashing can be pursued under the Unfair Competition Act, the General Advertising Act and the General Consumer Protection Act, read in line with the directive.",
    },
    F23: {
      title: "European Commission: 2020 study on environmental claims",
      claim:
        "53.3% of the environmental claims examined in the EU were vague, misleading or unfounded, and 40% were unsubstantiated.",
    },
    F24: {
      title: "Health claims: Regulation (EC) 1924/2006 and Regulation (EU) 432/2012",
      claim:
        "Only authorised health claims can be used, under their conditions. Spain’s food safety agency (AESAN) has a page and a search tool for the authorised ones.",
    },
    F30: {
      title: "Draft Organic Law on the good use and governance of AI (Spain)",
      claim:
        "Approved by the Council of Ministers on 26 May 2026 and going through Parliament. It provides for fines of up to €35 million and makes AESIA the supervisory authority. Until it’s passed, no fines can be issued under it.",
    },
    F31: {
      title: "Google: ‘Measuring the environmental impact of AI inference’ (August 2025)",
      claim:
        "According to Google, a median Gemini text prompt uses 0.24 Wh, emits 0.03 g of CO₂e and consumes 0.26 ml of water. These are the company’s own figures: they exclude training, the network and the user’s device, and some experts criticise them for leaving out indirect water use.",
    },
    F25: {
      title: "Microsoft and LinkedIn: Work Trend Index 2024",
      claim:
        "75% of knowledge workers use AI at work, and 78% of them bring their own tools (80% in Europe). Only 39% have had training from their employer. It’s a study by a company that sells AI: treat it as an order of magnitude.",
    },
    F26: {
      title: "EU AI Act, Art. 4, as amended by Regulation (EU) 2026/1744",
      claim:
        "Since 27 July 2026, Art. 4 asks businesses to ‘take measures to support’ their staff’s AI literacy, instead of ‘ensuring a sufficient level’, and makes clear no specific level has to be guaranteed.",
    },
    F27: {
      title: "AEPD: internal policy on the use of generative AI (27 November 2025, in Spanish)",
      claim:
        "The AEPD’s own internal policy, the first of its kind in the Spanish public sector. A good, if much larger, model for a one-page policy.",
    },
  },

  skills: {
    copywriting: {
      title: "copy for your website",
      body: "Writes or rewrites your homepage, a product page or a headline. It looks at what you have first and only changes what’s needed, and it won’t make claims that can’t be backed up: exactly what the greenwashing rules ask for.",
    },
    "copy-editing": {
      title: "edit and polish copy",
      body: "Corrects, tightens and polishes a text you already have without rewriting it, and removes the phrases that give away it was written by AI.",
    },
    humanizer: {
      title: "stop sounding like AI",
      body: "The most popular one for this: rewrites text that sounds like ChatGPT so it sounds like whoever signs it, without changing what it says. It looks for dozens of tells, such as ‘it’s not X, it’s Y’ contrasts or one-line closers.",
    },
    "customer-research": {
      title: "your customer profile",
      body: "The one from the talk. It analyses reviews, surveys or customer feedback and tells you what they really mean, what you can safely conclude and what to ask next. Remove your customers’ names first ([how](@privacidad#datos-de-clientes)).",
    },
    social: {
      title: "social media content",
      body: "Ideas, posts, carousels and short video scripts for Instagram, Facebook, LinkedIn or TikTok, plus a calendar so you’re not improvising every week.",
    },
    emails: {
      title: "automated emails",
      body: "Designs or improves email sequences: welcoming newsletter sign-ups, following up after a purchase or winning back customers who haven’t bought in a while.",
    },
    "seo-audit": {
      title: "why you’re not on Google",
      body: "Diagnoses your website’s SEO: why traffic dropped, why a page doesn’t show up or whether your titles are right. Includes local SEO, key if you sell in your area.",
    },
    "ai-seo": {
      title: "show up in AI answers",
      body: "More and more customers ask ChatGPT or Perplexity instead of searching on Google. It tells you what to do so AI cites and recommends you.",
    },
  },
};
