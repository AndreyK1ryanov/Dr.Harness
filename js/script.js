$(document).ready(function () {

    //-------------------------slick slider - start---------------------------//
    $('.product-slider').slick({
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
    $('.change-product-style__button').each(function () {
        $(this).on('click', function () {
            $('.change-product-style__button').removeClass('change-product-style__button_activate').addClass('change-product-style__button_deactivate')
            $(this).addClass('change-product-style__button_activate').removeClass('change-product-style__button_deactivate');

            if ($('.everyday').hasClass('change-product-style__button_activate')) {
                $('.catalog-card__everyday').addClass('catalog-card__everyday_activate').removeClass('catalog-card__everyday_deactivate')
                $('.catalog-card__erotic').addClass('catalog-card__erotic_deactivate').removeClass('catalog-card__erotic_activate')
            } else {
                $('.catalog-card__everyday').addClass('catalog-card__everyday_deactivate').removeClass('catalog-card__everyday_activate')
                $('.catalog-card__erotic').addClass('catalog-card__erotic_activate').removeClass('catalog-card__erotic_deactivate')
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
            $('.pop-up__product-name').text($productName);
            $('.pop-up__image img').attr("src", $productImage);
            $('.pop-up__product-price_old').text($productPriceOld);
            $('.pop-up__product-price_new').text($productPriceNew);
        })
    })
    $('.pop-up__product-close-button').on('click', function () {
        $('.pop-up').css({
            'display': 'none',
        });
    })
    //---------------------------pop-up - finish-----------------------------//


    //------------------------mob-nav-menu - start--------------------------//
    function myFunction() {
        if ($(window).width() <= 940 && $('.mobile-control__close-button').hasClass('mobile-control__close-button_deactivate')) {
            $('.mobile-control__open-button').removeClass('mobile-control__open-button_deactivate').addClass('mobile-control__open-button_activate');
        } else {
            $('.mobile-control__open-button').removeClass('mobile-control__open-button_activate').addClass('mobile-control__open-button_deactivate');
        }
    }
    myFunction();
    $(window).resize(function () {
        myFunction();
    });

    $('.mobile-control__open-button').on('click', function () {
        $('.mobile-control__open-button').removeClass('mobile-control__open-button_activate').addClass('mobile-control__open-button_deactivate');
        $('.header-menu-navigation').removeClass('header-menu-navigation_mobile-deactivate').addClass('header-menu-navigation_mobile-activate');
        $('.mobile-control__close-button').removeClass('mobile-control__close-button_deactivate').addClass('mobile-control__close-button_activate');
    });
    $('.mobile-control__close-button').on('click', function () {
        $('.mobile-control__close-button').removeClass('mobile-control__close-button_activate').addClass('mobile-control__close-button_deactivate');
        $('.header-menu-navigation').removeClass('header-menu-navigation_mobile-activate').addClass('header-menu-navigation_mobile-deactivate');
        $('.mobile-control__open-button').removeClass('mobile-control__open-button_deactivate').addClass('mobile-control__open-button_activate');
    });
    //------------------------mob-nav-menu - finish--------------------------//
});