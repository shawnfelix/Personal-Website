(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away
		$("nav > ul > .menu-item div, #logo-img").hover(
		  function(){//on mouseover
		    //3d button animation
		    $(this).removeClass("threedout");
		    $(this).addClass("threed");
		    /*
		    //prevent text from stretching
		    $(this).children(".nav-link-title").addClass("navNoStretch");
		    
		    //tile button flash on
		    $(this).children(".nav-link-tile").addClass("opacityFlash");*/
		  },
		  function(){//on mouse out
		    //3d button animation
		    $(this).removeClass("threed");
		    $(this).addClass("threedout");
		    /*$(this).removeClass("stretchDown");
		    $(this).addClass("stretchUp");

		    //disable prevent text from stretching
		    $(this).children(".nav-link-title").removeClass("navNoStretch");

		    //disable tile button flash 
		    $(this).children(".nav-link-tile").removeClass("opacityFlash");*/
		  })
	});
	$(".menu-item").click(function() {
  	window.location = $(this).find("a").first().attr("href");
  	return false;
})
})(jQuery, this);


