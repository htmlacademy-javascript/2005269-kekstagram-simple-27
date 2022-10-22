import {createPicture} from './util.js';
import {PICTURE_COUNT} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureList = document.createDocumentFragment();
const similarPicture = () => Array.from({length: PICTURE_COUNT}, createPicture);
const picture = similarPicture();

picture.forEach((image) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = image.url;
  pictureElement.querySelector('.picture__likes').textContent = image.likes;
  pictureElement.querySelector('.picture__comments').textContent = image.comment;
  pictureList.appendChild(pictureElement);
});

pictureContainer.appendChild(pictureList);
