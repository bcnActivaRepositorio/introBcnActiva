function numAl(){
    //recogida datos
   let howMany = document.getElementById('num').value;

   //declaracion arr
   let texto     = "";
   let paro      = [];
   let mayorEdad = [];
   let estudios  = [];
   let nombre    = [];
   let nombre1   = [];
   let beca      = [];
   let noBeca    = [];


   //preguntas

   //primer for para ver cuantas veces aparece prompt


   for(let i = 0; i < howMany; i++){
    mayorEdad = prompt("¿Mayor de edad? SI/ NO").toLowerCase();
    estudios  = prompt("¿Título universitario? SI/ NO").toLowerCase();
    paro      = prompt("¿Desempleado? SI/ NO").toLowerCase();
    
     ((mayorEdad == "si" && estudios == "si") || paro == "si") ? beca += nombre.push(prompt("¿Cual es su nombre?")) :
     ((mayorEdad == "no" && estudios == "no") || paro == "no") ? noBeca += nombre1.push(prompt("¿Cual es su nombre?")) :
                                                                 texto = ("Hable con Joan Serrano y él le dirá!");

   }

document.getElementById("modo").innerHTML = `Los alumnos becados son: ${nombre}`;
document.getElementById("modo2").innerHTML = `Los alumnos NO becados son: ${nombre1}`;
}
/**
 * A la atención de posibles navegantes:
 * Aunque imprimo la lista NO LO HAGO correctamente
 * beca y noBeca se tragan como basura el indice de nombres
 * me falta concretar eso, así NO VALE!
 */