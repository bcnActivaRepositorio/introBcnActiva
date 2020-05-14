function numberOps(){

    //recogida datos numeros

    let numOne = parseInt(document.getElementById("num1").value);
    let numTwo = parseInt(document.getElementById("num2").value);

    //recogida signo
    
    let singOp = document.getElementById("signo").value;

    //recogida resultado

    let resultado;


    (singOp.includes("+")) ? resultado = numOne + numTwo :
    (singOp.includes("-")) ? resultado = numOne - numTwo :
    (singOp.includes("*")) ? resultado = numOne * numTwo :
    (singOp.includes("/")) ? resultado = numOne / numTwo :
                             resultado = `${singOp} no es un s&iacute;mbolo matem&aacute;tico v&aacute;lido!!`;

    document.getElementById('demo').innerHTML = resultado;
}