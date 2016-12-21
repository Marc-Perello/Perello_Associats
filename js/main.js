// Això el comportament que generea un scroll fluid al fer anchors
  $(document).ready(function(){

    $("#autonoms_link").click(function() {
    $('html, body').animate({
       scrollTop: $("#autonoms").offset().top 
      }, 1200);
    });

    $("#particulars_link").click(function() {
    $('html, body').animate({
       scrollTop: $("#particulars").offset().top
      }, 1200);
    });

    $("#pimes_link").click(function() {
    $('html, body').animate({
       scrollTop: $("#pimes").offset().top
      }, 1200);
    });

    $("#gran_empresa_link").click(function() {
    $('html, body').animate({
       scrollTop: $("#gran_empresa").offset().top
      }, 1200);
    });

    $("#entitats_socials_link").click(function() {
    $('html, body').animate({
       scrollTop: $("#entitats_socials").offset().top
      }, 1200);
    });

    $("#contacte_link").click(function() {
    $('html, body').animate({
       scrollTop: $("#contacte").offset().top
      }, 2400);
    });

    // Script pel boto menu responsive

    $(window).on("resize", function () {
             if ($(window).width() > 1023) {
                 $('.menu').css('display','');
             }
          }).resize();

          $('.menu_icon').on('click', function (e) {
             e.preventDefault();
             $('.menu').slideToggle('slow');
          });

     // Script pel boto contacte

      $(window).scroll(function(){
             if ($(this).scrollTop() > 250) {
               $('.cta-contacte').show();
               $('.menu').css("margin-right", "110px");
             } else {
               $('.cta-contacte').hide();
                $('.menu').css("margin-right", "0px");
             }
           });

  });
//