const waterAmountInput = document.getElementById('waterAmount');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
  const amount = parseInt(waterAmountInput.value);
  if (!amount || amount <= 0) return alert('Введите количество воды');
  // TODO: сохранять запись
  alert(`Добавлено ${amount} мл`);
  waterAmountInput.value = '';
});