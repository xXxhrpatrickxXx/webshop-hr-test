const swiper = new Swiper(".js-original-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay:{
      delay:3000,
  },
  speed:750,
  autoHeight:true,
  pauseOnMouseEnter: true,
  clickable: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    457: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    667: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    962: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1237: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1511: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1770: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination.c-swiper__pagination",
    type:"bullets",
  },
});
