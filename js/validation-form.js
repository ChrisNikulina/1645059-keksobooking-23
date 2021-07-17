const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const ROOMS_CAPACITY = {
  1 : ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};


const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const typeOfApartament = adForm.querySelector('#type');
const capacityOfGuests = document.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const options = capacityOfGuests.querySelectorAll('option');
let roomOptions;


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

const capacityChangeValidity =  () => {
  roomOptions = ROOMS_CAPACITY[roomNumber.value];
  if (roomOptions.indexOf(capacityOfGuests.value) === -1) {
    capacityOfGuests.setCustomValidity('Количество гостей в выбранную комнату не подходит');
  } else {
    capacityOfGuests.setCustomValidity('');
  }
};

const roomNumbersChange = () => {
  roomOptions = ROOMS_CAPACITY[roomNumber.value];
  options.forEach((option) => {
    if(roomOptions.indexOf(option.value) === -1) {
      option.setAttribute('hidden', '');
    } else {
      option.removeAttribute('hidden');
    }
  });
  capacityChangeValidity();
};


roomNumber.addEventListener('change',  roomNumbersChange);
capacityOfGuests.addEventListener('change', capacityChangeValidity);

