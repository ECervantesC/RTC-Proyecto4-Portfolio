import { projectCard } from './modules/projectCard/projectCard'
import './style.css'
/* HEADER */
const header = document.createElement('header')
document.body.append(header)
/* HERO SECTION */
const heroSection = document.createElement('section')
heroSection.id = 'heroSection'
const heroTextDiv = document.createElement('div')
heroTextDiv.id = 'heroTextDiv'
const heroTextParagraph = document.createElement('p')
heroTextParagraph.textContent = 'Hello'
const heroTextH1 = document.createElement('h1')
heroTextH1.textContent = "I'm a web developer"
const heroTextH2 = document.createElement('h2')
heroTextH2.textContent = 'I build thing for web'
// heroTextH2.textContent =
//   'I build your web to help you to achive your objectives'
const heroImage = document.createElement('img')
heroImage.src = './assets/foto_profesional.jpg'
heroImage.alt = 'Elisa Cervantes'
heroTextDiv.append(heroTextParagraph)
heroTextDiv.append(heroTextH1)
heroTextDiv.append(heroTextH2)
heroSection.append(heroTextDiv)
heroSection.append(heroImage)
document.body.append(heroSection)
/* ABOUT ME SECTION */
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
/* MY SKILSS SECTION */
const mySkillsSection = document.createElement('section')
mySkillsSection.id = 'mySkillsSection'
document.body.append(mySkillsSection)
/* EXPERIENCE STUDIES SECTION */
const experienceStudiesSection = document.createElement('section')
experienceStudiesSection.id = 'experienceStudiesSection'
document.body.append(experienceStudiesSection)
/* PROJECTS SECTION */
const projectsSection = document.createElement('section')
projectsSection.id = 'projectsSection'
const projectsH2 = document.createElement('h2')
projectsH2.textContent = 'My projects'
const projectsH3 = document.createElement('h3')
projectsH3.textContent = "Somethings I've built so far"
projectsSection.append(projectsH2)
projectsSection.append(projectsH3)
projectCard(projectsSection)
document.body.append(projectsSection)
/* CONTACT SECTION */
const contactSection = document.createElement('section')
contactSection.id = 'contactSection'
document.body.append(contactSection)
/* footer */
const footer = document.createElement('footer')
document.body.append(footer)
