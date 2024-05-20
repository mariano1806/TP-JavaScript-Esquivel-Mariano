let tareas = [];

function esEntradaValida(entrada) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(entrada.trim());
}

function agregarTarea() {
    let nombreTarea = prompt("Ingrese el nombre de la tarea");
    if (nombreTarea.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }
    if (!esEntradaValida(nombreTarea)) {
        alert("El nombre de la tarea solo puede contener letras");
        return;
    }
    tareas.push(nombreTarea);
    alert("Tarea agregada correctamente");
}

function listarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas pendientes");
        return;
    }
    let listaTareas = "";
    for (let i = 0; i < tareas.length; i++) {
        listaTareas += (i + 1) + ". " + tareas[i] + "\n";
    }
    alert("Tareas pendientes:\n" + listaTareas);
}

function editarTarea() {
    let nombreTarea = prompt("Ingrese el nombre de la tarea a editar");
    if (nombreTarea.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }
    if (!esEntradaValida(nombreTarea)) {
        alert("El nombre de la tarea solo puede contener letras");
        return;
    }
    let index = tareas.indexOf(nombreTarea);
    if (index === -1) {
        alert("La tarea no se encuentra en la lista");
        return;
    }
    let nuevoNombreTarea = prompt("Ingrese el nuevo nombre de la tarea");
    if (nuevoNombreTarea.trim() === "") {
        alert("El nuevo nombre de la tarea no puede estar vacío");
        return;
    }
    if (!esEntradaValida(nuevoNombreTarea)) {
        alert("El nuevo nombre de la tarea solo puede contener letras");
        return;
    }
    tareas[index] = nuevoNombreTarea;
    alert("Tarea editada correctamente");
}

function eliminarTarea() {
    let nombreTarea = prompt("Ingrese el nombre de la tarea a eliminar");
    if (nombreTarea.trim() === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }
    if (!esEntradaValida(nombreTarea)) {
        alert("El nombre de la tarea solo puede contener letras");
        return;
    }
    let index = tareas.indexOf(nombreTarea);
    if (index === -1) {
        alert("La tarea no se encuentra en la lista");
        return;
    }
    tareas.splice(index, 1);
    alert("Tarea eliminada correctamente");
}

function salir() {
    alert("Hasta pronto");
} 

function mostrarMenu() {
    let menu = "1. Agregar Tarea\n2. Listar Tareas\n3. Editar Tarea\n4. Eliminar Tarea\n0. Salir";
    menu += "\nSeleccione una opción:";
    return parseInt(prompt(menu));
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case 1:
            agregarTarea();
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 0:
            salir();
            break;
        default:
            alert("Opción inválida");
    }
}

function iniciarPrograma() {
    let opcion;
    do {
        opcion = mostrarMenu();
        if (!isNaN(opcion)) {
            ejecutarOpcion(opcion);
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    } while (opcion !== 0);
}

iniciarPrograma();
