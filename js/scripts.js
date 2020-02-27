var showModalClass = "modal--show",
    errorModalClass = "modal--error",
    currentSlideClass = "main-slider__item--current",
    currentSlideBulletClass = "button--bullet--current",
    currentServiceSlideClass = "services__item--current",
    currentServiceSlideButtonClass = "selector-list__item--current";



var wrightUsOpenButton = document.querySelector(".contacts__button"),
    wrightUsPopup = document.querySelector(".modal--write-us");

if (wrightUsPopup) {
  var wrightUsCloseButton = wrightUsPopup.querySelector(".modal__close"),
      wrightUsForm = wrightUsPopup.querySelector("form"),
      wrightUsFormLoginField = wrightUsPopup.querySelector("[name=login]"),
      wrightUsFormEmailField = wrightUsPopup.querySelector("[name=email]"),
      wrightUsFormMessageField = wrightUsPopup.querySelector("[name=message]");

  showModal(wrightUsOpenButton, wrightUsPopup, wrightUsFormLoginField);
  closeModal(wrightUsCloseButton, wrightUsPopup);

  wrightUsForm.addEventListener("submit", function (evt) {
    if (!wrightUsFormLoginField.value || !wrightUsFormEmailField.value || !wrightUsFormMessageField.value) {
      evt.preventDefault();
      wrightUsPopup.classList.remove(errorModalClass);
      wrightUsPopup.offsetWidth = wrightUsPopup.offsetWidth;
      wrightUsPopup.classList.add(errorModalClass);
    }
  });
}



var addedToCartOpenButton = document.querySelectorAll(".button--item--filled"),
    addedToCartPopup = document.querySelector(".modal--added-to-cart");

if (addedToCartPopup) {
  var addedToCartCloseButton = addedToCartPopup.querySelector(".modal__close");

  addedToCartOpenButton.forEach(function (button) {
    showModal(button, addedToCartPopup);
  });

  closeModal(addedToCartCloseButton, addedToCartPopup);
}



var mapButton = document.querySelector(".contacts__map"),
    mapPopup = document.querySelector(".modal--map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal__close");

  showModal(mapButton, mapPopup);
  closeModal(mapClose, mapPopup);
}



var firstSlide = document.querySelector(".main-slider__item--first"),
    secondSlide = document.querySelector(".main-slider__item--second"),
    allSliders = document.querySelectorAll(".main-slider__item"),
    firstSlideBullet = document.querySelector(".button--bullet--first"),
    secondSlideBullet = document.querySelector(".button--bullet--second"),
    allSlideBullets = document.querySelectorAll(".button--bullet"),
    nextSlide = document.querySelector(".button--slide--right"),
    prevSlide = document.querySelector(".button--slide--left");

if (firstSlide) {
  sliderControlRegistrarEven(nextSlide, secondSlide, secondSlideBullet);
  sliderControlRegistrarEven(prevSlide, firstSlide, firstSlideBullet);
}



var deliverySlide = document.querySelector(".service__item--delivery"),
    warrantySlide = document.querySelector(".service__item--warranty"),
    creditSlide = document.querySelector(".service__item--credit"),
    allServiceSliders = document.querySelectorAll(".services__item"),
    deliverySlideButton = document.querySelector(".selector-list__item--delivery"),
    warrantySlideButton = document.querySelector(".selector-list__item--warranty"),
    creditSlideButton = document.querySelector(".selector-list__item--credit"),
    allServiceSlidersButtons = document.querySelectorAll(".selector-list__item");

if (deliverySlide) {
  toggleServiceSlider(deliverySlideButton, deliverySlide);
  toggleServiceSlider(warrantySlideButton, warrantySlide);
  toggleServiceSlider(creditSlideButton, creditSlide);
}



function showModal(button, popup, focusField = []) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add(showModalClass);
    if (focusField.length !== 0) {
      focusField.focus();
    }
  });
}

function closeModal(button, popup) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove(showModalClass);
    popup.classList.remove(errorModalClass);
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains(showModalClass)) {
        popup.classList.remove(showModalClass);
      }
    }
  });
}

function clearSelection (items, className) {
  items.forEach(function (item) {
    item.classList.remove(className);
  });
}

function sliderControlRegistrarEven(controlButton, slider, bulletButton) {
  controlButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (!slider.classList.contains(currentSlideClass)) {
      clearSelection(allSliders, currentSlideClass);
      slider.classList.add(currentSlideClass);

      clearSelection (allSlideBullets, currentSlideBulletClass);
      bulletButton.classList.add(currentSlideBulletClass);
    }
  });
}

allSlideBullets.forEach(function (bulletButton) {
  bulletButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    clearSelection (allSliders, currentSlideClass);
    if (this.classList.contains("button--bullet--first")) {
      firstSlide.classList.add(currentSlideClass);
    } else {
      secondSlide.classList.add(currentSlideClass);
    }

    clearSelection (allSlideBullets, currentSlideBulletClass);
    this.classList.add(currentSlideBulletClass);
  });
});

function toggleServiceSlider(sliderButton, slide) {
  sliderButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    clearSelection (allServiceSliders, currentServiceSlideClass);
    slide.classList.add(currentServiceSlideClass);

    clearSelection (allServiceSlidersButtons, currentServiceSlideButtonClass);
    sliderButton.classList.add(currentServiceSlideButtonClass);
  });
}
