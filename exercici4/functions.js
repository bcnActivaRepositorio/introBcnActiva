// OPERADORES TERNARIOS
/* function cotxe(){
    let puerta = prompt("¿Cuantas puertas tiene el coche");
//no estrictly!!
    return (puerta == 3) ? alert("El coche es deportivo") :
           (puerta == 5) ? alert("El coche es familiar") : alert(`Seguro que el coche tiene ${puerta} puertas`);

}
cotxe(); */

function cotxe2() {
  let puerta2 = prompt("¿Cuantas puertas tiene el coche");
  //no estrictly!!
  if (puerta2 === "3") {

    alert("El coche es deportivo");

  } else if (puerta2 == "5") {

    alert("El coche es familiar");

  } else {
      
    alert(`¿Seguro que el coche tiene ${puerta2} puertas?`);
  }
}
cotxe2();
