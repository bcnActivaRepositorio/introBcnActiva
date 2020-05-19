function nombres(){
    //variables
let nom    = document.getElementById("nom").value;
let prenom = document.getElementById("apelli").value;
let edad   = document.getElementById("edad").value;

//bonico
nom = nom.split(' ').map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');

prenom = prenom.split(' ').map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');


//respuesta
let text;
     
    //espai buit i numeros string
    (nom === "" ) ? text = ("Introduzca su nombre!") :
    (nom.match(/^\d+$/)) ? text = ("¿Números en un nombre") :
    (prenom === "" ) ? text = ("Introduzca su apellido!") :
    (prenom.match(/^\d+$/)) ? text = ("¿Números en un apellido?") :
    (edad.match(/^\d+$/)) ?  text = (`Me llamo ${nom} ${prenom} y tengo ${edad} años`) : text = ("Debe introducir un numérico");
//pintados
document.getElementById('demo').innerHTML = text;

//console
console.log(text);

//alert
alert(text);

}

