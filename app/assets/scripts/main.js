$('.owl-carousel').owlCarousel({
	items: 1,
	loop: true,
	center: true,
	autoplay: true,
	autoplaySpeed: 500
});

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
