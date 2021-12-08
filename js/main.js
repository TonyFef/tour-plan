$(document).ready(function () {
  const hotelSwiper = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "flip",

    // Пролистывание стрелками
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  const reviewsSwiper = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    effect: "flip",

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  // Параллакс
  $(".newslatter").parallax({
    imageSrc: "img/newsletter-bg.jpeg",
    speed: 0.4,
  });

  // Модальная кнопка
  const menuButton = $(".menu-button");
  // Вызов меню
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  //Модальная кнопка
  const modalButton = $('[data-toggle="modal"]');
  const closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  // Вызов
  function openModal() {
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  // Закрытие
  function closeModal(event) {
    event.preventDefault();
    const modalOverlay = $(".modal__overlay");
    const modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  //Обработка форм
  $(".form-validate").each(function () {
    $(this).validate({
      errorClass: "Invalid",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
      },

      messages: {
        name: {
          required: "Pleas specify youк name",
          minlength: "Имя должно быть не короче 2 символов",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Телефон обязателен",
        },
      },
    });
  });
  $(".phone").mask("+7 (999) 999-99-99");
});
