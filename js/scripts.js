var wrightUsButton = document.querySelector(".contacts__button");
var wrightUsPopup = document.querySelector(".modal--write-us");

var wrightUsClose = wrightUsPopup.querySelector(".modal__close");
var wrightUsFormLogin = wrightUsPopup.querySelector("[name=login]");

wrightUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrightUsPopup.classList.add("modal--show");
  wrightUsFormLogin.focus();
});

wrightUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrightUsPopup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (wrightUsPopup.classList.contains("modal--show")) {
      wrightUsPopup.classList.remove("modal--show");
    }
  }
});
