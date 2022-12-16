import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import {calculateIMC, notANumber} from './utils.js'

const form = document.querySelector('main form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

window.oninput = () => AlertError.close()
form.onsubmit = event => {
  event.preventDefault()

  const weight = Number(inputWeight.value)
  const height = Number(inputHeight.value)

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return;
  } else{
    AlertError.close()
  }

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

  inputWeight.value = ""
  inputHeight.value = ""
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}