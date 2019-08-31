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
function wooder() {
    var btnInformation = document.querySelector('.burger__menu--information .information');
    var btnLanguage = document.querySelector('.burger__menu--information .language');
    var information_window = document.querySelector('.information__window');
    var choice_language  = document.querySelector('.language__choice');
    var products = document.querySelector('.products');
     event()
    function event() {
        btnInformation.addEventListener('click', information)
        btnLanguage.addEventListener('click', languageInformation);
    }
    function information(e) {

        information_window.classList.toggle("show")
        setTimeout(function () {
            information_window.classList.remove("show");
        }, 10000);
     }
    function languageInformation() {
        choice_language.classList.toggle("show")
        setTimeout(function () {
            choice_language.classList.remove("show");
        }, 10000);
    }

}
wooder()

$(function(){
    $('.products').click(function(){$('html,body').animate({scrollTop:$('.furniture_wooden').offset().top}, 1000);});
});
$(function(){
    $('.about').click(function(){$('html,body').animate({scrollTop:$('.about_us_wooden').offset().top}, 1000);});
});