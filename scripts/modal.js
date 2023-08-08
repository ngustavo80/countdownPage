const modalElement = document.querySelector('.modal')
const modalBackgroundElement = document.getElementsByTagName('main')
const openModalElement = document.querySelector('#open-modal')
const closeModalElement = document.querySelector('.modal > .container a')

openModalElement.addEventListener('click', () => {
  modalElement.classList.add('active')
})

closeModalElement.addEventListener('click', () => {
  modalElement.classList.remove('active')
})

document.addEventListener('keydown', (event) => {
  const isModalActive = modalElement.classList.contains('active')
  const escapePressed = event.key === 'Escape'

  if(isModalActive && escapePressed) {
    modalElement.classList.remove('active')
  }
})