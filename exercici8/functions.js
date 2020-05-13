function meses(){

    let mesAny = parseInt(document.getElementById('mes').value);



    (mesAny === 1) ? document.getElementById("demo").innerHTML = (`Enero tiene 31 d&iacuteas`) :

    (mesAny === 2) ? document.getElementById("demo").innerHTML = (`Febrero puede tener 28 0 29 d&iacuteas`) :

    (mesAny === 3) ? document.getElementById("demo").innerHTML = (`Marzo tiene 31 d&iacuteas`) :

    (mesAny === 4) ? document.getElementById("demo").innerHTML = (`Abril tiene 30 d&iacuteas`) :

    (mesAny === 5) ? document.getElementById("demo").innerHTML = (`Mayo tiene 31 d&iacuteas`) :

    (mesAny === 6) ? document.getElementById("demo").innerHTML = (`Mayo tiene 30 d&iacuteas`) :

    (mesAny === 7) ? document.getElementById("demo").innerHTML = (`Julio tiene 31 d&iacuteas`) :

    (mesAny === 8) ? document.getElementById("demo").innerHTML = (`Agosto tiene 31 d&iacuteas`) :

    (mesAny === 9) ? document.getElementById("demo").innerHTML = (`Septiembre tiene 30 d&iacuteas`) :

    (mesAny === 10) ? document.getElementById("demo").innerHTML = (`Octubre tiene 31 d&iacuteas`) :

    (mesAny === 11) ? document.getElementById("demo").innerHTML = (`Noviembre tiene 30 d&iacuteas`) :
    
                     document.getElementById("demo").innerHTML = (`Diciembre tiene 31 d&iacuteas`);
    
}
