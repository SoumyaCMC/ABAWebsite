/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely.
  // Transition effect for navbar
  $(window).scroll(function() { //function is called while you scrolls
    // checks if window is scrolled more than 300px, adds/removes solid class
    if($(this).scrollTop() >= 0) {
        $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
    }
  });
});


/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
$(document).click(function (event) { //click anywhere
  var clickover = $(event.target); //get the target element where you clicked
  var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
  if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
      $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
  }
});
});

/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){ //document is loaded
// Add smooth scrolling to all links
$("a").on('click', function(event) {//click on any link;anchor tag;

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") { //for e.g. website.com#home - #home
// Prevent default anchor click behavior
event.preventDefault();

// Store hash
var hash = this.hash;
//console.log('hash:',hash)

// Using jQuery's animate() method to add smooth page scroll
// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
$('html, body').animate({ //animate whole html and body elements
  scrollTop: $(hash).offset().top //scroll to the element with that hash
}, 800, function(){

  // Add hash (#) to URL when done scrolling (default click behavior)
  window.location.hash = hash; //website.com - website.com#home
  //Optional remove "window.location.hash = hash;" to prevent transparent navbar on load
});
} // End if
});
});

/*========== BOUNCING DOWN ARROW ==========*/
//down arrow at top
$(document).ready(function(){
$(window).scroll(function(){ //browser scroll
$(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //set opacity css from 1 to -(negative) infinity of element with class 'arrow'
//250 is fade pixels
});
});

/*========== SKILLS COUNTER ==========*/

$(document).ready(function() { //when document is ready
  $('.counter').counterUp({
      delay: 10, //delay in milliseconds per count up
      time: 1800 //total time taken by the animation
  });
});


$(document).ready(function(){
$("#clients-slider").owlCarousel({ //owlCarousel settings
  items:2,
  autoplay:true,
  smartSpeed:1700,
  loop:true,
  autoplayHoverPause:true,
  responsive : { 
      0 : {
          items: 1
      },
      768 : {
          items: 2 
      },
  }
}
);
});

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { //when document is ready
$(window).scroll(function() { //when webpage is scrolled
if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
$('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
} else { //if not
$('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
}
});
});
function changeText1(){
  $("#changetext1").delay(5000).animate({opacity:0},function(){
      $(this).text("New Subtopic 1").animate({opacity:1},function(){
          $(this).delay(5000).animate({opacity:0},function(){
              $(this).text("New Subtopic 2").animate({opacity:1},function(){
                  $(this).delay(5000).animate({opacity:0},function(){
                      $(this).text("ABA Biotech").animate({opacity:1},function(){
                          changeText1();                           
                      });
                  });
              });
          });
      });
  });  
};

var url1= "https://firebasestorage.googleapis.com/v0/b/ababiotech-7d494.appspot.com/o/Lander-02.jpg?alt=media&token=3c7a4c76-c720-458b-8e49-5d9f8432047e";
var url2="https://firebasestorage.googleapis.com/v0/b/ababiotech-7d494.appspot.com/o/ibrahim-boran-q5BnGgt2Y_E-unsplash.jpg?alt=media&token=7a948c02-3f0c-4d53-a41e-6f5ec592eb4c";
var url0="https://firebasestorage.googleapis.com/v0/b/ababiotech-7d494.appspot.com/o/Lander-01.png?alt=media&token=f3f8d624-d040-414e-a822-ccef77925dae";
function changeBG(){
  $("#homein").delay(5000).animate({opacity:0},function(){
      $(this).css("background-image", "url("+url1+")").animate({opacity:1},function(){
          $(this).delay(5000).animate({opacity:0},function(){
            $(this).css("background-image", "url("+url2+")").animate({opacity:1},function(){
                  $(this).delay(5000).animate({opacity:0},function(){
                    $(this).css("background-image", "url("+url0+")").animate({opacity:1},function(){
                          changeBG();                           
                      });
                  });
              });
          });
      });
  });
  
};
changeBG();


function changeText2(){
  $("#changetext2").delay(5000).animate({opacity:0},function(){
      $(this).text("A few Lines on the Subtopic 1").animate({opacity:1},function(){
          $(this).delay(5000).animate({opacity:0},function(){
              $(this).text("A few Lines on the Subtopic 2").animate({opacity:1},function(){
                  $(this).delay(5000).animate({opacity:0},function(){
                      $(this).text("A Complete Solution for Lab").animate({opacity:1},function(){
                          changeText2();                           
                      });
                  });
              });
          });
      });
  });
  
};
function changeButton(){
  $("#homebutton").delay(5000).animate({opacity:0},function(){
    $("#hbuttonLink").attr("href", "http://www.google.com/");
      $(this).text("Learn More").animate({opacity:1},function(){
        $("#hbuttonLink").attr("href", "http://www.google.com/");
          $(this).delay(5000).animate({opacity:0},function(){
            $("#hbuttonLink").attr("href", "http://www.google.com/");
              $(this).text("Learn More").animate({opacity:1},function(){
                $("#hbuttonLink").attr("href", "./about.html");
                  $(this).delay(5000).animate({opacity:0},function(){
                      $(this).text("About Us").animate({opacity:1},function(){
                          changeButton();                           
                      });
                  });
              });
          });
      });
  });
  
};
changeButton();
changeText1();
changeText2();

const btn = document.getElementById('button');
const form = document.getElementById('contact-form');
 form.addEventListener('submit', function(event) {
   event.preventDefault();
   btn.value = 'Sending...';
   const serviceID = 'default_service';
   const templateID = 'default';
   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     alert('Your Message Has Been Sent');
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
});