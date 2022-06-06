

// Select Element you want to change
document.querySelector('h1').innerText = 'Nice Page'

// Select ul 
document.querySelector('ul').innerHTML = '<li>Angels</li><li>Unicorns</li><li>Rainbows</li>'

document.querySelector('p:first-of-type').innerText = 'A world with unicorns and rainbows ...'
document.querySelector('p:last-of-type').innerText = 'is a nice world :D'


// Create  Elements using JS
// create element in a variable
const credits = document.createElement('small')
// add content to the element
credits.innerHTML = '&copy; Copyright'
// add element to the page
document.querySelector('.box').appendChild(credits)


// Set attributes for elements

document.querySelector('p').setAttribute('id', 'firstP')
document.querySelector('p').removeAttribute('id')
document.querySelector('p').setAttribute('style', 'background-color : red')


// Remove elements

document.querySelector('h1').remove()


// Exercise Shopping List

const shoppingList = [
  'Apples',
  'Bananas',
  'Mangos',
  'Cola',
  'Redbull',
  'Coffee',
  'Rice',
  'Bread'
]

document.querySelector('.shoppingList').innerHTML = ''

// Alternative

// document.querySelectorAll('.shoppingList > li').forEach( li => {
//   li.remove()
// })

shoppingList.forEach(item => {
  const li = document.createElement('li')
  li.setAttribute('class','list-item')
  li.innerText = item
  document.querySelector('.shoppingList').appendChild(li)
})


// Alternative
// shoppingList.forEach(item => {
//   document.querySelector('.shoppingList').innerHTML += `<li class="list-item">${item}</li>`
// })

