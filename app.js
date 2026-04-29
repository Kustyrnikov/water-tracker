const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
  if (confirm('Удалить все записи за сегодня?')) {
    localStorage.removeItem('waterEntries');
    if (typeof loadHistory === 'function') loadHistory();
  }
});