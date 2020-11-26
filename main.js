//scroll to sections
const mqm = window.matchMedia('(max-width: 992px)');

const sections = document.querySelectorAll('section');

function getPosition(element) {
  var yPosition = 0;

  while(element) {
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
  }

  return yPosition;
}
//console.log(sections[0]);

for(let i = 0; i < sections.length; i++){
    const section = sections[i];
    const sectionTop = getPosition(section[i]); console.log(sectionTop);
    
    // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    //     section.style.opacity = 0;
    // }
}

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