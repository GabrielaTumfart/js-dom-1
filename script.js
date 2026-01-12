
//* Innazitutto devo capire cosa devo fare.
//** Devo prendere la lampadina e un bottone dall'HTML.
// Quando clicco il bottone, devo cambiare l'immagine della lampadina 
// La lampadina deve accendersi
// Come faccio?
// forse cambio il percorso dell'immagine 
// Ma prima devo prendere gli elementi dal DOM
// Oggi abbiamo imparato:
//  getElementById serve per prendere un elemento della pagina HTML usando il suo Id
// addEventListener serve per ascoltare un evento ad esempio il click
// innerText serve per cambiare il texto dentro dell'elemento del HTML
// contains
// */

//ora prendo gli Elementi del Dom

const lampadina = document.getElementById("lampadina"); 
const bottone = document.getElementById("bottone");

bottone.addEventListener("click", function () {
    lampadina.src = "./img/yellow_lamp.png";
bottone.innerText = "Accesa";
})

//Devo mettere il percorso in HTML dell'imagine

