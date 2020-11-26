//after page load...
jQuery(document).ready(function() {

    var btn = $('.scrollUp');

    //scroll animation nav
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
            var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        });
        $('.navbar-collapse').removeClass('show');
    });

    //scroll animation
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
   
  });