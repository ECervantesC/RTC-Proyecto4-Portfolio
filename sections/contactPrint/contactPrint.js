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
  // const formDiv = document.createElement('div')
  // formDiv.className = 'formDiv'
  const contactForm = document.createElement('form')
  contactForm.className = 'contactForm'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.value = 'Your name'
  const emailInput = document.createElement('input')
  emailInput.type = 'mail'
  emailInput.value = 'Your e-mail'
  const messageInput = document.createElement('textarea')
  messageInput.value = 'Your message'
  const sendButton = document.createElement('button')
  sendButton.type = 'submit'
  const sendSpan = document.createElement('span')
  sendSpan.textContent = 'Submit'
  const linksDiv = document.createElement('div')
  linksDiv.className = 'linksDiv'
  for (const network of data.socialNetworks) {
    linkPrint(linksDiv, network.link, network.image, network.description)
  }
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
