
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

    let respuesta;
    
let casos = {
    data1 : ((edadSi && tituloSi) || paroSi),
    data2 : ((edadNo && tituloNo) || paroNo),
/**con estos dos supuestos cubrimos el resto, ya que el enunciado nos decia 
 * 
 * edad + estudios OR paro
 * 
 * segun este enunciado alguien menor de edad pero en paro PUEDE conseguir la beca
 */
};

switch (true) {
    case casos.data1:
        respuesta = ("Puede acceder a la beca!");
        break;
    case casos.data2:
        respuesta = ("No puede acceder a la beca!");
        break;

    default:
        respuesta = ("Hable con Joan Serrano y él le dirá!")
        break;
}

    document.getElementById("demo").innerHTML = respuesta;
}