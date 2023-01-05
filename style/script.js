// 'use strict'
// const arrowBtnLeft = document.getElementsByClassName('arrow__left')
// const arrowBtnRight = document.getElementsByClassName('arrow__right')
// const slide = document.getElementsByClassName('comments__main-blog')
// const dotsContainer = document.getElementsByClassName('dots')

// let curSlide = 0

// const goToSlide = (slide) => {
//   slides.forEach((s, i) => {
//     s.style.transform = `translateX(${100 * (i - slide)}%)`
//   })
// }

// const nextSlide = function() {
//   curSlide === slide.length - 1 ? (curSlide = 0) : curSlide++
//   goToSlide(curSlide)
//   activateDot(curSlide)
// }

// const prevSlide = function() {
//   curSlide === 0 ? (curSlide =slides.length - 1) : curSlide--
//   goToSlide(curSlide)
//   activateDot(curSlide)
// }

// const createDots = () => {
//   slides.forEach((_, i) =>
//   dotsContainer.insertAdjacentHTML(
//     "beforeed",
//     `<button class='dot' data-slide='${i}'></button>`
//   ))
// }

// const activateDot = (slide) =>  {
//   document
//   .querySelectorAll('.dot')
//   forEach((dot) => dot.classList.remove('dot--active'))
//   document
//   .querySelectorAll(`dot[data-slide=${slide}]`)
//   .forEach((dot) => dot.classList.add("dot--active"))
// }

// const init = () => {
//   goToSlide(0)
//   createDots()
//   activateDot(0)
// }
// init()

// arrowBtnLeft.addEventListener("click", prevSlide)
// arrowBtnRight.addEventListener("click", nextSlide)

// dotsContainer.addEventListener("click", function (e) {
//   if(e.target.classList.contains("dot")) {
//     const {slide} = e.target.dataset
//     goToSlide(slide)
//     activateDot(slide)
//   }
// })

"use strict";
const arrowBtnLeft = document.querySelector(".btn-arrow-left");
const arrowBtnRight = document.querySelector(".btn-arrow-right");

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let curSlide = 0;

// functions
const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};

const createDots = () => {
  slides.forEach((_ , i) =>
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class='dot' data-slide='${i}'></button>`
    )
  );
};

const activateDot = (slide) => {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot--active"));
  document
    .querySelectorAll(`.dot[data-slide="${slide}"]`)
    .forEach((dot) => dot.classList.add("dot--active"));
};

const init = () => {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

arrowBtnLeft.addEventListener("click", prevSlide);
arrowBtnRight.addEventListener("click", nextSlide);

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});