/* Меню в мобильной версии */
const navToggle = document.querySelector(".header__nav-toggle");
const headerLists = document.querySelectorAll(".header__list");
const page = document.querySelector(".page__body");

//появляется кнопка-бургер, интерактивная карта и скрывается меню
page.classList.remove("page__body--no-js");
for (let headerList of headerLists) {
    headerList.classList.add("header__list--closed");
  }

// кнопка-бургер переключает меню
navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navToggle.classList.toggle("header__nav-toggle--to-close");
  for (let headerList of headerLists) {
    headerList.classList.toggle("header__list--closed")
  }
})

/* Модальное окно */
const modal = document.querySelector(".modal-order");
const buttonAddCart = document.querySelector(".button--add-to-cart");
const modalForm = document.querySelector(".modal-order__form");

// при нажатии на ссылку "заказать" открывается попап
buttonAddCart.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-order--open");
});

// отправка формы: закрывается попап
modalForm.onsubmit = function () {
  evt.preventDefault();
  modal.classList.remove("modal-order--open");
}

// ESC закрывает попап
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-order--open")) {
      evt.preventDefault();
      modal.classList.remove("modal-order--open");
    }
  }
});
