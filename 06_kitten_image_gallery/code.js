/* Very simple thumbnail image gallery with vanilla JS */

/* 1) Declare our VARIABLES */
// This is our current image (big one):
const current = document.querySelector('.main-img img')
// These are all the other smaller images in the thumbnail:
const images = document.querySelectorAll('.images img')
// The selected image will be shown in the smaller thumbnail in lower opacity
const opacity = 0.4


/* 2) We start by adding an EVENT LISTENER to all the thumbnails */
// Since we get an array from querySelectorAll, we need to iterate through it
// We can simply use the higher order function 'forEach' to iterate through the array
// forEach has a callback function which gives us a parameter we can use to access the current iteration
// in this case we call it img, which in a for loop would be the equivalent to images[i]
images.forEach(img =>
  // and we just add a click event listener FOR EACH of img in images
  // this event listener has a callback function which will be called as soon as an event takes place
  // in our case we called the callback function "imageClick and we defined it at the bottom of this js file
  img.addEventListener('click', imageClick) 
)
images[0].style.opacity = opacity


// 3) This is the CALLBACK FUNCTION which will run after the event listener is triggered
// since this is a callback function of an eventlistener, it has access to the event object 
// We can access it as the first parameter if the function and we save it in a variable 'e' (for event)
function imageClick(e) {

  // Reset opacity of images
  images.forEach(img => img.style.opacity = 1)

  // Change current image to source of clicked image
  // remember that we can know which image was clicked, by getting the target of the event.
  // This target is also an object which contains lots of information, one of it's key/value pairs is the src 
  current.src = e.target.src

  // add fade effect to big image
  current.classList.add('fade-in')

  // Timer to remove class
  setTimeout( ()=> {
    current.classList.remove('fade-in')
  }, 500)
  

  // Add opacity to clicked thumbnail
  e.target.style.opacity = opacity
}