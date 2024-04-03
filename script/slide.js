// Slider header
var swiper = new Swiper(".mySwiper", {
  loop: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Show cinemas

var swiper = new Swiper(".show_cinemas_swiper", {
  breakpoints: {  
    1:{
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination:NamedNodeMap,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,},
    768: {
      slidesPerView: 4,
      spaceBetween: 30, },
  },
  loop: true,
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
// Video & Trailer
var swiper = new Swiper(".video_trailer_swiper", {
  breakpoints: {  
    1:{
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination:NamedNodeMap,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,},
    768: {
      slidesPerView: 4,
      spaceBetween: 30, },
  },
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

// Our Features
var swiper = new Swiper(".our_features_swiper", {
  1:{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination:NamedNodeMap,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 30,
},
  loop: true,
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