$(document).ready(function () {

    window.addEventListener('load', AOS.refresh)
    AOS.init();

    // $('.counter').counterUp({
    //     time: 1000
    // });

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });


    $('.center').slick({
        centerMode: true,
        centerPadding: '30',
        slidesToShow: 4,
        prevArrow: '.prev-btn',
        nextArrow: '.next-btn',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '25px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.customer-review').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: '.prev-btn-2',
        nextArrow: '.next-btn-2',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


})