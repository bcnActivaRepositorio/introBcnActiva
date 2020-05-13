function meses(){
    //recogida datos
    let mesAny = document.getElementById('mes').value;
    mesAny = parseInt(mesAny);

    //respuesta
    let texto;
    
    //dias

    let oddDays  = "tiene 31 d&iacute;as";
    let evenDays = "tiene 30 d&iacute;as";

    //expression ==> colocamos contenedor datos
    switch (mesAny) {
        case 1:
            texto = (`Enero ${oddDays}`);
            break;
        case 2:
            texto = (`Febrero tiene 28 días`);
            break;
        case 3:
            texto = (`Marzo ${oddDays}`);
            break;
        case 4:
            texto = (`Abril ${evenDays}`);
            break;
        case 5:
            texto = (`Mayo ${oddDays}`);
            break;
        case 6:
            texto = (`Junio ${evenDays}`);
            break;
        case 7:
            texto = (`Julio ${oddDays}`);
            break;
        case 8:
            texto = (`Agosto ${oddDays}`);
            break;
        case 9:
            texto = (`Septiembre ${evenDays}`);
            break;
        case 10:
            texto = (`Octubre ${oddDays}`);
            break;
        case 11:
            texto = (`Noviembre ${evenDays}`);
            break;
        case 12:
            texto = (`Diciembre ${oddDays}`);
            break;
    
/*         default:
            texto = (`Eso no es un mes!`);
            break; */
    }

    document.getElementById('demo').innerHTML = texto;
}
