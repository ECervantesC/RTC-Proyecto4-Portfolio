import './buttonPrint.css'
export const buttonPrint = (contenedor) => {
  console.log('Llego a los botones')
  const interestingsArray = [
    'Ecommerce website',
    'Data Base',
    'Landing Page',
    'Blog Website',
    'App',
    'Others'
  ]
  for (const interesting of interestingsArray) {
    const interesetingsButton = document.createElement('button')
    interesetingsButton.className = 'interesetingsButton'
    const interestingsSpan = document.createElement('span')
    interestingsSpan.textContent = interesting
    interesetingsButton.append(interestingsSpan)
    contenedor.append(interesetingsButton)
    interesetingsButton.addEventListener('click', (e) => {
      const buttonsArray = document.querySelectorAll('.interesetingsButton')
      for (const but of buttonsArray) {
        if (but.classList.contains('selectedButton')) {
          but.classList.remove('selectedButton')
        }
      }
      interesetingsButton.classList.add('selectedButton')
      const customerInteresting = e.target
      console.log(customerInteresting)
    })
  }
}
