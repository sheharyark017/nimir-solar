const nav = document.querySelector(".main-nav");

const navLinks = document.querySelector(".nav-links");

const hamburger = document.querySelector(".hamburger");

const navHeight = nav.clientHeight;

// phone navbar

navLinks.style.top = navHeight - 30 + "px";

hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");

  navLinks.classList.toggle("nav-links-acive");
});

// end phone navbar
