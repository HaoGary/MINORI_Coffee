// splide
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        perPage: 3,
        type: 'loop',
        focus: 'center',
    });
    splide.mount();
});