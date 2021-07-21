const Urls = {
  GET: ' https://23.javascript.pages.academy/keksobooking/data',
  POST: 'https://23.javascript.pages.academy/keksobooking',
};


const inquiry = (onSuccess, onError, method, body) => {
  fetch(
    Urls[method],
    {
      method,
      body,
    },
  ).then((response) => {
    if(response.ok) {
      response.json().then((data) => {
        onSuccess(data);
      });
    }  else {
      onError('Произошла ошибка загрузки данных.');
    }
  }).catch(() => {
    onError('Произошла ошибка загрузки данных.');
  });
};

export{inquiry};
