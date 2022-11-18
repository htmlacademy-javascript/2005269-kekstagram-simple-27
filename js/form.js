import './edit-form.js';
import './intensity-effects.js';
import {body} from './send.js';

const editingForm = document.querySelector('.img-upload__overlay');
const closeButton = editingForm.querySelector('#upload-cancel');
const uploadPhoto = document.querySelector('#upload-file');

closeButton.addEventListener('click', () => {
  editingForm.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadPhoto.value = '';
});

const closeForm = () => {
  editingForm.classList.add('hidden');
  body.classList.remove('modal-open');
};

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

export {closeForm};
