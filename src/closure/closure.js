function greeting() {
    let userName = 'Diego';

    function displayUserNamen() {
        return `Hello ${userName}`;
    }
    return displayUserNamen;
}

const g = greeting();
console.log(g);
console.log(g()); // Gracias al closure se muestra la variable a queres mostrar