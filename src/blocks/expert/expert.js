

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