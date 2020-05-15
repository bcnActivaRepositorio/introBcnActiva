function horoscopo() {
  //recogida de datos
  let diaMes = document.getElementById("num1").value;

  //convertir a Number
  diaMes = parseInt(diaMes);

  //recogida datos str
  let mesAny = document.getElementById("meses").value;

  // pulido datos
  mesAny = mesAny.replace(/\s+/g,''); //quitamos espacios en blanco

  mesAny = mesAny.toLowerCase(); //really Mary?


  //array signos por si deseamo reutilizarlo, no necesario
  let signHor = [
    "Acuario",
    "Piscis",
    "Aries",
    "Tauro",
    "G&eacute;minis",
    "C&aacute;ncer",
    "Leo",
    "Virgo",
    "Libra",
    "Escorpio",
    "Sagitario",
    "Capricornio",
  ];

  //declaracion respuesta
  let respuesta;

  //switch basado en meses
  switch (mesAny) {
      case "enero":
          (diaMes < 20) ? respuesta = signHor[11] :
          (diaMes <= 31) ? respuesta = signHor[0] : respuesta = "error";
          break;

      case "febrero":
          (diaMes < 19) ? respuesta = signHor[0] :
          (diaMes <= 29) ? respuesta = signHor[1] : respuesta = "error";
          break;

      case "marzo":
          (diaMes < 21) ? respuesta = signHor[1] :
          (diaMes <= 31) ? respuesta = signHor[2] : respuesta = "error";
          break;

      case "abril":
          (diaMes < 20) ? respuesta = signHor[2] :
          (diaMes <= 30) ? respuesta = signHor[3] : respuesta = "error";
          break;

      case "mayo":
          (diaMes < 21) ? respuesta = signHor[3] :
          (diaMes <= 31) ? respuesta = signHor[4] : respuesta = "error";
          break;

      case "junio":
          (diaMes < 21) ? respuesta = signHor[4] :
          (diaMes <= 30) ? respuesta = signHor[5] : respuesta = "error";
          break;

      case "julio":
          (diaMes < 23) ? respuesta = signHor[5] :
          (diaMes <= 31) ? respuesta = signHor[6] : respuesta = "error";
          break;

      case "agosto":
          (diaMes < 23) ? respuesta = signHor[6] :
          (diaMes <= 31) ? respuesta = signHor[7] : respuesta = "error";
          break;

      case "septiembre":
          (diaMes < 23) ? respuesta = signHor[7] :
          (diaMes <= 30) ? respuesta = signHor[8] : respuesta = "error";
          break;

      case "octubre":
          (diaMes < 23) ? respuesta = signHor[8] :
          (diaMes <= 31) ? respuesta = signHor[9] : respuesta = "error";
          break;

      case "noviembre":
          (diaMes < 22) ? respuesta = signHor[9] :
          (diaMes <= 30) ? respuesta = signHor[10] : respuesta = "error";
          break;

      case "diciembre":
          (diaMes < 22) ? respuesta = signHor[10] :
          (diaMes <= 31) ? respuesta = signHor[11] : respuesta = "error";
          break;
  
      default:
          (mesAny === "") ? respuesta = "Debe introducir un mes del a&ntilde;o!" :
                            respuesta = `${mesAny} no es un mes del a&ntilde;o!`

          break;

        
  }
    //pintado pantalla
    document.getElementById('demo').innerHTML = ` Tu signo del zodiaco es: ${respuesta}`;
}
