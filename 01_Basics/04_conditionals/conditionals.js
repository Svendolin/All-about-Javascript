// Conditionals 
// Is basically code that will execute if a condition is true
/*
Syntax:
if (CONDITION (Vergleich)) {
  Statement
  Code we want to execute, if condition is true
} else (OTHER CONDITION (Vergleich)) {
  Statement
  Code we want to execute, if condition is false
}
*/

var currentWater = 1
var warningWater = 200
var requiredWater = 100

// If enough water: Tell user there is enough water
// If NOT enough water: Tell user to refill tray


if ( currentWater >= requiredWater ) {
  console.log('there is enough water')
} else {
  console.log('refill tray')
}

if (currentWater <= warningWater) {
  console.log('Warning! Running low on water, refill tray soon')
} 



if ( 100 > 1 ) {
  console.log('A hundred is more than one')
} 

// Coffee Machine with console.log

var current_beans = 200
var current_water = 150
var min_beans = 150
var min_water = 150

var pluggedIn = true
var isOn = true
var item = 'Coffee'

// To recognize the structure here: It is best to click on the initial brace { of "if" to see "else". VSC shows the end bracket }
if (pluggedIn === true && isOn === true){
  console.log('Items are being displayed')
  if( item ) {
    if( item === 'Coffee'){
      if (current_beans >= min_beans && current_water >= min_water){
        console.log('Coffee TIME :D')
      } else {
        console.log('Not enough Water or Coffee')
      } 
    } else {
      console.log('Your item is not available at the moment')
    }
  } else {
    console.log('Please select an item')
  }
} else {
  console.log('Turn me on pls')
}