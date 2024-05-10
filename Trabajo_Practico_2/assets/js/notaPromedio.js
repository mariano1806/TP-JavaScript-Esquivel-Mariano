let nota1 = parseInt(prompt("ingrese la nota del primer trimestre: "));
let nota2 = parseInt(prompt("ingrese la nota del segundo trimestre: "));
let nota3 = parseInt(prompt("ingrese la nota del tercer trimestre: "));

let promedio = (nota1 + nota2 + nota3) / 3;
let resultado = "";

switch (true) {
    case (promedio >= 1 && promedio <= 3):
        resultado=("Nota Insuficiente");
        break;
    case (promedio >= 4 && promedio <= 5):
        resultado=("Nota Regular");
        break;
    case (promedio >= 6 && promedio <= 7):
        resultado=("Nota Buena");
        break;
    case (promedio >= 8 && promedio <= 9):
        resultado=("Nota Muy Buena");
        break;
    case (promedio == 10):
        resultado=("Nota Sobresaliente");
        break;
    default:
        resultado=("nota invalidad");
        break;
}

alert("El promedio es: " + resultado);