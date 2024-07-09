import './projectCard.css'
export const projectCard = (
  projectsSection,
  image,
  title,
  description,
  link,
  github
) => {
  const projectCardDiv = document.createElement('div')
  projectCardDiv.className = 'projectCardDiv'
  const projectImage = document.createElement('img')
  projectImage.src = image
  projectImage.alt = title
  projectImage.className = 'projectImage'
  const projectTitle = document.createElement('h3')
  projectTitle.textContent = title
  const projectDescription = document.createElement('p')
  projectDescription.textContent = description
  const projectLink = document.createElement('a')
  projectLink.href = link
  projectLink.textContent = 'View App'
  const projectGithub = document.createElement('a')
  projectGithub.href = github
  projectGithub.textContent = 'View GitHub'
  projectCardDiv.append(projectImage)
  projectCardDiv.append(projectTitle)
  projectCardDiv.append(projectDescription)
  projectCardDiv.append(projectLink)
  projectCardDiv.append(projectGithub)
  projectsSection.append(projectCardDiv)
}
