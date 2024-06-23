const swiper = new Swiper('.projects__slider', {
  spaceBetween: 20,
  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});