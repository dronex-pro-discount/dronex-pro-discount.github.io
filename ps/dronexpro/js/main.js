function main() {

(function () {
   'use strict';

   /* ==============================================
    Testimonial Slider
    =============================================== */ 

    $('.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 1000);
            return false;
          }
        }
      });

    $('.flouting').click(function() {
      $('body').addClass('overflow');
      $('.wrapper-right-block').fadeIn();
      $(this).fadeOut();
    });
    $('.close').click(function() {
      $('body').removeClass('overflow');
      $('.wrapper-right-block').fadeOut();
      $('.flouting').fadeIn();
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

    /* Scroll to top */
    $(window).scroll(function() {
      var $toTop = $('#totop');
      if ($(this).scrollTop() > 100) {
        $toTop.fadeIn();
      } else {
        $toTop.fadeOut();
      }
    });
    $(window).scroll(function() {
      var $fixedtop = $('.navbar-fixed-top');
      if ($(this).scrollTop() > 10) {
        $('.navbar-collapse.collapse').removeClass('in');
      } 
      else { }
    });

    $(document).on('click', "a[href='#totop']", function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    $(".box-btn-choose").on('click', function(){
        $(".payment-step-2").removeClass('hidden',1000);
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            setTimeout(function(){
            $('html,body').animate({
              scrollTop: target.offset().top - 20
            }, 1500);}, 1200);
            return false; 
          }
        }
    });

}());


}
main();