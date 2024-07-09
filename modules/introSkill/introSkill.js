import './introSkill.css'
export const introSkill = (nodoContenedor, name, image) => {
  const skillImage = document.createElement('img')
  skillImage.className = 'skillImage'
  skillImage.src = image
  skillImage.alt = name
  nodoContenedor.append(skillImage)
}
