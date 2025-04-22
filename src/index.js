import "./styles.css";

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const bottomContainer = document.querySelector(".bottom");

const leftSlideButton = document.querySelector(".left-arrow");
const rightSlideButton = document.querySelector(".right-arrow");

let idCounter = 1;

let currentSlideCount = 1;

let slidesCount = 0;

leftSlideButton.addEventListener("click", () => {
  let previousSlide;
  let previousSlideCircleEl;

  // If the current slide count - 1 = 0, then we have to select the last slide count as the new current slide
  if (currentSlideCount - 1 === 0) {
    previousSlide = slidesContainer.querySelector(`#slide-${slidesCount}`);
    previousSlideCircleEl = document.querySelector(`#circle-${slidesCount}`);
    currentSlideCount = slidesCount;
  } else {
    previousSlide = slidesContainer.querySelector(
      `#slide-${currentSlideCount - 1}`,
    );
    previousSlideCircleEl = document.querySelector(
      `#circle-${currentSlideCount - 1}`,
    );
    currentSlideCount -= 1;
  }

  setSlideAsActive(previousSlide, previousSlideCircleEl);
});

rightSlideButton.addEventListener("click", () => {
  let nextSlide;
  let nextSlideCircleEl;

  // If the current slide count + 1 > the number of slides we have, then we have to select the first slide count as the new current slide
  if (currentSlideCount + 1 > slidesCount) {
    nextSlide = slidesContainer.querySelector(`#slide-1`);
    nextSlideCircleEl = document.querySelector(`#circle-1`);
    currentSlideCount = 1;
  } else {
    nextSlide = slidesContainer.querySelector(
      `#slide-${currentSlideCount + 1}`,
    );
    nextSlideCircleEl = document.querySelector(
      `#circle-${currentSlideCount + 1}`,
    );
    currentSlideCount += 1;
  }

  setSlideAsActive(nextSlide, nextSlideCircleEl);
});

function setSlideAsActive(slideEl, circleEl) {
  setAllSlidesAsInactive();
  slideEl.classList.add("active-slide");
  setAllCirclesAsInactive();
  circleEl.classList.add("active-circle");
}

const switchSlides = (function () {
  slides.forEach((slide) => {});
})();

const activeSlideChecker = function () {};

function setAllSlidesAsInactive() {
  slides.forEach((slide) => {
    slide.classList.remove("active-slide");
  });
}

// Creating the circle for each slide
slides.forEach((slide) => {
  slidesCount++;
  slide.id = `slide-${idCounter}`;
  const circleEl = document.createElement("div");
  circleEl.id = `circle-${idCounter}`;
  circleEl.classList.add("circle");

  circleEl.addEventListener("click", () => {
    setSlideAsActive(slide, circleEl);

    currentSlideCount = Number(slide.id.charAt(slide.id.indexOf("-") + 1));
  });

  if (slide.classList.contains("active-slide")) {
    setAllCirclesAsInactive();
    circleEl.classList.add("active-circle");
  }

  idCounter++;

  bottomContainer.appendChild(circleEl);
});

function setAllCirclesAsInactive() {
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circleEl) => {
    circleEl.classList.remove("active-circle");
  });
}

setInterval(() => {
  let nextSlide;
  let nextSlideCircleEl;

  // If the current slide count + 1 > the number of slides we have, then we have to select the first slide count as the new current slide
  if (currentSlideCount + 1 > slidesCount) {
    nextSlide = slidesContainer.querySelector(`#slide-1`);
    nextSlideCircleEl = document.querySelector(`#circle-1`);
    currentSlideCount = 1;
  } else {
    nextSlide = slidesContainer.querySelector(
      `#slide-${currentSlideCount + 1}`,
    );
    nextSlideCircleEl = document.querySelector(
      `#circle-${currentSlideCount + 1}`,
    );
    currentSlideCount += 1;
  }

  setSlideAsActive(nextSlide, nextSlideCircleEl);
}, 5000);
