const pollTitle = document.querySelector('#poll__title')
const pollAnswers = document.querySelector('#poll__answers')

const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {

  // xhr.addEventListener('readystatechange',() => {


  if (xhr.readyState === xhr.DONE) {
    const data = JSON.parse(xhr.responseText).data;
    const answers = data.answers;

    pollTitle.textContent = data.title

    for (const item in answers) {
      const adAnsver = ` <button class="poll__answer"> ${answers[item]}</button>`
      pollAnswers.insertAdjacentHTML('beforeend', adAnsver)
    }
  }

  const getAnswers = Array.from(document.querySelectorAll('.poll__answer'))

  getAnswers.forEach((i) => {
    i.addEventListener('click', () => {
      if (i) {
        alert('Спасибо, ваш голос засчитан!')
        location.reload()
        return false;
      }
    })
  })
})


xhr.open('GET',
  'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.send();


