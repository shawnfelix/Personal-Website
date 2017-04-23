//Mouseover navbar links
$(".nav-link-box").hover(
  function(){//on mouseover
    //stretch animation
    $(this).removeClass("stretchUp");
    $(this).addClass("stretchDown");
    
    //prevent text from stretching
    $(this).children(".nav-link-title").addClass("navNoStretch");
    
    //tile button flash on
    $(this).children(".nav-link-tile").addClass("opacityFlash");
  },
  function(){//on mouse out
    //disable stretch animation
    $(this).removeClass("stretchDown");
    $(this).addClass("stretchUp");

    //disable prevent text from stretching
    $(this).children(".nav-link-title").removeClass("navNoStretch");

    //disable tile button flash 
    $(this).children(".nav-link-tile").removeClass("opacityFlash");
  }
)