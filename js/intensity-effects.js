import '../vendor/nouislider/nouislider.js';

const imageUploadPreview = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
const valueForSubmit = document.querySelector('.effect-level__value');
let intensityValue = valueForSubmit.value;
let percent = '';
let filter = '';
let pixel = '';

sliderElement.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

effectNone.addEventListener('click', () => {
  sliderElement.classList.add('hidden');
  // filter = 'none';
  percent = '';
  pixel = '';
  imageUploadPreview.style.removeProperty('filter');
});

effectChrome.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  filter = 'grayscale';
  percent = '';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
});

effectSepia.addEventListener('click' , () => {
  sliderElement.classList.remove('hidden');
  filter = 'sepia';
  percent = '';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
});

effectMarvin.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  filter = 'invert';
  percent = '%';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  });
});

effectPhobos.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  filter = 'blur';
  percent = '';
  pixel = 'px';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
});

effectHeat.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  filter = 'brightness';
  percent = '';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
});

sliderElement.noUiSlider.on('update', () => {
  intensityValue = sliderElement.noUiSlider.get();
  valueForSubmit.value = intensityValue;
  imageUploadPreview.style.filter = `${filter}(${intensityValue}${percent}${pixel})`;
});

export {imageUploadPreview};
