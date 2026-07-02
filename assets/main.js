// Variables
var title = document.getElementById('tituloTexto')

// cards
var card1 = document.getElementById('card1') // Card of aba 1
var card2 = document.getElementById('card2') // Card of aba 2
var card3 = document.getElementById('card3') // Card of aba 3

// Abas

var aba1 = document.querySelector('#a1')
var aba2 = document.querySelector('#a2')
var aba3 = document.querySelector('#a3')

// When starts
card1.style.display = "none"
card2.style.display = "none"
card3.style.display = "none"


// Events

aba1.addEventListener("click", () => {
    console.log('aba 1 clicked')
    card1.style.display = "flex"
    card2.style.display = "none"
    card3.style.display = "none"
    title.innerText = 'Privacidade na rede'
}
)
aba2.addEventListener("click", () => {
    console.log('aba 2 clicked')
    card1.style.display = "none"
    card2.style.display = "flex"
    card3.style.display = "none"
    title.innerText = 'Tipos de golpes'
}
)
aba3.addEventListener("click", () => {
    console.log('aba 3 clicked')
    card1.style.display = "none"
    card2.style.display = "none"
    card3.style.display = "flex"
    title.innerText = 'Como se tratar na rede'
}
)
// Functions

// Function abas

