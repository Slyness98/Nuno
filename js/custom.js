/*======= NAVBAR TRANSPARENT TO SOLID  =======*/

$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('.navbar').addClass('solid');
		}else {
			$('.navbar').removeClass('solid');
		}
	});
});

/*========== CLOSE MOBILE NAV ON CLICK ================ */

$(document).ready(function() {
	$(document).click(function (event){
		var clickover = $(event.target);
		var _opened = $(".navbar-collapse").hasClass("show"); //show is 
		if (_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});

/* ============= SMOOTH SCROLLING TO NAV LINKS =================== */
$(document).ready(function(){ //document is loaded
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {//click on any link;anchor tag;

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") { //for e.g. website.com#home - #home
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      //console.log('hash:',hash)

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ //animate whole html and body elements
        scrollTop: $(hash).offset().top //scroll to the element with that hash
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash; //website.com - website.com#home
        //Optional remove "window.location.hash = hash;" to prevent transparent navbar on load
      });
    } // End if
  });
});


//==============  BOUNCING ARROW  ==============
$(document).ready(function() {
	$(window).scroll(function() {
		$(".arrow").css("opacity", 1 - $(window).scrollTop() / 250)
	});
});


// =========== MEET THE TEAM SECTION  ========================

$(document).ready(function() {
	$("#team-slider").owlCarousel({
		items:3,
		autoplay:true,
		smartSpee:700,
		loop:true,
		autoplayHoverPause:true,
		responsive: {
			0 : {
				items: 1
			},
			576 : {
				items:2
			},
			768 : {
				items:3
			}
		}
	});
});

// ========= Skills Section Counter    =============

$(document).ready(function() {
	$('.counter').counterUp({
		delay: 10,
		time: 1800
	});
});


// ======== Clients section carousel ===============

$(document).ready(function() {
	$("#clients-slider").owlCarousel({
		items:3,
		autoplay:true,
		smartSpee:1700,
		loop:true,
		autoplayHoverPause:true,
		responsive: {
			0 : {
				items: 1
			},
			768 : {
				items:2
			}
		}
	});
});


// ==========TOP SCROLL BUTTON=======================
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('.top-scroll').fadeIn();
		} else {
			$('.top-scroll').fadeOut();
		}
	});
});
