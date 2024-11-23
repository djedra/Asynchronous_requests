const img = document.querySelector('#loader');
const itemDiv = document.querySelector('#items');

const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {

  switch (xhr.status) {
    case 200:

      const data = JSON.parse(xhr.responseText).response.Valute;

      for (const item in data) {

        const addInf = `<div class="item">
                                 <div class="item__code">${data[item].CharCode}</div>
                                 <div class="item__value">${data[item].Value}</div>
                                 <div class="item__currency">руб.</div>
                                </div>`;

        itemDiv.insertAdjacentHTML('beforeend', addInf)
      }

      img.classList.remove('loader_active')
      break;

    case 400:

      console.log('запрашиваемый ресурс не найден на сервере')

      break;

    case 500:
      console.log('произошла ошибка на стороне сервера')
      break;

    // const myStorage = window.localStorage;
  }
})

xhr.open('GET',
  'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.send();
