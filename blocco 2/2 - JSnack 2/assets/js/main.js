/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

let nomi = ["Luca", "Giulia", "Marco", "Sofia", "Matteo", "Alessia", "Andrea", "Chiara", "Francesco", "Giorgia", "Antonio", "Anna", "Giovanni", "Maria", "Alessandro", "Silvia", "Roberto", "Laura", "Alberto", "Sara","Paolo", "Valentina", "Daniele", "Elena", "Simone", "Martina", "Pietro", "Giulia", "Riccardo", "Alice","Stefano", "Beatrice", "Giorgio", "Alessia", "Massimo", "Federica", "Salvatore", "Elisa", "Vincenzo", "Barbara"];

let cognomi = ["Rossi", "Ferrari", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Conti", "Esposito", "Ricci", "Marino", "Greco", "Bruno", "Rizzo", "Moretti", "Barbieri", "Fontana", "Santoro", "Mariani", "Rinaldi", "Caruso", "Ferrara", "Galli", "Martini", "Leone", "Longo", "Gentile", "Martinelli", "Vitale", "Lombardi", "Serra", "Coppola", "De Luca", "Costantini", "Grasso", "Bianco", "Pellegrini", "Palumbo", "Giordano", "Riva"];

const buttonOk = document.getElementById("ok");

buttonOk.addEventListener('click', function() {
    var ulHtml = document.getElementById('result');
    ulHtml.innerHTML = '';

    for (var i = 0; i < nomi.length ; i++) {
        var nomeRandom = Math.floor(Math.random() * nomi.length);
        var cognomeRandom = Math.floor(Math.random() * cognomi.length);
        var listItem = document.createElement('li');
        listItem.classList.add("col-6");
        listItem.textContent = nomi[nomeRandom] + " " + cognomi[cognomeRandom];
        ulHtml.appendChild(listItem);
    }
})