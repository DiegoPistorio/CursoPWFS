/*
let primerNumero = 5;
let segundoNumero = 8;
let operacion = 'resta';

if (operacion == 'suma') {
    resultado1 = primerNumero + segundoNumero;
    console.log(resultado1);
} else if (operacion == 'resta') {
    resultado2 = primerNumero - segundoNumero;
    console.log(resultado2);
} else if (operacion == 'multiplicacion') {
    resultado3 = primerNumero * segundoNumero;
    console.log(resultado3);
} else if (operacion == 'division' && segundoNumero > 0) {
    resultado4 = primerNumero / segundoNumero;
    console.log(resultado4);
} else {
    console.log('no se hace ninguna operacion');
}
*/

function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumar(5, 5));


function resta(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}

console.log(resta(5, 5));


function multiplicacion(numeroUno, numeroDos) {
    return numeroUno * numeroDos;
}

console.log(multiplicacion(5, 5));


function division(numeroUno, numeroDos) {
    if (numeroDos == 0) {
        return 'no se puede dividir por 0';
} else {
    return numeroUno / numeroDos;
    }
}

console.log(division(5, 0));