import {similarAddOffers} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');

const similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');

const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarAdds = similarAddOffers();

const similarAddFragment = document.createDocumentFragment();

similarAdds.forEach(({offer, author}) => {
  const addElement = similarAddTemplate.cloneNode(true);
  addElement.querySelector('.popup__title').textContent = offer.title;
  addElement.querySelector('.popup__text--address').textContent = offer.address;
  addElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  addElement.querySelector('.popup__type').textContent = types[offer.type];
  addElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  addElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  addElement.querySelector('.popup__features').innerHTML = offer.features.map((feature) => `<li class ="popup__feature popup__feature--${feature}"></li>`);
  addElement.querySelector('.popup__description').textContent = offer.description;
  addElement.querySelector('.popup__photos').innerHTML = offer.photos.map((src) => `<img src=${src}>`);
  addElement.querySelector('.popup__avatar').src = author.avatar;
  similarAddFragment.appendChild(addElement);
});

mapCanvas.appendChild(similarAddFragment);
