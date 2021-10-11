/*****************************
* 2) Strings
******************************/

/* a) Create a string variable with at least 10 characters and convert all the text to uppercase (use UpperCase). */

var string2A = 'República Argentina';

console.log(string2A.toUpperCase());

/* b) Create a string type variable with at least 10 characters and generate a new string with the first 5 characters 
storing the result in a new variable (use substring). */

var string2B = 'Confederación Argentina';

var str5Char = string2B.substring(0,5);

console.log(str5Char);

/* c) Create a string type variable with at least 10 characters and generate a new string with the last 3 characters 
storing the result in a new variable (use substring). */

var string2C = 'Provincias Unidas del Río de la Plata';

var strLast3Char = string2C.substring(34);

// var strLast3Char = string2c.substring(string2c.length-3); -alternative-

console.log(strLast3Char);

/* d) Create a string type variable with at least 10 characters and generate a new string with uppercase in the first 
letter and lowercase in the rest. Save the result in a new variable (use substring, toUpperCase, toLowerCase, and 
the + operator). */

var string2D = 'nación Argentina';

var string2DMay = string2D.substring(0,1).toUpperCase();

var string2DMin = string2D.substring(1).toLowerCase();

// var string2DFinal2 = string2D.substring(0,1).toUpperCase() + string2D.substring(1).toLowerCase(); -simplification-

var string2DFinal = string2DMay + string2DMin;

console.log(string2DFinal);

/* e) Create a string type variable with at least 10 characters and one blank space. Find the position of the first 
blank space and save it in a new variable (use indexOf). */

var string2E = 'Virreinato del Rio de la Plata';

var string2EBlank = string2E.indexOf(' ');

console.log(string2EBlank);

/* f) Create a string type variable with at least 2 long words (10 characters and some space in between). Use the 
methods from the previous exercises to generate a new string containing the main letter of both words in uppercase 
and the rest in lowercase letters (use indexOf, substring, toUpperCase, toLowerCase, and the + operator). */

var string2F = 'CONSTITUCION NACIONAL';

console.log(string2F.indexOf(' '));

var string2FMin = string2F.toLowerCase();

var string2FSolution = string2FMin.substring(0,1).toUpperCase() + string2FMin.substring(1,13) +
                       string2FMin.substring(13,14).toUpperCase() + string2FMin.substring(14);

console.log(string2FSolution);
