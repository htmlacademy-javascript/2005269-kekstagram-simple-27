// Функция для проверки максимальной длины строки
function CheckLengthString(verifiedString, maxLength) {
  if (verifiedString.length <= maxLength) {
    return true;
  }
  return false;
}

export {CheckLengthString};
