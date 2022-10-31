import './edit-form.js';
import './effects.js';
import './intensity-effects.js';

const editingForm = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = editingForm.querySelector('#upload-cancel');
const uploadPhoto = document.querySelector('#upload-file');

closeButton.addEventListener('click', () => {
  editingForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadPhoto.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    editingForm.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadPhoto.value = '';
  }
});

uploadPhoto.addEventListener('change', () => {
  editingForm.classList.remove('hidden');
  body.classList.add('modal-open');
});
