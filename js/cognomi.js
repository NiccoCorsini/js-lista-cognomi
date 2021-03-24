//LISTA COGNOMI
/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
*/

function injector() {
    //HIDE BUTTON
    document.getElementById("button").style.display = "none";

    // VARIABLES
    var surnames = ["bianchi", "verdi", "gialli", "rossi", "riomare"];

    var userSurname = prompt("Insert your surname here");

    var surnamesCapitalize = [];

    var security = false;

    var listItem = "";

    // VALIDATOR
    while (userSurname === "" || !isNaN(userSurname)) {
        security === true;
        userSurname = prompt("Not valid Value! Retry...");
    }

    if (security === false) {
        surnames.push(userSurname);
        alert("Your surname has been successifully added.");
    }

    // SURNAME CAPITALIZE
    for (var i = 0; i < surnames.length; i++) {
        surnamesCapitalize.push(surnames[i].charAt(0).toUpperCase() + surnames[i].slice(1, surnames[i].length));           
    }

    // ALPHABETIC SORT
    surnamesCapitalize.sort();

    // LIST ITEM GENERATION
    for (var j = 0; j < surnamesCapitalize.length; j++) {
        listItem += "<li>" + " " + (j + 1) + " " + surnamesCapitalize[j] + "</li>";
    }

    // PRINT LIST ITEMS IN HTML
    document.getElementById("surnames").innerHTML = listItem;
}