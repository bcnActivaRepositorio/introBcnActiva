function nombres(){
    //variables
let nom    = document.getElementById("nom").value;
let prenom = document.getElementById("apelli").value;
let edad   = document.getElementById("edad").value;

//declaraciones

alert(`Me llamo${nom} ${prenom} y tengo ${edad} años`);

console.log(`Me llamo ${nom} ${prenom} y tengo ${edad} años`);

document.getElementById('demo').innerHTML = (`Me llamo${nom} ${prenom} y tengo ${edad} años`);


}

