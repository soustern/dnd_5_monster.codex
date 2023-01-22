// Run script once DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select correct classes

  let form__input = document.querySelector(".form__input");

  let button = document.querySelector(".btn");

  form__input.addEventListener("focusin", function () {
    //
    document.querySelector(".header__img-area").style.maxWidth = "17rem";
    //
    document.querySelector(".c-sheet").style.contentVisibility = "visible";
    //
    document.querySelector(".c-sheet").style.opacity = "1";
    //
    document.querySelector(".header").style.height = "0vh";
    //
    document.querySelector(".btn").style.opacity = "1";
  });

  button.addEventListener("click", function () {
    //
    document.querySelector(".c-sheet").style.opacity = "0";
    //
    document.querySelector(".header").style.height = "50vh";
    //
    document.querySelector(".c-sheet").style.contentVisibility = "hidden";
    //
    document.querySelector(".header__img-area").style.maxWidth = "70rem";
    //
    document.querySelector(".btn").style.opacity = "0";
  });
});
