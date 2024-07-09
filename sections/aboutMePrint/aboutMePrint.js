import './aboutMePrint.css'
export const aboutMePrint = () => {
  console.log('Llego a About Me')
  const aboutMeSection = document.createElement('section')
  aboutMeSection.id = 'aboutMeSection'
  const aboutMeH2 = document.createElement('h2')
  aboutMeH2.textContent = 'About me'
  const aboutMeParagraph = document.createElement('p')
  aboutMeParagraph.textContent =
    'As a web developer, I am responsible for desigining and developping web pages. My primary focus is to create responsive, user-friendly experiences that meet the needs of a diverse online audience.'
  aboutMeSection.append(aboutMeH2)
  aboutMeSection.append(aboutMeParagraph)
  document.body.append(aboutMeSection)
}
