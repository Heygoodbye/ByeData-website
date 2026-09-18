const resetButton = document.querySelector('[data-reset]');
const total = document.querySelector('[data-total]');
const downloaded = document.querySelector('[data-downloaded]');
const uploaded = document.querySelector('[data-uploaded]');
const taskbar = document.querySelector('[data-taskbar]');

resetButton?.addEventListener('click', () => {
  total.textContent = '0 B';
  downloaded.textContent = '0 B';
  uploaded.textContent = '0 B';
  taskbar.textContent = '0 B';
  resetButton.textContent = 'Data reset';
  window.setTimeout(() => { resetButton.textContent = 'Reset data'; }, 1500);
});
