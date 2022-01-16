
const down_button = document.querySelector('.hc-down-button');
const show_hide = document.querySelector('.hidden');
$(".hc-down-button").click(function () {
    // console.log($(this).parent().parent().siblings());
    const form_Display = $(this).parent().parent().siblings();
    if (form_Display.hasClass('showen')) {
        form_Display.removeClass('showen').addClass('hidden');
        $(this).children().removeClass('fas fa-chevron-up')
            .addClass('fas fa-chevron-down');
    } else if (form_Display.hasClass('hidden')) {
        form_Display.removeClass('hidden').addClass('showen');
        $(this).children().removeClass('fas fa-chevron-down')
            .addClass('fas fa-chevron-up');
    }
});
