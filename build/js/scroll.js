window.addEventListener('scroll', function () {
    var taglineSection = document.querySelector('.tagline');
    var taglinePosition = taglineSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (taglinePosition < windowHeight) {
        taglineSection.classList.add('animate-tagline');
    } else {
        taglineSection.classList.remove('animate-tagline');
    }
});

window.addEventListener('scroll', function () {
    var featuredSection = document.querySelector('.featured-lg');
    var featuredPosition = featuredSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (featuredPosition < windowHeight) {
        featuredSection.classList.add('animate-slide');
    } else {
        featuredSection.classList.remove('animate-slide');
    }
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.nav');
    if (window.pageYOffset > 0) {
        navbar.classList.add('bg-white-scroll');
    } else {
        navbar.classList.remove('bg-white-scroll');
    }
});

var menuButton = document.getElementById('menuButton');
var closeButton = document.getElementById('closeButton');
var menuExpand = document.querySelector('.nav-expanded');
var barsIcon = document.querySelector('#menuButton .fa-bars');
var xmarkIcon = document.querySelector('#menuButton .fa-times');

menuButton.addEventListener('click', function () {
    menuExpand.style.display = 'block';
    menuButton.classList.toggle('active');
});

closeButton.addEventListener('click', function () {
    menuExpand.style.display = 'none';
    menuButton.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    var featuredSection = document.querySelector('.featured-sm');
    var featuredPosition = featuredSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (featuredPosition < windowHeight) {
        featuredSection.classList.add('animate-slide');
    } else {
        featuredSection.classList.remove('animate-slide');
    }
});

window.addEventListener('scroll', function () {
    var featuredSection = document.querySelector('.ongoing');
    var featuredPosition = featuredSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (featuredPosition < windowHeight) {
        featuredSection.classList.add('animate-slide');
    } else {
        featuredSection.classList.remove('animate-slide');
    }
});