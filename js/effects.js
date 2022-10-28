import {imageUploadPreview} from './edit-form.js';

const buttonEffectDefault = document.querySelector('#effect-none');
const buttonEffectChrome = document.querySelector('#effect-chrome');
const buttonEffectSepia = document.querySelector('#effect-sepia');
const buttonEffectMarvin = document.querySelector('#effect-marvin');
const buttonEffectPhobos = document.querySelector('#effect-phobos');
const buttonEffectHeat = document.querySelector('#effect-heat');

buttonEffectDefault.addEventListener('click', () => {
  imageUploadPreview.className = '';
  imageUploadPreview.classList.add('effects__preview--none');
});

buttonEffectChrome.addEventListener('click', () => {
  imageUploadPreview.className = '';
  imageUploadPreview.classList.add('effects__preview--chrome');
});

buttonEffectSepia.addEventListener('click', () => {
  imageUploadPreview.className = '';
  imageUploadPreview.classList.add('effects__preview--sepia');
});

buttonEffectMarvin.addEventListener('click', () => {
  imageUploadPreview.className = '';
  imageUploadPreview.classList.add('effects__preview--marvin');
});

buttonEffectPhobos.addEventListener('click', () => {
  imageUploadPreview.className = '';
  imageUploadPreview.classList.add('effects__preview--phobos');
});

buttonEffectHeat.addEventListener('click', () => {
  imageUploadPreview.className = '';
  imageUploadPreview.classList.add('effects__preview--heat');
});
