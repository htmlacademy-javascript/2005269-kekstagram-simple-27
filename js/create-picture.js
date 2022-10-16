import {GetRandomNumber, GetRandomIndexForUrl, GetRandomIndexForId} from './get-random-number';

const MIN = 1;
const MAX = 25;
const INDEX_ID = GetRandomIndexForId(MIN, MAX);
const INDEX_URL = GetRandomIndexForUrl(MIN, MAX);

// Функция создания значений для фотографий
const createPicture = () => ({
  id: INDEX_ID (),
  url: `photos/${INDEX_URL()}.jpg`,
  description: 'Фото природы',
  likes: GetRandomNumber(15, 200),
  comment: GetRandomNumber(0, 200),
});

export {createPicture};
