import './footerPrint.css'
export const footerPrint = () => {
  console.log('Llego a footer')
  const footer = document.createElement('footer')
  const footerText = document.createElement('p')
  footerText.textContent = 'Built by Elisa Cervantes'
  footer.append(footerText)
  document.body.append(footer)
}
