const MAX_COMMENT_LENGTH = 140;

// Функция, возвращающая случайное целое число из переданного диапазона включительно

function randomNumber (beginValue, endValue) {
  if (beginValue >= 0 && endValue >= 0 && beginValue < endValue) {
    return Math.round(Math.random() * (endValue - beginValue)) + beginValue;
  }
  return NaN;
}

// Функция для проверки максимальной длины строки
function lengthString(CommentLength, MaxCommentLength) {
  if (CommentLength <= MaxCommentLength) {
    return true;
  }
  return false;
}

lengthString(10, MAX_COMMENT_LENGTH);
randomNumber(2, 10);
