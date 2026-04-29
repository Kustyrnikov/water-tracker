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

window.addEventListener('load', loadHistory);