"use strict";var owl=$(".owl-primary");owl.owlCarousel({items:1,loop:!0,mouseDrag:!1,dots:!0,animateIn:"fadeIn",animateOut:"fadeOut",autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0}).on("click",function(){$(this).find(".owl-next").trigger("click")}),$(".footer h1").on("click",function(a){a.preventDefault(),$("html, body").animate({scrollTop:0},300)}),$(".portfolio-options button").on("click",function(){var a=$(this).parents(".portfolio");$(".owl-primary",a).hasClass("active")?($(".portfolio-info",a).toggleClass("active"),$(".owl-primary",a).toggleClass("active")):($(".owl-primary",a).toggleClass("active"),$(".portfolio-info",a).toggleClass("active"))});