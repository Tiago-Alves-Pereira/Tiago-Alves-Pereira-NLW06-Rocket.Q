import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.question-actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', handleClick)
})

const deleteButtons = document.querySelectorAll('.question-actions a.delete')

deleteButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excluir'

  const roomId = document.querySelector('#room-id').dataset.id
  const question = event.target.dataset.id
  const action = check ? 'check' : 'delete'

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${question}/${action}`)

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modalTitle.innerHTML = `${text} essa pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  modal.open()
}
