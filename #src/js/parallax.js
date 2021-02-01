'use strict';

const videoBlock = document.querySelector('.video-block')
const video = document.querySelector('.video')
const partnersBlock = document.querySelector('.partnership-block')

window.addEventListener('scroll',  function() {
   // let scrl = window.pageYOffset
   //let videoHeight = videoBlock.getBoundingClientRect().height
    let videoY = videoBlock.getBoundingClientRect().top
    
    video.style.backgroundPositionY = `${videoY / 10}px`

    let partnersBlockY = partnersBlock.getBoundingClientRect().top
    partnersBlock.style.backgroundPositionY =  `${partnersBlockY / 2}px`
   
})

