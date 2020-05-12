
// Declaración variable nom. Global
let name = 'Robert Garcia';

//display innerHTML
const inHtml =  document.getElementById("demo").innerHTML = `El meu nom es ${name}`;

//display document.write()
const segon = document.write(`El meu nom es ${name}`);

//display console.log()
const tercer = (str) => `Hello, my name is ${str}`;
console.log(tercer(name));

//display alert
const quart = (str) => `Hello, my name is ${str}`;
alert(quart(name));

let x = 6;
let y = 3;
 const mayor = ( x < 10 && y > 1);
 const igual = (x < 10 || y > 1);
 console.log(mayor);
 console.log(igual);