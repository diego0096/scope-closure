// Variables

var a; // Declaración
var b = b // Declaración / Asignación
b = 'bb'; // Reasignanción
var a = 'aa'; // Redeclaración

// Global scope
var fruit = 'Apple'; // Global

function bestFruit() {
    console.log(fruit)
}

bestFruit();

function countries() {
    country = 'Colombia'; // Tener cuidado al momento de declarar una variable, ya que al asignar sin declarar, la variable seria de scope global.
    console.log(country);
}

countries();
console.log(country);