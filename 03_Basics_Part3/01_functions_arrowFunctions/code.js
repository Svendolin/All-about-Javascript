

// square function
// Function Declaration

console.log(square(4)) // 16
function square ( n ) {
  return n * n
}

// in Arrow form ( Ab ES6 )
 let squareArrow = n => console.log(n * n) // 25
 // Initialisation ALWAYS after the arrow function:
 squareArrow(5) 

// calling a function
square(2) // 4
square(5) // 25 
square(90) // 1800
square(29) // 4081

// Function declarations are pushed to the top due to js hoisting
console.log(lordify('Svendolin', 'Nilfgaard'))

function lordify ( person, city ) {
  return person + ' of ' + city
}


// let lordMartin = lordify('Martin', 'Cali') // "Martin of Cali"
// console.log(lordify('Kim', 'Portugal'))

// In arrow form 
// var lordify = (person, city) => console.log(person + ' of ' + city)

// var userName = prompt('What is your name?')
// var userCity = prompt('Where do you come from?')
// lordify (userName, userCity)

// Function Expression
// var lordify = function (person, city) {
//   console.log(person + ' of ' + city)
// }
