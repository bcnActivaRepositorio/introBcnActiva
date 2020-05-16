function laMalaEducacion() {
  let edad = prompt("¿Cuantos años tienes?");

  if (edad <= 5) {
    alert("Debes estudiar pre-escolar");
  } else if (edad <= 12) {
    alert("Debes estudiar primaria");
  } else if (edad <= 16) {
    alert("Debes estudiar ESO");
  } else if (edad <= 18) {
    alert("Debes estudiar Bachillerato");
  } else {
    alert("Debes estudiar FP o Universidad");
  }
}
