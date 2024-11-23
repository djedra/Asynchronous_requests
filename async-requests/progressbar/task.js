const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
const selectFile = document.querySelector('input');


form.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  xhr.open('POST',
    'https://students.netoservices.ru/nestjs-backend/upload', true);

  xhr.upload.addEventListener('progress',(e) => {
    progress.value = e.loaded/e.total
  })

  xhr.send(formData);
})



selectFile.addEventListener('click', (e) =>{
  progress.value = '0.0'
});