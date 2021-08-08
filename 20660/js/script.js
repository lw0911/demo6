;(function ($) {
	'use strict';

	$('#video').videoPopup({
	    autoplay: 1,
	    controlsColor: 'white',
	    showVideoInformations: 0,
	    width: 1000
	});

	$(window).scroll(function() {

	    var $this = $(this),
	      st = $this.scrollTop(),
	      navbar = $('#main-nav');

	    if (st > 130) {
	      if ( !navbar.hasClass('nav-top') ) {
	        navbar.addClass('nav-top');  
	      }
	    } 
	    if (st < 150) {
	      if ( navbar.hasClass('nav-top') ) {
	        navbar.removeClass('nav-top sleep');
	      }
	    } 
	    if ( st > 250 ) {
	      if ( !navbar.hasClass('awake') ) {
	        navbar.addClass('awake'); 
	      }
	    }
	    if ( st < 250 ) {
	      if ( navbar.hasClass('awake') ) {
	        navbar.removeClass('awake');
	        navbar.addClass('sleep');
	      }
	    }

	  }); 

// Window Load  function	
	$(window).on ('load', function (){
      
     
     $('body').delay(350).css({'overflow':'visible'});

        /***************************
         *   Header Fixed  *
         ***************************/
     $(function(){
            if ($(this).scrollTop() > 1) {
                $('header').addClass('header-small');
            } else {
                $('header').removeClass('header-small');
            }
        });
        
	});


	$('.testimonial-slider').slick({
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});

	$('.clients-logo').slick({
		slidesToShow: 5,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000
	});



// Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  // });

  
	// Mix It Up Activation
	var portfolio_item = $('.portfolio-contant-active');
	if (portfolio_item.length) {
		var mixer = mixitup(portfolio_item);
	}




	var map;

	function initialize() {
		var mapOptions = {
			zoom: 13,
			center: new google.maps.LatLng(50.97797382271958, -114.107718560791)
			// styles: style_array_here
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	var google_map_canvas = $('#map-canvas');

	if (google_map_canvas.length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	// Counter

	// $('.counter').counterUp({
	//       delay: 10,
	//       time: 1000
	//   });

	


})(jQuery);
