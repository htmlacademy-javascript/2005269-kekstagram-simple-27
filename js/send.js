import {showAlert, renderPhotos} from './util.js';

const buttonSubmitForm = document.querySelector('.img-upload__form');
const messageError = 'Не удалось отправить форму. Попробуйте ещё раз';

const getRequest = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
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
          onSuccess();
        } else {
          showAlert(messageError);
        }
      })
      .catch(() => {
        showAlert(messageError);
      });
  });
};

export {getRequest, setRequest};
