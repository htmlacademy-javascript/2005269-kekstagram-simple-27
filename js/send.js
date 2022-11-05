// import {createPicture} from './util.js';
// import {similarPictures} from './download.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureList = document.createDocumentFragment();

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((similarPictures) => {
    similarPictures.forEach((image) => {
      const pictureElement = pictureTemplate.cloneNode(true);
      pictureElement.querySelector('.picture__img').src = image.url;
      pictureElement.querySelector('.picture__likes').textContent = image.likes;
      pictureElement.querySelector('.picture__comments').textContent = image.comments;
      pictureList.appendChild(pictureElement);
    });
    pictureContainer.appendChild(pictureList);
  });
