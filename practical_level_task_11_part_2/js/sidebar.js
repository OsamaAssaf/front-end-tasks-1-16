

const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const sidebarCloseBtn = document.querySelector('.sidebar .sidebar-close');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.addEventListener('click',() => {
    sidebar.classList.toggle('show');
});
sidebarCloseBtn.addEventListener('click',() => {
    sidebar.classList.remove('show');
});