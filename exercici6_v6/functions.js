
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
    data1 : ((edadSi && tituloSi) || paroSi) ? respuesta = ("Puede acceder a la beca!") :
            ((edadNo && tituloNo) || paroNo) ? respuesta = ("No puede acceder a la beca!") :
                                               respuesta = ("Hable con Joan Serrano y él le dirá!"),
};
    document.getElementById("demo").innerHTML = respuesta;
}

/*
Mirar versiones anteriores para ver el switch statement
 */
/**
 * se PUEDE cambiar el switch statement por OBJ!!!!!!
 * https://javascriptweblog.wordpress.com/2010/07/26/no-more-ifs-alternatives-to-statement-branching-in-javascript/
 */