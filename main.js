
// click function that shows scroll Y position
const sections = document.querySelectorAll('section');
const homeSection = document.getElementById('home'); //console.log(homeSection);
const navbarBrand = document.querySelector('.navbar-brand');
const nav = document.querySelector('.navbar'); //console.log(nav); 

function getPosition(element) {
  let yPosition = 0;

  while(element) {
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
  }

  return yPosition;
}  

//fade In Elements on Scroll
for(let i = 0; i < sections.length; i++){
    const section = sections[i];
    const sectionTop = getPosition(section); //console.log(sectionTop);
    if(section === homeSection){
      section.style.opacity = 1;
    }else{
      section.style.opacity = 0;
    }
    
    window.addEventListener("scroll", () => {
      //change color of navBrand on Scroll
      if(window.scrollY > 0){
        navbarBrand.style.color = '#3513f0';
      }else{
        navbarBrand.style.color = 'rgba(0,0,0,.9)';
      }
      
      //fadeIn Elements on Scroll
      if(window.scrollY + 200 >= sectionTop){
        section.style.opacity = 1;
      }
    })
}

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