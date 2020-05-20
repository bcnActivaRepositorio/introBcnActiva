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


     while(numUser !== randomNum && contador < maxInt){

          numUser = prompt("introduzca un número del 1 al 10"); 

          numUser = parseInt(numUser);

          contador ++;

        (numUser == randomNum && contador == 1)     ? alert(`Has acertado en ${contador} intento el número oculto ${randomNum} `) :

        (numUser == randomNum && contador < maxInt) ? alert(`Has acertado en ${contador} intentos el número oculto ${randomNum}`) :

        (contador == maxInt)                        ?alert("Game over") :  alert("Again!");
     }


     document.getElementById('modo').innerHTML = texto;
}
