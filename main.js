//scroll to sections
var mqm = window.matchMedia('(max-width: 992px)');
//let mql = window.matchMedia('(max-width: 1200px)');
//console.log(mql);

$("a[href^='#']").click(function(e) {
	e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position
    });
    $('.navbar-collapse').removeClass('show');
});

jQuery(document).ready(function() {
  
    var btn = $('.scrollUp');
  
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