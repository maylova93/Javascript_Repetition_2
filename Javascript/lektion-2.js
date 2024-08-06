// Opgave 1
// Funktion der tjekker længden på en given string
function tjekLængde(str) {
    return str.length;
}
// String vi vil tjekke
let minString = "Relativitetsteori";

// Kalder funktionen og gemmer resultatet
let længde = tjekLængde(minString);

// Printer resultatet i konsollen
console.log(minString + " er " + længde + " bogstaver langt.");
// Opgave 2
let person ={
    fornavn: "Makka",
    efternavn: "Ismailova",
    email: "joes19@gmail.com",
    telefonnummer: "45556556",
    adresse: "algade11",
    postnummer: "9000",
}
 console.log(person);
 // Opgave 3
// Funktion der ændrer en værdi i et objekt
function ændreVærdi(obj, key, newValue) {
    // Ændrer værdien af den specificerede nøgle (key) i objektet (obj) til den nye værdi (newValue)
    obj[key] = newValue;
    // Returnerer det opdaterede objekt
    return obj;
}
// Oprettelse af et objekt Person med forskellige egenskaber
let Person = {
    fornavn: "Makka",
    efternavn: "Ismailova",
    email: "joes19@gmail.com",
    telefonnummer: "45556556",
    adresse: "Algade 11",
    postnummer: "9000",
};
// Brug af funktionen ændreVærdi til at ændre email-adressen i objektet Person
let opdateretPerson = ændreVærdi(Person, "email", "MakkaEmail@gmailcom");
// Udskriver det opdaterede objekt i konsollen
console.log(opdateretPerson);


// Opgave 4
// Funktion der tjekker typen af alle værdier i et objekt
function tjekTyper(obj) {
    // Løkke igennem alle nøgler i objektet
    for (let key in obj) {
        // Tjek typen af værdien og log det til konsollen
        console.log(`Typen af værdien ved nøgle "${key}" er: ${typeof obj[key]}`);
    }
}
// Oprettelse af et eksempel objekt
let eksempelObjekt = {
    fornavn: "Makka",
    efternavn: "Ismailova",
    email: "joes19@gmail.com",
    telefonnummer: "45556556",
    adresse: "Algade 11",
    postnummer: 9000, // postnummer er et tal her/ Number
    aktiv: true // En boolean værdi for at vise variation i typer
};
// Kald functionen og send objektet som argument
tjekTyper(eksempelObjekt);

//Opgave 5
// Funktion der genererer og returnerer et DOM-element
function generateElement(type, className, id){
//Opretter element baseret på den given type
let element = document.createElement(type);
//tilføjer class name hvis det er angivet
if (className){
    element.className = className;
}
//tilføjer id
if (id){
    element.id = id;
}
//returnerer det oprettede element
return element;
}
 // Kalde function
 let newDiv = generateElement ('div','someClassName', 'myId');
// tilføj nye element til body for at se det i Dom'en.
document.body.appendChild(newDiv);
// Udskrivning af elementet til konsollen for at vise, at det blev oprettet korrekt
console.log(newDiv);

/// Opgave 6

// Funktion der genererer en grid med farvede felter
function generateGrid() {
    // Liste over farver, som hver felter skal have
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "brown"];
    
    // Liste over tekster, som hver felter skal indeholde
    const texts = ["RED 1", "Green 2", "Blue 3", "Yellow 4", "Purple 5", "Orange 6", "Pink 7", "Cyan 8", "Brown 9"];
    
    // Start på HTML-strukturen for grid'en
    let html = '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">';

    // Løkke der genererer hvert felter i grid'en
    for (let i = 0; i < 9; i++) {
        // Tilføjer hver felter med en baggrundsfarve og tekst
        html += `<div style="background-color: ${colors[i]}; padding: 35px;">
                    <p>${texts[i]}</p>
                 </div>`;
    }

    // Afslutter HTML-strukturen for grid'en
    html += '</div>';
    
    // Returnerer den genererede HTML-struktur
    return html;
}

// Indsætter den genererede grid i body på HTML-dokumentet
document.body.innerHTML = generateGrid();
