function numberOps(){

    let numOne = parseInt(prompt('Introduzca un número'));
    let numTwo = parseInt(prompt('Introduzca un número'));
    let singOp = prompt('Introduzca el simbolo de una operación');


    //recogida resultado

    let resultado;

    //nomes numeros

   let numbers =  0; //(/^[0 - 9]+$/);


    switch (singOp) {
        case ("+"):
            (resultado !== numbers) ? resultado = "Debe introducir caracteres num&eacute;ricos" : resultado = numOne + numTwo;
            break;
        case ("-"):
            (resultado !== numbers) ? resultado = "Debe introducir caracteres num&eacute;ricos" :resultado = numOne - numTwo;
            break;
        case ("*"):
            (resultado !== numbers) ? resultado = "Debe introducir caracteres num&eacute;ricos" :resultado = numOne * numTwo;
            break;
        case ("/"):
            (resultado !== numbers) ? resultado = "Debe introducir caracteres num&eacute;ricos" :resultado = numOne / numTwo;
            break;
    
        default:
            resultado = `${singOp} no es un s&iacute;mbolo matem&aacute;tico v&aacute;lido!!`;
            break;
    }
    document.getElementById('demo').innerHTML = `El resultado de la operaci&oacute;n es: ${resultado}`;
}