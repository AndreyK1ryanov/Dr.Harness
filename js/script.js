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
                $('.everyday-card').addClass('everyday-card_activate').removeClass('everyday-card_deactivate')
                $('.erotic-card').addClass('erotic-card_deactivate').removeClass('erotic-card_activate')
            } else {
                $('.everyday-card').addClass('everyday-card_deactivate').removeClass('everyday-card_activate')
                $('.erotic-card').addClass('erotic-card_activate').removeClass('erotic-card_deactivate')
            }
        })
    })

    //----------------catalog shift (erotic/everyday) - finish------------------//


    //-------catalog shift (erotic/everyday) from promo button - start----------//
    $('#promo_everyday_button').on('click', function () {
        $('.everyday').addClass('change-product-style__button_activate').removeClass('change-product-style__button_deactivate')
        $('.erotic').addClass('change-product-style__button_deactivate').removeClass('change-product-style__button_activate')
        $('.everyday-card').addClass('everyday-card_activate').removeClass('everyday-card_deactivate')
        $('.erotic-card').addClass('erotic-card_deactivate').removeClass('erotic-card_activate')
    })
    $('#promo_erotic_button').on('click', function () {
        $('.erotic').addClass('change-product-style__button_activate').removeClass('change-product-style__button_deactivate')
        $('.everyday').addClass('change-product-style__button_deactivate').removeClass('change-product-style__button_activate')
        $('.erotic-card').addClass('erotic-card_activate').removeClass('erotic-card_deactivate')
        $('.everyday-card').addClass('everyday-card_deactivate').removeClass('everyday-card_activate')
    })
    //-------catalog shift (erotic/everyday) from promo button - finish----------//


    //----------------choise product size and color - start------------------//
    $('.catalog-card__size-pick').each(function () {
        $(this).on('click', function () {
            $('.catalog-card__size-pick').removeClass('catalog-card__size-pick_select')
            $(this).addClass('catalog-card__size-pick_select')
        })
    })

    $('.catalog-card__color-pick').each(function () {
        $(this).on('click', function () {
            $('.catalog-card__color-pick').removeClass('catalog-card__color-pick_select')
            $(this).addClass('catalog-card__color-pick_select')
        })
    })
    //----------------choise product size and color - finish------------------//



    //---------------------------pop-up - start-----------------------------//
    $('.catalog-card').find('.catalog-card__buy-button').each(function () {
        $(this).on('click', function () {
            var $productName = $(this).parent().parent('.catalog-card').find('.catalog-card__name').text()
            var $productImage = $(this).parent().parent('.catalog-card').find('.catalog-card__img').attr("src");
            var $productPriceOld = $(this).parent().parent('.catalog-card').find('.catalog-card__price-old').text();
            var $productPriceNew = $(this).parent().parent('.catalog-card').find('.catalog-card__price-new').text();

            $('.pop-up').removeClass('pop-up_deactivate').addClass('pop-up_activate')

            $('.pop-up__product-name').text($productName);
            $('.pop-up__product-img').attr("src", $productImage);
            $('.pop-up__price-old').text($productPriceOld);
            $('.pop-up__price-new').text($productPriceNew);
        })
    })
    $('.pop-up__product-close-button').on('click', function () {
        $('.pop-up').removeClass('pop-up_activate').addClass('pop-up_deactivate')
    })
    $('.pop-up__product-button-buy').on('click', function () {
        alert('Благодарю за клик :-)')
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