// КОД ДЛЯ 9 ДЗ
/* eslint-disable no-unused-vars */
const zoomOutButton = document.querySelector('.scale__control--smaller');
const zoomInButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
let zoomValue = 100;

scaleValue.value = `${zoomValue}%`;

zoomOutButton.addEventListener('click', () => {
  if (zoomValue <= 100 && zoomValue > 25) {
    zoomValue = zoomValue - 25;
    scaleValue.value = `${zoomValue}%`;
  }
});

zoomInButton.addEventListener('click', () => {
  if (zoomValue < 100 && zoomValue >= 25) {
    zoomValue = zoomValue + 25;
    scaleValue.value = `${zoomValue}%`;
  }
});
