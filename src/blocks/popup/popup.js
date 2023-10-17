$(document).ready(function (){
    $('.popup__close').click(function(){
       $('.popup').removeClass('popup--open');
    });

    $('.header__mail').click(function(){
        $('.popup').addClass('popup--open');
    });

    $('.header__button').click(function(){
        $('.popup').addClass('popup--open');
    })

    $('.popup__ask').click(function(){
        $('.popup').removeClass('popup--open')
    })

    

    
});


// чтобы на нажатие серого фона форма тоже скрывалась !!!
// сделать адаптивным попап