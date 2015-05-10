'use strict';
var owl = $('.owl-primary');

owl.owlCarousel({
    items:1,
    loop:true,
    mouseDrag: false,
    dots: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
}).on('click', function(){
    $(this).find('.owl-next').trigger('click');
});


/* Footer */

$('.footer h1').on('click', function(e){
    e.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 300);

});

/* Portfolio */
$('.portfolio-options button').on('click', function(){
    var parent = $(this).parents('.portfolio');

    if( $('.owl-primary', parent).hasClass('active')){
        $('.portfolio-info', parent).toggleClass('active');
        $('.owl-primary', parent).toggleClass('active');
    }else{
        $('.owl-primary', parent).toggleClass('active');
        $('.portfolio-info', parent).toggleClass('active');
    }
    
});

