//alert("funciona");

//16. Solicitar nombre y apellido al usuario y mostrarlos en una ventana emergente.

//const nombre = prompt("¿Cuál es tu nombre y apellido?");
//console.log("Hola," + nombre);

//alert("Hola, " + nombre);

//17. Solicitar nombre y edad al usuario y mostrar el mensaje: "Hola, ... tienes ... años."

//const datos = prompt("¿Cual es tu nombre?");
//const datos2 = prompt("¿cual es tu edad?");
//alert("Hola, " + datos + " tienes " + datos2 + " años");

/*18. Solicitar primero el nombre, luego solicitar el apellido y por
último solicitar la edad al usuario, mostrar en la interfaz de usuario el mensaje:
Ej entrada: Pepita Pérez 16
Ej salida: Pérez Pepita tiene 16 años.*/

const datos = prompt("¿Cual es tu nombre?");
const datos2 = prompt("¿cual es tu apellido?");
const datos3 = prompt("¿cual es tu edad?");
document.write(datos + " " + datos2 + " tienes " + datos3 + " años.");
