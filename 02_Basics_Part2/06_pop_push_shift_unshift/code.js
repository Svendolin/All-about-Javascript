// Sample Array
var shoppingList = [
  'bananas',
  'apples',
  'pears',
  'oranges',
  'pork',
  'chicken'
]

/* There is PUSH / POP / UNSHIFT / SHIFT, but who is who? Short:

  +[UNSHIFT]+ // -[SHIFT]- ...(items, items, items)... +[PUSH]+ // - [POP]-
   adds items // removes items ...(items of array)... adds items // removes items 
        at the beginning                                    at the end                         
*/


/* +[PUSH]+ */
let additionalItem = 'lettuce'

shoppingList.push(additionalItem)
// console.log(shoppingList)

let additionalItems = [
  'sauce',
  'water'
]

for (let i = 0; i < additionalItems.length; i++) {
  shoppingList.push(additionalItems[i])
}

/* +[UNSHIFT]+ */
shoppingList.unshift('redbull')
console.log(shoppingList)

/* -[POP]- */
let lastItem = shoppingList.pop()

/* -[SHIFT]- */
let firstItem = shoppingList.shift()