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

  let mesos = [
    "enero",     
    "febrero",   
    "marzo",     
    "abril",     
    "mayo",      
    "junio",     
    "julio",     
    "agosto",    
    "septiembre",
    "octubre",   
    "noviembre", 
    "diciembre" 
  ];


  //declaracion respuesta
  let respuesta;

  /**
   * He tratado de convertir el switch en un obj, pero no lo he conseguido
   * respuesta de codewars haz un horoscopo. He intentado NO utilizar if
   * pero, incluso con ternarios, no veo otra posibilidad con los conocimientos que tengo.
   * Hasta aquí.
   */
  const signos = () =>{ 
      (mesAny === mesos[0])  ? (diaMes < 20) ? respuesta = signHor[11] : respuesta = signHor[0] :
      (mesAny === mesos[1])  ? (diaMes < 19) ? respuesta = signHor[0] : respuesta = signHor[1]  :
      (mesAny === mesos[2])  ? (diaMes < 21) ? respuesta = signHor[1] : respuesta = signHor[2]  :
      (mesAny === mesos[3])  ? (diaMes < 20) ? respuesta = signHor[2] : respuesta = signHor[3]  :
      (mesAny === mesos[4])  ? (diaMes < 21) ? respuesta = signHor[3] : respuesta = signHor[4]  :
      (mesAny === mesos[5])  ? (diaMes < 21) ? respuesta = signHor[4] : respuesta = signHor[5]  :
      (mesAny === mesos[6])  ? (diaMes < 23) ? respuesta = signHor[5] : respuesta = signHor[6]  :
      (mesAny === mesos[7])  ? (diaMes < 23) ? respuesta = signHor[6] : respuesta = signHor[7]  :
      (mesAny === mesos[8])  ? (diaMes < 23) ? respuesta = signHor[7] : respuesta = signHor[8]  :
      (mesAny === mesos[9])  ? (diaMes < 23) ? respuesta = signHor[8] : respuesta = signHor[9]  :
      (mesAny === mesos[10]) ? (diaMes < 22) ? respuesta = signHor[9] : respuesta = signHor[10] :
      (mesAny === mesos[11]) ? (diaMes < 22) ? respuesta = signHor[10] : respuesta = signHor[11] :
                                        respuesta = "¿No sabe escribir el mes de su cumplea&ntilde;os?"; 
                                        return respuesta;
  } 
  
    //pintado pantalla
    document.getElementById('demo').innerHTML = ` Tu signo del zodiaco es: ${signos(respuesta)}`;
}
