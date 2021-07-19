import {generateCard} from  './generate-card.js';
import {similarAddOffers} from './data.js';
import {setInactiveState, setActiveState} from './form.js';

const showCards = similarAddOffers(10);

setInactiveState();

const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const COORDINATES_DEFAULT = {
  lat: 35.68272,
  lng: 139.75871,
};

const map = L.map('map-canvas').on('load', () => {
  setActiveState();
}).setView(COORDINATES_DEFAULT, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(COORDINATES_DEFAULT, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

const defaultAddress = mainPinMarker.getLatLng();
address.value = `${defaultAddress.lat}, ${defaultAddress.lng}`;

mainPinMarker.on('moveend', (evt) => {
  const newAddress = evt.target.getLatLng();
  address.value = `${ newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

resetButton.addEventListener('click', () => {
  mainPinMarker.getLatLng(COORDINATES_DEFAULT);
  address.value = `${defaultAddress.lat}, ${defaultAddress.lng}`;
  map.setView(COORDINATES_DEFAULT,10);
});


showCards.forEach((point) => {
  const {location : {lat, lng} } = point;
  const icon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker.addTo(map).bindPopup(generateCard(point), {
    keepInView: true,
  });
});
