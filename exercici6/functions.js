/* function beca(){
    let edad   = prompt("¿Cuantos años tiene?");
    
    if( edad < 18){
        document.getElementById("demo").innerHTML = ("Lo sentimos, debe ser mayor de edad para acceder a las becas")
      
    } else if ( edad >= 18){
        
         let titulo = prompt("¿Tiene título Universitario?");

         if ( titulo.toLowerCase() == "si"){

             document.getElementById("demo").innerHTML = ("Puede acceder a la beca!");
             
         }else{
            document.getElementById("demo").innerHTML = ("No puede acceder a la beca!");
         }
       
    } else if ( edad >= 18 && titulo.toLowerCase() == "no"){

        let paro = prompt("¿Esta en situacion de desempleo?");
       
        if (paro.toLowerCase() == "no"){

            document.getElementById("demo").innerHTML = ("No puede acceder a la beca!");

        } else{

            document.getElementById("demo").innerHTML = ("Puede acceder a la beca!");
        }

    } 
}

beca(); */

/* function beca2(){
    let edad1   = prompt("¿Cuantos años tiene?");
    let titulo1 = prompt("¿Tiene título Universitario?");
    let paro1   = prompt("¿Esta en situacion de desempleo?");


    if((edad1 >= 18 && titulo1.toLowerCase() == "si") || paro1.toLowerCase() == "si"){

        document.getElementById("demo").innerHTML = ("Puede acceder a la beca!");
    } else{

        document.getElementById("demo").innerHTML = ("No puede acceder a la beca!");
    }

}

beca2(); */

        //recogida valor checkboxes
function beca2(){
    let edadSi   = document.getElementById('siMayor'); 
    let edadNo   = document.getElementById('noMayor'); 
    let tituloSi = document.getElementById('siTitulo');
    let tituloNo = document.getElementById('noTitulo');
    let paroSi   = document.getElementById('siJob');
    let paroNo   = document.getElementById('siJob');

    edadSi = edadSi.checked == true;
    edadNo = edadNo.checked == true;
    tituloSi = tituloSi.checked == true;
    tituloNo = tituloNo.checked == true;
    paroSi   = paroSi.checked == true;
    paroNo   = paroNo.checked == true;

    let respuesta;

    if((edadSi && tituloSi ) || paroSi ){

        respuesta = ("Puede acceder a la beca!");

    } else if ((edadNo  && tituloNo ) || paroNo  ){

        respuesta = ("No puede acceder a la beca!");
 
    }  else{

        respuesta = " No puede accerder a la beca!";
    }

    document.getElementById("demo").innerHTML = respuesta;
}

