function division(numeroUno, numeroDos) {
    if (numeroDos == 0) {
        return 'no se puede dividir por 0';
} else {
    return numeroUno / numeroDos;
    }
}

console.log(division(5, 0));