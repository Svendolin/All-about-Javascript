

const circle = document.querySelector('#circle')
let count = 0

circle.addEventListener('click' , e => {
  count++
  // 1. create a new square
  createBox()
  
  // 2. increase the counter
  displayCount()

  // 3. change bg-color of squares
  changeBG () 
})


function createBox () {
  // Gernerate coordinates
  const randomX = Math.floor( Math.random() * (window.innerWidth - 100) ) 
  const randomY =  Math.floor(Math.random() * (window.innerHeight - 100) )

  // console.log('randomX: ', randomX )
  // console.log('randomY: ', randomY )

  // Create element with a class and add to document
  const box = document.createElement('div')
  box.classList.add('box')
  document.querySelector('main').appendChild(box)
  box.setAttribute('style', `left: ${randomX}px; top: ${randomY}px;`)
}

function displayCount() {
  // console.log(count)
  // create a counter if non present
  if( !document.querySelector('.counter')){
    const counter = document.createElement('h2')
    counter.classList.add('counter')
    document.querySelector('main h1').after(counter)
  }

  // change the text of the counter to show the current count value
  document.querySelector('.counter').innerText = `Boxes created: ${count}`
}

function changeBG () {
  const boxes = document.querySelectorAll('.box')

  boxes.forEach((box, i) => { 
    box.style.backgroundColor = `rgb(${i}, ${i}, ${i})`
  })
}