// This function stops the page from reloading when we press "enter" while a form input is selected
document.addEventListener("DOMContentLoaded", function () {
  $(".form").submit(function (e) {
    e.preventDefault();
    return lookup();
  });
});

async function lookup() {
  //
  // Get input value from the form
  let input = document.querySelector(".form__input").value;

  // Fetch the api asynchronously concatenating with user input
  let monster = await fetch(
    "https://www.dnd5eapi.co/api/monsters/".concat(input)
  );

  // Transform the response value in a json and pass in unto a variable
  let json = await monster.json();

  // Select all relevant elements in the document
  let c_sheet__img = document.querySelector(".c-sheet__img");
  let name__value = document.querySelector(".name__value");
  let type__value = document.querySelector(".type__value");
  let alignment__value = document.querySelector(".alignment__value");
  let armor_class__value = document.querySelector(".armor-class__value");
  let size__value = document.querySelector(".size__value");

  // Change the photo | must concatenate with json.image and with a ")"
  if (json.image != undefined) {
    c_sheet__img.style.backgroundImage = "url(https://www.dnd5eapi.co"
      .concat(json.image)
      .concat(")");
  } else {
    let img = "url(img/background_img.jpg)";
    c_sheet__img.style.backgroundImage = img;
  }

  // Change the name
  name__value.innerHTML = json.name;

  // Change the type
  type__value.innerHTML = json.type;

  // Change the alignment
  alignment__value.innerHTML = json.alignment;

  // Change armor class
  armor_class__value.innerHTML = json.armor_class;
}
