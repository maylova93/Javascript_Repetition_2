// Importerer arrayet 'storeProducts' fra filen 'storeProducts.js'
import { storeProducts } from './storeProducts.js';

// Tilføjer en event listener, der kører koden, når DOM-indholdet er fuldt indlæst
document.addEventListener("DOMContentLoaded", function() {
    // Opretter en konstant 'produkter', der indeholder arrayet 'storeProducts'
    const produkter = storeProducts;
    
    // Finder div-elementet med id 'productContainer' og gemmer det i konstanten 'produktContainer'
    const produktContainer = document.getElementById('productContainer');

    // Lopper igennem hvert produkt i arrayet 'produkter'
    produkter.forEach(produkt => {
        // Opretter en ny div til hvert produkt og tilføjer klassen 'product' til denne div
        const produktDiv = document.createElement('div');
        produktDiv.classList.add('product');

        // Indsætter HTML-indhold i 'produktDiv' med produktets billede, titel, pris, antal og popularitet
        produktDiv.innerHTML = `
            <img src="${produkt.image}" alt="${produkt.title}">
            <h2>${produkt.title}</h2>
            <p>Pris: ${produkt.price} USD</p>
            <p>Antal: ${produkt.quantity}</p>
            <p>Popularitet: ${produkt.popularity}/10</p>
        `;

        // Tilføjer 'produktDiv' som et barn til 'produktContainer' div'en
        produktContainer.appendChild(produktDiv);
    });
});
 
