const number = Number(prompt("Zadejte cislo mezi 0 a 36: "));
number < 0;
number > 36;
let vysledek = "";

// Uvodni rozmezi cisel

if (number < 0 || number > 36) {
  document.body.innerHTML += `<p><strong>"Cislo neni v pozadovanem rozmezi!"</strong></p>`;
} else {
    if (number === 0) {
        vysledek = "nula, zelena barva.";
      } else {
          if (number % 2 === 0) {
          vysledek += "sude, ";
          } else {
          vysledek += "liche, ";
          }
        

// Podminka barev pro cisla mezi 1 - 10 a 19 - 28 

    if ((number >= 1 && number <= 10) || (number >= 19 && number <= 28)) {
      if (number % 2 === 0) {
        vysledek += "cerna barva.";
        } else {
        vysledek += "cervena barva.";
      }
    } else {
          if (number % 2 === 0) {
            vysledek += "cervena barva.";
          } else {
            vysledek += "cerna barva.";
          }
        }
      }
      
    document.body.innerHTML += `<p>Vase cislo je: <strong> ${vysledek} </strong></p>`;
}



