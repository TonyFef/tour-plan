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
  $(".newsletter").parallax({
    imageSrc: "img/newsletter-bg.jpg",
    speed: 0.4,
  });

  // Модальная кнопка
  const menuButton = $(".menu-button");
  // Вызов меню
  menuButton.on("click", () =>
    $(".navbar-bottom").toggleClass("navbar-bottom--visible")
  );

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

  // Закрытие по клику вне блока
  $(document).click(function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (
      !$(event.target).closest(
        ".modal__dialog,.booking__button,.packet__button,.card__button"
      ).length
    ) {
      $("body").find(".modal__dialog").removeClass("modal__dialog--visible");
      $("body").find(".modal__overlay").removeClass("modal__overlay--visible");
    }
  });

  // Закрытие окна нажатием на Escape
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      const modalOverlay = $(".modal__overlay");
      const modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  //Обработка форм
  $(".form-validate").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          minlength: 18,
        },
      },

      messages: {
        name: {
          required: "Please specify your name",
          minlength: "At least 2 symbols required",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Address format - name@domain.com",
        },
        phone: {
          required: "We need your phone number to contact you",
          minlength: "Enter correct phone number",
        },
      },
    });
  });
  $(".phone").mask("+7 (999) 999-99-99");
  AOS.init();
});
