
// solo una caja tick( no idea how to make THIS on my own!)

// https://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group/9709425

function onlyOne(checkbox){
    let checkboxes = document.getElementsByName("siUno");
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}
function onlyOne1(checkbox){
    let checkboxes = document.getElementsByName("tituloSi");
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}
function onlyOne2(checkbox){
    let checkboxes = document.getElementsByName("empleoSi");
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}




        //recogida valor checkboxes
function beca2(){
    let edadSi   = document.getElementById('check1').checked; 
    let edadNo   = document.getElementById('check2').checked; 
    let tituloSi = document.getElementById('check3').checked;
    let tituloNo = document.getElementById('check4').checked;
    let paroSi   = document.getElementById('check5').checked;
    let paroNo   = document.getElementById('check6').checked;


   //declaracion respuesta
    let respuesta;

/*     if((edadSi && tituloSi ) || paroSi ){

        respuesta = ("Puede acceder a la beca!");

    } else if ((edadNo  && tituloNo ) || paroNo  ){

        respuesta = ("No puede acceder a la beca!");
 
    }  else{

        respuesta = " No puede accerder a la beca!";
    } */

    ((edadSi  && tituloSi ) || paroSi) ?  respuesta = ("Puede acceder a la beca!") :
    ((edadNo  && tituloNo ) || paroNo) ?  respuesta = ("No puede acceder a la beca!") : 
                                          respuesta = ("Pregunte a Joan Serrano");

    document.getElementById("demo").innerHTML = respuesta;
}