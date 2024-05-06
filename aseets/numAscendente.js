let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tercer numero: "));

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log ("Los numeros en orden ascendentes son: " + num1 + ", " + num2 + ", " + num3);
    } else {
        console.log("Los numeros en orden ascendentes son: " + num1 + ", " + num3 + ", " + num2);
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log("Los numeros en orden ascendentes son: " + num2 + ", " + num1 + ", " + num3);
    } else {
        console.log("Los numeros en orden ascendentes son: " + num2 + ", " + num3 + ", " + num1);
    }
} else if (num3 <= num1 && num3 <= num2) {
    if (num1 <= num3) {
        console.log("Los numeros en orden ascendentes son: " + num3 + ", " + num1 + ", " + num2);
    } else {
        console.log("Los numeros en orden ascendentes son: " + num3 + ", " + num2 + ", " + num1);
    }
}