"use strict";

const works = document.querySelectorAll(".work");
const tagsBlock = document.querySelector(".portfolio-tags-block");
const worksContainer = document.querySelector(".portfolio-block__works");

let relocateX;
let relocateY;

tagsBlock.addEventListener("click", (e) => {
  let tag = e.target;
  if(tag.classList.contains('tag__link')) {
    removeSelectedTags()
    selectClickedTag(tag)
    
    for (i = 0; i < works.length; i++) {
      works[i].classList.remove('hidden-work')
      if (
        tag.innerText === works[i].dataset.type ||
        tag.innerText === works[i].dataset.subtype
      ) {
        console.log(works[i]);
        // if(tag.innerText === 'Web Design') {
        //   calcAncMove(works[i-1], works[i])
        // }

        // else if(tag.innerText === 'Mobile App') {
        //   calcAncMove(works[0], works[3])
        //   calcAncMove(works[1], works[5])
       
        // }

        // else if(tag.innerText === 'Illustration') {
        //   calcAncMove(works[1], works[5])
          
        // }
      } 
      
      else if (tag.innerText === "All") {
       //restoreItems()
       works[i].classList.remove('hidden-work')
      }
  
       else {
        //works[i].style.transform = "scale(0)";
        works[i].classList.add('hidden-work')
      }
    }
  }
});

function calcAncMove(firstElem, secondElem) {
  relocateX = firstElem.getBoundingClientRect().left - secondElem.getBoundingClientRect().left
  relocateY = firstElem.getBoundingClientRect().top - secondElem.getBoundingClientRect().top
  secondElem.style.transform = `translate(${relocateX}px, ${relocateY}px)`
}

function selectClickedTag(el) {
  el.classList.add('active-tag')
}

function removeSelectedTags() {
  let tags = document.querySelectorAll('.tag__link')
  tags.forEach(t => {
    t.classList.remove('active-tag')
  })
}

function restoreItems() {
  works.forEach(work => {
    work.style.transform = 'scale(1)'
  })
}