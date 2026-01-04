
const buttons = document.querySelectorAll('.menu-btn');
const overlay = document.getElementById('modal-overlay');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    const modalId = `modal-${btn.dataset.modal}`;
    document.getElementById(modalId).style.display = 'block';
    overlay.style.display = 'block';
    });
});

overlay.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none';
    });
    overlay.style.display = 'none';
});
