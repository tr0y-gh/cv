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
      </div>
      <div class="experience">
        <h2>${t.Home.experience.title[t.lang]}</h2>
        ${Experience()}
      </div>
    `
  }
}
