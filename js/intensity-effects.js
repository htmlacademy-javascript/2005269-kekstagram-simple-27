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

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.8,
  step: 0.1,
  connect: 'lower',
});

effectNone.addEventListener('click', () => {
  filter = '';
  percent = '';
  pixel = '';
  sliderElement.noUiSlider.on('update', () => {
    imageUploadPreview.style.filter = '';
  });
});

effectChrome.addEventListener('click', () => {
  filter = 'grayscale';
  percent = '';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
  });
});

effectSepia.addEventListener('click' , () => {
  filter = 'sepia';
  percent = '';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
  });
});

effectMarvin.addEventListener('click', () => {
  filter = 'invert';
  percent = '%';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
  });
});

effectPhobos.addEventListener('click', () => {
  filter = 'blur';
  percent = '';
  pixel = 'px';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
  });
});

effectHeat.addEventListener('click', () => {
  filter = 'brightness';
  percent = '';
  pixel = '';
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
  });
});

sliderElement.noUiSlider.on('update', () => {
  intensityValue = sliderElement.noUiSlider.get();
  valueForSubmit.value = intensityValue;
  imageUploadPreview.style.filter = `${filter}(${intensityValue}${percent}${pixel})`;
});

export {imageUploadPreview};
