/* User feedback */

/* Basic user feedback is done with a mixture of prompts, confirms and alerts */

/* Alerts */
alert('Hello World')
/* Displays a box with a message  */
/* And an okay button to remove it */

/* Confirm */
confirm('')
/* Displays a box with a message and 2 buttons */
/* An OK button and a cancel button */
/* If OK is pressed true is returned */
/* If Cancel is pressed false is returned */


/* Prompt */
prompt('What is your favorite color?')
/* Displays a box with a message and 2 buttons */
/* An OK button and a cancel button */
/* If OK is pressed, the input value is returned */
/* If Cancel is pressed null is returned */
/* You can also add a second parameter to prompt which will act as default value */

/* Prompt with text */
let userInput = prompt('What is your name?')

console.log(userInput)