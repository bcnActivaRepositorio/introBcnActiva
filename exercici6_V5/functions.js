
// one liner
// https://dev.to/joelnet/functional-programming-how-would-you-if-no-else-javascript-59ai



        //recogida valor checkboxes
function beca2(){
    let edadSi   = document.getElementById('check1').checked; 
    let edadNo   = document.getElementById('check2').checked; 
    let tituloSi = document.getElementById('check3').checked;
    let tituloNo = document.getElementById('check4').checked;
    let paroSi   = document.getElementById('check5').checked;
    let paroNo   = document.getElementById('check6').checked;

    let respuesta;
    
let casos = {
    data1 : ((edadSi && tituloSi) || paroSi),
    //data2 : ((edadNo && tituloNo) || paroNo),

};

// ternarios para minimizar nesting hell if/ else && switch
   (casos.data1) ? respuesta = ("Puede acceder a la beca") : respuesta = ("No puede acceder a la beca");

    document.getElementById("demo").innerHTML = respuesta;
}