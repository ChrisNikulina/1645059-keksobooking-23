import './validation-form.js';
import './map.js';
import {createMarker} from './map.js';
import{getData} from './api.js';
import { showAlert } from './submit-form.js';
import{setFormSubmit} from './validation-form.js';

getData(createMarker, showAlert);
setFormSubmit();
