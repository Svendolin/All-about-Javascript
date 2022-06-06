
// // Select an element using id
// const myP = document.getElementById('first')

// // console.log(myP)

// myP.style.backgroundColor = 'red'
// myP.innerText = 'I was changed with JS'

// // Select and element using class
// // Is always an array
// const bold = document.getElementsByClassName('bold')

// // console.log(bold)

// for ( let i = 0; i < bold.length; i++) {
//   // console.log(bold[i])
// }

// const second = document.getElementsByClassName('second')

// // console.log(second[0])

// // Select elements by Tag

// const allPTags = document.getElementsByTagName('p')

// // Get any single element using css query

// const firstPTag = document.querySelector('#first')
// const secondPTag = document.querySelector('.second')
// const firstBold = document.querySelector('.bold')

// console.log(firstPTag)
// console.log(secondPTag)
// console.log(firstBold)

// const allBolds  = document.querySelectorAll('.bold')

// console.log(allBolds)


// ----------------------------------------- EXCERCISE ----------------------------------------------- //

document.querySelector('h1').style.fontFamily = 'sans-serif'

const listItems = document.querySelectorAll('li')

listItems.forEach(listItem => {
  listItem.style.textDecoration = 'underline'

})


const allPTags = document.querySelectorAll('p')
allPTags.forEach( pTag => {
  pTag.style.color = 'green'
})

document.querySelector('#first').style.color = 'pink'
document.querySelector('.second').style.color = 'red'

const allBolds = document.querySelectorAll('.bold')
allBolds.forEach( boldElement => {
  boldElement.style.fontWeight = 'bolder'
})