function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // Function scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; // Block scope
        console.log(fruit2); // Kiwi
        console.log(fruit3); // Banana
    }
    console.log(fruit1); // Apple
    console.log(fruit2); // SyntaxError
    console.log(fruit3); // SyntaxError
}

fruits();
//Un bloque es todo aquello que esta definido dentro de los handle bars.