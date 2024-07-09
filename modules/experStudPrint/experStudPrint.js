import './experStudPrint.css'
export const experStudPrint = (container, Data) => {
  console.log('Llego a la función de pintar los datos')
  for (const work of Data) {
    const itemDiv = document.createElement('div')
    itemDiv.className = 'itemDiv'
    const h3Content = document.createElement('h3')
    h3Content.textContent = work.position
    const pContent = document.createElement('p')
    pContent.textContent = work.description
    itemDiv.append(h3Content)
    itemDiv.append(pContent)
    container.append(itemDiv)
  }
}
