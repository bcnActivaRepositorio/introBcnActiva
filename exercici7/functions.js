function meses(){
    //recogida datos
    let mesAny = parseInt(document.getElementById('mes').value);
    

    //expression ==> colocamos contenedor datos
    switch (mesAny) {
        case 1:
            document.getElementById("demo").innerHTML = (`Enero tiene 31 días`);
            break;
        case 2:
            document.getElementById("demo").innerHTML = (`Febrero tiene 28 días`)
            break;
        case 3:
            document.getElementById("demo").innerHTML = (`Marzo tiene 31 días`)
            break;
        case 4:
            document.getElementById("demo").innerHTML = (`Abril tiene 30 días`)
            break;
        case 5:
            document.getElementById("demo").innerHTML = (`Mayo tiene 31 días`)
            break;
        case 6:
            document.getElementById("demo").innerHTML = (`Junio tiene 30 días`)
            break;
        case 7:
            document.getElementById("demo").innerHTML = (`Julio tiene 31 días`)
            break;
        case 8:
            document.getElementById("demo").innerHTML = (`Agosto tiene 31 días`)
            break;
        case 9:
            document.getElementById("demo").innerHTML = (`Septiembre tiene 30 días`)
            break;
        case 10:
            document.getElementById("demo").innerHTML = (`Octubre tiene 31 días`)
            break;
        case 11:
            document.getElementById("demo").innerHTML = (`Noviembre tiene 30 días`)
            break;
        case 12:
            document.getElementById("demo").innerHTML = (`Diciembre tiene 31 días`)
            break;
    
        default:
            document.getElementById("demo").innerHTML = (`Eso no es un mes!`)
            break;
    }
}
