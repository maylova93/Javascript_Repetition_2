///Opgave-1
var myHome = "Aalborg";
console.log("var:", myHome); // Forventet output: var: Aalborg

// Deklarer en variabel med let og tildel den en værdi
let myName = "Makka";
console.log("let:", myName); // Forventet output: let: Makka

// Deklarer en konstant med const og tildel den en værdi
const myAge = "30";
console.log("const:", myAge); // Forventet output: const: 30

// Prøv at gen-deklarere variablen myHome med var (det er tilladt)
var myHome = "Aalborg";
console.log("var:", myHome); // Forventet output: var: Aalborg (ingen ændring da værdien er den samme)

// Ændr værdien af myName deklareret med let (det er tilladt)
myName = "John";
console.log("let:", myName); // Forventet output: let: John (værdien er ændret)

// Forsøg at ændre værdien af konstanten myAge (det er ikke tilladt og vil give en fejl)
try {
    myAge = 25; // Dette vil forårsage en fejl
} catch (e) {
    console.log("Fejl ved opdatering af const myAge:", e.message); // Forventet output: Fejl ved opdatering af const myAge: Assignment to constant variable.
}
///Opgave2
  // Addition
  let addition = 992 + 237;
  console.log("Addition: 992 + 237 = " + addition); // Forventet output: 992 + 237 = 1229

  // Subtraktion
  let subtraktion = 44 - 12;
  console.log("Subtraktion: 44 - 12 = " + subtraktion); // Forventet output: 44 - 12 = 32

  // Multiplikation
  let multiplikation = 142 * 23;
  console.log("Multiplikation: 142 * 23 = " + multiplikation); // Forventet output: 142 * 23 = 3266

  // Division
  let division = 94 / 23;
  console.log("Division: 94 / 23 = " + division); 

 ///Opgave3
// Find knappen og klik tæller elementerne i DOM'en
const button = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount");

// Start klik tæller på 0
let clickCount = 0;

// Tilføj en eventlistener til knappen
button.addEventListener("click", function() {
  // Øg klik tælleren
  clickCount++;
  
  // Opdater klik tæller display
  clickCountDisplay.textContent = clickCount;
});

//Opagve 4 / 6

    // Find input feltet og fejlbeskeden i DOM'en
    const textInput = document.getElementById("textInput");
    const errorMessage = document.getElementById("errorMessage");

    // Tilføj en eventlistener til input feltet
    textInput.addEventListener("input", function() {
        const value = textInput.value;
        let errorMessages = [];

        // Tjek betingelserne
        if (value.length < 8) {
          errorMessages.push("Indtast mindst 8 bogstaver.");
        }
        if (!/[A-Z]/.test(value)) {
          errorMessages.push("Indtast mindst ét stort bogstav.");
        }
        if (!/[^a-zA-Z]/.test(value)) {
          errorMessages.push("Indtast mindst ét tegn som ikke er et bogstav.");
        }
        if (value.length > 20) {
          errorMessages.push("Input må ikke være længere end 20 tegn.");
        }

        // Opdater fejlbeskeden
        if (errorMessages.length > 0) {
          errorMessage.textContent = errorMessages.join(" ");
          errorMessage.style.display = "block";
        } else {
          errorMessage.style.display = "none";
        }
      });
    // // Tilføj en eventlistener til input feltet
    // textInput.addEventListener("input", function() {
    //   // Log længden af input værdien til konsollen
    //   console.log("Input længde:", textInput.value.length);

    //   // Tjek om længden af input er mindre end 8 bogstaver
    //   if (textInput.value.length < 8) {
    //     // Log beskeden om, at input er for kort
    //     console.log("Fejl: Indtast mindst 8 bogstaver");

    //     // Vis fejlbeskeden
    //     errorMessage.style.display = "block";
    //   } else {
    //     // Log beskeden om, at input er tilstrækkeligt
    //     console.log("Input er tilstrækkeligt");
    //     // Skjul fejlbeskeden
    //     errorMessage.style.display = "none";
    //   }
    // });
    //Opgave 5
    // Funktion til at generere en tilfældig farve
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      // Find alle firkanterne
      const boxes = document.querySelectorAll('.box');

      // Tilføj eventlisteners til hver firkant
      boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
          box.style.backgroundColor = getRandomColor();
        });
      });
  