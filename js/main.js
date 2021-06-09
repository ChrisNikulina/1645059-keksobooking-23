//Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getSomeIntegerNumber = function (min, max) {
  if (min < 0 || max < 0) {
    return null;
  }

  if (min >= max) {
    [min,max] = [max,min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getSomeIntegerNumber(0,500);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getSomeNumber = function (min, max, numeral) {
  if (min < 0 || max < 0) {
    return null;
  }

  if (min >= max) {
    [min,max] = [max,min];
  }

  return (Math.random() * (max - min +1) + min).toFixed(numeral);
};

getSomeNumber(0,500);

