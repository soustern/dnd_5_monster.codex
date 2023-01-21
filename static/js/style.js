// Run script once DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select correct classes
  let header = document.querySelector(".header");

  let header__img_area = document.querySelector(".header__img-area");

  let header__img = document.querySelector(".header__img");

  let header_before = document.querySelector(".header::before");

  let form__input = document.querySelector(".form__input");

  form__input.addEventListener("focusin", function () {
    //
    document.querySelector(".header__img-area").style.maxWidth = "17rem";
    // //
    // document.querySelector(".header__img-area").style.transform =
    //   "translate(-50%, -10%)";
    //
    document.querySelector(".header").style.height = "0vh";
    //
  });
  form__input.addEventListener("focusout", function () {
    // //
    // document.querySelector(".header__img-area").style.maxWidth = "70rem";
    // //
    // document.querySelector(".header__img-area").style.transform =
    //   "translate(-50%, -100%)";
    // //
    // document.querySelector(".header").style.height = "50vh";
    // //
  });
});
