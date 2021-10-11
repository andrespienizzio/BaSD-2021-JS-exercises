/*****************************
* 6) Functions
******************************/

/* a) Create a sum function that receives two numerical values ​​and returns the result. Execute the function 
and save the result in a variable, showing the value of the variable in the browser console. */

function suma(number1, number2) {
    return number1 + number2
}

var resultado = suma(2,3);

console.log(resultado);

/* b) To the previous sum function, add a validation to control if any of the parameters is not a number, 
show an alert clarifying that one of the parameters has an error and return the NaN value as a result. */

function suma(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) { 
        alert('One of the parameters has an error');
        return NaN;
    } else {
        return number1 + number2;
    }
}

// console.log(suma('casa',5));

/* c) Create a validate integer function that receives a number as a parameter and returns true if it is 
an integer number. */

function N_entero(numero) {
    return Number.isInteger(numero);
}

// console.log(N_entero(5.5));

/* d) To the sum function of exercise 6b) add a call that validates that the numbers are integers. In case 
there are decimals, show an alert with the error and return the number converted to integer number (rounded). */

function suma(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) { 
        alert('One of the parameters has an error');
        return NaN;
    } else if (Number.isInteger(number1) && Number.isInteger(number1)) {
        return number1 + number2;
    } else { 
        alert('One parameter is not a integer number');
        return Math.round(number1 + number2);
    }
}

// console.log(suma(5,'cosa'));
// console.log(suma(5.9,10));
console.log(suma(5, 10)); 

/* e) Convert the validation of exercise 6d) into a separate function and call it within the sum function 
testing that everything continues to work the same. */

function validacion(number1, number2) {
    if (Number.isInteger(number1) && Number.isInteger(number1)) {
        return number1 + number2;
    } else { 
        alert('One parameter is not a integer number');
        return Math.round(number1 + number2);
    }
}

function suma(number1,number2) {
    return (validacion(number1,number2)); 
}

console.log(suma(6.7, 10));
