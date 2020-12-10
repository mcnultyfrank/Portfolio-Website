"use strict";

var button = document.getElementById("email");
var close = document.getElementById("close");
var modul = document.getElementById("modal");
var settingsToggle = document.querySelector(".fas");
var navIcons = ["fas fa-battery-quarter", "fas fa-battery-full"];
var iconSelector = document.querySelector("#nav-icons");
var video = document.getElementById("videoBG");
var animationToggle = document.getElementById("portfolio-page");
var blinkToggle = document.getElementsByClassName("blinking");
var downArrow = document.querySelector('.fa-angle-down');
var reactIcon = document.querySelector(".fa-react");
downArrow.style.animationDelay = "3s";
setTimeout(function () {
  downArrow.style.animationPlayState = "paused";
}, 7000);
settingsToggle.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-battery-full")) {
    event.target.classList.remove("fa-battery-full");
    event.target.classList.add("fa-battery-quarter");
    animationToggle.classList.toggle("portfolio-page-no-animation");
    blinkToggle.classList.remove("blinking");
  } else if (event.target.classList.contains("fa-battery-quarter")) {
    event.target.classList.remove("fa-battery-quarter");
    event.target.classList.add("fa-battery-full");
    animationToggle.classList.remove("portfolio-page-no-animation"); // blinkingToggle.classList.toggle("blinking");
  }

  ; // settingsToggle.addEventListener("click", (e)=>{
  // }
});
button.addEventListener("click", function () {
  modal.classList.remove("display-none");
});
close.addEventListener("click", function () {
  modal.classList.add("display-none");
}); // When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("display-none");
  }
});