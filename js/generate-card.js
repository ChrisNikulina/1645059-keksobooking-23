const similarAddTemplate = document.querySelector('#card').content.querySelector('.popup');

const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const generateCard = ({offer, author}) => {
  const addElement = similarAddTemplate.cloneNode(true);

  const title = addElement.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } else {
    title.remove();
  }

  const address = addElement.querySelector('.popup__text--address');
  if (offer.address) {
    address.textContent = offer.address;
  } else {
    address.remove();
  }

  const price = addElement.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent = `${offer.price} ₽/ночь`;
  } else {
    price.remove();
  }

  const type = addElement.querySelector('.popup__type');
  if (offer.type) {
    type.textContent = types[offer.type];
  } else {
    type.remove();
  }

  const capacity = addElement.querySelector('.popup__text--capacity');
  if(offer.rooms && offer.guests) {
    capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    capacity.remove();
  }

  const time = addElement.querySelector('.popup__text--time');
  if(offer.checkin && offer.checkout) {
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    time.remove();
  }

  const features = addElement.querySelector('.popup__features');
  if(offer.features) {
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);
    features.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if(!modifiers.includes(modifier)) {
        item.remove();
      }
    });
  } else {
    features.remove();
  }

  const description = addElement.querySelector('.popup__description');
  if(offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }

  const photos = addElement.querySelector('.popup__photos');
  if(offer.photos) {
    const photoElement = photos.querySelector('.popup__photo');
    const photoFragment = document.createDocumentFragment();
    offer.photos .map((photo) => {
      const newPhoto = photoElement.cloneNode(true);
      newPhoto.src = photo;
      photoFragment.appendChild(newPhoto);
    });
    photos.innerHTML = '';
    photos.appendChild(photoFragment);
  } else {
    photos.remove();
  }

  const avatar = addElement.querySelector('.popup__avatar');
  if(author.avatar) {
    avatar.src = author.avatar;
  } else {
    avatar.remove();
  }

  return addElement;
};


export {generateCard};
