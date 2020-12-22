$(document).ready(function () {
    function scrolled() {
        var scroll = $(this).scrollTop();
        $('.nav-middle__link').each(function () {
            var attr = $(this).attr('href');
            var position = $(attr).offset().top - 191;
            if (scroll >= position) {
                $('.nav-middle__link').removeClass('active');
                $(this).addClass('active');
            }
        })
    }
    $(window).on('scroll', function () {
        scrolled();
    });

    $('.nav-middle__link').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $($(this).addClass('active').attr('href')).offset().top - $('.header-nav').innerHeight()
        }, 800)
        $('.nav-middle__link').removeClass('active');
    });
    $('#logo').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.header-nav').innerHeight()
        }, 800)
    });

    $('#menuBtn').click(function () {
        if (!$('.nav-hide-menu').hasClass('active-menu')) {
            $("body").css("overflow", "hidden");
            $('.nav-hide-menu').addClass('active-menu');
            $('.line').addClass('line-active');
            $('.icon-open').hide();
            $('.burger-text').addClass('swipe');
            $('.icon-close').show();
            $('#menuBtn').addClass('toggler-fixed');
        }
        else {
            $("body").css("overflow", "scroll");
            $('.nav-hide-menu').removeClass('active-menu');
            $('.line').removeClass('line-active');
            $('.burger-text').removeClass('swipe');
            $('.icon-close').hide();
            $('.icon-open').show();
        }
    });

    $('.nav-dropdown').click(function () {
        $('.nav-dropdown-menu').css('display, block')
    });

    $('#sendBtn').click(function () {
        $('.lazy-load').show();
        $('.lazy-load.done').hide();
        setTimeout(() => {
            $('.lazy-load').hide();
            $('.lazy-load.done').show();
        }, 2000);
        setTimeout(() => {
            $('.lazy-load.done').hide();
        }, 3600);
    });
});