const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".slider-button-prev",
      prevEl: ".slider-button-next",
    },
    effect: "coverflow",
  });