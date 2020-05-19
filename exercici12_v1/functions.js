function numAl(){
    //recogida datos
   let howMany = document.getElementById('num').value; //string numerico, no vale length con él, saldrá 1!

   //declaracion arr
    let nom    = [];
    let edad   = [];
    let paro   = [];
    let titulo = [];
    let becaSi = [];
    let becaNo = [];
    let texto  = "";

    //loop recogida de datos

    for( let i = 0; i < howMany; i++){
        //numerico
       edad.push(prompt("Introduzca su edad"));
        
        //boolean
       titulo.push(prompt("¿Titulación universitaria? SI/ NO").toLowerCase());

       paro.push(prompt("¿Situación de desempleo? SI/ NO").toLowerCase());
  
        //
       nom.push(prompt("Introduzca su nombre por favor"));

        //tu si entras
        ((edad[i] >= 18 && titulo[i] === "si" ) || paro[i] === "si") ? becaSi.push(nom[i]) :
       // ((edad[i] < 18 && titulo[i] === "no") || paro[i] === "no") ? becaNo.push(nom[i]) :
                                         texto = alert('I have no clue what is going on!')

    }
    //pintado listas
    for(let i = 0; i < becaSi.length; i++){
        document.getElementById("modo").innerHTML += "Becado: " + becaSi[i] + "<br/>"
    };
    /* for(let i = 0; i < becaNo.length; i++){
        document.getElementById("modo").innerHTML += "No becado: " + becaSi[i] + "<br/>"
    }; */

}


