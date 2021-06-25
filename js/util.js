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


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getSomeNumber = function (min, max, numeral) {
  if (min < 0 || max < 0) {
    return null;
  }

  if (min >= max) {
    [min,max] = [max,min];
  }

  return parseFloat((Math.random() * (max - min +1) + min).toFixed(numeral));
};

const shuffleBlocks = (a) => {
  for (let i = a.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};


export {getSomeIntegerNumber, getSomeNumber, shuffleBlocks};
