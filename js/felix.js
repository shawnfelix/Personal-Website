//Mouseover navbar links
$(".nav-link-box").hover(
  function(){
    $(this).removeClass("stretchUp");

    $(this).children(".nav-link-title").addClass("cancel");
    $(this).addClass("stretchDown");
  },
  function(){
    $(this).removeClass("stretchDown");
    $(this).addClass("stretchUp");

    $(this).children(".nav-link-title").removeClass("cancel");
  }
)