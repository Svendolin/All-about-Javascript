
// Select Submit Button

const button = document.querySelector('#send')

button.addEventListener('click', e => {
  e.preventDefault()
  // read input AFTER the user clicks the submit button
  const inputValue = document.querySelector('#name').value
  
  const nameOutput = document.createElement('p')
  // nameOutput.innerText = 'Hello ' + inputValue + '!'
  nameOutput.innerText = `Hello ${inputValue}!`
  // document.querySelector('body').append(nameOutput)

  document.querySelector('form').after(nameOutput)
})

// after: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/after
// before: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/before
// replaceWith: https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith