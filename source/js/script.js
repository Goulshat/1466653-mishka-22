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
const addCartButtons = document.querySelectorAll(".js-add-to-cart");
const modalForm = document.querySelector(".modal-order__form");

// при нажатии на ссылку "заказать" открывается попап
for (let addCartButton of addCartButtons) {
  addCartButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-order--open");
  });
}

// отправка формы: закрывается попап
modalForm.onsubmit = function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-order--open");
}

// ESC закрывает попап
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-order--open")) {
      modal.classList.remove("modal-order--open");
    }
  }
});

/* Форма заказа */
// const form = document.querySelector('.order-form');
//const submitButton = document.querySelector('.order-form__button');
//const firstName = form.querySelector('[name=first-name]');
//const lastName = form.querySelector('[name=last-name]');
//const orderTel = form.querySelector('[name=order-tel]');
//const orderEmail = form.querySelector('[name=order-email]');

//submitButton.disabled = true;

//form.addEventListener('submit', function(evt) {
  //evt.preventDefault();
  //if (firstName.value && lastName.value && orderTel.value && orderEmail) {
  //  submitButton.disabled = false;
  //} else {
  //  submitButton.disabled = true;
  //}
//})
