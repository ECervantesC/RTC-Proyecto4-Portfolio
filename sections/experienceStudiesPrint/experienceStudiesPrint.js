import { data } from '../../modules/data/data'
import { experiencePrint } from '../../modules/experiencePrint/experiencePrint'
import { studiesPrint } from '../../modules/studiesPrint/studiesPrint'
import './experienceStudiesPrint.css'
export const experienceStudiesPrint = () => {
  console.log('Llego a Experience & Studies')
  const experienceStudiesSection = document.createElement('section')
  experienceStudiesSection.id = 'experienceStudiesSection'
  const titlesDiv = document.createElement('div')
  titlesDiv.id = 'titlesDiv'
  const experienceDiv = document.createElement('div')
  const studiesDiv = document.createElement('div')
  experienceDiv.textContent = 'Experience'
  experienceDiv.className = 'selected'
  studiesDiv.textContent = 'Studies'
  const contentDiv = document.createElement('div')
  contentDiv.id = 'contentDiv'
  experiencePrint(contentDiv, data.workExperience)
  // studiesPrint(contentDiv, data.education)
  experienceDiv.addEventListener('click', (e) => {
    console.log('he hecho clic en experience')
    if (studiesDiv.classList.contains('selected')) {
      console.log('estudios estaba en blanco')
      studiesDiv.classList.remove('selected')
      console.log('pongo estudios en malva')
    }
    if (!experienceDiv.classList.contains('selected')) {
      console.log('experience estaba en malva')
      experienceDiv.classList.add('selected')
      console.log('pongo experience en blanco')
    }
    contentDiv.innerHTML = ''
    experiencePrint(contentDiv, data.workExperience)
  })

  studiesDiv.addEventListener('click', (e) => {
    console.log('he hecho clic en studies')
    if (experienceDiv.classList.contains('selected')) {
      console.log('experience estaba en blanco')
      experienceDiv.classList.remove('selected')
      console.log('pongo experience en malva')
    }
    if (!studiesDiv.classList.contains('selected')) {
      console.log('studies estaba en malva')
      studiesDiv.classList.add('selected')
      console.log('pongo studies en blanco')
    }
    contentDiv.innerHTML = ''
    studiesPrint(contentDiv, data.education)
  })
  titlesDiv.append(experienceDiv)
  titlesDiv.append(studiesDiv)
  experienceStudiesSection.append(titlesDiv)
  experienceStudiesSection.append(contentDiv)
  document.body.append(experienceStudiesSection)
}
