







if(window.matchMedia('(max-width: 481px)').matches){
    $(document).ready(function (){
        $('.expert__list').slick({
            arrows: true,
    
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            
            prevArrow: '.expert__left',
            nextArrow: '.expert__right',	
            
        })
    })
}

$(document).ready(function (){
    $('.expert__list').slick({
        arrows: true,

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        prevArrow: '.expert__left',
        nextArrow: '.expert__right',	
        
    });


    
})



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

$(document).ready(function (){
    $('.respect__name').click(function(){
        if ($(this).siblings('.respect__text').hasClass('respect__text--hide')){
            $('.respect__text').removeClass('respect__text--hide');
            $(this).siblings('.respect__text').removeClass('respect__text--hide');
            $('.respect__name').removeClass('respect__name--hide');
            $(this).removeClass('respect__name--hide');
        } else {
            $(this).siblings('.respect__text').addClass('respect__text--hide');
            $(this).addClass('respect__name--hide');
        }

    })
})
$(document).ready(function (){
    $('.review__content').slick({
        arrows: true,
        
        prevArrow: '.review__left, .review__leftmini',
        nextArrow: '.review__right, .review__rightmini',	
      
    });
})



