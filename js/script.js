const numRandom = () => {
  num = Math.floor(Math.random() * 50) + 1;
  return num;
}

const numbersList = document.getElementById('numbers-list');

const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const listItem4 = document.createElement('li');
const listItem5 = document.createElement('li');

listItem1.append(numRandom());
listItem2.append(numRandom());
listItem3.append(numRandom());
listItem4.append(numRandom());
listItem5.append(numRandom());

numbersList.appendChild(listItem1);
numbersList.appendChild(listItem2);
numbersList.appendChild(listItem3);
numbersList.appendChild(listItem4);
numbersList.appendChild(listItem5);

let seconds = 10;
const countdown = document.getElementById('countdown');
const answerForm = document.getElementById('answers-form');
const instructions = document.getElementById('instructions');
const idInterval = setInterval(() => {
  if (seconds === 0) {
    clearInterval(idInterval);
    answerForm.classList.remove('d-none');
    answerForm.classList.add('d-inline-block');
    countdown.classList.add('d-none');
    numbersList.classList.add('d-none');
    instructions.innerText = 'Inserisci i numeri che ti ricordi nell\'ordine che vuoi';
  }
  else {
    countdown.innerText = seconds;
  }
  seconds--;
}, 1000);