document.querySelector('button').addEventListener('click', validateForm)

function validateForm (e) {
  e.preventDefault()
  console.log('Form was submitted')



  // Input Data:
  let data = {}

  // Error Messages ( for later )
  let validationErrors = {}

  // Create properties for data object
  data.firstName = document.querySelector('#first-name').value
  data.lastName = document.querySelector('#last-name').value
  data.email = document.querySelector('#email').value
  data.message = document.querySelector('#message').value

  console.log(data)

  // 1. Was the First Name inputed

  if(!data.firstName) {
    // Show error
    console.error('No first Name')
    validationErrors.firstName = 'No first name provided'
  } else {
    // Continue :D 
    console.info('First Name: ', data.firstName)
  }

  // 2. Was the Last Name inputed

  if(!data.lastName) {
    // Show error
    console.error('No last Name')
    validationErrors.lastName = 'No last name provided'
  } else {
    // Continue :D 
    console.info('Last Name: ', data.lastName)
  }

  // 3. Was the email inputed
    //-> Is it a valid email address 

  if(!data.email) {
    // Show error
    console.error('No email')
    validationErrors.email = 'No email was provided'
  } else {
    // Continue :D 
    console.info('Email: ', data.email)
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Test if email is an email (using our regex)
    if(!emailRegex.test(data.email)){
      //email is not a match
      validationErrors.email = 'Your email is not valid (example: example@example.com)'
      console.error('Email is not valid')
    }else {
      console.info('Email is valid')
    }
  }

  // 4. Does it have more than 34 characters.


  if(!data.message) {
    // Show error
    console.error('No Message')
    validationErrors.message = 'No message provided'
  } else {
    // Continue :D 
    console.info('Message: ', data.message)

    if( data.message.length < 34 ) {
      console.error('No enough characters (must be 34)')
      validationErrors.message = 'The message is to short (must have 34 chars)'
    }
  }

  

  if (Object.keys(validationErrors).length > 0){
    // Display Error Messages
    displayErrors(validationErrors)
  } else { 
    console.log('sending data')
    document.body.innerHTML = `<h1 style="color:lime; font-family:sans-serif;">Your message has been sent, we will be in contact with you :)</h1>`
    
  }

}



function displayErrors(validationErrors) {
  
  if ( validationErrors.firstName ) {
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.firstName
    document.querySelector('#first-name').after(errorContainer)
  }

  if ( validationErrors.lastName ) {
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.lastName
    document.querySelector('#last-name').after(errorContainer)
  }

  if ( validationErrors.email ) {
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.email
    document.querySelector('#email').after(errorContainer)
  }

  if ( validationErrors.message ) {
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.message
    document.querySelector('#message').after(errorContainer)
  }
}




document.querySelector('textarea').addEventListener('input', e => {
  //1.  HOW long is the current textarea? 
  //2. Write the value in the page

  if(!document.querySelector('.counterBox')){
    const counterBox = document.createElement('span')
    counterBox.classList.add('counterBox')
    counterBox.innerHTML = e.target.textLength
    e.target.after(counterBox)
  } else {
    document.querySelector('.counterBox').innerHTML = e.target.textLength
  }

  if (e.target.textLength < 34) {
    document.querySelector('.counterBox').style.color = 'red'
  } else { 
    document.querySelector('.counterBox').style.color = 'lime'
  }

})

