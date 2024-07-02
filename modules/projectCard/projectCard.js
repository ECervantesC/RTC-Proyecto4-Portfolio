import './projectCard.css'
export const projectCard = (projectsSection) => {
  const projectCardDiv = document.createElement('div')
  projectCardDiv.className = 'projectCardDiv'
  const projectImage = document.createElement('img')
  projectImage.src = 'Image' /* falta dato*/
  projectImage.alt = 'Project Title' /* falta dato*/
  const projectTitle = document.createElement('h3')
  const projectDescription = document.createElement('p')
  const projectLink = document.createElement('a')
  projectLink.href = 'URL' /* falta dato*/
  projectCardDiv.append(projectImage)
  projectCardDiv.append(projectTitle)
  projectCardDiv.append(projectDescription)
  projectCardDiv.append(projectLink)
  projectsSection.append(projectCardDiv)
}
