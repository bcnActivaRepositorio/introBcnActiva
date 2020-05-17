function numberOps(){

    let numOne = parseInt(prompt('Introduzca un número'));
    let numTwo = parseInt(prompt('Introduzca un número'));
    let singOp = prompt('Introduzca el simbolo de una operación');


    //recogida resultado

    let resultado;

    //nomes numeros

   let numbers =  0; //(/^[0 - 9]+$/);

   //obj operaciones

let operaciones = {
    data1 : (singOp === "+") ? resultado = numOne + numTwo :
            (singOp === "-") ? resultado = numOne - numTwo :
            (singOp === "*") ? resultado = numOne * numTwo :
            (singOp === "/") ? resultado = numOne / numTwo :
            (resultado !== numbers) ? resultado = "Debe introducir caracteres num&eacute;ricos" : resultado = "Error inesperado",
}

    document.getElementById('demo').innerHTML = `El resultado de la operaci&oacute;n es: ${resultado}`;
}