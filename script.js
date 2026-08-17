$(document).ready(function () {

    /* ==========================
       MOBILE MENU
    ========================== */

    $(".menu-btn").click(function () {
        $(".nav-left").slideToggle();
        $(".nav-right").slideToggle();
    });

    /* ==========================
       TOP BAR SLIDER
    ========================== */

    $(".topbar-slider").slick({
        dots: false,
        arrows: true,
        prevArrow: $(".topbar-prev"),
        nextArrow: $(".topbar-next"),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        speed: 600
    });

    /* ==========================
       HERO SLIDER
    ========================== */

    $(".hero-slider").slick({
        slide: ".hero-slide",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        fade: true,
        arrows: true,
        dots: false,
        prevArrow: $(".hero-prev"),
        nextArrow: $(".hero-next")
    });

    /* ==========================
       FEATURED PRODUCTS
    ========================== */

    $(".featured-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        dots: false,
        prevArrow: $(".feature-prev"),
        nextArrow: $(".feature-next"),

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /* ==========================
       TESTIMONIALS
    ========================== */

    $(".testimonial-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: "110px",
        prevArrow: $(".testimonial-prev"),
        nextArrow: $(".testimonial-next"),

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerPadding: "60px"
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: "20px"
                }
            }
        ]
    });

    /* ==========================
       COLLECTION CARD HOVER
    ========================== */

    $(".collection-card").hover(
        function () {
            $(this).addClass("active");
        },
        function () {
            $(this).removeClass("active");
        }
    );

});