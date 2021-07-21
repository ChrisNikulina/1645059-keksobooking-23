const PriceFilterValue = {
  'LOW': {
    MIN: 0,
    MAX: 10000,
  },
  'MIDDLE': {
    MIN: 10000,
    MAX: 50000,
  },
  'HIGH': {
    MIN: 50000,
    MAX: 1000000,
  },
};

const MAX_COUNT = 10;
const DEFAULT_VALUE = 'any';

const mapFilters = Array.from(document.querySelector('.map__filters').children);

const filters = {
  'housing-type': (data,filter) => filter.value === data.offer.type,
  'housing-price': (data, filter) => {
    const selectedPrice = PriceFilterValue[filter.value.toUpperCase()];
    return data.offer.price >= selectedPrice.MIN && data.offer.price < selectedPrice.MAX;
  },
  'housing-rooms': (data, filter) => filter.value === data.offer.rooms.toString(),
  'housing-guests': (data,filter) => filter.value === data.offer.guests.toString(),
  'housing-features': (data, filter) => {
    const checkedElements = Array.from(filter.querySelectorAll('input[type="checkbox"]:checked'));
    return checkedElements.every((checkbox) => data.offer.features && data.offer.features.some((feature) => feature === checkbox.value));
  },
};

const getPublicationSort = (data) => {
  let i = 0;
  let output;
  const offers = [];

  while (i< data.length && offers.length < MAX_COUNT) {
    output = mapFilters.every((filter) => (filter.value === DEFAULT_VALUE) ? true : filters[filter.id](data[i], filter));
    if(output) {
      offers.push(data[i]);
    }
    i++;
  }
  return offers;
};

export{getPublicationSort};
