import {getSomeIntegerNumber, getSomeNumber, shuffleBlocks} from './util.js';

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


const addAuthor = (authorNumber) => ({
  avatar: `img/avatars/user${ (authorNumber < 10) ? `0${ authorNumber}` : `${ authorNumber}`}.png`,
});


const addOffer = () => {
  const randomLocationLat = getSomeNumber(Lat.MIN, Lat.MAX, Lat.NUMERAL);
  const randomLocationLng = getSomeNumber(Lng.MIN, Lng.MAX, Lng.NUMERAL);
  return {
    title: 'Самоё уютное и комфортное жильё',
    address: `${randomLocationLat}, ${randomLocationLng}`,
    price: getSomeIntegerNumber(1,50000),
    type: OFFER_TYPES[getSomeIntegerNumber(0, OFFER_TYPES.length - 1)],
    rooms: getSomeIntegerNumber(1, 30),
    guests: getSomeIntegerNumber(1, 20),
    checkin: OFFER_TIMES[getSomeIntegerNumber(0, OFFER_TIMES.length - 1)],
    checkout: OFFER_TIMES[getSomeIntegerNumber(0, OFFER_TIMES.length - 1)],
    features: shuffleBlocks(OFFER_FEATURES).slice(getSomeIntegerNumber(0, OFFER_FEATURES.length)),
    description: 'Здесь Вы будете чувствовать себя как дома!',
    photos: shuffleBlocks(OFFER_PHOTOS).slice(getSomeIntegerNumber(0, OFFER_PHOTOS.length - 1)),
  };
};

const addLocation = () => {
  const randomLocationLat = getSomeNumber(Lat.MIN, Lat.MAX, Lat.NUMERAL);
  const randomLocationLng = getSomeNumber(Lng.MIN, Lng.MAX, Lng.NUMERAL);
  return {
    lat: randomLocationLat,
    lng: randomLocationLng,
  };
};

const addCreate = (authorNumber) => ({
  author: addAuthor(authorNumber),
  offer: addOffer(),
  location: addLocation(),
});

const similarAddOffers = new Array(OBJECT_COUNT).fill(null).map((el, index) => addCreate(index + 1));

similarAddOffers;
