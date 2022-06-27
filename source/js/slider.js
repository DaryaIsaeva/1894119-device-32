const slider = document.querySelector('.slider');

const sliderList = slider.querySelector('.slider-list')

const buttonSliderPrev = slider.querySelector('.slider-prev');
const buttonSliderNext = slider.querySelector('.slider-next');

const slides = slider.querySelectorAll('.slider-item');

const sliderPagination = slider.querySelector('.slider-pagination');
const paginationButtons = slider.querySelectorAll('.slider-pagination-button');

let i = 0;

const switchNextSlide = () => {
  ++i
  if (i === slides.length) {
      slides[i-1].classList.remove('slider-item--current');
      paginationButtons[i-1].classList.remove('slider-pagination-button--current');
      i = 0;
      slides[i].classList.add('slider-item--current');
      paginationButtons[i].classList.add('slider-pagination-button--current');
  } else {
      slides[i-1].classList.remove('slider-item--current');
      paginationButtons[i-1].classList.remove('slider-pagination-button--current');
      slides[i].classList.add('slider-item--current');
      paginationButtons[i].classList.add('slider-pagination-button--current');
  }
}

const switchPrevSlide = () => {
  if (i === 0) {
    slides[i].classList.remove('slider-item--current');
    paginationButtons[i].classList.remove('slider-pagination-button--current');
    i = slides.length-1;
    slides[i].classList.add('slider-item--current');
    paginationButtons[i].classList.add('slider-pagination-button--current');
  } else {
    slides[i].classList.remove('slider-item--current');
    paginationButtons[i].classList.remove('slider-pagination-button--current');
    slides[i-1].classList.add('slider-item--current');
    paginationButtons[i-1].classList.add('slider-pagination-button--current');
    i--;
  }
}

buttonSliderNext.addEventListener('click', switchNextSlide);

buttonSliderPrev.addEventListener('click', switchPrevSlide);

sliderPagination.addEventListener('click', (evt) => {
  for(let i = 0; i < sliderPagination.children.length; i++) {
    sliderPagination.children[i].classList.remove('slider-pagination-button--current');
  }
  evt.target.classList.add('slider-pagination-button--current');
})

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    for (let slide of slides) {
      slide.classList.remove('slider-item--current');
    }
    slides[index].classList.add('slider-item--current');
  })
})
