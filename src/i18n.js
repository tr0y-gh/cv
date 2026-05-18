const experience = {
  title: { en: 'Experience', se: 'Erfarenhet' },
  content: [
    {
      company: 'NoMoonShot',
      year: 2021,
      position: { en: 'Co-founder & CTO', se: 'Medgrundare & CTO' },
      content: {
        en: [
          'NoMoonShot was a health-tech startup in the Antler incubator where I was a co-founder. The idea was to suggest recipes based on results from blood tests.',
          'I built a simple prototype and we were in discussions regarding integrations with Werlabs and we recruited a physician with experience in health-tech as a board-member. Unfortunately we had difficutlties with funding but it was a good learning experience.',
          "Since we handled health data I had to get an understanding of laws and data security on a level that I hadn't done before.",
        ],
        se: [
          'NoMoonShot var en health-tech startup i Antler inkubatorn som jag var med och grundade. Idén gick ut på att föreslå recept baserat på resultat från bloodprover.',
          'Jag byggde en enkel prototyp och vi diskuterade integrationer med Werlabs och vi rekryterade en läkare med erfarenhet i health-tech som styrelsemedlem. Tyvärr hade vi problem med finansiering men det var en bra erfarenhet.',
          'Eftersom vi hanterade patientdata behövde jag sätta mig in i lagar och datasäkerhet på ett sätt jag inte hade innan.',
        ],
      },
      stack: ['Podman', 'Node.js', 'TypeScript', 'Python', 'Svelte', 'PostgreSQL', 'SQLite'],
    },
    {
      company: 'Klimato',
      year: 2020,
      position: { en: 'Lead Developer', se: 'Lead Utvecklare' },
      content: {
        en: [
          "Klimato is a start-up that calculates CO2 emissions of the customers' recipes. When I joined the team maintenance was getting difficult and deployments were manual and brittle.",
          'I containerized the application, setup CI/CD with GitHub Actions, and moved all production access from developer machines to the CI/CD flow.',
        ],
        se: [
          'Klimato är en startup som beräknar CO2 utsläpp av kundernas recept. När jag blev en del av teamet började underhåll bli knepigt och applikationen publicerades manuellt.',
          'Jag implementerade containers, CI/CD flöde med GitHub Actions och flyttade rättigheter från utvecklarnas maskiner till CI/CD flödet.',
        ],
      },
      stack: ['Podman', 'Node.js', 'Vue.js', 'React Native', 'MongoDB', 'PostgreSQL', 'SQLite', 'Redis'],
    },
    {
      company: 'Silicon Wizard',
      year: 2020,
      position: { en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
      content: {
        en: [
          "Silicon Wizard is my consulting company that I've used for billing clients and as a holding company for my startup attempts.",
        ],
        se: [
          'Silicon Wizard är mitt konsultbolag som jag har använt för att fakturera för uppdrag och som moderbolag för mina startup försök.',
        ],
      },
      stack: ['Podman', 'Node.js', 'TypeScript', 'Python', 'Vue.js', 'Svelte', 'PostgreSQL', 'SQLite'],
    },
    {
      company: 'Enklare',
      year: 2019,
      position: { en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
      content: {
        en: [
          'Enklare is a fin-tech company providing price comparisons for credit, insurance and power. While there I implemented the BankID integration and migrated the developmenet environments to containers. I also had ownership of all the frontends.',
        ],
        se: [
          'Enklare är ett fin-tech bolag som erbjuder prisjämförelser för lån, försäkring och el. Där implementerade BankID integrationen och migrerade utvecklingsmiljöerna till containers. Jag ansvarade även för alla frontends.',
        ],
      },
      stack: ['Docker', 'Node.js', 'Laravel', 'Wordpress', 'Vue.js', 'Redis', 'BankID'],
    },
    {
      company: 'Ispy',
      year: 2017,
      position: { en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
      content: {
        en: [
          'Ispy is a consulting/web agency with a wide range of clients in different sectors. We worked in many projects and environments from legacy PHP maintainance to more modern Node.js and React. One of the more exciting was a crowdfunding platform for charity.',
        ],
        se: [
          'Ispy är en konsult-/webbyrå med många olika kunder inom flera branscher. Vi jobbade i många projekt och miljöer från underhåll av gammal PHP till mer moderna Node.js och React. Ett av de mer spännande var en crowdfunding plattform för välgörenhetsproject.',
        ],
      },
      stack: ['Docker', 'Node.js', 'React', 'Vue.js', 'Wordpress', 'Electron', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      company: 'Znaptag',
      year: 2015,
      position: { en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
      content: {
        en: [
          'Znaptag was an advertising company serving banners and videos in images. The most interesting project there was a reverse-image-search tool for stock-photo providers to track their photos online.',
          "One hacky solution I'm still very proud of was making use of blocklists from adblock to filter ads when we were scraping images. The irony of an advertizing company using adblock can't be understated.",
        ],
        se: [
          'Znaptag var ett annonsföretag som visade banner- och videoannonser i bilder. Det mest interessanta projektet där var ett reverse-image-search verktyg till stockfoto försäljare för att hitta deras bilder online.',
          'En lösning jag fortfarande är väldigt stolt över var att använda adblocks blocklistor för att filtrera annonser när vi skrapade bilder. Ironin att ett annonsföretag använder adblock går inte att missa.',
        ],
      },
      stack: ['Node.js', 'Python', 'React', 'Vue.js', 'Redis'],
    },
  ]
}
export default {
  lang: 'en',
  title: { en: 'CV', se: 'CV' },
  skipLink: { en: 'Skip to content', se: 'Hoppa till innehållet' },
  nav: {
    '/': { en: 'CV', se: 'CV' },
    '/styleguide': { en: 'Styleguide', se: 'Stilguide' },
  },
  dark: { en: 'Dark', se: 'Mörkt' },
  light: { en: 'Light', se: 'Ljust' },
  print: { en: 'Print / Save PDF', se: 'Skriv ut / Spara PDF' },
  printHeader: {
    en: 'Click <a href="%s">here</a> for a printer friendly PDF.',
    se: 'Klicka <a href="%s">här</a> för en skrivarvänlig PDF.',
  },
  Home: {
    title: { en: 'CV', se: 'CV' },
    about: {
      title: { en: 'About me', se: 'Om mig' },
      fullstackDeveloper: { en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
      content: {
        en: [
          "My name is Troy and I'm a Full Stack Developer based in Stockholm, Sweden. I started programming 20 years ago and I've worked in the business for 10.",
          "Being self-taught I've had to learn all areas of an application from devops, architecture and security to design and UX. I'm autonomous and take responsibility for the work I do. It's important to me that my code is readable, testable and maintainable.",
          "I'm a quick learner and I like to challenge myself. I try to learn from first principles rather than focusing on specific frameworks to really understand a domain.",
          "My native language is swedish, I'm fluent in english and I'm comfortable in turkish and french. I consider myself a good communicator and can adapt my language to the audience. I'm very interested in security, integrity and open-source and all my computers and servers run Linux or *BSD since 2015. I self-host some services and have experience on bare-metal and most cloud platforms.",
        ],
        se: [
          'Jag heter Troy och är en Full Stack Utvecklare som bor i Stockholm. Jag började programmera för över 20 år sedan och har jobbat i branschen i 10.',
          'Som självlärd har jag behövt lära mig alla delar av en applikation från devops, arkitektur och säkerhet till design och UX. Jag är självgående och tar ansvar för jobbet jag genomför. Det är viktigt för mig att min kod är läsbar, testbar och lätt att underhålla.',
          'Jag lär mig snabbt och gillar att utmana mig själv. Jag försöker lära mig grundprinciper snarare än enskilda ramverk för att verkligen förstå en domän.',
          'Mitt modersmål är svenska, jag pratar flytade engelska och jag är bekväm i turkiska och franska. Jag tycker själv att jag är bra på att kommunicera och kan anpassa språket efter mottagaren. Jag har ett stort intresse för säkerhet, integritet och öppen källkod och alla mina datorer och servrar är Linux eller *BSD sedan 2015. Jag self-hostar en del tjänster och har erfarenhet både på hårdvara och de flesta cloudmiljöerna.',
        ],
      }
    },
    skills: {
      title: { en: 'Skills', se: 'Kunskaper' },
      languages: { en: 'Languages', se: 'Språk' },
    },
    experience,
  }, 
  NotFound: {
    title: { en: '404', se: '404' },
    content: {
      en: [
        'The page could not be found!',
      ], 
      se: [
        'Sidan kunde inte hittas!',
      ], 
    },
  }, 
}
