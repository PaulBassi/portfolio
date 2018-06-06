$(document).ready(function () {
    $(this).scrollTop(0);
    $(document).scrollTop(0);
    window.location.hash = '';
    console.log(`ready`);
});




window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(function () {
    $('a').smoothScroll({
        speed: 700,
    });
});

