function beca2() {
  let edad = prompt("¿Cuantos años tiene?");

  if (edad < 18) {
    document.getElementById("demo").innerHTML =
      "Lo sentimos, debe ser mayor de edad para acceder a las becas";
  } else if (edad >= 18) {
    let titulo = prompt("¿Tiene título Universitario?");

    if (titulo.toLowerCase() == "si") {
      document.getElementById("demo").innerHTML = "Puede acceder a la beca!";
    } else {
      let paro = prompt("¿Esta en situacion de desempleo?");

      if (paro.toLowerCase() == "no") {
        document.getElementById("demo").innerHTML =
          "No puede acceder a la beca!";
      } else {
        document.getElementById("demo").innerHTML = "Puede acceder a la beca!";
      }
    }
  }
}

//beca2();
