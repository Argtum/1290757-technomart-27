var showModalClass = "modal--show";



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
