function meses(){
    //recogida datos
    let mesAny = document.getElementById('mes').value;
    mesAny = parseInt(mesAny);

    //respuesta
    let texto;
    
    //dias

    let oddDays  = "tiene 31 días.";
    let evenDays = "tiene 30 días.";
    let febDays  =  "tiene 28 días si no es bisiesto."

    //arr meses

    let mesos = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    //utilizamos obj instead of switch. Pero debo encontrar la manera de NO if else ternarios
   
    let dias = {
        data1 : (mesAny === 1 || mesAny === 3 || mesAny === 5 || mesAny === 7 || mesAny === 8 || mesAny === 10 || mesAny === 12) ? texto = (`${mesos[mesAny - 1]} ${oddDays}`) :
                (mesAny === 4 || mesAny === 6 || mesAny === 9 || mesAny === 11)                                                  ? texto = (`${mesos[mesAny - 1]} ${evenDays}`) : 
                                                                                                                                   texto = (`${mesos[mesAny - 1]} ${febDays}`),
    }

    document.getElementById('demo').innerHTML = texto;
}
