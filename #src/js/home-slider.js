'use strict';

const slides = document.querySelectorAll('.slide')
const prevButton = document.querySelector('.previous-button')
const nextButton = document.querySelector('.next-button')

const preTitle = document.querySelector('.slide-content__pre-title')
const title = document.querySelector('.slide-content__title')
const description = document.querySelector('.slide-content__description')
const contentButton = document.querySelector('.content-button')
const textArray = [preTitle, title, description, contentButton]

const sliderTagsBlock = document.querySelector('.slider-tags-block')
const sliderTags = document.querySelectorAll('.slider-tag')

let i = 0
initializeHomeSlider()

function initializeHomeSlider() {

    prevButton.addEventListener('click', () => {
        textArray.forEach(item => {
           item.classList.remove('showed-content')
        })
       slides[i].addEventListener('transitionend', () => {
        if(!title.classList.contains('showed-content')) {
            textArray.forEach(el => {
                el.classList.add('showed-content')
            })
        }
       })

        slides[i].classList.remove('showed-slide')
        sliderTags[i].classList.remove('active-slider-tag')
        i--
        if(i < 0) {
            i = slides.length - 1
        }
        slides[i].classList.add('showed-slide')
        sliderTags[i].classList.add('active-slider-tag')
    })

    nextButton.addEventListener('click', () => {
        textArray.forEach(item => {
            item.classList.remove('showed-content')
         })
        slides[i].addEventListener('transitionend', () => {
         if(!title.classList.contains('showed-content')) {
             textArray.forEach(el => {
                 el.classList.add('showed-content')
             })
         }
        })

        slides[i].classList.remove('showed-slide')
        sliderTags[i].classList.remove('active-slider-tag')
        i++
        if(i > slides.length - 1) {
            i = 0
        }
        slides[i].classList.add('showed-slide')
        sliderTags[i].classList.add('active-slider-tag')
    })

    slideWithOrderTags()
}

function slideWithOrderTags() {
    sliderTagsBlock.addEventListener('click', (e) => {
        for(let k = 0; k < slides.length; k++ ) {
            if(e.target.classList.contains('slider-tag')) {
                slides[k].classList.remove('showed-slide')
                sliderTags[k].classList.remove('active-slider-tag')
                textArray.forEach(el => {
                    el.classList.remove('showed-content')
                })
                slides[i].addEventListener('transitionend', () => {
                    if(!title.classList.contains('showed-content')) {
                        textArray.forEach(el => {
                            el.classList.add('showed-content')
                        })
                    }
                   })
                e.target.classList.add('active-slider-tag')
                if(slides[k].dataset.order === e.target.dataset.order) {
                    slides[k].classList.add('showed-slide')
                    i = k
                }
            }
        }
    })
}   
