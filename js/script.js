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
const answersForm = document.getElementById('answers-form');
const instructions = document.getElementById('instructions');
const idInterval = setInterval(() => {
  if (seconds === 0) {
    clearInterval(idInterval);
    answersForm.classList.remove('d-none');
    answersForm.classList.add('d-inline-block');
    countdown.classList.add('d-none');
    numbersList.classList.add('d-none');
    instructions.innerText = 'Inserisci i numeri che ti ricordi nell\'ordine che vuoi';
  }
  else {
    countdown.innerText = seconds;
  }
  seconds--;
}, 1000);

let arrayNumbers = [];

arrayNumbers.push(listItem1.innerText);
arrayNumbers.push(listItem2.innerText);
arrayNumbers.push(listItem3.innerText);
arrayNumbers.push(listItem4.innerText);
arrayNumbers.push(listItem5.innerText);
console.log(arrayNumbers)

const button = document.querySelector('.btn');
button.addEventListener('click', (event) => {
  event.preventDefault();

  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const num3 = document.getElementById('num3').value;
  const num4 = document.getElementById('num4').value;
  const num5 = document.getElementById('num5').value;

  let arrayAnswers = [];
  arrayAnswers.push(num1);
  arrayAnswers.push(num2);
  arrayAnswers.push(num3);
  arrayAnswers.push(num4);
  arrayAnswers.push(num5);
  console.log(arrayAnswers)
})

