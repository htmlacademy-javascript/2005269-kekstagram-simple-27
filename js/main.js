let beginValue = 2;
let endValue = 10;
let commentLength = 10;
let maxLength = 140;

// Функция, возвращающая случайное целое число из переданного диапазона включительно
function randomNumber (beginValue, endValue) {
  if (beginValue >= 0 && endValue >= 0) {
    if (beginValue < endValue) {
      return Math.round(Math.random() * (endValue - beginValue)) + beginValue;
    }
  }
  return NaN;
}

// Функция для проверки максимальной длины строки
function lengthString(commentLength, maxLength) {
  if (commentLength <= maxLength) {
    return true;
  }
  return false;
}

console.log(lengthString(commentLength, maxLength))
console.log(randomNumber(beginValue, endValue));
