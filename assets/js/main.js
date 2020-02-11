(function ($) {
"use strict";


	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})

    // meanmenu
    jQuery('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) { $(".header").addClass('header-sticky'); }
		else {
			$(".header").removeClass('header-sticky');
		}
	});

	// One Page Nav
	if ($(".header").length) {
		var top_offset = $('.header').height() - 10;
		$('.main-menu nav ul').onePageNav({
			currentClass: 'active',
			scrollOffset: top_offset,
		});
	}

	// for menu scroll 
	$('.footer-menu li a').click(function () {
		var hash = this.hash;
		var position = $(hash).offset().top;
		$('html').animate({
			scrollTop: position
		}, 900)
	});

	// slider - active
	function mainSlider() {
		var BasicSlider = $('.slider-active');

		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});

		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});

		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			fade: true,
			arrows: false,
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	// testimonial-active slider 
	$('.testimonial-active').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}
		]
	});

	//Scroll top 
	$(".scroll-top").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn(); }
		else {
			$(".scroll-top").fadeOut();
		}
	});

	/* magnificPopup img view */
	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

    // counterUp
    $('.counter').counterUp({
		delay: 100,
		time: 2000
	});

	// WOW active
	new WOW().init();

})(jQuery);	