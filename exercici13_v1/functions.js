function numAl() {
  /**
     * El ejercicio consiste en que cuando se cargue la página, mediante la función: prompt("");
Le pedimos al usuario que introduzca números del 1 al 10 hasta que adivine el número escogido por el programa.
Una vez el usuario ha acertado el número escogido, saldrá un alert por pantalla diciendo: Has acertado! El número era “x” y has necesitado “y” intentos para acertar!
     * 
     */

     //recoger dato user
     //generar random
     //guardar ambos
     //do ==> compara random y dato while ==> no lo adivines

     //declaramos dato user
     let numUser;

     //declaramos random
     let randomNum = Math.ceil((Math.random() * 10));

     //contador
    contador = 0;

    //let numInte
    maxInt = 5;

     console.log(randomNum);

     //respuesta pantalla
     let texto = ("Hasta aquí!");



    do{
        numUser  = prompt("introduzca un número del 1 al 10"); 

        //numeral
         numUser = parseInt(numUser);

        contador ++;

        //objeto datos
          let datos = {
          data1 : (numUser == randomNum && contador == 1),   
   
          data2 : (numUser == randomNum && contador < maxInt), 
   
          data3 : (contador == maxInt)  
        };


        switch (true) {
             case datos.data1:

                  alert(`Has acertado en ${contador} intento el número oculto ${randomNum} `);

                  break;

             case datos.data2:

                  alert(`Has acertado en ${contador} intentos el número oculto ${randomNum} `);

                  break;
             case datos.data3:

                  alert("Game over");

                  break;
        
             default:

                    alert("Again");

                  break;
        }

        

    }while(numUser !== randomNum && contador < maxInt);


     document.getElementById('demo').innerHTML = texto;
}
