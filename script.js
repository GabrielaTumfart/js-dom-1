
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

/*

const lampadina = document.getElementById("lampadina"); 
const bottone = document.getElementById("bottone");

bottone.addEventListener("click", function () {
    lampadina.src = "./img/yellow_lamp.png";
bottone.innerText = "Accesa";
}) */

//Devo mettere il percorso in HTML dell'imagine

//# BONUS

//* La lampadina deve accendersi e spegnersi ogni volta che clicco
// devo capire se la lampadina è accesa o spenta
// uso contains? forse
// se contiene white è spenta, se contiene yellow è accesa
// Proviamo.

//copio quello che ho scritto prima
const lampadina = document.getElementById("lampadina"); 
const bottone = document.getElementById("bottone");

bottone.addEventListener("click", function () {

    if (lampadina.src.contains("white_lamp.png")) {
        
   
    lampadina.src = "./img/yellow_lamp.png";

} else {
    lampadina.src = ""./img/white_lamp.png";
}
bottone.innerText = "Accesa";
}) 








