//alert ("Vamoh pa la playa 🗣️")

let nombre =  prompt ("¿Como te llamas?");
let edad = prompt ("¿Que edad tienes?");

console.log(nombre);
console.log(edad);

let estudiaste = false;

console.log(estudiaste);

let saludo = `¡Hola! Soy Piñita y tengo 23 años`;

console.log(saludo);

if (estudiaste == true) {
    alert(nombre + " ¡Si estudiaste! Pasaras la materia 🤓");
} else if (estudiaste == false) {
    alert(nombre + " ¡No estudiaste! Reprobarás la materia 🫡");
}