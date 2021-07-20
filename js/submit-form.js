const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.style.zIndex = 100;
  errorContainer.style.position = 'absolute';
  errorContainer.style.left = 0;
  errorContainer.style.right = 0;
  errorContainer.style.top = 0;
  errorContainer.style.padding = '10px 5px';
  errorContainer.style.fontSize = '21px';
  errorContainer.style.textAlign = 'center';
  errorContainer.style.backgroundColor = 'orange';

  errorContainer.textContent = message;

  document.body.append(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, ALERT_SHOW_TIME);
};

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);

const closeMessageHandler = (evt) => {
  if(evt.key === 'Escape' || evt.key === 'Esc') {
    document.querySelector('.load-message').remove();
  }
};

const closeMessage = (message) => {
  document.addEventListener('keydown', closeMessageHandler, {once: true});
  message.addEventListener('click', () => {
    message.remove();
    document.removeEventListener('keydown', closeMessageHandler);
  });
};

const setSuccessMessage = () => {
  document.querySelector('body').append(successMessage);
  closeMessage(successMessage);
};

const setErrorMessage = () => {
  document.querySelector('body').append(errorMessage);
  closeMessage(errorMessage);
};

export{showAlert, setSuccessMessage, setErrorMessage};
