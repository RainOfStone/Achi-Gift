const Card = document.querySelector('#card')
const login = document.querySelector('#login')
const PassInput = document.createElement('input')
const PassBtn = document.createElement('button')
const PassText = document.createElement('div')
const PassInputId = document.querySelector('#PassInput')
PassText.textContent = 'type a password'
PassText.style.fontSize = '24px'
PassBtn.textContent = 'enter'
PassInput.className = 'PassInput'
PassBtn.className = 'PassBtn'
PassBtn.style.height = '30px'
PassBtn.style.width = '80px'
PassInput.style.height = '26px'
PassInput.style.width = '120px'
PassInput.type = 'text'
login.appendChild(PassText)
login.appendChild(PassInput)
login.appendChild(PassBtn)
let PassInputVal = PassInput.value
login.addEventListener('click', (event) => {
    let PassInputVal = PassInput.value
    if (PassInputVal == 'Pag-aaral8*'){
        console.log('hi')
    }
    })
   //if (PassInputVal == 'Pag-aaral8*') {
        //alert('correct!')
   // }
