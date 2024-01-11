/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const buttonOk = document.getElementById("ok");

// Variabili ricavate da input
var nOne = document.getElementById('n-one');
var nTwo = document.getElementById('n-two');
var nThree = document.getElementById('n-three');
var nFour = document.getElementById('n-four');
var nFive = document.getElementById('n-five');
var nSix = document.getElementById('n-six');
var nSeven = document.getElementById('n-seven');
var nEight = document.getElementById('n-eight');
var nNine = document.getElementById('n-nine');
var nTen = document.getElementById('n-ten');

buttonOk.addEventListener("click", function() {
    var somma = Number(nOne.value) + Number(nTwo.value) + Number(nThree.value) + Number(nFour.value) + 
                Number(nFive.value) + Number(nSix.value) + Number(nSeven.value) + Number(nEight.value) + 
                Number(nNine.value) + Number(nTen.value);
    document.getElementById("result").innerHTML = 'La somma è: ' + somma;
});