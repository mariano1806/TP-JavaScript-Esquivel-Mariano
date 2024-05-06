let numero = parseInt(prompt("ingrese un numero del 1 al 7: "));
let dia = ""; 

if (numero === 1) {
    dia = "Lunes";       
} else if (numero === 2) {
    dia = "Martes";
} else if (numero === 3) {
    dia = "Miercoles";
} else if (numero === 4) {
    dia = "Jueves";
} else if (numero === 5) {
    dia = "Viernes";
} else if (numero === 6) {
    dia = "Sabado";
} else if (numero === 7) {
    dia = "Domingo";
} else {
    dia = "dia no valido";
}
alert("El dia de la semana es: " + dia);