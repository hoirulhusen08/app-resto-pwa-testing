/* eslint-disable no-useless-concat */
// Paralax Effect Jumbotron
const heroTitle = document.querySelector('.hero-text h1');
const heroTagline = document.querySelector('.hero-text p');
const heroButton = document.querySelector('.hero-text .btn-discount');
const heroLeaf = document.querySelector('.hero-text .leaf');

window.addEventListener('scroll', () => {
  const wScroll = window.scrollY;

  heroTitle.style.transform = `translate(0px, ${wScroll / 4}px` + ')';
  heroTagline.style.transform = `translate(0px, ${wScroll / 3.5}px` + ')';
  heroButton.style.transform = `translate(0px, ${wScroll / 3}px` + ')';
  heroLeaf.style.transform = `translate(0px, ${wScroll / 3.2}px` + ')';
});
