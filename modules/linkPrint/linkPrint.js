import './linkPrint.css'
// 2 div
// div 1: h2, h3 y los clicks
// div 2: formulario y los simbolos de linkedin y github
export const linkPrint = (container, link, image, description) => {
  console.log('Llego a linkPrint')
  const linkAnchor = document.createElement('a')
  linkAnchor.href = link
  const linkImage = document.createElement('img')
  linkImage.className = 'linkImage'
  linkImage.src = image
  linkImage.alt = description
  linkAnchor.append(linkImage)
  container.append(linkAnchor)
}
