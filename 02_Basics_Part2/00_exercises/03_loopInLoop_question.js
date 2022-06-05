/**
 * You are in charge of managing social channels for your company.
 * One of your tasks is to get go over user messages and change any negative 
 * comments to possitive comments.
 * You have grown tired of doing this and want to automate the process.
 * 
 * You have already prepared a bit and created 2 dictionaries.
 * The first one: goodwords, is a list of possitive words that you can use to replace negative words with
 * The second one: evilwords, is a list of words that you know are negative and need to be removed.
 */


let goodwords = ['amazing', 'intriguing', 'versatile'];
let evilwords = ['boring', 'useless', 'obsolete'];

let messages = [
  'Learning to code is very important in the modern age',
  'JavaScript is an interesting and useless programming language',
  'There is nothing more useless than programming',
  'I think writing code is boring', 
  'I absolutely love js'
];

// Expected output is a new array (filtedMessages) with all the messages without any evil words
let filteredMessages = [];

// 1. loop through messages
// 2. In each iteration of messages, loop through evilwords
// 3. Replace evil word with good word
// 4. Push the new message in 'filteredMessages' array


for ( let i = 0; i < messages.length; i++ ) {
  
  let newMessage = messages[i]
  evilwords[i]
  for ( let j = 0; j < evilwords.length; j++ ) {

    // do a replace()
    // look for evilwords[j] in messages[i]
    newMessage = newMessage.replace(evilwords[j], goodwords[j])
    
  }

  filteredMessages.push(newMessage)
}

console.log(filteredMessages)