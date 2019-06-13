"use strict"

//button-hamburger
const navbarBtn = document.getElementsByClassName('hamburger');
navbarBtn[0].addEventListener("click", functionNavbar);

function functionNavbar() {
  const navbarLinks = document.getElementsByClassName("nav_links");
  navbarLinks[0].classList.toggle("nav_links_added");

  const elem1 = document.getElementsByClassName("hamburger_elem1");
  elem1[0].classList.toggle("hamburger_elem1_added");

  const elem2 = document.getElementsByClassName("hamburger_elem2");
  elem2[0].classList.toggle("hamburger_elem2_added");

  const elem3 = document.getElementsByClassName("hamburger_elem3");
  elem3[0].classList.toggle("hamburger_elem3_added");
}

const linkClick = document.getElementsByClassName('nav_links');
linkClick[0].addEventListener("click", functionNavbar);


