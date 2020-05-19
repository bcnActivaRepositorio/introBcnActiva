function nombres () {
    //donde recoge valor del input
    let name = document.getElementById("name").value;



    //capitalize
    //https://stackoverflow.com/questions/32589197/how-to-capitalize-the-first-letter-of-each-word-in-a-string-using-javascript?page=1&tab=votes#tab-top
   // name = name.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + name.slice(1)).join('');
    name = name.toLowerCase()
    name = name.split(' ').map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');

    //check number
    //https://www.w3schools.com/jsref/jsref_isinteger.asp

    //display innerHTML
    //espai buit
    (name === "" || name.match(/^\d+$/)) ? document.getElementById("modo").innerHTML = "Introdueixi un nom!" :
                    document.getElementById("modo").innerHTML = `El meu nom es ${name}`;

//display console.log()
    (name === "" || name.match(/^\d+$/)) ? console.log(`Place a name, will you!`) :
                    console.log(`Hello, my name is ${name}`); 

//display alert
    (name === "" || name.match(/^\d+$/)) ? alert("Debe introducir un nombre") :
                    alert(`Hola, me llamo ${name}`);
}
//nombres();

