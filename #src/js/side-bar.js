'use strict';

const sideBar = document.querySelector('.side-bar')
const burgerButton = document.querySelector('.burger-button')
const sideBarCloseButton = document.querySelector('.close-button')

initializeSideBar()

function initializeSideBar() {
    burgerButton.addEventListener('click', () => {
        sideBar.classList.add('opened-bar')
    })

    sideBar.addEventListener('click', (e) => {
        if(e.target.classList.contains('item__link') ||
        e.target.classList.contains('close-button')) {
            sideBar.classList.remove('opened-bar')
        }
    })

    document.querySelector('main').addEventListener('click', () => {
        sideBar.classList.remove('opened-bar')
    })
}
