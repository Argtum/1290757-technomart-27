var addedToCartButton = document.querySelectorAll(".button--item--filled"),
    addedToCartPopup = document.querySelector(".modal--added-to-cart"),
    addedToCartClose = addedToCartPopup.querySelector(".modal__close");

addedToCartButton.forEach(function (button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    addedToCartPopup.classList.add("modal--show");
  });
});

addedToCartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addedToCartPopup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (addedToCartPopup.classList.contains("modal--show")) {
      addedToCartPopup.classList.remove("modal--show");
    }
  }
});
