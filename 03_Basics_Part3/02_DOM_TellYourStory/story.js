/** 
 * Using what you know about reading input fields and managing event do the following:
 * Create a story,, the story does not really need to make any sence, but some parts of the story will be user defined
 * Give the user 5 inputs and make them answer five questions. Put the answers of the user somewhere in your story.
 * For example. Question asked: What is your favorite person, User responce Ana. You can use Ana as your main character for the 
 * story.
 * 
 * You have to show the user the complete story by putting it in the document. You can also highlight the parts that were inputed
 * by the user.
 */
// BONUS 1: Validate your inputs
// If the value is empty then inform the user that the input should have a value
// BONUS 2: Prevent JS from creating multiple entries

// Check if button was clicked
document.querySelector('#submit').addEventListener('click', function(e){
  // Prevent page from reloading
  e.preventDefault()
  // Reset the content of the output element
  document.querySelector('.output').innerHTML = ''
  // Save your inputs into variables
  const enemy = document.querySelector('#enemy').value
  const hero = document.querySelector('#hero').value
  const item = document.querySelector('#item').value
  const fruit = document.querySelector('#fruit').value
  const age = document.querySelector('#age').value



  let output

  if ( enemy.length < 1 || hero.length < 1 || item.length < 1 || fruit.length < 1 || age.length < 1){
    // One or more inputs have no values, lets create an error
    output = `<span class="error">ALERT!:</span> One of more of your inputs have no values`
  }else {
    // All values have at least 1 character
    // Lets create the template
    // Create a template which will be filled by your inputs
    output = `
    Once upon a time there was a person called <span class="storyItem">${enemy}</span>.
    He was walking through the woods and found a <span class="storyItem"> ${item}</span> under an <span class="storyItem">${fruit}</span> tree.
    When grabing the item <span class="storyItem">${enemy}</span> was to find out that the item transformed into <span class="storyItem">${hero}</span>
    . <span class="storyItem">${hero}</span> then punched him in the face <span class="storyItem">${age}</span> times!
    ` 
  }
  
  // Create an element for your template
  let p = document.createElement('p')
  // Add your template to the element
  p.innerHTML = output
  // Append the element to the page
  document.querySelector('.output').appendChild(p)

})