const MAX_COMMENT_LENGTH = 140;
const VERIFIED_STRING = 'message';
const PICTURE_COUNT = 25;
const MIN = 1;
const MAX = 25;

// Функция, возвращающая случайное целое число из переданного диапазона включительно
function GetRandomNumber (beginValue, endValue) {
  if (beginValue >= 0 && endValue >= 0 && beginValue < endValue) {
    return Math.round(Math.random() * (endValue - beginValue)) + beginValue;
  }
  return NaN;
}

function GetRandomIndexForId (Min, Max) {
  const array = [];

  return function () {
    let result = GetRandomNumber(Min, Max);
    if (array.length >= (Max - Min + 1)) {
      return null;
    }
    while (array.includes(result)) {
      result = GetRandomNumber(Min, Max);
    }
    array.push(result);
    return result;
  };
}

function GetRandomIndexForUrl (Min, Max) {
  const array = [];

  return function () {
    let result = GetRandomNumber(Min, Max);
    if (array.length >= (Max - Min + 1)) {
      return null;
    }
    while (array.includes(result)) {
      result = GetRandomNumber(Min, Max);
    }
    array.push(result);
    return result;
  };
}

// Функция для проверки максимальной длины строки
function CheckLengthString(verifiedString, maxLength) {
  if (verifiedString.length <= maxLength) {
    return true;
  }
  return false;
}

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

const similarPicture = Array.from({length: PICTURE_COUNT}, createPicture);

// Вызовы функций, чтобы ESLint не ругался
similarPicture();
CheckLengthString(VERIFIED_STRING, MAX_COMMENT_LENGTH);
GetRandomNumber(2, 10);


