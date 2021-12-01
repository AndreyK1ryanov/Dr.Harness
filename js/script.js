$(document).ready(function () {

    //-------------------------slick slider - start---------------------------//
    $('.info_block__slider').slick({
        slidesToShow: 15,
        slidesToScroll: 3,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    slidesToShow: 15,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //-------------------------slick slider - finish---------------------------//


    //----------------catalog shift (erotic/everyday) - start------------------//
    $('.catalog__top_nav button').each(function () {
        $(this).on('click', function () {
            $('.catalog__top_nav button').removeClass('active').addClass('non-active')
            $(this).addClass('active').removeClass('non-active');

            if ($('#every_day_button').hasClass('active')) {
                $('.catalog-card__every_day').css({
                    'display': 'block',
                });
                $('.catalog-card__erotic').css({
                    'display': 'none',
                });
            } else {
                $('.catalog-card__every_day').css({
                    'display': 'none',
                });
                $('.catalog-card__erotic').css({
                    'display': 'block',
                });
            }
        })
    })
    //----------------catalog shift (erotic/everyday) - finish------------------//



    //----------------choise product size and color - start------------------//
    $('.catalog-card__size button').each(function () {
        $(this).on('click', function () {
            $('.catalog-card__size button').removeClass()
            $(this).addClass('catalog-card__size-select')
        })
    })

    $('.catalog-card__color button').each(function () {
        $(this).on('click', function () {
            $('.catalog-card__color button').removeClass('catalog-card__color-select')
            $(this).addClass('catalog-card__color-select')
        })
    })
    //----------------choise product size and color - finish------------------//



    //---------------------------pop-up - start-----------------------------//
    $('.catalog-card').find('.catalog-card__buy-button').each(function () {
        $(this).on('click', function () {
            var $productName = $(this).parent('.catalog-card').find('.catalog-card__name p').text()
            var $productImage = $(this).parent('.catalog-card').find('.catalog-card__img img').attr("src");
            var $productPriceOld = $(this).parent('.catalog-card').find('.catalog-card__price-old').text();
            var $productPriceNew = $(this).parent('.catalog-card').find('.catalog-card__price-new').text();

            $('.pop-up').css({
                'display': 'grid',
            });
            $('.pop-up__product-name p').text($productName);
            $('.pop-up__image img').attr("src", $productImage);
            $('.pop-up__product-price_old').text($productPriceOld);
            $('.pop-up__product-price_new').text($productPriceNew);
        })
    })
    $('.pop-up__product-close button').on('click', function () {
        $('.pop-up').css({
            'display': 'none',
        });
    })
    //---------------------------pop-up - finish-----------------------------//


    //------------------------mob-nav-menu - start--------------------------//
    $('.mobile-control__open-button').on('click', function () {
        $('.mobile-control__open-button').css({
            'display': 'none',
        });
        $('.mobile-control__close-button').css({
            'display': 'inline-block',
        });
        $('.header-menu-navigation').css({
            'display': 'block',
        });
    })

    $('.mobile-control__close-button').on('click', function () {
        $('.mobile-control__open-button').css({
            'display': 'inline-block',
        });
        $('.mobile-control__close-button').css({
            'display': 'none',
        });
        $('.header-menu-navigation').css({
            'display': 'none',
        });
        function myFunction() {
            if ($(window).width() > 970) {
                $('.header-menu-navigation').css({
                    'display': 'block',
                });
            }
        }
        myFunction();
        $(window).resize(function () {
            myFunction();
        });
    })
    //------------------------mob-nav-menu - finish--------------------------//
});