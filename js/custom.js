$(document).ready(function () {
    $('.toggle').click(function () {
        $('nav').slideToggle()
        $(this).toggleClass('active')
    })
    $('.club-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.banner-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,

    });

    $('.ini-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.cats ul').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        variableWidth: true
    });
    $('.projects .mobile-view').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.memo-pics').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 10000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
})