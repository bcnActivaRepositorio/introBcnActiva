const _ZODIAC = [
  ["Capricornio", 119], // Jan 19
  ["Acuario", 218], // Feb 19
  ["Piscis", 320], // Mar 20
  ["Aries", 419], // Apr 19
  ["Taurus", 520], // May 20
  ["Geminis", 620], // Jun 20
  ["Cáncer", 722], // Jul 22
  ["Leo", 822], // Aug 22
  ["Virgo", 922], // Sep 22
  ["Libra", 1022], // Oct 22
  ["Scorpio", 1121], // Nov 21
  ["Sagitario", 1221], // Dec 21
  ["Capricornio", 1231], // Dec 31
];

function horoscopo(){
  //recogida de datos
  let diaMes = parseInt(document.getElementById("num1").value);
  let mesAny = parseInt(document.getElementById("meses").value);


  for (let [ sign, limit ] of _ZODIAC)
    (mesAny * 100 + diaMes <= limit) ?
      
      document.getElementById('demo').innerHTML = (`El signo de tu horóscopo es: ${sign} `) :
      document.getElementById('demo').innerHTML = (` ${mesAny} no es un mes del a&ntildeo`);
      //return sign;    
}

// El codigo NO es mio. CAVE.ON @stackoverflow Me pareció muy interesante el approach

/* const _ZODIAC = [
  [ 'Capricorn',    119 ], // Jan 19
  [ 'Aquarius',     218 ], // Feb 19
  [ 'Pisces',       320 ], // Mar 20
  [ 'Aries',        419 ], // Apr 19
  [ 'Taurus',       520 ], // May 20
  [ 'Gemini',       620 ], // Jun 20
  [ 'Cancer',       722 ], // Jul 22
  [ 'Leo',          822 ], // Aug 22
  [ 'Virgo',        922 ], // Sep 22
  [ 'Libra',       1022 ], // Oct 22
  [ 'Scorpio',     1121 ], // Nov 21
  [ 'Sagittarius', 1221 ], // Dec 21
  [ 'Capricorn',   1231 ]  // Dec 31
];

const getZodiacSign = (day, month) => {

  for (let [ sign, limit ] of _ZODIAC)
    if (month * 100 + day <= limit)
      return sign;
      
} */