var nombre = [];

function Grabar(){
    let persona = new Object();

    let dato = document.getElementById('nombre').value;
    let close = " [x]";
    persona['nombre'] = dato;

    nombre.push(persona);

    var tabla = document.getElementById("personas");
    var nuevoNombre = tabla.insertRow(0);
    var nuevaColumna = nuevoNombre.insertCell(0);

    var newNombre = document.createTextNode(dato+close);
    nuevaColumna.appendChild(newNombre);

    console.log(nombre);
}