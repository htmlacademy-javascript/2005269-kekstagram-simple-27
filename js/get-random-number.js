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

export {GetRandomNumber, GetRandomIndexForUrl, GetRandomIndexForId};
