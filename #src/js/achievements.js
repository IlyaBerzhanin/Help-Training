"use strict";

const counters = document.querySelectorAll(".achievement__counter");
const countersBlock = document.querySelector(".partnership-block");

function addPoint(el, time, step) {
  let limit = +el.innerText;
  let point = 0;
  let t = Math.round(time / (limit / step));
  let interval = setInterval(() => {
    point += step;
    el.innerText = point;
    if (point >= limit) {
      el.innerText = limit;
      clearInterval(interval);
    }
  }, t);
}

function initializeCounters() {
  addPoint(counters[0], 4000, 50);
  addPoint(counters[1], 4000, 3);
  addPoint(counters[2], 4000, 20);
  addPoint(counters[3], 4000, 10);
  addPoint(counters[4], 4000, 5);
}

window.addEventListener('scroll', function onScroll() {
    if(window.pageYOffset > countersBlock.offsetTop * 0.68) {
        this.removeEventListener('scroll', onScroll)
        initializeCounters()        
    }
})
