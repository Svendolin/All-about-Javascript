/**
 * Thumbnail Gallery with ◀ left & right ▶ controls
 * Not actually a slider since the transitions are animated with fade effects
 * But IMO a better, simpler alternative
 */


// Interval will be saved and cleared using this variable
let autoplay_interval

// Add data attributes to each square
$('.gallery_thumbs > img').each(function (i, thumb) {
    $(thumb).attr('data-index', i)
})

// Event listeners
$('.gallery_thumbs > img').click(onThumbClick)
$('.gallery_left').click(moveLeft)
$('.gallery_right').click(moveRight)
$('.gallery_controls > input').click(toggleAutoplay)

// State Management (remembers which item is active)
current_index = 0


/**
 * 
 * @param none 
 * @returns void
 * @description Changes src of large image using src of clicked img
 */

function onThumbClick () {
    // Change Current Index
    current_index = $(this).data('index')
    console.log(current_index)
    // Reset Class of all thumbnails
    $('.gallery_thumbs > img').removeClass('gallery_selected')
    // Add gallery_selected class to the clicked thumbnail
    $(this).addClass('gallery_selected')
    // Change the src of the large img using clicked thumbnail
    $('.gallery_large_img').attr('src',$(this).attr('src'))
    $('.gallery_large_img').hide()
    $('.gallery_large_img').fadeIn()
}

/**
 * 
 * @param none 
 * @returns void
 * @description Decrements "current_index" or resets it to max value
 */

function moveLeft () {
    if (current_index == 0){
        current_index = $('.gallery_thumbs > img').length - 1
    } else {
        current_index--
    }
    changeImg()
}

/**
 * 
 * @param none 
 * @returns void
 * @description Increments "current_index" or resets it to 0
 */

function moveRight () {
    if (current_index == ($('.gallery_thumbs > img').length - 1)){
        current_index = 0
    } else {
        current_index++
    }
    changeImg()
}

/**
 * 
 * @param none 
 * @returns void
 * @description Changes the image src using the newly change current index
 */

function changeImg (dir) { 
    $('.gallery_thumbs > img').each( function ( i , thumb ) {
      $(thumb).removeClass('gallery_selected')
        if( $(thumb).data('index') == current_index ){
            $('.gallery_large_img').attr('src', $(thumb).attr('src'))
            $(thumb).addClass('gallery_selected')
        }
    })
    $('.gallery_large_img').hide()
    $('.gallery_large_img').fadeIn()
}

/**
 * 
 * @param none 
 * @returns void
 * @description Toggles autoplay function
 */

function toggleAutoplay() {
    if ($(this).is(':checked')){
        autoplay_interval = setInterval(function (){
            moveRight()
        },2000)
    } else {
        clearInterval(autoplay_interval)
    }
}