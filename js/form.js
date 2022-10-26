const uploadFile = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const buttonSubmit = document.querySelector('#upload-submit');
const closeButton = uploadFile.querySelector('#upload-cancel');
const downloadPhoto = document.querySelector('#upload-file');

closeButton.addEventListener('click', () => {
  uploadFile.classList.add('hidden');
  body.classList.remove('modal-open');
  downloadPhoto.value = '';
});

downloadPhoto.addEventListener('change', () => {
  uploadFile.classList.remove('hidden');
  body.classList.add('modal-open');
});

buttonSubmit.addEventListener('click', (evt) => {
  evt.preventDefault();
});

