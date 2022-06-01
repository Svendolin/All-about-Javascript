// There are many operators in Javascript that help us control and manipulate variables in many ways
// Here are the most important ones

// (=)
// The assigment operator = We use this operator to asign values to variables
let myNum = 24;

// (+) 
// Addition operator = Can be used to add 2 numbers together or to concatenate 2 strings

// with number ( adds )
// with String ( Concatenation )

let myStr1 = "Hello";
let myStr2 = "World";
let separator = " ";

let conc = myStr1 + separator + myStr2;
// console.log(conc)

// (-) and (*) and (/)
// (- Substraction operator) (* multiplication operator) (/ division operator)
let someNumber = 15;

console.log(myNum - someNumber) // -76 (Number)
console.log(myNum * someNumber) // 2400 (Number)
console.log(myNum / someNumber) // 0.24 (Number)
console.log(24 * 32 - 200 + (3 * 4)) // 580 (Number)

// (>) or (<) (outputs a true or false)
// In strings, number of characters will be compared
// In numbers, the values are compared
console.log( 3 > 1 ) // True
console.log( 'foo' > 'fo' ) // True (amount of letters)

// (==)
// Equal operator = Check if value is the same (INHALT)
console.log('100' == 100) // True

// (===)
// Strictly equal operator = Check if value AND data type is the same
console.log(someNumber === 100)// false

// (<=) and (=>)
// Bigger-or equal than vs smaller-or equal than
console.log(someNumber <= 100) // true
console.log(someNumber >= 100) // false

// (!=) and (!==)
// NOT operator (!)
console.log( someNumber != 100) // ==
console.log( someNumber !== 100) // ===

// (&&)
// AND Operator = Combine the values. IMPORTANT: BOTH values have to be correct to say true
console.log( 100 > 80 && 100 < 200) // true
console.log( 100 > 80 && 300 < 200) // false

// (||)
// OR Operator = (ALTGR7) This allows values to be requested individually. IMPORTANT: NOT BOTH outputs have to be correct to say true
console.log( 100 > 80 || 100 < 200) // true
console.log( 100 > 80 || 300 < 200) // true


// (%)
// Modulus Operator || With this we can guess the REST to find odd numbers = 1andup (uneven) / even= always 0 (even) numbers
console.log(6 / 2) // 3
console.log(7 / 2) // 3.5


// Get rest with modulo
console.log(6 % 2) // 0 = Wir erhalten 0x einen Rest = 0
console.log(7 % 2) // 1 = Wir erhalten 2x einen Rest von 0.5 = 1
console.log(2687 % 14)

// Check if number is even
console.log(7 % 2) // if value is > 0 


