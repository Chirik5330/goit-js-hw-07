const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');
let currentValue = 0;
const increment = () => {
  return (counterValueEl.textContent = currentValue += 1);
};
const decrement = () => {
  return (counterValueEl.textContent = currentValue -= 1);
};
decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);