import './validation-form.js';
import './map.js';
import {setSuccess} from './map.js';
import{inquiry} from './api.js';
import { showAlert } from './submit-form.js';
import{setFormSubmit} from './validation-form.js';

inquiry(setSuccess, showAlert, 'GET');
setFormSubmit();
