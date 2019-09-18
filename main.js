const hamburger = document.getElementById('humburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', function(event){
    event.preventDefault();
    menu.style.display = 'flex';
});


