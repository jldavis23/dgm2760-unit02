// INSERT HEADER TEXT
document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = '"This IZ Chief Inspector Clouseau speaking on the pheaun"'

// WINDOW PROPERTIES
function reDisplay() {
    let windowSizes = `WINDOW SIZE: ${window.innerWidth}px x ${window.innerHeight}px`
    let offset = `WINDOW OFFSET: ${window.screenX} from the left, ${window.screenY} from the top`
    let myURL = `URL: ${window.location}`

    document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${myURL}`
}
reDisplay()

// DOCUMENT PROPERTIES
document.querySelector('#myDocument').innerText = `DOCUMENT TITLE: ${document.title} \n LAST MODIFIED: ${document.lastModified}`

