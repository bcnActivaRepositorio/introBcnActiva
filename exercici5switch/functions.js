//Ternarios

function laMalaEducacion() {
    //recogida datos
    let edad = (prompt("How old are you?"));
    edad = edad.replace(/\s+/g,'');
    edad = parseInt(edad)

   
  
    //obj key/value
  
    let edades = {
      data1 : (edad <= 5),
      data2 : (edad <= 12),
      data3 : (edad <= 16),
      data4 : (edad <= 18),
    };
  
  
  // switch con obj SIEMPR true! Si no no accede al obj
    switch (true) {
      case edades.data1:
          alert(`Debes estudiar pre-escolar`);
        break;
  
      case edades.data2:
          alert(`Debes estudiar Primaria`);
        break;
  
      case edades.data3:
          alert(`Debes estudiar ESO`);
        break;
  
      case edades.data4:
          alert(`Debes estudiar Bachillerato`);
        break;
  
      default:
          (edad <= 99) ? alert(" La universidad te llama") : alert("Descanse la mente, se lo ha ganado!");
         
        break;
    }
  };