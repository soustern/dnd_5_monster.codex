// This function stops the page from reloading when we press "enter" while a form input is selected
// // Its, instead, submits the value of the input and executes a function
// // Run script once DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  $(".form").submit(function (e) {
    e.preventDefault();

    // THIS WAS CAUSING THE LOOKUP() FUNC TO BE EXECUTED 2 TIMES RETURNING TWICE THE DATA FROM THE API
    // return lookup();

    // WE MUST ONLY RETURN
    return;
  });
});

// This function collects user input from a form
// // concatenate it to the url of a api that is being fetched
// // // transform the response in a json
// // // And distributes the correct information to the document
// THIS SHOULD HAVE BEEN MULTIPLE FUNCTIONS, NOT ONE DOING EVERYTHING, BUT I DIGRESS
async function lookup() {
  // Call function to clear the screen
  clear();

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

  ////////////////////////////////////////////////////////////////////////////////////////////

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

  // // Damage vulnerabilities

  let damage__vulnerabilities_value = document.querySelector(
    ".damage__vulnerabilities--value"
  );

  // Change languages value
  //Check if exists
  if (json.damage_vulnerabilities === undefined) {
    damage__vulnerabilities_value.innerHTML = "Not found";
  }
  // Check if no Language attributed to that query
  if (json.damage_vulnerabilities == "") {
    damage__vulnerabilities_value.innerHTML = "None";
  }
  // Check if query does not exist on database | does not produce a response
  else {
    damage__vulnerabilities_value.innerHTML = json.damage_vulnerabilities;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Damage resistances

  let damage__resistances_value = document.querySelector(
    ".damage__resistances--value"
  );

  // Change languages value
  //Check if exists
  if (json.damage_resistances === undefined) {
    damage__resistances_value.innerHTML = "Not found";
  }
  // Check if no Language attributed to that query
  if (json.damage_resistances == "") {
    damage__resistances_value.innerHTML = "None";
  }
  // Check if query does not exist on database | does not produce a response
  else {
    damage__resistances_value.innerHTML = json.damage_resistances;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Damage immunities

  let damage__immunities_value = document.querySelector(
    ".damage__immunities--value"
  );

  // Change languages value
  //Check if exists
  if (json.damage_immunities === undefined) {
    damage__immunities_value.innerHTML = "Not found";
  }
  // Check if no Language attributed to that query
  if (json.damage_immunities == "") {
    damage__immunities_value.innerHTML = "None";
  }
  // Check if query does not exist on database | does not produce a response
  else {
    damage__immunities_value.innerHTML = json.damage_immunities;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Proficiencies

  let proficiencies = document.querySelector(".c-sheet__info--proficiencies");

  // Iterate in the "json array" that is proficiencies
  json.proficiencies.forEach((item) => {
    // Create the necessary elements the necessary amount of times
    // // Create the element
    let proficiencies_item = document.createElement("div");
    // // Add class
    proficiencies_item.classList.add("c-sheet__info--proficiencies-item");
    // // Append it to be a children of the selected parent
    proficiencies.appendChild(proficiencies_item);

    // // Repeat
    let proficiency__name = document.createElement("h3");
    proficiency__name.classList.add("proficiency__name");
    // // Two classes, the same line two times
    proficiency__name.classList.add("heading-primary");
    proficiencies_item.appendChild(proficiency__name);
    proficiency__name.innerHTML = item.proficiency.name;

    // // Add value
    let proficiency__value = document.createElement("h3");
    proficiency__value.classList.add("proficiency__value");
    proficiency__value.classList.add("heading-primary");
    proficiencies_item.appendChild(proficiency__value);
    proficiency__value.innerHTML = "Value: ";

    // // Add value of value
    let proficiency__value__value = document.createElement("span");
    proficiency__value__value.classList.add("proficiency__value--value");
    proficiency__value.appendChild(proficiency__value__value);
    proficiency__value__value.innerHTML = item.value;
  });

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Special Abilities

  let s_abilities = document.querySelector(".c-sheet__info--s-abilities");

  // Iterate in the "json array" that is proficiencies
  json.special_abilities.forEach((item) => {
    // Create the necessary elements the necessary amount of times
    // // Create the element
    let s_abilities_item = document.createElement("div");
    // // Add class
    s_abilities_item.classList.add("c-sheet__info--s-abilities-item");
    // // Append it to be a children of the selected parent
    s_abilities.appendChild(s_abilities_item);

    // // Repeat
    let s_abilities__name = document.createElement("h3");
    s_abilities__name.classList.add("s-abilities__name");
    // // Two classes, the same line two times
    s_abilities__name.classList.add("heading-primary");
    s_abilities_item.appendChild(s_abilities__name);
    s_abilities__name.innerHTML = item.name;

    // // Add value
    let s_abilities__desc = document.createElement("h3");
    s_abilities__desc.classList.add("s-abilities__desc");
    s_abilities__desc.classList.add("heading-primary");
    s_abilities_item.appendChild(s_abilities__desc);
    s_abilities__desc.innerHTML = "Desc.: ";

    // // Add value of value
    let s_abilities__desc__value = document.createElement("span");
    s_abilities__desc__value.classList.add("s-abilities__desc--value");
    s_abilities__desc.appendChild(s_abilities__desc__value);
    s_abilities__desc__value.innerHTML = item.desc;
  });

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Actions

  let actions = document.querySelector(".c-sheet__info--actions");

  // Iterate in the "json array" that is proficiencies
  json.actions.forEach((item) => {
    // Create the necessary elements the necessary amount of times
    // // Create the element
    let actions_item = document.createElement("div");
    // // Add class
    actions_item.classList.add("c-sheet__info--actions-item");
    // // Append it to be a children of the selected parent
    actions.appendChild(actions_item);

    // // Repeat
    let actions__name = document.createElement("h3");
    actions__name.classList.add("actions__name");
    // // Two classes, the same line two times
    actions__name.classList.add("heading-primary");
    actions_item.appendChild(actions__name);
    actions__name.innerHTML = item.name;

    // // Add value
    let actions__desc = document.createElement("h3");
    actions__desc.classList.add("actions__desc");
    actions__desc.classList.add("heading-primary");
    actions_item.appendChild(actions__desc);
    actions__desc.innerHTML = "Desc.: ";

    // // Add value of value
    let actions__desc__value = document.createElement("span");
    actions__desc__value.classList.add("actions__desc--value");
    actions__desc.appendChild(actions__desc__value);
    actions__desc__value.innerHTML = item.desc;
  });

  ////////////////////////////////////////////////////////////////////////////////////////////

  // // Legendary Actions

  let l_actions = document.querySelector(".c-sheet__info--l-actions");

  json.legendary_actions.forEach((item) => {
    let l_actions_item = document.createElement("div");

    l_actions_item.classList.add("c-sheet__info--l-actions-item");

    l_actions.appendChild(l_actions_item);

    // // Repeat
    let l_actions__name = document.createElement("h3");

    l_actions__name.classList.add("l_actions__name");

    l_actions__name.classList.add("heading-primary");

    l_actions_item.appendChild(l_actions__name);

    l_actions__name.innerHTML = item.name;

    // // Add value
    let l_actions__desc = document.createElement("h3");
    l_actions__desc.classList.add("l-actions__desc");
    l_actions__desc.classList.add("heading-primary");
    l_actions_item.appendChild(l_actions__desc);
    l_actions__desc.innerHTML = "Desc.: ";

    // // Add value of value
    let l_actions__desc__value = document.createElement("span");
    l_actions__desc__value.classList.add("s-abilities__desc--value");
    l_actions__desc.appendChild(l_actions__desc__value);
    l_actions__desc__value.innerHTML = item.desc;
  });
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

// This functions clears some sections of the HTML document when called
function clear() {
  // Proficiencies

  let proficiencies = document.querySelector(".c-sheet__info--proficiencies");

  proficiencies.innerHTML = "";

  let proficiencies_heading = document.createElement("div");
  proficiencies_heading.classList.add("c-sheet__info--proficiencies-heading");
  proficiencies.appendChild(proficiencies_heading);

  let heading = document.createElement("h2");
  heading.classList.add("heading-primary");
  proficiencies_heading.appendChild(heading);
  heading.innerHTML = "Proficiencies: ";

  // Special Abilities

  let s_abilities = document.querySelector(".c-sheet__info--s-abilities");

  s_abilities.innerHTML = "";

  let s_abilities_heading = document.createElement("div");
  s_abilities_heading.classList.add("c-sheet__info--s-abilities-heading");
  s_abilities.appendChild(s_abilities_heading);

  let s_heading = document.createElement("h2");
  s_heading.classList.add("heading-primary");
  s_abilities_heading.appendChild(s_heading);
  s_heading.innerHTML = "Special Abilities: ";

  // Actions

  let actions = document.querySelector(".c-sheet__info--actions");

  actions.innerHTML = "";

  let actions_heading = document.createElement("div");
  actions_heading.classList.add("c-sheet__info--actions-heading");
  actions.appendChild(actions_heading);

  let a_heading = document.createElement("h2");
  a_heading.classList.add("heading-primary");
  actions_heading.appendChild(a_heading);
  a_heading.innerHTML = "Actions: ";

  // Legendary actions

  // Select correct element by class
  let l_actions = document.querySelector(".c-sheet__info--l-actions");

  // Every time we send a request for a new monster, we must reset the data that was created on the previous one
  // // The following line is necessary to remove what was created on a call that came before the current one
  l_actions.innerHTML = "";

  // Since we removed everything, we must add the heading "Proficiencies again"
  let l_actions_heading = document.createElement("div");
  l_actions_heading.classList.add("c-sheet__info--l-actions-heading");
  l_actions.appendChild(l_actions_heading);

  let l_heading = document.createElement("h2");
  l_heading.classList.add("heading-primary");
  l_actions_heading.appendChild(l_heading);
  // Add value of text
  l_heading.innerHTML = "Legendary Actions: ";
}
