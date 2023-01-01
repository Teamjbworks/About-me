function btn1(){
  window.open("tel:+918606795033") ;
}

function btn2() {
  window.open("tel:+919526314256");
}
function btn4() {
  window.open("mailto: jishnujayabhaskar557@gmail.com");
}



var scroll_position = 0;
var section_position = 1000;

function startAnimation() {
  // Set the class with the animation to the element
  element.classList.add("run-animation");
}

window.addEventListener('scroll', function(e) {
  scroll_position = window.scrollY;
  if (scroll_position > section_position) {
    //Start the animation -> startAnimation()
  }
});

