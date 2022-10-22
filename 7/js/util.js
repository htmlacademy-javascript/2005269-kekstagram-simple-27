import {MIN, MAX} from './data.js';

const getRandomIndexForId = createRandomIndexForId(MIN, MAX);
const getRandomIndexForUrl = createRandomIndexForUrl(MIN, MAX);

// Функция создания значений для фотографий
const createPicture = () => ({
  id: getRandomIndexForId (),
  url: `photos/${getRandomIndexForUrl()}.jpg`,
  description: 'Фото природы',
  likes: getRandomNumber(15, 200),
  comment: getRandomNumber(0, 200),
});

// Функция для проверки максимальной длины строки
export function checkLengthString(verifiedString, maxLength) {
  if (verifiedString.length <= maxLength) {
    return true;
  }
  return false;
}

// Функция, возвращающая случайное целое число из переданного диапазона включительно
export function getRandomNumber (beginValue, endValue) {
  if (beginValue >= 0 && endValue >= 0 && beginValue < endValue) {
    return Math.round(Math.random() * (endValue - beginValue)) + beginValue;
  }
  return NaN;
}

export function createRandomIndexForId (Min, Max) {
  const array = [];

  return function () {
    let result = getRandomNumber(Min, Max);
    if (array.length >= (Max - Min + 1)) {
      return null;
    }
    while (array.includes(result)) {
      result = getRandomNumber(Min, Max);
    }
    array.push(result);
    return result;
  };
}

export function createRandomIndexForUrl (Min, Max) {
  const array = [];

  return function () {
    let result = getRandomNumber(Min, Max);
    if (array.length >= (Max - Min + 1)) {
      return null;
    }
    while (array.includes(result)) {
      result = getRandomNumber(Min, Max);
    }
    array.push(result);
    return result;
  };
}

export {createPicture};
