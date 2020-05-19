function horoscopo() {
  //recogida de datos
  let dias = document.getElementById("num1").value;

  //convertir a Number
  dias = parseInt(dias);

  //recogida datos str
  let mes = document.getElementById("meses").value;

  // pulido datos
  mes = mes.replace(/\s+/g,''); //quitamos espacios en blanco

  mes = mes.toLowerCase(); //really Mary?


  //array signos por si deseamo reutilizarlo, no necesario
  let signs = [
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


  //declaracion text
  let text;

  /**
   * He tratado de convertir el switch en un obj, pero no lo he conseguido
   * text de codewars haz un horoscopo. He intentado NO utilizar if
   * pero, incluso con ternarios, no veo otra posibilidad con los conocimientos que tengo.
   * Hasta aquí.

   https://dev.to/lukyhenson/replace-your-switch-statement-and-multiple-if-and-else-using-object-literals-en-us-1dec
   
   */
  const signos = () =>{ 
      (mes === mesos[0])  ? (dias < 20) ? text = signs[11] : text = signs[0] :
      (mes === mesos[1])  ? (dias < 19) ? text = signs[0] : text = signs[1]  :
      (mes === mesos[2])  ? (dias < 21) ? text = signs[1] : text = signs[2]  :
      (mes === mesos[3])  ? (dias < 20) ? text = signs[2] : text = signs[3]  :
      (mes === mesos[4])  ? (dias < 21) ? text = signs[3] : text = signs[4]  :
      (mes === mesos[5])  ? (dias < 21) ? text = signs[4] : text = signs[5]  :
      (mes === mesos[6])  ? (dias < 23) ? text = signs[5] : text = signs[6]  :
      (mes === mesos[7])  ? (dias < 23) ? text = signs[6] : text = signs[7]  :
      (mes === mesos[8])  ? (dias < 23) ? text = signs[7] : text = signs[8]  :
      (mes === mesos[9])  ? (dias < 23) ? text = signs[8] : text = signs[9]  :
      (mes === mesos[10]) ? (dias < 22) ? text = signs[9] : text = signs[10] :
      (mes === mesos[11]) ? (dias < 22) ? text = signs[10] : text = signs[11] :
                                        text = "¿No sabe escribir el mes de su cumplea&ntilde;os?"; 
                                        return text;
  } 
  
    //pintado pantalla
    document.getElementById('demo').innerHTML = ` Tu signo del zodiaco es: ${signos(text)}`;
}
