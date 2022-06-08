const [current, images] = [document.querySelector('.main-img img'), document.querySelectorAll('.images img')]
images.forEach(img => img.addEventListener('click', e => current.src = e.target.src))