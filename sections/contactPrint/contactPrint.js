import { buttonPrint } from '../../modules/buttonPrint/buttonPrint'
import { data } from '../../modules/data/data'
import { linkPrint } from '../../modules/linkPrint/linkPrint'
import './contactPrint.css'
// 2 div
// div 1: h2, h3 y los clicks
// div 2: formulario y los simbolos de linkedin y github
export const contactPrint = () => {
  console.log('Llego a Contact')
  const contactSection = document.createElement('section')
  contactSection.id = 'contactSection'
  const introDiv = document.createElement('div')
  introDiv.className = 'introDiv'
  const introContactH2 = document.createElement('h2')
  introContactH2.textContent = "Let's discuss on something cool together"
  const introContactP = document.createElement('p')
  introContactP.textContent = "I'm intereseted in ..."
  const interesetingsDiv = document.createElement('div')
  interesetingsDiv.className = 'interesetingsDiv'
  buttonPrint(interesetingsDiv)
  const contactForm = document.createElement('form')
  contactForm.className = 'contactForm'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.required = 'true'
  nameInput.value = 'Your name'
  nameInput.id = 'name'
  const emailInput = document.createElement('input')
  emailInput.type = 'mail'
  emailInput.id = 'mail'
  emailInput.required = 'true'
  emailInput.value = 'Your e-mail'
  const messageInput = document.createElement('textarea')
  messageInput.value = 'Your message'
  messageInput.id = 'message'
  messageInput.required = 'true'
  const sendButton = document.createElement('button')
  sendButton.type = 'submit'
  const sendSpan = document.createElement('span')
  sendSpan.textContent = 'Submit'
  const sendImg = document.createElement('img')
  sendImg.src = './public/assets/avioncito.png'
  sendImg.alt = 'Enviar'
  nameInput.addEventListener('click', (e) => {
    console.log('He hecho clic en nombre')
    nameInput.value = ''
  })
  emailInput.addEventListener('click', (e) => {
    console.log('He hecho clic en mail')
    emailInput.value = ''
  })
  messageInput.addEventListener('click', (e) => {
    console.log('He hecho clic en mensaje')
    messageInput.value = ''
  })
  contactForm.addEventListener('submit', (e) => {
    console.log('he hecho click en submit')
    event.preventDefault()
    var contactName = nameInput.value
    var contactEmail = emailInput.value
    var contactMessage = messageInput.value
    console.log(contactName)
    console.log(contactEmail)
    console.log(contactMessage)
  })
  const linksDiv = document.createElement('div')
  linksDiv.className = 'linksDiv'
  for (const network of data.socialNetworks) {
    linkPrint(linksDiv, network.link, network.image, network.description)
  }
  introDiv.append(introContactH2)
  introDiv.append(introContactP)
  introDiv.append(interesetingsDiv)
  sendButton.append(sendImg)
  sendButton.append(sendSpan)
  contactForm.append(nameInput)
  contactForm.append(emailInput)
  contactForm.append(messageInput)
  contactForm.append(sendButton)
  contactForm.append(linksDiv)
  // formDiv.append(contactForm)
  contactSection.append(introDiv)
  contactSection.append(contactForm)
  // contactSection.append(formDiv)
  document.body.append(contactSection)
}
