/*
   1. Array for the todo list
   (In this array we will store and forward data).
*/
let todoList = new Array
getTodos ()


/* 
  2. Function getTodos() that READS localstorage 
  (Should be loaded at the beginning when the page is running)
*/
function getTodos () {
  // If there are items in the storage: we want to get and read them
  if ( localStorage.getItem('todos') ){
    // There are items in the storage
    console.log('there is stuff in the local storage')
    // Save the items into the todoList array
    todoList = JSON.parse( localStorage.getItem('todos') )
    // create the HTML for the items in the todoList array
    popList ()
    return
  } else {
    // There are no items in the storage
    return 'You do not have any todos \nclick the "+" button to add more'
  }
}


/* 
  3. Function addTodo() that WRITES "überschreibt" in localstorage
*/
function addTodo () {
  // Only add a todo if there is a value in the input (not empty)
  const newTodo = document.querySelector('#addinput').value
  if ( newTodo ) {
    // Create an object with the input value as text
    const todoObj = {
      text : newTodo,
      complete : false // (without checked checkmark)
    }
    // add the todo to the end of a list with push
    todoList.push(todoObj)
    // overwrite the list in the local storage => JSON to a string with stringify
    localStorage.setItem('todos', JSON.stringify(todoList))
    // run the populate list function
    popList ()

  } else {
    // TODO: You can show this with DOM Manipulation visually instead of the console.log
    //display error, field is empty
    return console.log('You must write something in the box')
  }

}

/* 
  4. Function popList() for populating "pop = opposite of push" the todo list
*/

function popList () {
  // Delete the content of the current list
  const list = document.querySelector('#list')
  list.innerHTML = ''

  // Create a new item in the list for every item in the todoList array
  if (todoList) {
    todoList.forEach( todo => {
      const todoWrapper = document.createElement('div')
      todoWrapper.classList.add('todoWrapper')
      todoWrapper.innerHTML = `
      <div class="todoText">${todo.text}</div>
      <div class="todoCheck ${todo.complete == false ? 'false' : ''}"></div> 
      `
      list.appendChild(todoWrapper)

      return
    })
  }
// We call the function Nr.6 already at the end of Function 4
  updateBoxes ()
}

/*
   5. function updateBoxes() to update the boxes
*/

function updateBoxes () {
  let boxes = document.querySelectorAll('.todoCheck')

  boxes.forEach( (box, i) => {
    box.addEventListener('click', e => {
      box.classList.toggle('false')

      if (box.classList.contains('false')) {
        // Change array to represent new information TICK WITH CHECK
        todoList[i].complete = false
      } else {
        // Change array to represent new information TICK WITHOUT CHECK
        todoList[i].complete = true
      }

      //console.log(todoList)
      localStorage.setItem('todos', JSON.stringify(todoList))
    })
  })
}

/*
  6. Click Event for adding items
*/

// If we click on the +, the page should not be reloaded [A].
document.querySelector('#addButton').addEventListener('click',  e => {
  e.preventDefault() // [A]
  addTodo ()
  // Reset input value
  document.querySelector('input').value = ''
})


// Clear completed items
document.querySelector('#clearCompleted').addEventListener('click', e => {
  e.preventDefault()

  todoList = todoList.filter( todo => todo.complete == false)
  // update local storage
  localStorage.setItem('todos', JSON.stringify(todoList))
  popList()
})

// Mark all as complete
document.querySelector('#markAllCompleted').addEventListener('click', e => {
  e.preventDefault()

  const boxes = document.querySelectorAll('.todoCheck')
  boxes.forEach( (box, i) => {
    // Change the HTML classes 
    box.classList.remove('false')
    // Alter the array
    todoList[i].complete = true
    // update local storage
    localStorage.setItem('todos', JSON.stringify(todoList))
  })
})


// Reset input after submit
// Linethrough completed texts
// Undo function 
// TODO: Darkmode function
