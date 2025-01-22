"use strict";

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

/*const datos = prompt("¿Cual es tu nombre?");
const datos2 = prompt("¿cual es tu apellido?");
const datos3 = prompt("¿cual es tu edad?");
document.write(datos + " " + datos2 + " tienes " + datos3 + " años."); */

/*19. Solicitar un nombre al usuario y:
- Mostrar en una ventana emergente el tipo de dato ingresado entre comillas sencillas
- Mostrar en la interfaz de usuario el nombre ingresado entre comillas dobles
Ej entrada: Pepita
Es salida:
- El tipo de dato ingresado es: 'string'
- El valor ingresado es: "Pepita"*/

/*const datos = prompt("¿Cual es tu nombre?");
alert("El tipo de dato ingresado es: '" + typeof datos + "'");

document.write('El valor ingresado es: "' + datos + '"'); */

/*20. Solicitar al usuario un nombre, una edad y que responda si está activo o no
- Mostrar en la consola el tipo de dato ingresado por cada entrada
- Mostrar en la interfaz de usuario el nombre ingresado entre comillas sencillas
- Mostrar en una ventana emergente si está autorizado o no entre comillas dobles
Ej entrada: Pepita 20 si
Ej salida:
- El tipo de dato ingresado para nombre es: 'string' ...
- El nombre ingresado es: 'Pepita'
- "Si" está autorizado*/

const datos = prompt("¿Cual es tu nombre?");
const datos1 = prompt("¿cual es tu edad?");
const datos2 = prompt("¿estas activo?");

console.log("El tipo de dato ingresado para nombre es: '" + typeof datos + "'");
console.log("El tipo de dato ingresado para edad es: '" + typeof datos1 + "'");
console.log(
  "El tipo de dato ingresado para activo es: '" + typeof datos2 + "'"
);

document.write("El nombre ingresado es: '" + datos + "'");

alert('"' + datos2 + '"' + " " + "está autorizado");
