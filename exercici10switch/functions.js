function horoscopo() {
  //declaramos recogida datos
  let diaMes = parseInt(document.getElementById("num1").value);
  let mesAny = parseInt(document.getElementById("num2").value);

  //declaracion respuesta

  let respuesta;

  //object key value fechas

  let dates = {
      
    data1  : (mesAny == 1 && diaMes >= 20)  || (mesAny == 2 && diaMes <= 18),

    data2  : (mesAny == 2 && diaMes >= 19)  || (mesAny == 3 && diaMes <= 20),

    data3  : (mesAny == 3 && diaMes >= 21)  || (mesAny == 4 && diaMes <= 19),

    data4  : (mesAny == 4 && diaMes >= 20)  || (mesAny == 5 && diaMes <= 20),

    data5  : (mesAny == 5 && diaMes >= 21)  || (mesAny == 6 && diaMes <= 20),

    data6  : (mesAny == 6 && diaMes >= 21)  || (mesAny == 7 && diaMes <= 22),

    data7  : (mesAny == 7 && diaMes >= 23)  || (mesAny == 8 && diaMes <= 22),

    data8  : (mesAny == 8 && diaMes >= 23)  || (mesAny == 9 && diaMes <= 22),

    data9  : (mesAny == 9 && diaMes >= 23)  || (mesAny == 10 && diaMes <= 22),

    data10 : (mesAny == 10 && diaMes >= 23) || (mesAny == 11 && diaMes <= 21),

    data11 : (mesAny == 11 && diaMes >= 22) || (mesAny == 12 && diaMes <= 21),

    data12 : (mesAny == 12 && diaMes >= 22) || (mesAny == 1 && diaMes <= 19)
  };

  //respuesta = (dates == true) ? respuesta : "Inesxistente";

/**MEGA CUIDADO!!!!! const boolean = (switch) => (objct === true) ? expression === true : estas jodido! */
  switch (true) {
      case dates.data1:
          respuesta = "Acuario";
          break;
      case dates.data2:
          respuesta = "Piscis";
          break;
      case dates.data3:
          respuesta = "Aries";
          break;
      case dates.data4:
          respuesta = "Tauro";
          break;
      case dates.data5:
          respuesta = "G&eacute;minis";
          break;
      case dates.data6:
          respuesta = "C&aacute;ncer";
          break;
      case dates.data7:
          respuesta = "Leo";
          break;
      case dates.data8:
          respuesta = "Virgo";
          break;
      case dates.data9:
          respuesta = "Libra";
          break;
      case dates.data10:
          respuesta = "Escorpio";
          break;
      case dates.data11:
          respuesta = "Sagitario";
          break;
      case dates.data12:
          respuesta = "Capricornio";
          break;
  
      default:
          respuesta = "Inexistente!!!";
          break;
  };

  //pintado pantalla

  document.getElementById('demo').innerHTML = `Tu signo del zodiaco es: ${respuesta}`;
}
