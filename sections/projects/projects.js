import { data } from '../../modules/data/data'
import { projectCard } from '../../modules/projectCard/projectCard'
import './projects.css'
export const projects = () => {
  const projectsSection = document.createElement('section')
  projectsSection.id = 'projectsSection'
  const projectsH2 = document.createElement('h2')
  projectsH2.textContent = 'My projects'
  const projectsH3 = document.createElement('h3')
  projectsH3.textContent = "Somethings I've built so far"
  const projectsDiv = document.createElement('div')
  projectsDiv.id = 'projectsDiv'
  projectsSection.append(projectsH2)
  projectsSection.append(projectsH3)
  projectsSection.append(projectsDiv)
  for (const project of data.projects) {
    projectCard(
      projectsDiv,
      project.image,
      project.title,
      project.description,
      project.link,
      project.github
    )
  }
  document.body.append(projectsSection)
}
