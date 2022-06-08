
$.getJSON('event_data.json', function (data){
  console.log(data)
  $('.events-list').html('<li><span>Event</span><span>Location</span><span>Date</span></li>')
  data.forEach( entry => {
    $('.events-list').append(`<li><span class="event-name">${entry.name}</span><span class="event-location">${entry.location}</span><span class="event-date">${entry.date}</span></li>`) 
  })
})


// Validation

$('form').submit(function (e) {
  e.preventDefault()
  
  let values = {}
  let errors = {}
  let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  values.firstName = $('#first-name').val(),
  values.lastName = $('#last-name').val(),
  values.email = $('#email').val(),
  values.message = $('#message').val()

  console.log(values)
  
  if (values.firstName.length < 2){
    errors.firstName = 'First Name is too short'
  }

  if (values.lastName.length < 4){
    errors.lastName = 'Last Name is too short'
  }

  if(!regex.test(values.email)) {
    errors.email = 'Invalid Email'
  }

  if (values.message.length < 31){
    errors.message = 'Message is too short'
  }


  if ($.isEmptyObject(errors) ){
    console.log('Success')
  }else {
    console.log(errors)
    $('.error-message').remove()
    if (errors.firstName){
      $('#first-name').after(`<span class="error-message">${errors.firstName}</span>`)
    }
    if (errors.lastName){
      $('#last-name').after(`<span class="error-message">${errors.lastName}</span>`)
    }
    if (errors.email){
      $('#email').after(`<span class="error-message">${errors.email}</span>`)
    }
    if (errors.message){
      $('#message').after(`<span class="error-message">${errors.message}</span>`)
    }
  }
})

$('#message').on('input',function(){
  $('.counter').text($(this).val().length)
})

// Burger

$('.burger').click(function () {
  $('nav ul').toggleClass('active')
})