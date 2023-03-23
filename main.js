//  variáveis   
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10 )
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handResetClick)
document.addEventListener('keydown', enter)

// função callback, só é executada depois que algo acontenceu, exemplo, um click
function handleTryClick(event) {
    event.preventDefault()  // não faça o padrão, q nesse caso do btn no form é enviar rápido os dados

    const inputNumber = document.querySelector('#inputNumber')


    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas`
    } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
        alert('Digite um número entre 0 e 10')
    }

    inputNumber.value = ''
    xAttempts++
}
function handResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10 )
}
function enter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handResetClick()
    }
}
function toggleScreen() {
    screen1.classList.toggle('hide') // toggle, se tiver ent tira, se não tiver, ent coloca 
    screen2.classList.toggle('hide')
}