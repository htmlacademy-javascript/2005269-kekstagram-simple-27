const MAX_COMMENT_LENGTH = 140;
const VERIFIED_STRING = 'message';
const PICTURE_COUNT = 25;

// Функция, возвращающая случайное целое число из переданного диапазона включительно
function GetRandomNumber (beginValue, endValue) {
  if (beginValue >= 0 && endValue >= 0 && beginValue < endValue) {
    return Math.round(Math.random() * (endValue - beginValue)) + beginValue;
  }
  return NaN;
}

// Функция для проверки максимальной длины строки
function CheckLengthString(verifiedString, maxLength) {
  if (verifiedString.length <= maxLength) {
    return true;
  }
  return false;
}

// Функция создания значений для фотографий
const createPicture = () => ({
  id: GetRandomNumber(1, 25),
  url: `photos/${GetRandomNumber(1, 25)}.jpg`,
  description: 'Фото природы',
  likes: GetRandomNumber(15, 200),
  comment: GetRandomNumber(0, 200),
});

const similarPicture = Array.from({length: PICTURE_COUNT}, createPicture);

// Вызовы функций, чтобы ESLint не ругался
similarPicture();
CheckLengthString(VERIFIED_STRING, MAX_COMMENT_LENGTH);
GetRandomNumber(2, 10);
createPicture();

