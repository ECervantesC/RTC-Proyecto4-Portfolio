import { data } from '../../modules/data/data'
import { introSkill } from '../../modules/introSkill/introSkill'
import './mySkillsPrint.css'
export const mySkillsPrint = () => {
  console.log('Llego a mySkills')
  const mySkillsSection = document.createElement('section')
  mySkillsSection.id = 'mySkillsSection'
  const mySkillsTitle = document.createElement('h2')
  mySkillsTitle.textContent = 'My Skills'
  const mySkillsDiv = document.createElement('div')
  mySkillsDiv.id = 'mySkillsDiv'
  for (const skill of data.skills) {
    introSkill(mySkillsDiv, skill.name, skill.image)
  }
  mySkillsSection.append(mySkillsTitle)
  mySkillsSection.append(mySkillsDiv)
  document.body.append(mySkillsSection)
}
