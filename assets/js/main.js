(function ($) {
	("use strict");

	// meanmenu
	$("#mobile-menu").meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "992",
	});

	$(".side-info-close,.offcanvas-overlay").on("click", function () {
		$(".side-info").removeClass("info-open");
		$(".offcanvas-overlay").removeClass("overlay-open");
		$('body').css('overflow','auto');
	});
	$(".side-toggle").on("click", function () {
		$(".side-info").addClass("info-open");
		$(".offcanvas-overlay").addClass("overlay-open");
		$('body').css('overflow','hidden');
	});

	// Search
	var $searchWrap = $(".search-wrap");
	var $navSearch = $(".nav-search");
	var $searchClose = $("#search-close");

	$(".search-trigger").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$(".search-close").on("click", function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: "toggle" }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on("click", function (e) {
		closeSearch();
	});

	$(".search-trigger, .main-search-input").on("click", function (e) {
		e.stopPropagation();
	});

	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});
	/*------------------------------------
        Slider
	--------------------------------------*/
	if (jQuery(".slider-active").length > 0) {
		let sliderActive1 = ".slider-active";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: "fade",

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".slider-swiper-paginations",
				// dynamicBullets: true,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}

	// brand activation
	if (jQuery(".brand-active").length > 0) {
		let brand = new Swiper(".brand-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 2000,
			},

			breakpoints: {
				500: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
			},
		});
	}

	// portfolio activation
	if (jQuery(".portfolio-active").length > 0) {
		let portfolio = new Swiper(".portfolio-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 5000,
			},
			// Responsive breakpoints
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1400: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			// If we need pagination
			pagination: {
				el: ".portfolio-swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			// And if we need scrollbar
			scrollbar: {
				el: ".swiper-scrollbar",
			},
		});
	}

	// portfolio-slide activation
	if (jQuery(".portfolio-slide").length > 0) {
		let portfolio2 = new Swiper(".portfolio-slide", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: false,
			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".portfolio2-swiper-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			// And if we need scrollbar
			scrollbar: {
				el: ".swiper-scrollbar",
			},
			// Responsive breakpoints
			breakpoints: {
				778: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}

	// testimonial activation
	if (jQuery(".testimonial-active").length > 0) {
		let testimonial = new Swiper(".testimonial-active", {
			slidesPerView: 1,
			spaceBetween: 0,
			// direction: 'vertical',
			loop: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			autoplay: {
				delay: 5000,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".testimonial1-button-next",
				prevEl: ".testimonial1-button-prev",
			},
		});
	}

	// portfolio activation
	if (jQuery(".testimonial-active-2").length > 0) {
		let testimonial2 = new Swiper(".testimonial-active-2", {
			slidesPerView: 1,
			spaceBetween: 200,
			// direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 5000,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".testimonial2-btn-next",
				prevEl: ".testimonial2-btn-prev",
			},
		});
	}
	// team 3 activation
	if (jQuery(".testimonial-active-3").length > 0) {
		let swipertestimonial = new Swiper(".testimonial-active-3", {
			slidesPerView: 1,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: true,
			infinite: false,
			autoplay: {
				delay: 5000,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".testimonial-btn-next",
				prevEl: ".testimonial-btn-prev",
			},

			breakpoints: {
				768: {
					slidesPerView: 2,
				},
			},
		});
	}

	// data background
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ")"
		);
	});

	/* magnificPopup img view */
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// init Isotope
	var $grid = $(".grid").isotope({
		// options
	});
	// filter items on button click
	$(".portfolio-button").on("click", "button", function () {
		var filterValue = $(this).attr("data-filter");
		$grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$(".portfolio-button button").on("click", function (event) {
		$(this).siblings(".active").removeClass("active");
		$(this).addClass("active");
		event.preventDefault();
	});

	// back to top
	$("#scrollToTop").on("click", function () {
		$("body, html").animate({ scrollTop: 0 }, 500);
		return false;
	});

	// scrollToTop
	$.scrollUp({
		scrollName: "scrollUp", // Element ID
		topDistance: "300", // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: "fade", // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// WOW active
	new WOW().init();

	// Active Odometer Counter
	jQuery(".odometer").appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});






	  
})(jQuery);

if (jQuery(".service-area").length > 0) {
  $(document).ready(function() {
	var bigimage = $(".big");
	var thumbs = $(".thumbs");
	//var totalslides = 10;
	var syncedSecondary = true;
  
	bigimage
	  .owlCarousel({
	  items: 1,
	  slideSpeed: 2000,
	  nav: false,
	  autoplay: false,
	  dots: false,
	  loop: true,
	  responsiveRefreshRate: 200,
	  navText: [
		'<i class="fas fa-chevron-left"></i>',
		'<i class="fas fa-chevron-right"></i>'
	  ]
	})
	  .on("changed.owl.carousel", syncPosition);
  
	thumbs
	  .on("initialized.owl.carousel", function() {
	  thumbs
		.find(".owl-item")
		.eq(0)
		.addClass("current");
	})
	  .owlCarousel({
	  items: 3,
	  dots: true,
	  nav: true,
	  margin: 10,
	  navText: [
		'<i class="fas fa-chevron-left"></i>',
		'<i class="fas fa-chevron-right"></i>'
	  ],
	  smartSpeed: 200,
	  slideSpeed: 500,
	  slideBy: 4,
	  responsiveRefreshRate: 100
	})
	  .on("changed.owl.carousel", syncPosition2);
  
	function syncPosition(el) {
	  //if loop is set to false, then you have to uncomment the next line
	  //var current = el.item.index;
  
	  //to disable loop, comment this block
	  var count = el.item.count - 1;
	  var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
	  if (current < 0) {
		current = count;
	  }
	  if (current > count) {
		current = 0;
	  }
	  //to this
	  thumbs
		.find(".owl-item")
		.removeClass("current")
		.eq(current)
		.addClass("current");
	  var onscreen = thumbs.find(".owl-item.active").length - 1;
	  var start = thumbs
	  .find(".owl-item.active")
	  .first()
	  .index();
	  var end = thumbs
	  .find(".owl-item.active")
	  .last()
	  .index();
  
	  if (current > end) {
		thumbs.data("owl.carousel").to(current, 100, true);
	  }
	  if (current < start) {
		thumbs.data("owl.carousel").to(current - onscreen, 100, true);
	  }
	}
  
	function syncPosition2(el) {
				
		var abc = $(this).parent().attr('class');
		if ($(this).parents('.outer').length) {
			$(this).parents('.outer').find('.big').addClass('run');
		}
	  if (syncedSecondary) {
		var number = el.item.index;
		$(".run").data("owl.carousel").to(number, 100, true);

		$(".big").removeClass('run');
	  }
	}
  
	thumbs.on("click", ".owl-item", function(e) {
				
		var abc = $(this).parent().attr('class');
		if ($(this).parents('.outer').length) {
			$(this).parents('.outer').find('.big').addClass('run');
		}

	  e.preventDefault();
	  var number = $(this).index();
	  $(".run").data("owl.carousel").to(number, 300, true);

	  $(".big").removeClass('run');
	});
  });
}