const t = {
  resume: { en:'resume', se: 'CV' },
  lang: { en:'English', se: 'Svenska' },
  toolbar: {
    info: {
      en: 'Click <a href="%s">here</a> for more languages and a printer friendly PDF.',
      se: 'Klicka <a href="%s">här</a> för fler språk och en skrivarvänlig PDF.',
    },
    theme: {
      dark: { en: 'Dark', se: 'Mörkt' },
      light: { en: 'Light', se: 'Ljust' },
    },
    print: { en: 'Print / Save as PDF', se: 'Skriv ut / Spara som PDF' },
  },
  profile: { title: { en: 'Full Stack Developer', se: 'Full Stack Utvecklare' } },
  about: {
    title: { en: 'About', se: 'Om mig' },
    content:{
      en: [
        `My name is Troy and I'm a <b>Full Stack Developer</b> based in <b>Stockholm, Sweden</b>. I started programming 20 years ago and I've worked in the business for 10.`,
        `Being self-taught I've had to learn all areas of an application from devops, architecture and security to design and UX. I'm autonomous and take responsibility for the work I do. It's important to me that my code is readable, testable and maintainable.`,
        `I'm a quick learner and I like to challenge myself. I try to learn from first principles rather than focusing on specific frameworks to really understand a domain.`,
        `My native language is swedish, I'm fluent in english and I'm comfortable in turkish and french. I consider myself a good communicator and can adapt my language to the audience. I'm very interested in <b>security, integrity and open-source</b> and all my computers and servers run <b>Linux or *BSD since 2015</b>. I self-host some services and have experience on bare-metal and most cloud platforms.`,
      ],
      se: [
        `Jag heter Troy och är en <b>Full Stack Utvecklare</b> som bor i <b>Stockholm</b>. Jag började programmera för över 20 år sedan och har jobbat i branschen i 10.`,
        `Som självlärd har jag behövt lära mig alla delar av en applikation från devops, arkitektur och säkerhet till design och UX. Jag är självgående och tar ansvar för jobbet jag genomför. Det är viktigt för mig att min kod är läsbar, testbar och lätt att underhålla.`,
        `Jag lär mig snabbt och gillar att utmana mig själv. Jag försöker lära mig grundprinciper snarare än enskilda ramverk för att verkligen förstå en domän.`,
        `Mitt modersmål är svenska, jag pratar flytade engelska och jag är bekväm i turkiska och franska. Jag tycker själv att jag är bra på att kommunicera och kan anpassa språket efter mottagaren. Jag har ett stort intresse för <b>säkerhet, integritet och öppen källkod</b> och alla mina datorer och servrar är <b>Linux eller *BSD sedan 2015</b>. Jag self-hostar en del tjänster och har erfarenhet både på hårdvara och de flesta cloudmiljöerna.`,
      ],
    },
  },
  skills: {
    title: { en: 'Skills', se: 'Kunskaper' },
    headings: { languages: { en: 'Languages', se: 'Språk' } },
    content: { en: [], se: [], },
  },
  experience: {
    title: { en: 'Experience', se: 'Erfarenhet' },
    content: [
      {
        company: 'NoMoonShot',
        title: { en: 'Co-Founder & CTO', se: 'Medgrundare & CTO' },
        period: '2021',
        description: {
          en: [
            `NoMoonShot was a health-tech startup in the Antler incubator where I was a co-founder. The idea was to suggest recipes based on results from blood tests.`,
            `I built a simple prototype and we were in discussions regarding integrations with Werlabs and we recruited a physician with experience in health-tech as a board-member. Unfortunately we had difficutlties with funding but it was a good learning experience.`,
            `Since we handled <b>health data</b> I had to get an understanding of <b>laws and data security</b> on a level that I hadn't done before.`
          ],
          se: [
            `NoMoonShot var en health-tech startup i Antler inkubatorn som jag var med och grundade. Idén gick ut på att föreslå recept baserat på resultat från bloodprover.`,
            `Jag byggde en enkel prototyp och vi diskuterade integrationer med Werlabs och vi rekryterade en läkare med erfarenhet i health-tech som styrelsemedlem. Tyvärr hade vi problem med finansiering men det var en bra erfarenhet.`,
            `Eftersom vi hanterade <b>patientdata</b> behövde jag sätta mig in i <b>lagar och datasäkerhet</b> på ett sätt jag inte hade innan.`,
          ],
        },
        stack: [ 'Docker', 'Node.js', 'Svelte', 'PostgreSQL', 'SQLite' ],
      },
      {
        company: 'Klimato',
        title: { en: 'Lead Developer', se: 'Lead Utvecklare' },
        period: '2020',
        description: {
          en: [
            `Klimato is a start-up that calculates CO2 emissions of the customers' recipes. When I joined the team maintenance was getting difficult and deployments were manual and brittle.`,
            `I containerized the application, setup CI/CD with GitHub Actions, and <b>moved all production access from developer machines to the CI/CD flow</b>.`,
          ],
          se: [
            'Klimato är en startup som beräknar CO2 utsläpp av kundernas recept. När jag blev en del av teamet började underhåll bli knepigt och applikationen publicerades manuellt.',
            'Jag implementerade containers, CI/CD flöde med GitHub Actions och <b>flyttade rättigheter från utvecklarnas maskiner till CI/CD flödet.</b>',
          ],
        },
        stack: [ 'Docker', 'Node.js', 'Vue.js', 'React Native', 'MongoDB', 'PostgreSQL', 'SQLite', 'Redis' ],
      },
      {
        company: 'Silicon Wizard',
        title: { en: 'Founder', se: 'Grundare' },
        period: '2020',
        description: {
          en: [
            `Silicon Wizard is my consulting company that I've used for billing clients and as a holding company for my startup attempts.`,
          ],
          se: [
            `Silicon Wizard är mitt konsultbolag som jag har använt för att fakturera för uppdrag och som moderbolag för mina startup försök.`,
          ],
        },
        stack: [ 'Docker', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'SQLite' ],
      },
      {
        company: 'Enklare',
        title:{ en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
        period: '2018',
        description: {
          en: [
            'Enklare is a fin-tech company providing price comparisons for credit, insurance and power. While there I implemented the <b>BankID integration</b> and migrated the developmenet environments to containers. I also had ownership of all the frontends.',
          ],
          se: [
            'Enklare är ett fin-tech bolag som erbjuder prisjämförelser för lån, försäkring och el. Där implementerade <b>BankID integrationen</b> och migrerade utvecklingsmiljöerna till containers. Jag ansvarade även för alla frontends.',
          ],
        },
        stack: [ 'Docker', 'Node.js', 'BankID', 'Vue.js', 'Wordpress', 'Laravel', 'Redis' ],
      },
      {
        company: 'Ispy',
        title:{ en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
        period: '2017',
        description: {
          en: [
            'Ispy is a consulting/web agency with a wide range of clients in different sectors. We worked in many projects and environments from legacy PHP maintainance to more modern Node.js and React. One of the more exciting was a crowdfunding platform for charity.',
          ],
          se: [
            'Ispy är en konsult-/webbyrå med många olika kunder inom flera branscher. Vi jobbade i många projekt och miljöer från underhåll av gammal PHP till mer moderna Node.js och React. Ett av de mer spännande var en crowdfunding plattform för välgörenhetsproject.',
          ],
        },
        stack: [ 'Docker', 'Node.js', 'React', 'Wordpress', 'MySQL', 'MongoDB', 'Redis', 'Electron' ],
      },
      {
        company: 'Znaptag',
        title:{ en: 'Full Stack Developer', se: 'Full Stack Utvecklare' },
        period: '2015',
        description: {
          en: [
            'Znaptag was an advertising company serving banners and videos in images. The most interesting project there was a reverse-image-search tool for stock-photo providers to track their photos online.',
            `One hacky solution I'm still very proud of was making use of blocklists from adblock to filter ads when we were scraping images. The irony of an advertizing company using adblock can't be understated.`,
          ],
          se: [
            'Znaptag var ett annonsföretag som visade banner- och videoannonser i bilder. Det mest interessanta projektet där var ett reverse-image-search verktyg till stockfoto försäljare för att hitta deras bilder online.',
            'En lösning jag fortfarande är väldigt stolt över var att använda adblocks blocklistor för att filtrera annonser när vi skrapade bilder. Ironin att ett annonsföretag använder adblock går inte att missa.',
          ],
        },
        stack: [ 'Node.js', 'React', 'Vue.js', 'Python', 'Redis' ],
      },
    ],
  },
}

const $ = selector => document.querySelector(selector)
const storage = window.localStorage
function capitalize (str) {
  return str[0].toUpperCase() + str.slice(1)
}
function format(str, ...args) {
  return str.replace(/%s/g, () => args.shift())
}

let DEBUG, lang, theme,
    email, phone, git, npm

function log (...msg) {
  if (!DEBUG) return
  console.log(...msg)
}

function Profile () {
  $('#profile .subheading').innerHTML = t.profile.title[lang]
}
function About () {
  $('#about .title').innerHTML = t.about.title[lang]
  $('#about .content').innerHTML = t.about.content[lang].map(p => `<p>${p}</p>`).join('')
}
function Skills () {
  $('#skills .title').innerHTML = t.skills.title[lang]
  $('#skills #languages').innerHTML = t.skills.headings.languages[lang]
}

function Job (job) {
  return `
    <div class="position">
      <div class="year">${job.period}</div>
      <h3>${job.company}, <span class="subheading">${job.title[lang]}</span></h3>
      <div class="position-content">
        ${job.description[lang].map(p => `<p>${p}</p>`).join('')}
        <ul class="tech-stack unstyled flex flex-wrap">
          ${job.stack.map(li => `<li>${li}</li>`).join('')}
        </ul>
      </div>
    </div>
  `
}

function Experience () {
  $('#experience .title').innerHTML = t.experience.title[lang]
  $('#experience .content').innerHTML = t.experience.content.map(Job).join('')
}

function updateLanguage () {
  lang = $('#language').value
  log('updageLanguage()', 'setItem lang =', lang)
  storage.setItem('lang', lang)

  render()
}

function updateTheme () {
  theme = $('#theme').value
  log('updageTheme()', 'setItem theme =', theme)
  storage.setItem('theme', theme)

  render()
}

function render () {
  log('render()')

  if (theme === 'dark') $('body').classList.remove('theme-light')
  if (theme === 'light') $('body').classList.add('theme-light')
  $('#theme').innerHTML = `
    <option value="dark">${t.toolbar.theme.dark[lang]}</option>
    <option value="light">${t.toolbar.theme.light[lang]}</option>
  `
  $('#theme').value = theme

  $('title').innerHTML = `Troy - ${capitalize(t.resume[lang])} - ${t.lang[lang]}`
  // Inject url params
  const url = `https://tr0y-gh.github.io/${window.location.search}`
  $('#info').innerHTML = format(t.toolbar.info[lang], url)
  $('#print').innerHTML = t.toolbar.print[lang]

  Profile()
  About()
  Skills()
  Experience()
}

function init () {
  const params = new URLSearchParams(window.location.search)
  if (params.get('DEBUG')) DEBUG = true

  log('init()')
  log('getItem lang =', storage.getItem('lang'))
  lang = storage.getItem('lang') || 'en'
  log('lang =', lang)
  $('#language').value = lang

  log('getItem theme =', storage.getItem('theme'))
  theme = storage.getItem('theme') || 'dark'
  log('theme =', theme)
  $('#theme').value = theme

  log('params', params)

  email = params.get('email')
  if (email) {
    $('#email').innerHTML = email
    $('#email').setAttribute('href', `mailto:${email}`)
    log('#email', $('#email').attributes)
  }

  phone = params.get('phone')
  if (phone) {
    $('#phone').innerHTML = phone
    $('#phone').setAttribute('href', `tel:${phone.replaceAll(' ', '')}`)
    log('#phone', $('#phone').attributes)
  }

  git = params.get('git')
  if (git) {
    $('#git').innerHTML = git
    $('#git').setAttribute('href', `https://${git}`)
    log('#git', $('#git').attributes)
  }

  npm = params.get('npm')
  if (npm) {
    $('#npm').innerHTML = npm
    $('#npm').setAttribute('href', `https://${npm}`)
    log('#npm', $('#npm').attributes)
  }

  render()
}
init()
