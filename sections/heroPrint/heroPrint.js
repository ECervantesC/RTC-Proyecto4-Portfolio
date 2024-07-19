import './heroPrint.css'
export const heroPrint = () => {
  console.log('Llego a hero')
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
  const heroImage = document.createElement('img')
  heroImage.src = './assets/foto_profesional.jpg'
  heroImage.alt = 'Elisa Cervantes'
  heroTextDiv.append(heroTextParagraph)
  heroTextDiv.append(heroTextH1)
  heroTextDiv.append(heroTextH2)
  heroSection.append(heroTextDiv)
  heroSection.append(heroImage)
  document.body.append(heroSection)
}
