import './validation-form.js';
import './map.js';
import {onSuccess} from './map.js';
import{inquiry} from './api.js';
import { showAlert } from './submit-form.js';
import{setFormSubmit} from './validation-form.js';

inquiry(onSuccess, showAlert, 'GET');
setFormSubmit();
