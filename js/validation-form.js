const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ROOMS_CAPACITY = {
  1 : {
    guests: ['1'],
    errorText: 'В 1 комнате может быть только 1 гость',
  },
  2: {
    guests: ['1', '2'],
    errorText: 'В 2 комнатах может быть только 1 или 2 гостя',
  },
  3: {
    guests: ['1', '2', '3'],
    errorText: 'В 3 комнатах могут быть только 1, 2 или 3 гостя',
  },
  100: {
    guests: ['0'],
    errorText: '100 комнат не для гостей',
  },
};


const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const typeOfApartament = adForm.querySelector('#type');
const capacity = document.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const adFormTime = adForm.querySelector('.ad-form__element--time');
const timeIn = adFormTime.querySelector('#timein');
const timeOut = adFormTime.querySelector('#timeout');

adFormTime.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
  timeOut.value = evt.target.value;
});


const checkTypeOfApartament = () => {
  const priceMin = MIN_PRICE[typeOfApartament.value];
  price.min = priceMin;
  price.placeholder = priceMin;
};

checkTypeOfApartament();

typeOfApartament.addEventListener('change', () => {
  const typeValue = typeOfApartament.value;
  price.min = MIN_PRICE[typeValue];
  price.placeholder = MIN_PRICE[typeValue];
});


const validateRoomsNumbers = () => {
  const roomsSelect = document.querySelector('[name="rooms"]');
  const rooms = roomsSelect.value;
  const guests = document.querySelector('[name="capacity"]').value;

  roomsSelect.setCustomValidity(ROOMS_CAPACITY[rooms].guests.includes(guests) ? '' : ROOMS_CAPACITY[rooms].errorText);
};

const onRoomNumberChange = () => {
  validateRoomsNumbers();
};

const onCapacityChange = () => {
  validateRoomsNumbers();
};

roomNumber.addEventListener('change', onRoomNumberChange);
capacity.addEventListener('change', onCapacityChange);
