function horoscopo() {
  //recogida datos

  let diaMes = parseInt(document.getElementById("num1").value);
  let mesAny = parseInt(document.getElementById("num2").value);

  //suma mes dia

  //resultado

  let resultado;

  //horoscopo arr

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
    "Capricornio"
  ];

  ((mesAny === 1 && diaMes >= 20) || (mesAny == 2 && diaMes <= 18)) ? resultado = signHor[0] :

  ((mesAny === 2 && diaMes >= 19) || (mesAny === 3 && diaMes <= 20)) ? resultado = signHor[1] :

  ((mesAny === 3 && diaMes >= 21) || (mesAny === 4 && diaMes <= 19)) ? resultado = signHor[2] :

  ((mesAny === 4 && diaMes >= 20) || (mesAny === 5 && diaMes <= 20)) ? resultado = signHor[3] :

  ((mesAny === 5 && diaMes >= 21) || (mesAny === 6 && diaMes <= 20)) ? resultado = signHor[4] :

  ((mesAny === 6 && diaMes >= 21) || (mesAny === 7 && diaMes <= 22)) ? resultado = signHor[5] :

  ((mesAny === 7 && diaMes >= 23) || (mesAny === 8 && diaMes <= 22)) ? resultado = signHor[6] :

  ((mesAny === 8 && diaMes >= 23) || (mesAny === 9 && diaMes <= 22)) ? resultado = signHor[7] :

  ((mesAny === 9 && diaMes >= 23) || (mesAny === 10 && diaMes <= 22)) ? resultado = signHor[8] :

  ((mesAny === 10 && diaMes >= 23) || (mesAny === 11 && diaMes <= 21)) ? resultado = signHor[9] :

  ((mesAny === 11 && diaMes >= 22) || (mesAny === 12 && diaMes <= 21)) ? resultado = signHor[10] :

  ((mesAny === 12 && diaMes >= 22) || (mesAny === 1 && diaMes <= 19)) ? resultado = signHor[11] :

                                                                        resultado = 'indescriptible';

    //pintado en pantalla

    document.getElementById('demo').innerHTML = `Tu s&iacute;mbolo del Hor&oacute;scopo es ${resultado}`;


}
