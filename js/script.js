document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const floatingMenu = document.querySelector('.floating-menu');

    menuToggle.addEventListener('click', function() {
        floatingMenu.classList.toggle('active');
    });
});
