const modalElement = document.querySelector('.modal')
const modalBackgroundElement = document.getElementsByTagName('main')
const openModalElement = document.querySelector('#open-modal')
const closeModalElement = document.querySelector('.modal > .container a')

openModalElement.addEventListener('click', (e) => {
  modalElement.classList.add('active')
})

closeModalElement.addEventListener('click', (e) => {
  modalElement.classList.remove('active')
})