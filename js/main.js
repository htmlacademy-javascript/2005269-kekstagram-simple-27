const MAX_COMMENT_LENGTH = 140;
const VERIFIED_STRING = 'message';

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

CheckLengthString(VERIFIED_STRING, MAX_COMMENT_LENGTH);
GetRandomNumber(2, 10);
