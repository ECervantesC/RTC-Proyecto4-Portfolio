import './linkPrint.css'
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
