function beca2(){
    let edad1   = prompt("¿Cuantos años tiene?");
    let titulo1 = prompt("¿Tiene título Universitario?");
    let paro1   = prompt("¿Esta en situacion de desempleo?");


    if((edad1 >= 18 && titulo1.toLowerCase() == "si") || paro1.toLowerCase() == "si"){

        document.getElementById("demo").innerHTML = ("Puede acceder a la beca!");
    } else{

        document.getElementById("demo").innerHTML = ("No puede acceder a la beca!");
    }

}


