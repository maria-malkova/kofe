$(document).ready(function (){
    $('.header__hamburger').click(function(){
        $('.header__area').toggleClass('header__area--show');
        $('.header__candy').toggleClass('header__candy--show');
        $('.header__logo').toggleClass('header__logo--hide');
        $('.header__cross').toggleClass('header__cross--show');
        $('.header__burger').toggleClass('header__burger--hide');
    })

    $('.header__hamburger').click(function(){
        $(this).toggleClass('is-active');
    })


})