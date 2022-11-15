var num = 0;
var slideOrder = 1;
var ariyaSlider;


$(function () {



  $("#hamburger").click(function () {
    $("nav").toggle();
  });

  $(".dropdown a").click(function () {

    $(this).parent().find(".dropdown-pc").slideToggle("fast");
  });

  $(".slide").each(function (i, v) {
    num++;
    $(this).attr("slide-no", num);
  });

  $(".al").click(function()
  {
    clearInterval(ariyaSlider);
    var now = slideOrder;
    slideOrder--;

    $(".slide[slide-no=" + now + "]").animate(
      {
        left: "-=938px",
        opacity: "0.0",
      },
      1000,
      function () {
        $(".slide[slide-no=" + now + "]").hide();
        $(".slide[slide-no=" + now + "]").removeClass("show");
        $(".slide[slide-no=" + now + "]").removeAttr("style");
        
        if(slideOrder < 1)
        slideOrder = 3;
       


        $(".slide[slide-no=" + slideOrder + "]").fadeIn();
        $(".slide[slide-no=" + slideOrder + "]").addClass("show");
      }
    );
  })

  $(".ar").click(function()
  {
    clearInterval(ariyaSlider);
    var now = slideOrder;
    slideOrder++;

    $(".slide[slide-no=" + now + "]").animate(
      {
        right: "-=938px",
        opacity: "0.0",
      },
      1000,
      function () {
        $(".slide[slide-no=" + now + "]").hide();
        $(".slide[slide-no=" + now + "]").removeClass("show");
        $(".slide[slide-no=" + now + "]").removeAttr("style");
        
        if(slideOrder > 3)
        slideOrder = 1;
       


        $(".slide[slide-no=" + slideOrder + "]").fadeIn();
        $(".slide[slide-no=" + slideOrder + "]").addClass("show");
      }
    );
  })

  ariyaSlider = setInterval(function() {
    $(".slide[slide-no=" + slideOrder + "]").animate(
      {
        right: "-=938px",
        opacity: "0.0",
      },
      1000,
      function () {
        $(".slide[slide-no=" + slideOrder + "]").hide();
        $(".slide[slide-no=" + slideOrder + "]").removeClass("show");
        $(".slide[slide-no=" + slideOrder + "]").removeAttr("style");

        if(slideOrder >= 3)
        {
          slideOrder = 0;
        }
        slideOrder++;
        $(".slide[slide-no=" + slideOrder + "]").fadeIn();
        $(".slide[slide-no=" + slideOrder + "]").addClass("show");
      }
    );
  }, 4000);



});
