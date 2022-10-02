const BEGIN_VALUE = 2;
const END_VALUE = 10;
const COMMENT_LENGTH = 10;
const MAX_LENGTH = 140;

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function randomNumber (beginValue, endValue) {
  if (beginValue >= 0 && endValue >= 0 && beginValue < endValue) {
    return Math.round(Math.random() * (endValue - beginValue)) + beginValue;
  }
  return NaN;
}

// const randomNumber = beginValue, endValue =>

// Функция для проверки максимальной длины строки
function lengthString(CommentLength, MaxLength) {
  if (CommentLength <= MaxLength) {
    return true;
  }
  return false;
}

lengthString(COMMENT_LENGTH, MAX_LENGTH);
randomNumber(BEGIN_VALUE, END_VALUE);
