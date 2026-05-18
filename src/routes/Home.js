import t from '../i18n.js'

function Experience () {
  return t.Home.experience.content.map(item => {
    const { company, year, position, content, stack } = item
    return `
      <section class="break-avoid">
        <h3><span class="subheading">${year}</span> ${company}, <span class="subheading">${position[t.lang]}</span></h3>
        <div>
          ${content[t.lang].map(p => `<p>${p}</p>`).join('')}
          <ul class="stack unstyled flex flex-wrap">${stack.map(li => `<li>${li}</li>`).join('')}</ul>
        </div>
      </section>
    `
  }).join('')
}

export default {
  name: 'Home',
  render () {
    const info = JSON.parse(window.localStorage.getItem('info')) || {}
    return `
      <div class="profile">
        <h1>${info['name'] || 'REDACTED'}, <span class="subheading">${t.Home.about.fullstackDeveloper[t.lang]}</span></h1>
        <ul class="unstyled">
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
            <a href="mailto:${info['email'] || ''}">${info['email'] || 'REDACTED'}</a>
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
            <a href="tel:${info['phone'] || ''}">${info['phone'] || 'REDACTED'}</a>
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 640 640"><path d="M535.6 300.1L340 104.5C334.6 99 327.2 96 319.6 96C312 96 304.6 99 299.2 104.4L258.5 145L310 196.5C337.1 187.4 362.7 213.3 353.4 240.2L403.1 289.9C437.3 278.1 464.3 320.9 438.6 346.6C412.1 373.1 368.4 343.7 382.6 309.3L336.3 263L336.3 384.9C361.6 397.4 358.6 426.7 345.4 439.9C339 446.3 330.2 450 321.1 450C312 450 303.3 446.4 296.8 439.9C279.2 422.3 285.7 393 308 383.9L308 260.9C287.2 252.4 283.4 230.2 289.4 215.9L238.6 165L104.5 299.1C99 304.6 96 311.9 96 319.5C96 327.1 99 334.5 104.5 339.9L300.1 535.6C305.5 541 312.8 544 320.5 544C328.2 544 335.5 541 340.9 535.6L535.6 340.9C541 335.5 544 328.1 544 320.5C544 312.9 541 305.5 535.6 300.1z"/></svg>
            <a href="https://${info['git'] || ''}">${info['git'] || 'REDACTED'}</a>
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 640 640"><path d="M320 352L288 352L288 288L320 288L320 352zM608 224L608 416L320 416L320 448L192 448L192 416L32 416L32 224L608 224zM192 256L64 256L64 384L128 384L128 288L160 288L160 384L192 384L192 256zM352 256L224 256L224 416L288 416L288 384L352 384L352 256zM576 256L384 256L384 384L448 384L448 288L480 288L480 384L512 384L512 288L544 288L544 384L576 384L576 256z"/></svg>
            <a href="https://${info['npm'] || ''}">${info['npm'] || 'REDACTED'}</a>
          </li>
        </ul>
      </div>
      <div class="about">
        <h2>${t.Home.about.title[t.lang]}</h2>
        ${t.Home.about.content[t.lang].map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="skills">
        <h2>${t.Home.skills.title[t.lang]}</h2>
        <div class="md-flex flex-wrap">
          <ul class="unstyled md-50 lg-25">
            <li class="subheading">${t.Home.skills.languages[t.lang]}</li>
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
