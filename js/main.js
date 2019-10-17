document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clouseau speaking on the pheaun"

function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth}px wide by ${window.innerHeight}px tall`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top of the display`

    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`
}
reDisplay()

