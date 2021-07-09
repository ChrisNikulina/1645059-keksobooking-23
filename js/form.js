const adForm = document.querySelector('.ad-form');
const formFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');

const getInactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  formFieldsets.forEach((fieldset) => fieldset.disabled = true);
  mapFilters.classList.add('.map__filters--disabled');
};

const getActiveState = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldsets.forEach((fieldset) => fieldset.disabled = false);
  mapFilters.classList.remove('.map__filters--disabled');
};

export {getInactiveState, getActiveState};

