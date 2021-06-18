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

  return parseFloat((Math.random() * (max - min +1) + min).toFixed(numeral));
};

getSomeNumber(0,500);

// eslint-disable-next-line no-unused-vars
const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const OBJECT_COUNT = 10;

const Lat = {
  MIN: 35.65000,
  MAX: 35.70000,
  NUMERAL: 5,
};

const Lng = {
  MIN: 139.70000,
  MAX: 139.80000,
  NUMERAL: 5,
};

const getRandomArrayElement = (elements) => {
  return elements[getSomeIntegerNumber(0, elements.length - 1)];
};

const addAuthor = (authorNumber) => {
  if (authorNumber < 10) {
    authorNumber =   '0{ authorNumber}';
  }
  return {
    avatar: '/img/avatars/user{authorNumber}.png',
  };
};

const addOffer = () => {
  const randomOfferFeaturesIndex = getSomeIntegerNumber(0, OFFER_FEATURES.length - 1);
  const randomOfferPhotosIndex = getSomeIntegerNumber(0, OFFER_PHOTOS.length - 1);

  return {
    title: 'Самоё уютное и комфортное жильё',
    adress: [getSomeNumber(Lat.MIN, Lat.MAX, Lat.NUMERAL)] + [getSomeNumber(Lng.MIN, Lng.MAX, Lng.NUMERAL)],
    price: getSomeIntegerNumber(1,50000),
    type: getRandomArrayElement(OFFER_TYPES),
    rooms: getSomeIntegerNumber(1, 30),
    guests: getSomeIntegerNumber(1, 20),
    checkin: getRandomArrayElement(OFFER_TIMES),
    checkout: getRandomArrayElement(OFFER_TIMES),
    features: OFFER_FEATURES.slice(0, randomOfferFeaturesIndex),
    description: 'Здесь Вы будете чувствовать себя как дома!',
    photos: OFFER_PHOTOS.slice(0, randomOfferPhotosIndex),
  };
};

const addLocation = () => {
  const randomLocationLat = getSomeNumber(Lat.MIN, Lat.MAX, Lat.NUMERAL);
  const randomLocationLng = getSomeNumber(Lng.MIN, Lng.MAX, Lng.NUMERAL);
  return {
    Lat: randomLocationLat,
    Lng: randomLocationLng,
  };
};

const AddCreate = () => ({
  author: addAuthor(),
  offer: addOffer(),
  location: addLocation(),
});

const similarAdd = new Array(OBJECT_COUNT).fill(null).map(() => AddCreate());


console.log (similarAdd);

