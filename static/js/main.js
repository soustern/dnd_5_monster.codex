// This function stops the page from reloading when we press "enter" while a form input is selected
// // Its, instead, submits the value of the input and executes a function
// // Run script once DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  $(".form").submit(function (e) {
    e.preventDefault();

    // THIS WAS CAUSING THE LOOKUP TO BE EXECUTED 2 TIMES RETURNING TWICE THE DATA FROM THE API
    // return lookup();

    // WE MUST ONLY RETURN
    return;
  });
});

// This function collects user input from a form
// // concatenate it to the url of a api that is being fetched
// // // transform the response in a json
// // // And distributes the correct information to the document
async function lookup() {
  //
  // Get input value from the form
  let input = document.querySelector(".form__input").value;

  // Format for a values tha is compatible with the query
  input = format_value(input);

  // Fetch the api asynchronously concatenating with user input
  let monster = await fetch(
    "https://www.dnd5eapi.co/api/monsters/".concat(input)
  );

  // Transform the response value in a json and pass in unto a variable
  let json = await monster.json();

  // SELECT ALL RELEVANT ELEMENTS BY ITS CLASSES

  // // General info
  let c_sheet__img = document.querySelector(".c-sheet__img");
  let name__value = document.querySelector(".name__value");
  let type__value = document.querySelector(".type__value");
  let alignment__value = document.querySelector(".alignment__value");
  let armor_class__value = document.querySelector(".armor-class__value");
  let size__value = document.querySelector(".size__value");
  let hit_points__value = document.querySelector(".hit-points__value");
  let hit_dice__value = document.querySelector(".hit-dice__value");
  let challenge_rating__value = document.querySelector(
    ".challenge-rating__value"
  );
  let xp__value = document.querySelector(".xp__value");

  // Change the photo | must concatenate with json.image and with a ")" at the end to achieve correct syntax
  c_sheet__img.style.backgroundImage = "url(https://www.dnd5eapi.co"
    .concat(json.image)
    .concat(")");

  // Change the name
  if (json.name != undefined) {
    name__value.innerHTML = json.name;
  }
  // // If nothing is found at the query and its value in undefined, we change the inner html to not found
  else {
    name__value.innerHTML = "Not found";
  }

  // Change the type
  if (json.type != undefined) {
    type__value.innerHTML = json.type;
  } else {
    type__value.innerHTML = "Not found";
  }

  // Change the alignment
  if (json.alignment != undefined) {
    alignment__value.innerHTML = json.alignment;
  } else {
    alignment__value.innerHTML = "Not found";
  }

  // Change armor class
  if (json.armor_class != undefined) {
    armor_class__value.innerHTML = json.armor_class;
  } else {
    armor_class__value.innerHTML = "Not found";
  }

  // Change size
  if (json.size != undefined) {
    size__value.innerHTML = json.size;
  } else {
    size__value.innerHTML = "Not found";
  }

  // Change hit points value
  if (json.hit_points != undefined) {
    hit_points__value.innerHTML = json.hit_points;
  } else {
    hit_points__value.innerHTML = "Not found";
  }

  // Change hit dice value
  if (json.hit_dice != undefined) {
    hit_dice__value.innerHTML = json.hit_dice;
  } else {
    hit_dice__value.innerHTML = "Not found";
  }

  // Change challenger rating value
  if (json.challenge_rating != undefined) {
    challenge_rating__value.innerHTML = json.challenge_rating;
  } else {
    challenge_rating__value.innerHTML = "Not found";
  }

  // Change xp value
  if (json.xp != undefined) {
    xp__value.innerHTML = json.xp;
  } else {
    xp__value.innerHTML = "Not found";
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Skill info
  let strength__value = document.querySelector(".strength__value");
  let dexterity__value = document.querySelector(".dexterity__value");
  let constitution__value = document.querySelector(".constitution__value");
  let intelligence__value = document.querySelector(".intelligence__value");
  let wisdom__value = document.querySelector(".wisdom__value");
  let charisma__value = document.querySelector(".charisma__value");

  // Change strength value
  if (json.strength != undefined) {
    strength__value.innerHTML = json.strength;
  } else {
    strength__value.innerHTML = "Not found";
  }

  // Change dexterity value
  if (json.dexterity != undefined) {
    dexterity__value.innerHTML = json.dexterity;
  } else {
    dexterity__value.innerHTML = "Not found";
  }

  // Change constitution value
  if (json.constitution != undefined) {
    constitution__value.innerHTML = json.constitution;
  } else {
    constitution__value.innerHTML = "Not found";
  }

  // Change intelligence value
  if (json.intelligence != undefined) {
    intelligence__value.innerHTML = json.intelligence;
  } else {
    intelligence__value.innerHTML = "Not found";
  }

  // Change wisdom value
  if (json.wisdom != undefined) {
    wisdom__value.innerHTML = json.wisdom;
  } else {
    wisdom__value.innerHTML = "Not found";
  }

  // Change charisma value
  if (json.charisma != undefined) {
    charisma__value.innerHTML = json.charisma;
  } else {
    charisma__value.innerHTML = "Not found";
  }

  // // Languages
  let languages__value = document.querySelector(".languages__value");

  // Change languages value
  //Check if exists
  if (json.languages === undefined) {
    languages__value.innerHTML = "Not found";
  }
  // Check if no Language attributed to that query
  if (json.languages == "") {
    languages__value.innerHTML = "None";
  }
  // Check if query does not exist on database | does not produce a response
  else {
    languages__value.innerHTML = json.languages;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Proficiencies

  // Select correct element by class
  let proficiencies = document.querySelector(".c-sheet__info--proficiencies");
  let test = 0;

  // Iterate in the "json array" that is proficiencies
  if (test != 2) {
    // console.log(test);
    // console.log(json.proficiencies);
    json.proficiencies.forEach((item) => {
      console.log(test);
      test++;
      let proficiencies_item = document.createElement("div");
      proficiencies_item.classList.add("c-sheet__info--proficiencies-item");
      proficiencies.appendChild(proficiencies_item);

      let proficiency__name = document.createElement("h3");
      proficiency__name.classList.add("proficiency__name");
      proficiency__name.classList.add("heading-primary");
      proficiencies_item.appendChild(proficiency__name);
      proficiency__name.innerHTML = item.proficiency.name;
    });
  }
}

// This function receives a string, removes any whitespace at the beginning and end,
// // And, finally, it changes any "inner string" whitespace to the "-" character
// // // This is necessary to be useful when it is inserted onto the url being fetched
function format_value(input) {
  // First we trim the whitespace at the beginning and end
  // // This needs to be executed first
  input = input.trim();

  // Then we replace any other whitespace with "-" using a regex
  input = input.replace(/\s+/g, "-");

  // Return the newly formatted string but forcing lower case
  return input.toLowerCase();
}
