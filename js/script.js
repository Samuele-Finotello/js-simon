let num1 = Math.floor(Math.random() * 50) + 1;
let num2 = Math.floor(Math.random() * 50) + 1;
while (num2 === num1) {
  num2 = Math.floor(Math.random() * 50) + 1;
}
let num3 = Math.floor(Math.random() * 50) + 1;
while (num3 === num1 || num3 === num2) {
  num3 = Math.floor(Math.random() * 50) + 1;
}
let num4 = Math.floor(Math.random() * 50) + 1;
while (num4 === num1 || num4 === num2 || num4 === num3) {
  num4 = Math.floor(Math.random() * 50) + 1;
}
let num5 = Math.floor(Math.random() * 50) + 1;
while (num5 === num1 || num5 === num2 || num5 === num3 || num5 === num4) {
  num5 = Math.floor(Math.random() * 50) + 1;
}

const numbersList = document.getElementById('numbers-list');

const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');
const listItem4 = document.createElement('li');
const listItem5 = document.createElement('li');

listItem1.append(num1);
listItem2.append(num2);
listItem3.append(num3);
listItem4.append(num4);
listItem5.append(num5);

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
console.log(arrayNumbers);

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
  console.log(arrayAnswers);

  let count = 0;
  let right = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    for (let j = 0; j < arrayAnswers.length; j++) {
      if (arrayNumbers[i] === arrayAnswers[j]) {
        count++;
        right.push(arrayAnswers[j]);
      }
    }
  }
  console.log(count, right.toString())

  const message = document.getElementById('message');
  let points;
  if (count == 1) {
    points = `Hai totalizzato ${count} punto: (${right.toString()}) hai perso`
  }
  else if (count == 0) {
    points = `Hai totalizzato ${count} punti: ${right.toString()} hai perso`
  }
  else if (count < 5) {
    points = `Hai totalizzato ${count} punti: (${right.toString()}) hai perso`
  }
  else if (count === 5) {
    points = `Hai totalizzato ${count} punti: (${right.toString()}) hai vinto`
    message.classList.remove('text-danger');
    message.classList.add('text-success');
  }

  message.innerText = points;
})



