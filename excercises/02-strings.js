/*****************************
* 2) Strings
******************************/

/* a) Create a string variable with at least 10 characters and convert all the text to uppercase (use UpperCase). */

var string_2A = 'República Argentina';

console.log(string_2A.toUpperCase());

/* b) Create a string type variable with at least 10 characters and generate a new string with the first 5 characters 
storing the result in a new variable (use substring). */

var string_2B = 'Confederación Argentina';

var str_5_Char = string_2B.substring(0,5);

console.log(str_5_Char);

/* c) Create a string type variable with at least 10 characters and generate a new string with the last 3 characters 
storing the result in a new variable (use substring). */

var string_2C = 'Provincias Unidas del Río de la Plata';

var str_Last_3Char = string_2C.substring(34);

// var strLast3Char = string2c.substring(string2c.length-3); -alternative-

console.log(str_Last_3Char);

/* d) Create a string type variable with at least 10 characters and generate a new string with uppercase in the first 
letter and lowercase in the rest. Save the result in a new variable (use substring, toUpperCase, toLowerCase, and 
the + operator). */

var string_2D = 'nación Argentina';

var str_2D_Upp = string_2D.substring(0,1).toUpperCase();

var str_2D_Low = string_2D.substring(1).toLowerCase();

// var string2DFinal2 = string2D.substring(0,1).toUpperCase() + string2D.substring(1).toLowerCase(); -simplification-

var str_2D_Final = str_2D_Upp + str_2D_Low;

console.log(str_2D_Final);

/* e) Create a string type variable with at least 10 characters and one blank space. Find the position of the first 
blank space and save it in a new variable (use indexOf). */

var string_2E = 'Virreinato del Rio de la Plata';

var str_2E_Blank = string_2E.indexOf(' ');

console.log(str_2E_Blank);

/* f) Create a string type variable with at least 2 long words (10 characters and some space in between). Use the 
methods from the previous exercises to generate a new string containing the main letter of both words in uppercase 
and the rest in lowercase letters (use indexOf, substring, toUpperCase, toLowerCase, and the + operator). */

var string_2F = 'CONSTITUCIÓN NACIONAL';

console.log(string_2F.indexOf(' '));

var str_2F_Low = string_2F.toLowerCase();

var str_2F_Final = str_2F_Low.substring(0,1).toUpperCase() + str_2F_Low.substring(1,13) +
                   str_2F_Low.substring(13,14).toUpperCase() + str_2F_Low.substring(14);

console.log(str_2F_Final);
