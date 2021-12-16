window.onload = function () {
    // menu
    const navSlide = function () {
        const burger_btn = document.querySelector('.humburger');
        const menu = document.querySelector('.menu');
        // 點擊 humburger 彈出menu內容
        burger_btn.addEventListener('click', function () {
            menu.classList.toggle('menu-active');
        });
    }
    navSlide();

};