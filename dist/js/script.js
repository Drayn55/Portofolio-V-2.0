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


// slider web desaign
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('gallery');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;

    // Fungsi untuk menampilkan item yang sesuai dengan indeks saat ini
    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
        });
    }

    // Fungsi untuk menangani klik tombol sebelumnya
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    // Fungsi untuk menangani klik tombol berikutnya
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    // Tambahkan event listener untuk tombol sebelumnya dan berikutnya
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Tampilkan item pertama saat halaman dimuat
    showItem(currentIndex);
});


