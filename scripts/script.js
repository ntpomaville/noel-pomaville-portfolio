//Change color of portrait on top-bar link mouseover
let portfolio = document.getElementById("portfolio")
let about = document.getElementById("about")
let contact = document.getElementById("contact")
let portrait = document.getElementById("portrait")

portfolio.addEventListener("mouseover", function( event ) {
    portrait.style.backgroundColor = "rgb(200,255,255)";
}, false);

portfolio.addEventListener("mouseout", function( event ) {
    portrait.style.backgroundColor = "rgb(240,240,240)";
}, false);

about.addEventListener("mouseover", function( event ) {
    portrait.style.backgroundColor = "rgb(200,200,255)";
}, false);

about.addEventListener("mouseout", function( event ) {
    portrait.style.backgroundColor = "rgb(240,240,240)";
}, false);

contact.addEventListener("mouseover", function( event ) {
    portrait.style.backgroundColor = "rgb(255,210,200)";
}, false);

contact.addEventListener("mouseout", function( event ) {
    portrait.style.backgroundColor = "rgb(240,240,240)";
}, false);


//Stop all animations on scroll
window.onscroll = function (e) {  
    portfolio.style.animationDelay = "0s";
    portfolio.style.animationDuration = "0s";
    about.style.animationDelay = "0s";
    about.style.animationDuration = "0s";
    contact.style.animationDelay = "0s";
    contact.style.animationDuration = "0s";
    portrait.style.animationDelay = "0s";
    portrait.style.animationDuration = "0s";
}


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


//Change text and color of subtitle when scroll hits main section elements
let portfolioSec = document.getElementById("portfolio-section")
let aboutSec = document.getElementById("about-section")
let contactSec = document.getElementById("contact-section")
