/* function meses(){

    // datos input
    let mesAny = document.getElementById('mes').value;
    mesAny = parseInt(mesAny);

    //contenedor respuesta
    let respuesta;

    //dias
    let oddDays = " tiene 31 d&iacuteas";
    let evenDays = " tiene 30 d&iacuteas";
    




    (mesAny === 1) ? respuesta = (`Enero ${oddDays}`) :

    (mesAny === 2) ? respuesta = (`Febrero puede tener 28 0 29 d&iacuteas`) :

    (mesAny === 3) ? respuesta = (`Marzo ${oddDays}`) :

    (mesAny === 4) ? respuesta = (`Abril ${evenDays}`) :

    (mesAny === 5) ? respuesta = (`Mayo ${oddDays}`) :

    (mesAny === 6) ? respuesta = (`Mayo ${evenDays}`) :

    (mesAny === 7) ? respuesta = (`Julio ${oddDays}`) :

    (mesAny === 8) ? respuesta = (`Agosto ${oddDays}`) :

    (mesAny === 9) ? respuesta = (`Septiembre ${evenDays}`) :

    (mesAny === 10) ? respuesta = (`Octubre ${oddDays}`) :

    (mesAny === 11) ? respuesta = (`Noviembre ${evenDays}`) :
    
                      respuesta = (`Diciembre ${oddDays}`);

    //relleno contenedor respuestas
    document.getElementById('demo').innerHTML = respuesta;
    
} */

//https://stackoverflow.com/questions/59610692/currying-function-instead-of-if-condition-in-javascript
function meses(){

    //datos
    // aportacion de Cristina
    let mesAny = document.getElementById('mes').value;
    mesAny = parseInt(mesAny);

    //respuesta
    //aportacion de Cristina
    let respuesta;

    //arr meses
    // aportación de Isaac Bejarano
    let mesos = [
		"gener",
		"febrer",
		"març",
		"abril",
		"maig",
		"juny",
		"juliol",
		"agost",
		"setembre",
		"octubre",
		"novembre",
		"desembre"
    ];
    
    //marcamos el indice de la arr -1 por inicio arr posicion 0
    let shorterOne = `El mes de ${mesos[mesAny - 1]} pot tenir 28 o 29 dies`;
    let longOne    = `El mes de ${mesos[mesAny - 1]} te 31 dies`;
    let shortOne   = `El mes de ${mesos[mesAny - 1]} te 30 dies`;
     
    //condicionales 
     ( mesAny === 1 || mesAny === 3 || mesAny === 5 || mesAny === 7 || mesAny === 8 || mesAny === 10 || mesAny === 12) ? respuesta = longOne :
     ( mesAny === 4 || mesAny === 6 || mesAny === 9 || mesAny === 11) ? respuesta = shortOne : respuesta = shorterOne;
  

/*     if ( mesAny === 1 || mesAny === 3 || mesAny === 5 || mesAny === 7 || mesAny === 8 || mesAny === 10 || mesAny === 12){

        respuesta = longOne;
        
    }else if (mesAny === 4 || mesAny === 6 || mesAny === 9 || mesAny === 10){

        respuesta = shortOne;
    }else {

        respuesta = shorterOne;
    } */

    //aportacion de Cristina

    
    
    document.getElementById('demo').innerHTML = respuesta;
}
