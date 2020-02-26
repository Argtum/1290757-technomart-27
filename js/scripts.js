var showModalClass = "modal--show",
    currentSlideClass = "main-slider__item--current",
    currentSlideBulletClass = "button--bullet--current";



var wrightUsOpenButton = document.querySelector(".contacts__button"),
    wrightUsPopup = document.querySelector(".modal--write-us");

if (wrightUsPopup) {
  var wrightUsCloseButton = wrightUsPopup.querySelector(".modal__close"),
      wrightUsFormLogin = wrightUsPopup.querySelector("[name=login]");

  showModal(wrightUsOpenButton, wrightUsPopup, wrightUsFormLogin);
  closeModal(wrightUsCloseButton, wrightUsPopup);
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
    allSlideBullet = document.querySelectorAll(".button--bullet"),
    nextSlide = document.querySelector(".button--slide--right"),
    prevSlide = document.querySelector(".button--slide--left");

sliderControlRegisterEven(nextSlide, secondSlide, secondSlideBullet);
sliderControlRegisterEven(prevSlide, firstSlide, firstSlideBullet);



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

function sliderControlRegisterEven(controlButton, slider, bulletButton) {
  controlButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (!slider.classList.contains(currentSlideClass)) {
      clearSelection(allSliders, currentSlideClass);
      slider.classList.add(currentSlideClass);

      clearSelection (allSlideBullet, currentSlideBulletClass);
      bulletButton.classList.add(currentSlideBulletClass);
    }
  });
}

allSlideBullet.forEach(function (bulletButton) {
  bulletButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    clearSelection (allSliders, currentSlideClass);
    if (this.classList.contains("button--bullet--first")) {
      firstSlide.classList.add(currentSlideClass);
    } else {
      secondSlide.classList.add(currentSlideClass);
    }

    clearSelection (allSlideBullet, currentSlideBulletClass);
    this.classList.add(currentSlideBulletClass);
  });
});
