const cotxe = () =>{

    //datos
    let doors = prompt("How many doors do have your car?");
    doors = parseInt(doors);
  
    //obj doors
    let puertas = {
      data1 : (doors === 3),
      data2 : (doors === 5),
      data3 : (doors != isNaN)
    };
  
    switch (true) {
      case puertas.data1:
          alert("El coche es deportivo");
        break;
  
      case puertas.data2:
          alert("El coche es familiar");
        break;
  
      case puertas.data3:
          alert("Introduzca un número, pls");
        break;
    
      default:
          alert("¿Seguro que es un coche?");
        break;
    }
  
  }
  