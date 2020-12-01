//Change color of portrait on top-bar link mouseover
let portfolio = document.getElementById("portfolio")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let portrait = document.getElementById("portrait")

portfolio.addEventListener("mouseover", function( event ) {
    portrait.style.background = "rgb(200,255,255)";
}, false);

portfolio.addEventListener("mouseout", function( event ) {
    portrait.style.background = "linear-gradient(to bottom, rgb(200,255,255) 0%, rgb(200,200,255) 30%, rgb(200,200,255) 40%, rgb(255,210,200) 88%, rgb(200,200,255) 95%, rgb(200,255,255) 100%)";
}, false);

about.addEventListener("mouseover", function( event ) {
    portrait.style.background = "rgb(200,200,255)";
}, false);

about.addEventListener("mouseout", function( event ) {
    portrait.style.background = "linear-gradient(to bottom, rgb(200,255,255) 0%, rgb(200,200,255) 30%, rgb(200,200,255) 40%, rgb(255,210,200) 88%, rgb(200,200,255) 95%, rgb(200,255,255) 100%)";
}, false);

contact.addEventListener("mouseover", function( event ) {
    portrait.style.background = "rgb(255,210,200)";
}, false);

contact.addEventListener("mouseout", function( event ) {
    portrait.style.background = "linear-gradient(to bottom, rgb(200,255,255) 0%, rgb(200,200,255) 30%, rgb(200,200,255) 40%, rgb(255,210,200) 88%, rgb(200,200,255) 95%, rgb(200,255,255) 100%)";
}, false);


//Fade out portrait as scrolled
const checkpoint = 800;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector("#portrait").style.opacity = opacity;
});


//Stop all animations when scrolling starts
let intro1 = document.getElementById("intro-1st")
let intro2 = document.getElementById("intro-2nd")
let intro3 = document.getElementById("intro-content")

body.onscroll = function() {
    portfolio.style.animationDelay = "0s";
    portfolio.style.animationDuration = "0s";
    about.style.animationDelay = "0s";
    about.style.animationDuration = "0s";
    contact.style.animationDelay = "0s";
    contact.style.animationDuration = "0s";
    portrait.style.animationDelay = "0s";
    portrait.style.animationDuration = "0s";
    intro1.style.animationDelay = "0s";
    intro1.style.animationDuration = "0s";
    intro2.style.animationDelay = "0s";
    intro2.style.animationDuration = "0s";
    intro3.style.animationDelay = "0s";
    intro3.style.animationDuration = "0s";
}


//Fill remainder of screen in Contact section on load/resize
let contactSection = document.getElementById("contact-section")
let contactContainer = document.getElementById("contact-content-container")
let contactBottomFill = window.innerHeight - contactContainer.offsetHeight - (window.innerHeight * .26) -30;
contactSection.style.paddingBottom = contactBottomFill + "px";

window.onresize = function() {
    contactSection.style.paddingBottom = contactBottomFill + "px";
}