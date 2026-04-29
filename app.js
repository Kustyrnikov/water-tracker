const goalInput = document.getElementById('goalInput');
const setGoalBtn = document.getElementById('setGoalBtn');
const goalDisplay = document.getElementById('goalDisplay');

setGoalBtn.addEventListener('click', () => {
  const goal = parseInt(goalInput.value);
  if (!goal || goal <= 0) return alert('Введите корректную цель');
  localStorage.setItem('dailyGoal', goal);
  goalDisplay.textContent = goal;
});

window.addEventListener('load', () => {
  const savedGoal = localStorage.getItem('dailyGoal');
  if (savedGoal) goalDisplay.textContent = savedGoal;
});

const waterAmountInput = document.getElementById('waterAmount');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  const amount = parseInt(waterAmountInput.value);
  if (!amount || amount <= 0) return alert('Введите количество воды');
  // TODO: сохранять запись
  alert(`Добавлено ${amount} мл`);
  waterAmountInput.value = '';
});