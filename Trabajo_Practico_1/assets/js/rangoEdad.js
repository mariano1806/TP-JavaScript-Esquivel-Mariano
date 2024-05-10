let edad = prompt(parseInt("ingrese su edad: "));

if (edad >= 0 && edad <= 12) {
    console.log("Eres un niño.");
} else if (edad >= 13 && edad <= 19) {
    console.log("Eres un adolescente.");
} else if (edad >= 20 && edad <= 59) {
    console.log("Eres un adulto.");
} else {
    console.log("Eres un adulto mayor.");
} 