function becas(){

    let numMax = document.getElementById('num').value;

    numMax     = parseInt(numMax);

    //listas
    let becaSi = [];

    let becaNo = [];
   
    let text   = "";

    let text1  = "";

    let nombre, edad, titulo, paro;

    let total = 0;


    //LOOP
    do {

         nombre = prompt("Introduzca su nombre");

         edad   = prompt("Introduzca su edad numérica");

         edad   = parseInt(edad);

         titulo = prompt("¿Titulación Universitaria? SI/ NO").toLowerCase();

         paro   = prompt("¿Situación de desempleo? SI/ NO").toLowerCase();

        //condicionales
        ((edad >= 18 && titulo === "si") || paro === "si") ? (becaSi.push(nombre) && alert('Estás becado')) : 

                                                              (becaNo.push(nombre) && alert('Lo sentimos, no está becado'));

        

   } while (becaSi.length !== numMax );  //mientras no llegues al nuMax de becas, hay becas o al numtotal de gente apuntada

for (let i = 0; i < becaSi.length; i++){
    
    text = ("Hemos llegado al número límite de becas.");

    total = total ++;
}


for (let i = 0; i < becaNo.length; i++){

    text1 += "No becado:" + " " + becaNo[i] + "<br/>";
}

document.getElementById("modo2").innerHTML = text1;

document.getElementById("modo").innerHTML = text;

document.getElementById("modo1").innerHTML = ` Número límite de becas : ${becaSi.length}`;

}