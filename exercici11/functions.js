
function numPal(){
    //recogida datos
    let howMany = document.getElementById('num').value;

    //numero
    howMany = parseInt(howMany);

    //respuesta
/*     let text = "";

    for( let i = 1; i <= howMany ; i++){
        text += prompt() + "<br>";
    }

    document.getElementById('modo').innerHTML = text; */
    let text = [];

    for (let i = 0; i < howMany; i++){
        text.push(prompt("talk to me" + (i + 1) + ": "));
    }
    for(let i = 0; i < howMany; i++){
        document.getElementById('modo').innerHTML = (text[i]+'<br>');
    }
    
}