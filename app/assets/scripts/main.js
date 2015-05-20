// Toggle About Content
$('.js-toggle-about').on('click', function(e){
	e.preventDefault();
	var target = $('#about-container');

	if(target.hasClass('in')){
		target.collapse('toggle');
	}else{
		target.collapse('toggle');
		$('html, body').animate({
	        scrollTop: target.offset().top
	    }, 900, 'swing');
	}	
});

// View Portfolio Information
$('.js-about-work').on('click', function(){
    var self = $(this),
    	parent = self.parents('.portfolio-container'),
    	infoHeight = $('.portfolio-info div', parent).height();

	if($('.portfolio-info', parent).hasClass('active')){
		$('.portfolio-info', parent).removeClass('active').css('max-height', '0');
	}else{
		$('.portfolio-info', parent).addClass('active').css('max-height', infoHeight+30);
	}
    
});

// Responsive Crossfade Slides
$(".portfolio-images").responsiveSlides({
	speed: 1500,
	timeout: 7000,
	namespace: '.portfolio-images'
});

// Start Lightcase
$('a[data-rel^=lightcase]').lightcase({
	maxWidth: 1200,
	maxHeight: 800,
	swipe: true
});

// Start Masonry For Posts
// $('.js-masonry').masonry({ 
//   animate: true,
//   isAnimated: !Modernizr.csstransitions
// });