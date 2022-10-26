const uploadFile = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const closeButton = uploadFile.querySelector('#upload-cancel');
const downloadPhoto = document.querySelector('#upload-file');
const pristine = new Pristine(uploadForm);

closeButton.addEventListener('click', () => {
  uploadFile.classList.add('hidden');
  body.classList.remove('modal-open');
  downloadPhoto.value = '';
});

downloadPhoto.addEventListener('change', () => {
  uploadFile.classList.remove('hidden');
  body.classList.add('modal-open');
});


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line no-console
    console.log('Можно отправлять');
  } else {
    // eslint-disable-next-line no-console
    console.log('Форма невалидна');
  }
});

