var showModalClass = "modal--show";



var wrightUsOpenButton = document.querySelector(".contacts__button"),
    wrightUsPopup = document.querySelector(".modal--write-us");

if (wrightUsPopup) {
  var wrightUsCloseButton = wrightUsPopup.querySelector(".modal__close"),
      wrightUsFormLogin = wrightUsPopup.querySelector("[name=login]");

  showModalRegistrarEvent(wrightUsOpenButton, wrightUsPopup, wrightUsFormLogin);
  closeModalRegistrarEvent(wrightUsCloseButton, wrightUsPopup);
}



var addedToCartOpenButton = document.querySelectorAll(".button--item--filled"),
    addedToCartPopup = document.querySelector(".modal--added-to-cart");

if (addedToCartPopup) {
  var addedToCartCloseButton = addedToCartPopup.querySelector(".modal__close");

  addedToCartOpenButton.forEach(function (button) {
    showModalRegistrarEvent(button, addedToCartPopup);
  });

  closeModalRegistrarEvent(addedToCartCloseButton, addedToCartPopup);
}



var mapButton = document.querySelector(".contacts__map"),
    mapPopup = document.querySelector(".modal--map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal__close");

  showModalRegistrarEvent(mapButton, mapPopup);
  closeModalRegistrarEvent(mapClose, mapPopup);
}



function showModalRegistrarEvent(button, popup, focusField = []) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add(showModalClass);
    if (focusField.length !== 0) {
      focusField.focus();
    }
  });
}

function closeModalRegistrarEvent(button, popup) {
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
