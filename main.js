$(document).ready(function () {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	$('nav a[href*="#"]').on('click', function () {
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 100}, 2000);
	});

	$('#up').on('click', function () {
		$('html, body').animate({scrollTop: 0 }, 2000);
	});

	$('#down').on('click', function () {
		$('html, body').animate({scrollTop: "900" }, 2000);
		// { scrollTop: "0" }
	});


	// Animations on scroll so they come in from the sides, AOS package
	// Initalize AOS
	AOS.init({
		easing: 'ease',	// default easing for AOS animations
		duration: 1800,	// values from 0 to 3000, with step 50ms
		once: true
	});

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  // offset: 120, // offset (in px) from the original trigger point
	  // delay: 0, // values from 0 to 3000, with step 50ms
	  // duration: 400, // values from 0 to 3000, with step 50ms
	  // easing: 'ease', // default easing for AOS animations
	  // once: false, // whether animation should happen only once - while scrolling down
	  // mirror: false, // whether elements should animate out while scrolling past them
	  // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});