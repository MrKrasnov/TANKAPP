const hamburger = document.getElementById('humburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function (event) {
    event.preventDefault();
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});


