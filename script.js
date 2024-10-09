const Card = document.querySelector('#card')
const CardItems = document.createElement('div')
CardItems.className = 'cardItems'
CardItems.style.cssText = `display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 2000px;
    width: 1000px;`
const loginDiv = document.createElement('div')
loginDiv.className = 'login'
loginDiv.style.cssText = 'display: flex; border: 1px solid black; height: 200px; width: 200px; flex-direction: column; justify-content: space-evenly; align-items: center;'
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
const HeaderDiv = document.createElement('div')
HeaderDiv.style.cssText = 'display: flex; height: 80px; width: 1000px; justify-content: center; align-items: center;'
const Header = document.createElement('div')
Header.textContent = 'Happy 18th Birthday!'
Header.style.fontSize = '50px'
Card.appendChild(loginDiv)
loginDiv.appendChild(PassText)
loginDiv.appendChild(PassInput)
loginDiv.appendChild(PassBtn)
let PassInputVal = PassInput.value
loginDiv.addEventListener('click', (event) => {
    let PassInputVal = PassInput.value
    if (PassInputVal == 'Pag-aaral8*'){
        DeletePass()
        //DisplayPics()
    }
    })
function DeletePass() {
    //let e = 3, d = 0
    while (Card.firstChild) {
        Card.removeChild(Card.firstChild)
        }
        Card.appendChild(CardItems)
        CardItems.appendChild(HeaderDiv)
        HeaderDiv.appendChild(Header)
        DisplayPics()
    }
function DisplayPics() {
    let i = 1, j = 19
    while (i < j) {
        const Pics = document.createElement('img')
        Pics.src = `cays/cay${i}.png`
        Pics.style.height = '260px'
        Pics.style.width = '260px'
        CardItems.appendChild(Pics)
        i++
    }
}
