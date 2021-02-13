const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 400,
  flipEffect: {
    slideShadows: false,
  },
  autoplay: {
    delay: 2000,
  },
  observer: true,
  observeParents: true,
});

swiper.updateSize();