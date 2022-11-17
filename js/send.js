import {showAlert, renderPhotos} from './util.js';
import {scaleValue} from './edit-form.js';
import {imageUploadPreview} from './intensity-effects.js';

const body = document.querySelector('body');
const buttonSubmitForm = document.querySelector('.img-upload__form');
const messageErrorSet = 'Не удалось отправить форму. Попробуйте ещё раз';
const messageErrorGet = 'Не удалось получить данные. Попробуйте ещё раз';
const buttonSubmit = document.querySelector('.img-upload__submit');
const templateError = document.querySelector('#error').content.querySelector('.error');
const messageError = templateError.cloneNode(true);
const temlpateSuccess = document.querySelector('#success').content.querySelector('.success');
const messageSuccess = temlpateSuccess.cloneNode(true);
const successButton = messageSuccess.querySelector('.success__button');
const errorButton = templateError.querySelector('.error__button');

successButton.addEventListener('click', () => {
  messageSuccess.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    messageSuccess.classList.add('hidden');
  }
});

errorButton.addEventListener('click', () => {
  messageError.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    messageError.classList.add('hidden');
  }
});

const getRequest = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        showAlert(messageErrorGet);
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })

    .then((similarPictures) => {
      renderPhotos(similarPictures);
    });

};

const setRequest = (onSuccess) => {
  buttonSubmitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    buttonSubmit.disabled = true;
    const formData = new FormData(evt.target);
    fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          document.body.append(messageSuccess);
          onSuccess();
          buttonSubmit.disabled = false;
          scaleValue.value = '100%';
          imageUploadPreview.style.removeProperty('filter');
        } else {
          body.appendChild(templateError);
          setTimeout(() => {
            messageError.remove();
          }, 3000);
          setTimeout(() => {
            buttonSubmit.disabled = false;
          }, 1000);
        }
      })
      .catch(() => {
        showAlert(messageErrorSet);
      });
  });
};

export {getRequest, setRequest, body};
