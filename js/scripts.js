var wrightUsButton = document.querySelector(".contacts__button"),
    wrightUsPopup = document.querySelector(".modal--write-us");

if (wrightUsPopup) {
  var wrightUsClose = wrightUsPopup.querySelector(".modal__close"),
      wrightUsFormLogin = wrightUsPopup.querySelector("[name=login]");

  showModal(wrightUsButton, wrightUsPopup, wrightUsFormLogin);
  closeModal(wrightUsClose, wrightUsPopup);
}

var addedToCartButton = document.querySelectorAll(".button--item--filled"),
    addedToCartPopup = document.querySelector(".modal--added-to-cart");

if (addedToCartPopup) {
  var addedToCartClose = addedToCartPopup.querySelector(".modal__close");

  addedToCartButton.forEach(function (button) {
    showModal(button, addedToCartPopup);
  });

  closeModal(addedToCartClose, addedToCartPopup);
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
    popup.classList.add("modal--show");
    if (focusField.length !== 0) {
      focusField.focus();
    }
  });
}

function closeModal(button, popup) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
      }
    }
  });
}
