function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`)
    }
}

greeting();
console.log(userName); // La variable userName no esta asignada como global, por lo que no puede usarse por fuera de la función.