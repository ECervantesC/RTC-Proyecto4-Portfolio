import './headerPrint.css'
const navData = [
  { name: 'Home', link: '#heroSection' },
  { name: 'About me', link: '#aboutMeSection' },
  { name: 'Skills', link: '#mySkillsSection' },
  { name: 'Experience/Studies', link: '#experienceStudiesSection' },
  { name: 'Projects', link: '#projectSection' }
]
export const headerPrint = () => {
  console.log('Llego a header')
  const header = document.createElement('header')
  const nameDiv = document.createElement('div')
  nameDiv.textContent = 'Elisa Cervantes'
  nameDiv.id = 'nameDiv'
  const navBar = document.createElement('nav')
  const navUl = document.createElement('ul')
  for (const element of navData) {
    const navLi = document.createElement('li')
    const navLink = document.createElement('a')
    navLink.href = element.link
    navLink.textContent = element.name
    navLi.append(navLink)
    navUl.append(navLi)
  }
  const contactAnchor = document.createElement('a')
  contactAnchor.id = 'contactAnchor'
  contactAnchor.textContent = 'Contacto'
  contactAnchor.href = '#contactSection'
  navBar.append(navUl)
  header.append(nameDiv)
  header.append(navBar)
  header.append(contactAnchor)
  document.body.append(header)
}
