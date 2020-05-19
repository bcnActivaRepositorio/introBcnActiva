function numAl(){
    //recogida datos
    let numal = document.getElementById('num').value;

    //listas
    let becaSi = [];
    let becaNo = [];
    let text   = "";
    let text1  = "";

    //LOOP
    for(let i = 0; i < numal; i++){
        let nombre = prompt("Introduzca su nombre");
        let edad   = prompt("Introduzca su edad numérica");
        edad = parseInt(edad);
        let titulo = prompt("¿Titulación Universitaria? SI/ NO").toLowerCase();
        let paro   = prompt("¿Situación de desempleo? SI/ NO").toLowerCase();

        //condicionales
        ((edad >= 18 && titulo === "si") || paro === "si") ? becaSi.push(nombre) : becaNo.push(nombre);
    }
    //document.getElementById("modo").innerHTML = `Alumnos becados: ${becaSi}`;
    //document.getElementById("modo2").innerHTML = `Alumnos no becados: ${becaNo}`;

    //loop to print
    for (let i = 0; i < becaSi.length; i++){
        text += "Becado:" + becaSi[i] + "<br/>";
    }
    document.getElementById("modo").innerHTML = text;

    for (let i = 0; i < becaNo.length; i++){
        text1 += "No becado:" + becaNo[i] + "<br/>";
    }
    document.getElementById("modo2").innerHTML = text1;
}

//Solución CARLOS. La he complicado para trabajar el loop