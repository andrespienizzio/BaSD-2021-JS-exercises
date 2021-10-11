/*****************************
* 4) If / Else
******************************/

/* a) Create a random number between 0 and 1 using the Math.random() function, if the value is greater than 
or equal to 0.5 show an alert with the message "Greater than 0.5" and if not an alert with the message "Lower 
than 0.5". */

var randomNumber = Math.random();

console.log(randomNumber); 

if (randomNumber >= 0.5) {
    alert('Greater than 0.5');
} else {
    alert('Lower than 0.5');
}

/* b) Create an “Age” variable that contains an integer number between 0 and 100 and show the following 
alert messages: 

i) "Bebe" if the age is less than 2 years;
ii) “Nino” if the age is between 2 and 12 years old;
iii) “Adolescente” between 13 and 19 years old;
iv) “Joven” between 20 and 30 years old;
v) “Adulto” between 31 and 60 years old;
vi) “Adulto mayor” between 61 and 75 years old;
vii) “Anciano” if he is over 75 years of age. */

var Age =  25;

if (Age < 2) {
    alert ('Bebe');
} else if (Age >= 2 && Age <= 12 ) {
    alert ('Nino');
} else if (Age >= 13 && Age <= 19 ) {
    alert ('Adolescente');
} else if (Age >= 20 && Age <= 30 ) {
    alert ('Joven');
} else if (Age >= 31 && Age <= 60 ) {
    alert ('Adulto');
} else if (Age >= 61 && Age <= 75 ) {
    alert ('Adulto mayor');
} else {
    alert ('Anciano');
}
