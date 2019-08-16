AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 500, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation

});

var elem = document.querySelector('.dot_point');
var dot_1 = document.querySelector('.dot_1');
var dot_2 = document.querySelector('.dot_2');
var dot_3 = document.querySelector('.dot_3');
var dot_4 = document.querySelector('.dot_4');
var choice = document.querySelector('.choice h2');
var navigation_line = document.querySelector('.navigation_line');
var products = document.querySelector('.products');
var home = document.querySelector('.home');
var about = document.querySelector('.about');
var language = document.querySelector('.language');
var choice_language = document.querySelector('.choice_language');
var information = document.querySelector('.information');
var information_window = document.querySelector('.information_window');
var menu = document.querySelector('.menu');
var choice_menu = document.querySelector('.choice_menu');
var mainscreen_wooden = document.querySelector('.mainscreen_wooden');

dot_1.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "208px";
    choice.innerText = "01"
};
dot_2.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "260px";
    choice.innerText = "02"
};
dot_3.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "310px";
    choice.innerText = "03"
};
dot_4.onclick = function () {
    elem.style.left = "-22px";
    elem.style.top = "360px";
    choice.innerText = "04"
};
products.onclick = function () {
    navigation_line.style.transform = "translate(937px,10px)"
    navigation_line.style.width = "90px";
};
home.onclick = function () {
    navigation_line.style.transform = "translate(774px,10px)"
    navigation_line.style.width = "50px";
};
about.onclick = function () {
    navigation_line.style.transform = "translate(1115px,10px)"
    navigation_line.style.width = "60px";
};
choice_language.onclick = function () {
    choice_language.classList.remove("show")
};
language.onclick = function () {
    choice_language.classList.toggle("show")
    setTimeout(function () {
        choice_language.classList.remove("show");
    }, 10000);
};
information.onclick = function () {
    information_window.classList.toggle("show")
    setTimeout(function () {
        information_window.classList.remove("show");
    }, 10000);
};
menu.onclick = function () {
    choice_menu.classList.toggle("show");
    setTimeout(function () {
        choice_menu.classList.remove("show");
    }, 10000);
};


