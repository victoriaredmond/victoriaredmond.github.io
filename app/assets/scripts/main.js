$('.owl-primary').owlCarousel({
	items: 1,
	loop: true,
	center: true,
	autoplay: true,
	autoplaySpeed: 500
});

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
    	parent = self.parents('.portfolio-container');

    	// 0.o whyyyyyy ?? I didnt see, its opening all of them lol 
        $('.portfolio-info', parent).toggleClass('active');
        $('.owl-primary', parent).toggleClass('active');
    
});