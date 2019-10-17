// INSERT HEADER TEXT
document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Chief Inspector Clouseau speaking on the pheaun"

// WINDOW PROPERTIES
function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth}px wide by ${window.innerHeight}px tall`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top of the display`
    let myURL = `The URL for this page is ${window.location}`

    document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${myURL}`
}
reDisplay()

// DOCUMENT PROPERTIES
document.querySelector('#myDocument').innerText = `The document title for this page is ${document.title} \n This page was last modified on ${document.lastModified}`

