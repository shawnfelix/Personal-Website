function copyToClipboard(element) {
  $('#copied-notif').show().removeClass('fadeOut');
  $('#copied-notif').show().addClass('fadeIn');
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();

  setTimeout(hideCopiedNotif, 2500);
}

function hideCopiedNotif(){
  $('#copied-notif').removeClass('fadeIn');
  $('#copied-notif').addClass('fadeOut');
}
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

//nav heading gets small on scroll down
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
    $('#logo-fn').addClass('inline');
    $('#logo-ln').addClass('inline');
    $('#logo-text').addClass('logo-shrink');
  } else {
    $('nav').removeClass('shrink');
    $('#logo-fn').removeClass('inline');
    $('#logo-ln').removeClass('inline');
    $('#logo-text').removeClass('logo-shrink');
  }
});

//footer contact animation

$('#footer-contact-button').click(function(){
  var toggle = $('#footer-pixel-wrapper').hasClass('slideUp');

  if(toggle){
    $('#footer-pixel-wrapper').removeClass('slideUp');
  }
  else {
    $('#footer-pixel-wrapper').addClass('slideUp');
  }
});