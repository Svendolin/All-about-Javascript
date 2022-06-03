/* 
For loops 
A for loop iterates as long as a condition is met
for (START: var i= 0; END i < 30; COUNTER i++) {
  console.log( 'the value of i is:', i)
}
*/

// Example loop #1
console.log('I am outside the loop')
// Output : I am outside the loop

for (let i = 0; i < 10; i++){
  console.log('I am in the loop :D')
}
// Output : 10 x I am in the loop :D



// Example loop #2
var counter = 0
for (let i = 0; i < 20; i++){
  counter = counter + 1
  console.log(counter)
}
// Output: 1, 2, 3 ... 20


for (let i= 0;  i < 30;  i++) {
  console.log( 'the value of i is:', i)
}
// Output: the value of i is: 0 ,the value of i is: 1, the value of i is: 2 ... the value of i is: 29



// Cars Exercise:
let cars = ['BMW', 'Audi', 'Volkwagen', 'Ford', 'Fiat'];


for (let i = 0; i < cars.length; i++) {
  if (cars[i] === 'Fiat') {
    console.log('There is a Fiat in the list')
  } else {
    console.log('The current item is not a fiat')
  }
}
// Output: 4x  'The current item is not a fiat' 
//         1x 'There is a Fiat in the list' 


// Arrow-Function ForEach-Loop VS Regular For-Loop:
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

const array2 = ['1', '2', '3'];

for(let i = 0; i < array2.length; i++){
  console.log(array2[i])
}