const fold_unfold = document.querySelector('.fold_unfold');
const menu = document.querySelector('.nav_menu');
const icons = document.querySelector('.logo');

fold_unfold.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
