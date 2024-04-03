// Video & Trailer
var swiper = new Swiper(".video_trailer_swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Photo
var swiper = new Swiper(".movie_photo--swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// More Movie
var swiper = new Swiper(".movie_more--swiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});