$(document).ready(function() {

    $('header .logo').animate({
        opacity: 1,
        marginTop: '-84px'
    }, 1600);

    $('header .menu').css({
        opacity: 0
    });

    $('header .menu').animate({
        opacity: 1
    }, 2000);

    $('.container').css({
        opacity: 0
    });

    $('.container').animate({
        opacity: 1
    }, 3000);

    if ($(window).width() < 800) {
        $('header .logo').animate({
            opacity: 1,
            marginTop: '-53px'
        }, 1500);
    }

    if ($(window).width() < 600) {
        $('header .logo').animate({
            opacity: 1,
            marginTop: '-43px'
        }, 1500);
    }

});