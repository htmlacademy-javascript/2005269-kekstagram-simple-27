import {imageUploadPreview} from './edit-form.js';
import '../vendor/nouislider/nouislider.js';

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

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
  sliderElement.noUiSlider.on('update', () => {
    imageUploadPreview.style.filter = '';
  });
});

effectChrome.addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
  });
  sliderElement.noUiSlider.on('update', () => {
    let intensityValue = valueElement.value;
    intensityValue = sliderElement.noUiSlider.get();
    imageUploadPreview.style.filter = `grayscale(${intensityValue})`;
  });
});

effectSepia.addEventListener('click' , () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
  });
  sliderElement.noUiSlider.on('update', () => {
    let intensityValue = valueElement.value;
    intensityValue = sliderElement.noUiSlider.get();
    imageUploadPreview.style.filter = `sepia(${intensityValue})`;
  });
});

effectMarvin.addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
  });
  sliderElement.noUiSlider.on('update', () => {
    let intensityValue = valueElement.value;
    intensityValue = sliderElement.noUiSlider.get();
    imageUploadPreview.style.filter = `invert(${intensityValue}%)`;
  });
});

effectPhobos.addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
  });
  sliderElement.noUiSlider.on('update', () => {
    let intensityValue = valueElement.value;
    intensityValue = sliderElement.noUiSlider.get();
    imageUploadPreview.style.filter = `blur(${intensityValue}px)`;
  });
});

effectHeat.addEventListener('click', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
  });
  sliderElement.noUiSlider.on('update', () => {
    let intensityValue = valueElement.value;
    intensityValue = sliderElement.noUiSlider.get();
    imageUploadPreview.style.filter = `brightness(${intensityValue})`;
  });
});
