/* Arrays */

/* Array are basically lists of values */
/* They can have strings : */
var myArr = ['popcorn', 'coke', 'candy'];
/* They can also have Numbers */
var myArr2 = [2, 3, 4];
/* They can also have Booleans */
var myArr3 = [true, true, false];
/* Basically any datatype you can think of, even objects */
var myArr4 = [{color: 'red', age: 26 },{color: 'blue', age: 90 }]
// Or you can also have arrays in arrays
// This is knowns a a multidimensional array

var multi = [
  [1, 2, 3, 4, 5],
  ['Luca', 'Chin', 'Stefan'],
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [15, 33, [
      'apple',
      'banana',
      'mango'
    ]]
  ]
]


console.log(multi[1][1])// Chin


console.log(multi[2][1][2])// 6


console.log(multi[2][3][2][1])// banana