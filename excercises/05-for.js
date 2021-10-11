/*****************************
* 5) For
******************************/

/* a) Create an array that contains 5 words and loop through that array using JavaScript For to show an alert
using each of the words. */

var array_5Words = ['corrientes', 'chubut', 'rioja', 'misiones', 'córdoba'];

for (var i = 0; i < array_5Words.length; i++) {
    alert (array_5Words[i]);
}

/* b) To the previous array, convert the first letter of each word to uppercase and show an alert for each 
modified word. */

for (var i = 0; i < array_5Words.length; i++) {
    alert (array_5Words[i].substring(0,1).toUpperCase() + array_5Words[i].substring(1).toLowerCase());
}

/* c) Create a variable called "sentence" that has an empty string, then go through the array from point a) with 
a For loop to save each word within the sentence variable. At the end show a single alert with the complete chain. */

var sentence = '';

for (var i = 0; i < array_5Words.length; i++) {
    sentence += array_5Words[i] + ' ';
}
alert(sentence);

/* d) Create an empty array with a For loop of 10 repetitions. Fill the array with the repetition number, that is,
at the end of the execution of the for loop there should be 10 elements within the array, from number 0 to number 9. 
Show the final array through the browser console (use console.log). */

var empty = [];

for (var i = 0; i < 10; i++) {
    empty += i + ' ';
}

console.log(empty);