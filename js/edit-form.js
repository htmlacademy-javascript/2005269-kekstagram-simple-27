import {imageUploadPreview} from './intensity-effects.js';

const zoomOutButton = document.querySelector('.scale__control--smaller');
const zoomInButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const minValue = 25;
const maxValue = 100;
let zoomValue = 100;
scaleValue.value = `${zoomValue}%`;

zoomOutButton.addEventListener('click', () => {
  if (zoomValue <= maxValue && zoomValue > minValue) {
    zoomValue = zoomValue - minValue;
    scaleValue.value = `${zoomValue}%`;
    imageUploadPreview.style.transform = `scale(${scaleValue.value})`;
  }
});

zoomInButton.addEventListener('click', () => {
  if (zoomValue < maxValue && zoomValue >= minValue) {
    zoomValue = zoomValue + minValue;
    scaleValue.value = `${zoomValue}%`;
    imageUploadPreview.style.transform = `scale(${scaleValue.value})`;
  }
});

export {scaleValue};

