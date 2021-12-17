window.onload = function () {
    // header menu
    const navSlide = function () {
        const burger_btn = document.querySelector('.humburger');
        const menu = document.querySelector('.menu');
        // 點擊 humburger 彈出menu內容
        burger_btn.addEventListener('click', function () {
            menu.classList.toggle('menu-active');
        });
    }
    navSlide();

    // ==================== search btn
    const btn = document.querySelector('.search-btn');
    const input = document.querySelector('.search-input');

    btn.addEventListener('click', function () {
        input.classList.toggle('search-active');
        input.focus();
        // 如果有active 文字就顯示，不然就消失
        if ($('.search-input').hasClass('search-active')) {
            $('.search-input').css('opacity', '1');
        } else {
            $('.search-input').css('opacity', '0');
        }
    });
    // ==================== user btn
    const userBtn = document.querySelector(".user-btn");
    const signMenu = document.querySelector(".signOut-menu");

    userBtn.addEventListener('click', function () {
        signMenu.classList.toggle('signOut-dropdown-active');
        // if ($('.search-input').hasClass('search-active')) {
        //     $('.search-input').css('opacity', '1');
        // } else {
        //     $('.search-input').css('opacity', '0');
        // }
    });




};