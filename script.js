const url = 'https://api.adviceslip.com/advice';

const getAdviceButton = document.querySelector('.random-button');
const adviceText = document.querySelector('.advice-text');
const adviceNumber = document.querySelector('.advice-number');

getAdviceButton.addEventListener("click", getAdvice);

async function getAdvice() {
  const response = await fetch(url);
  const data = await response.json();

  const newAdvice = data.slip;
  adviceText.innerHTML = newAdvice.advice;
  adviceNumber.innerHTML = newAdvice.id;
}

getAdvice();