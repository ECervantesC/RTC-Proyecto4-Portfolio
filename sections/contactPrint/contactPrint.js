import './contactPrint.css'
export const contactPrint = () => {
  console.log('Llego a Contact')
  const contactSection = document.createElement('section')
  contactSection.id = 'contactSection'
  document.body.append(contactSection)
}
