import {generateCard} from  './generate-card.js';
import {setInactiveState, setActiveState} from './form.js';


setInactiveState();

const address = document.querySelector('#address');

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

const defaultAddress = (lat, lng) => address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
defaultAddress(COORDINATES_DEFAULT.lat, COORDINATES_DEFAULT.lng);

mainPinMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  defaultAddress(lat, lng);
});

const setPrimalAddress = () => {
  const {lat, lng} = COORDINATES_DEFAULT;
  mainPinMarker.setLatLng({
    lat,
    lng,
  });
  map.setView({
    lat,
    lng,
  }, 10);
  defaultAddress(lat, lng);
};

const createMarker = (showCards) => {
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
};

export{setPrimalAddress, createMarker};

