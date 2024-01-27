const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const miniMenu = document.querySelector('#mini-menu');
    const tombolmini = document.querySelector('#tombol-mini');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        miniMenu.classList.add('mini-menu');
        tombolmini.classList.add('mini-tombol');
    } else {
        header.classList.remove('navbar-fixed');
        miniMenu.classList.remove('mini-menu');
        tombolmini.classList.remove('mini-tombol');
    }
};


// slider
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})



// dark mode

const darkToggle = document.querySelector('#toggleFour');
const html = document.querySelector('html');

// Cek state darkMode
if (sessionStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
    darkToggle.checked = true;
} else {
    html.classList.remove('dark');
    darkToggle.checked = false;
}

darkToggle.addEventListener('change', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        sessionStorage.setItem('darkMode', 'true');
    } else {
        html.classList.remove('dark');
        sessionStorage.setItem('darkMode', 'false');
    }
});




