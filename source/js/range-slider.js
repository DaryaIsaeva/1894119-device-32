const range = document.querySelector('.range');
const slider = range.querySelector('#slider');
const minPrice = range.querySelector('#min-price');
const maxPrice = range.querySelector('#max-price');

noUiSlider.create(slider, {
    start: [0, 5000],
    connect: true,
    step: 100,
    range: {
      'min': 0,
      'max': 10000
    }
});

const snapValues = [minPrice, maxPrice];

const updateSliderOptions = () => {
  slider.noUiSlider.updateOptions({
    start: [minPrice.value, maxPrice.value],
  });
}

slider.noUiSlider.on('update', (values, handle) => {
  snapValues[handle].value = parseInt(values[handle]);
});

minPrice.addEventListener('change', updateSliderOptions);

maxPrice.addEventListener('change', updateSliderOptions);
