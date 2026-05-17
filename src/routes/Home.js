import t from '../i18n.js'

function Experience () {
  return t.Home.experience.content.map(item => {
    const { company, year, position, content } = item
    return `
      <section class="break-avoid">
        <h3><span class="subheading">${year}</span> ${company}, <span class="subheading">${position[t.lang]}</span></h3>
        <div>
          ${content[t.lang].map(p => `<p>${p}</p>`).join('')}
        </div>
      </section>
    `
  }).join('')
}

export default {
  name: 'Home',
  render () {
    return `
      <div class="about">
        <h2>${t.Home.about.title[t.lang]}</h2>
        ${t.Home.about.content[t.lang].map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="skills">
        <h2>${t.Home.skills.title[t.lang]}</h2>
        <div class="md-flex flex-wrap">
          <ul class="unstyled md-50 lg-25">
            <li class="subheading">Languages</li>
            <li>TypeScript / JavaScript</li>
            <li>Python</li>
            <li>Bash / Shell</li>
            <li>Lua</li>
            <li>C / C++</li>
            <li>Go</li>
            <li>PHP</li>
          </ul>
          <ul class="unstyled md-50 lg-25">
            <li class="subheading">DevOps</li>
            <li>Linux / *BSD</li>
            <li>AWS / GCP / Azure</li>
            <li>Podman / Docker</li>
            <li>Kubernetes / K3s</li>
            <li>KVM / QEMU</li>
            <li>CI / CD</li>
            <li>Testing / TDD</li>
            <li>Git</li>
          </ul>
          <ul class="unstyled md-50 lg-25">
            <li class="subheading">Backend</li>
            <li>PostgreSQL / MySQL</li>
            <li>SQLite</li>
            <li>Redis</li>
            <li>MongoDB</li>
            <li>Node.js / Deno / Bun</li>
            <li>Vite / Next.js</li>
            <li>Laravel</li>
            <li>Flask</li>
          </ul>
          <ul class="unstyled md-50 lg-25">
            <li class="subheading">Frontend</li>
            <li>JavaScript / HTML / CSS</li>
            <li>React / Vue.js / Svelte / ...</li>
            <li>React Native / Native Script</li>
            <li>Electron</li>
            <li>A11y / i18n</li>
            <li>SEO</li>
          </ul>
        </div>
      </div>
      <div class="experience">
        <h2>${t.Home.experience.title[t.lang]}</h2>
        ${Experience()}
      </div>
    `
  }
}
