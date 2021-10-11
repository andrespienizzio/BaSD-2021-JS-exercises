/*****************************
* 3) Arrays
******************************/

/* a) Given the following matrix: ["January", "February", "March", "April", "May", "June", "July", "August",
"September", "October", "November","December "] show months 5 and 11 in the console (use console.log). */

var array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
'October', 'November', 'December'];

console.log(array[4], array[10]);

/* b) Order the array of months alphabetically and display it in the console (use sort). */

console.log(array.sort());

/* c) Add an element to the beginning and the end of the array (use unshift and push). */

var array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
'October', 'November', 'December'];

array.unshift('Comienzo');
array.push('Final');

console.log(array);

/* d) Remove an element from the beginning and from the end of the array (use shift and pop). */

array.shift();
array.pop();

console.log(array);

/* e) Reverse the order of the array (use reverse). */

console.log(array.reverse());

/* f) Unite all the elements of the array in a single string where each month is separated by a dash - (use join). */

var array = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
'October', 'November', 'December'];

var unitedArray = array.join('-');

console.log(unitedArray); 

/* g) Create a copy of the month array that contains May through November (use slice). */

var slicedArray = array.slice(4,11);

console.log(slicedArray);
