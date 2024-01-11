/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

let numeriCento = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

    const buttonOk = document.getElementById("ok");
    var firstNumbers = document.getElementById('first');

    buttonOk.addEventListener('click', function() {
        var n = Number(firstNumbers.value);
        var ulHtml = document.getElementById('result');
        ulHtml.innerHTML = '';

        for (var i = 0; i < numeriCento.length && i < n; i++) {
            var listItem = document.createElement('li');
            var numero = numeriCento[i];
            listItem.textContent = 'Il cubo di ' + numero + ' è: ' + (numero * numero * numero);
         ulHtml.appendChild(listItem);
        }
})