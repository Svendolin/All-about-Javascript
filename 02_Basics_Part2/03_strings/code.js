// To get a letter of a word we need to know what it's index (position) is 
/*
 
Word : Javascript

0 -> J
1 -> a
2 -> v
3 -> a
4 -> s
5 -> c
6 -> r
7 -> i
8 -> p
9 -> t


*/

var word = 'Javascript'

console.log( word.length ) // 10
console.log( word[0] ) // J


// Strings are NOT mutable = "Nicht Veränderbar"
word[0] = 'X' // This won't do anything: word = 'Xavascript' DOESNT WORK, It still stays at Javascript
// We would have to redefine the variable

console.log(word) // Javascript

var myString1 = "He didn't do it"
var myString2 = '"This is a quote"'
// Character Escaping
var alternative1 = 'He didn\'t do it'
var alternative2 = "\"This is a quote\""

// ABC, xyz Exercise
/* The goal of this exercise is to create code that will test if a word in an array starts
with the letter a, b or c or ends with the letter x, y or z */
var myArray = ['Popcorn', 'Acorn', 'Lolzz', 'Ant', 'Asterix', 'Fish']

// First character of Popcorn myArray[0][0]
// Last character of Popcorn myArray[0][myArray[0].length -1]

for (var i = 0; i < myArray.length; i++){
  // First letter from current word iteration
  var firstLetter = myArray[i][0] 
  // Last letter from current word iteration
  var lastLetter = myArray[i][myArray[i].length - 1]

  if( firstLetter === 'A' || firstLetter === 'B' || firstLetter === 'C' || lastLetter === 'x' || lastLetter === 'y' || lastLetter === 'z'){
    console.log(myArray[i])
  }
}