function numberOps(){

    let numOne = document.getElementById("num1").value;
    let numTwo = document.getElementById("num2").value;

    document.getElementById("demo").innerHTML = (`El resultado de la suma es ${parseInt(numOne) + parseInt(numTwo)}`);

    document.getElementById("demo1").innerHTML = (`El resultado de la resta es ${parseInt(numOne) - parseInt(numTwo)}`);

    document.getElementById("demo2").innerHTML = (`El resultado de la multiplicación es ${parseInt(numOne) * parseInt(numTwo)}`);

    document.getElementById("demo3").innerHTML = (`El resultado de la división es ${parseInt(numOne) / parseInt(numTwo)}`);
}

