const goalInput = document.getElementById('goalInput');
const setGoalBtn = document.getElementById('setGoalBtn');
const goalDisplay = document.getElementById('goalDisplay');

const waterAmountInput = document.getElementById('waterAmount');
const addBtn = document.getElementById('addBtn');

const historyList = document.getElementById('historyList');
const totalDisplay = document.getElementById('totalDisplay');

function loadHistory() {
  const entries = JSON.parse(localStorage.getItem('waterEntries') || '[]');
  historyList.innerHTML = '';
  let total = 0;
  entries.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.amount} мл в ${entry.time}`;
    historyList.appendChild(li);
    total += entry.amount;
  });
  totalDisplay.textContent = total;
}

function addWaterEntry(amount) {
  const entries = JSON.parse(localStorage.getItem('waterEntries') || '[]');
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  entries.push({ amount, time: timeString });
  localStorage.setItem('waterEntries', JSON.stringify(entries));
  loadHistory();
}

setGoalBtn.addEventListener('click', () => {
  const goal = parseInt(goalInput.value);
  if (!goal || goal <= 0) return alert('Введите корректную цель');
  localStorage.setItem('dailyGoal', goal);
  goalDisplay.textContent = goal;
});

addBtn.addEventListener('click', () => {
  const amount = parseInt(waterAmountInput.value);
  if (!amount || amount <= 0) return alert('Введите количество воды');
  addWaterEntry(amount);
  waterAmountInput.value = '';
});

window.addEventListener('load', () => {
  const savedGoal = localStorage.getItem('dailyGoal');
  if (savedGoal) goalDisplay.textContent = savedGoal;
  loadHistory();
});