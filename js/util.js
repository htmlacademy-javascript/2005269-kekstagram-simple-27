const ALERT_SHOW_TIME = 3000;
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureList = document.createDocumentFragment();

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('show-error');

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const renderPhotos = (pictures) => {
  pictures.forEach((image) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = image.url;
    pictureElement.querySelector('.picture__likes').textContent = image.likes;
    pictureElement.querySelector('.picture__comments').textContent = image.comments;
    pictureList.appendChild(pictureElement);
  });
  pictureContainer.appendChild(pictureList);
};

export {showAlert, renderPhotos};
