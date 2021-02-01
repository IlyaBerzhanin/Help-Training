'user strict';

const headerBlock = document.querySelector('.header-block')
let scroll = 0

window.addEventListener('scroll', function() {
    let currentPos = window.pageYOffset
    
    if(currentPos > scroll) {
        headerBlock.classList.add('header-hidden')
    }
    else {
        headerBlock.classList.remove('header-hidden')
        headerBlock.classList.add('header-active')
        if(currentPos === 0) {
            headerBlock.classList.remove('header-active')
        }
    }

    scroll = currentPos
})