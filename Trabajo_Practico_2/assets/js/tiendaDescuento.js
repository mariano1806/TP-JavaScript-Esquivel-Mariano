let articulos = parseInt(prompt("ingrese la cantidad de articulos: "));
let precio = parseInt(prompt("ingrese el precio del articulo: "));

if (articulos >= 10 && precio >= 20000) {
    let total= (articulos * precio) *(0.15);
    alert("el total a pagar es: " + total);
}   else if (articulos < 10 && precio < 20000) {
    alert("no supero la cantidad ni el precio");   
}  else if (articulos < 10) {
    alert("no se supero la cantidad");
}  else {
    alert("no se supero el precio");
}