

const trigger = document.querySelector('.trigger')

// For every second box, add a class classed even

console.log(9 % 2)


let counter = 0
trigger.addEventListener('click', function (e){
  counter++
  console.log(e)
  // 1. Create a box element 
 
  const box = document.createElement('div')
  if(counter % 2 == 0){
    box.classList.add('even')
  }
  // 2. Add a class "box" to the created element
  box.setAttribute('class', 'box')

  

  // Alternative
  // box.classList.add('box')
  // box.classList.remove('box')
  // box.classList.toggle('box')
  box.innerText = counter
  // 3. Append the created element in the 'container' element
  document.querySelector('.container').appendChild(box)
})


// Alternative
// trigger.addEventListener('click', e => {
//   document.querySelector('.container').innerHTML += '<div class="box"></div>'
// })


