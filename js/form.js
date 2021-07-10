const adForm = document.querySelector('.ad-form');
const formFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');

const setInactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  formFieldsets.forEach((fieldset) => fieldset.disabled = true);
  mapFilters.classList.add('.map__filters--disabled');
  mapFiltersSelect.forEach((select) => select.disabled = true);
  mapFiltersFieldset.disabled = true;
};

const setActiveState = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldsets.forEach((fieldset) => fieldset.disabled = false);
  mapFilters.classList.remove('.map__filters--disabled');
  mapFiltersSelect.forEach((select) => select.disabled = false);
  mapFiltersFieldset.disabled = false;
};

export {setInactiveState, setActiveState};

