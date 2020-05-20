function numAl(){
    //recogida datos
    let numal = document.getElementById('num').value;

    //listas
    let becaSi = [];
    let becaNo = [];
    let text   = "";
    let text1  = "";
    let nombre, edad, titulo, paro;
    let total = 0;
    //LOOP
    for(let i = 0; i < numal; i++){
         nombre = prompt("Introduzca su nombre");
         edad   = prompt("Introduzca su edad numérica");
         edad   = parseInt(edad);
         titulo = prompt("¿Titulación Universitaria? SI/ NO").toLowerCase();
         paro   = prompt("¿Situación de desempleo? SI/ NO").toLowerCase();

        //condicionales
        ((edad >= 18 && titulo === "si") || paro === "si") ? becaSi.push(nombre) : becaNo.push(nombre);
    }
    //document.getElementById("modo").innerHTML = `Alumnos becados: ${becaSi}`;
    //document.getElementById("modo2").innerHTML = `Alumnos no becados: ${becaNo}`;

    //loop to print
    for (let i = 0; i < becaSi.length; i++){
        text += "Becado:" + " "+ becaSi[i] + "<br/>";
        total = total + 1;
    }
    

    for (let i = 0; i < becaNo.length; i++){
        text1 += "No becado:" + " " + becaNo[i] + "<br/>";
    }
    document.getElementById("modo2").innerHTML = text1;
    document.getElementById("modo").innerHTML = text;
    document.getElementById("modo1").innerHTML = ` Número de becados : ${becaSi.length}`;

}

//Solución CARLOS. La he complicado para trabajar el loop