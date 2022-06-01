
// Javascript Data types
/* COMMENTS IN GERMAN */

// (Strings): Das sind Zeichenketten ('' oder "", alles was in den Zeichen liegt. Können Buchstaben, Zahlen, Zeichen sein.)
var person_name = 'Victor'

// (Numbers): Das ist eine Zahl, ohne Quatationmarks "" oder ''
var person_age = 41

// (Boolean): Entweder TRUE or FALSE
var person_alive = true

// (Array): Listen. Diese macht man mit eckigen Klammern ALTGR [] und füllt sie mit QMs '' und trennt sie mit Kommas ,
var person_parents = ['Maria', 'Peter', 'Anna', 'Kim', 'Dominic', 'Sven']

// (Objects): Sammlung von Daten, kann alles sein. Wird definiert mit ALTGR {}
var person = {
  name :  'Victor',
  age : 41,
  alive : true,
  parents: ['Maria', 'Peter'] 
}

// Konsole für den Browser 
console.log(person_name); 
console.log(person_age);
console.log(person_alive);

// (Concatenation): Verkettung von strings mit plus + (person_name + person_age)
console.log(person_name + person_age); // = Victor 41


// (Concatenation mit Addition) Numbers + Numbers = Addition
console.log(person_age + person_age); // = 82

// (Concatenation ohne Addition (String + String)
console.log('41' + '41'); // = 4141

// Arrays in der Console:
console.log(person_parents[0]); // Ergibt = Maria, da sie als 0 die erste Person im Objekt von Zeile 15 ist


/* FACT: */
// Undefined: Nicht definiert
// Null: Kein Wert

