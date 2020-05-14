function numberOps(){

    let numOne = parseInt(prompt('Introduzca un número'));
    let numTwo = parseInt(prompt('Introduzca un número'));
    let singOp = prompt('Introduzca el simbolo de una operación');


    //recogida resultado

    let resultado;

    //nomes numeros

/*     let numbers = /^[0 - 9]+$/;

    let numNum1 = (numOne.match(numbers)) ? true : resultado = `Eso era texto berraco!!`;
    let numNum2 = (numTwo.match(numbers)) ? true : resultado = `Eso era texto berraco!!`; */
/*     (numOne === Number)    ? resultado = `${numOne} no es un número. Escriba sólo números.`:
    (numTwo === Number)    ? resultado = `${numTwo} no es un número. Escriba sólo números.`: */

    switch (singOp) {
        case "+":
            resultado = numOne + numTwo;
            break;
        case "-":
            resultado = numOne - numTwo;
            break;
        case "*":
            resultado = numOne * numTwo;
            break;
        case "/":
            resultado = numOne / numTwo;
            break;
    
        default:
            resultado = `${singOp} no es un s&iacute;mbolo matem&aacute;tico v&aacute;lido!!`;
            break;
    }
    document.getElementById('demo').innerHTML = `El resultado de la operaci&oacute;n es: ${resultado}`;
}