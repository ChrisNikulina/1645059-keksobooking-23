const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const MAX_ROOMS = 100;

const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const typeOfApartament = adForm.querySelector('#type');
const capacityOfGuests = document.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');

const checkTypeOfApartament = () => {
  const priceMin = MIN_PRICE[typeOfApartament.value];
  price.min = priceMin;
  price.placeholder = priceMin;
};

typeOfApartament.addEventListener('change', () => {
  const typeValue = typeOfApartament.value;
  price.min = MIN_PRICE[typeValue];
  price.placeholder = MIN_PRICE[typeValue];
});


const checkRoomsValidity =  () => {
  if (+capacityOfGuests.value > +roomNumber.value || (
    +capacityOfGuests.value === 0 && +roomNumber.value < MAX_ROOMS) || (
    +capacityOfGuests.value > 0 && +roomNumber.value === MAX_ROOMS )) {
    capacityOfGuests.setCustomValidity('Количество гостей в выбранную комнату не подходит');
  } else {
    capacityOfGuests.setCustomValidity('');
  }
  capacityOfGuests.reportValidity();
};

checkRoomsValidity();

const onRoomsNumber = () => {
  checkRoomsValidity();
};

roomNumber.addEventListener('change', onRoomsNumber);

checkTypeOfApartament();
