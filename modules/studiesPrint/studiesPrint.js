import './studiesPrint.css'
export const studiesPrint = (container, Data) => {
  console.log('Llego a la función de pintar los datos de experiencia')
  for (const course of Data) {
    const itemDiv = document.createElement('div')
    itemDiv.className = 'itemDiv'
    const h3Content = document.createElement('h3')
    h3Content.textContent = course.degree
    // const pContent = document.createElement('p')
    // pContent.textContent = work.description
    itemDiv.append(h3Content)
    // itemDiv.append(pContent)
    container.append(itemDiv)
  }
}
