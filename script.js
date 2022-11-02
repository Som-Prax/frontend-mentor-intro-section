const features = document.querySelector(".nav-choose-features");
const company = document.querySelector(".nav-choose-company");

const featuresMenu = document.querySelector(".features-menu");
const companyMenu = document.querySelector(".company-menu");

const struggle1 = document.querySelector(".struggle1");
const struggle2 = document.querySelector(".struggle2");

features.addEventListener("mouseover", function () {
  featuresMenu.classList.remove("hidden"); //SUKKIES
  struggle1.style.backgroundImage = "url(images/icon-arrow-up.svg)";
});

features.addEventListener("mouseout", function () {
  featuresMenu.classList.add("hidden");
  struggle1.style.backgroundImage = "url(images/icon-arrow-down.svg)";
});

company.addEventListener("mouseover", function () {
  companyMenu.classList.remove("hidden"); //SUKKIES
  struggle2.style.backgroundImage = "url(images/icon-arrow-up.svg)";
});

company.addEventListener("mouseout", function () {
  companyMenu.classList.add("hidden");
  struggle2.style.backgroundImage = "url(images/icon-arrow-down.svg)";
});

// Media Queries

const hero = document.querySelector(".img-hero");
const navSmall = document.querySelector(".nav-small");
const bruh = document.querySelector(".bruh");
const menuBar = document.querySelector(".menu-bar");
const menuMobile = document.querySelector(".menu-mobile");
const menuBarClose = document.querySelector(".menu-bar-close");
const line11 = document.querySelector(".line11");
const line33 = document.querySelector(".line33");

const x = window.matchMedia("(max-width:605px)");

if (x.matches) {
  hero.src = "images/image-hero-mobile.png";
  navSmall.classList.add("hidden");
  bruh.classList.add("hidden");
  menuBar.classList.remove("hidden");
}

menuBar.addEventListener("click", function () {
  menuMobile.classList.remove("hidden");
  menuBarClose.classList.remove("hidden");
});

menuBarClose.addEventListener("click", function () {
  menuMobile.classList.add("hidden");
  menuBarClose.classList.add("hidden");
});

// Media Queries - Features & Company Menu
const feat = document.querySelector(".nav-chose-features");
const comp = document.querySelector(".nav-chose-company");
const featM = document.querySelector(".feat-menu");
const compM = document.querySelector(".comp-menu");
const struggle3 = document.querySelector(".struggle3");
const struggle4 = document.querySelector(".struggle4");

feat.addEventListener("click", function () {
  if (featM.classList.contains("hidden")) {
    featM.classList.remove("hidden");
    struggle3.style.backgroundImage = "url(images/icon-arrow-up.svg)";
  } else {
    featM.classList.add("hidden");
    struggle3.style.backgroundImage = "url(images/icon-arrow-down.svg)";
  }
});

comp.addEventListener("click", function () {
  if (compM.classList.contains("hidden")) {
    compM.classList.remove("hidden");
    struggle4.style.backgroundImage = "url(images/icon-arrow-up.svg)";
  } else {
    compM.classList.add("hidden");
    struggle4.style.backgroundImage = "url(images/icon-arrow-down.svg)";
  }
});
