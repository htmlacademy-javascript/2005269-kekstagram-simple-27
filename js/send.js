import {showAlert} from './util.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureList = document.createDocumentFragment();
const buttonSubmitForm = document.querySelector('.img-upload__form');

const getRequest = () => {
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
};

const setRequest = (onSuccess) => {
  buttonSubmitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch(
      'https://27.javascript.pages.academy/kekstagram-simpl',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        }
      })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};

export {getRequest, setRequest};
