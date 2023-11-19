let can = document.querySelector(".option_can");
let canBox = document.querySelector(".adr_can");

let ny = document.querySelector(".option_ny");
let nyBox = document.querySelector(".adr_ny");

let yon = document.querySelector(".option_yon");
let yonBox = document.querySelector(".adr_yon");

let she = document.querySelector(".option_she");
let sheBox = document.querySelector(".adr_she");

let form = document.querySelector(".contacts_form");

let listElem = document.getElementsByClassName("option_list");

let heading = document.getElementById("select_p_id");

let elementContacts = document.querySelector("#contacts_element");
let contactCircle = document.querySelector(".contacts_circle");

let contactPic = document.querySelector(".contacts_img");

form.addEventListener("click", () => {
  contactCircle.classList.toggle("contacts_circle_active");
  elementContacts.classList.toggle("contact_element_active");
  form.classList.toggle("contacts_form_active");
  contactPic.classList.add("contacts_img_inactive");
  for (const element of listElem) {
    element.classList.toggle("option_list_active");
  }
  canBox.classList.remove("adr_active");
  nyBox.classList.remove("adr_active");
  yonBox.classList.remove("adr_active");
  sheBox.classList.remove("adr_active");
});

can.addEventListener("click", () => {
  canBox.classList.add("adr_active");
  for (const element of listElem) {
    element.classList.remove("option_list_active");
  }
  heading.innerText = "Canandaigua, NY";
  contactCircle.classList.remove("contacts_circle_active");
  elementContacts.classList.remove("contact_element_active");
});

ny.addEventListener("click", () => {
  nyBox.classList.add("adr_active");
  for (const element of listElem) {
    element.classList.remove("option_list_active");
  }
  heading.innerText = "New York City";
  contactCircle.classList.remove("contacts_circle_active");
  elementContacts.classList.remove("contact_element_active");
});

yon.addEventListener("click", () => {
  yonBox.classList.add("adr_active");
  for (const element of listElem) {
    element.classList.remove("option_list_active");
  }
  heading.innerText = "Yonkers, NY";
  contactCircle.classList.remove("contacts_circle_active");
  elementContacts.classList.remove("contact_element_active");
});

she.addEventListener("click", () => {
  sheBox.classList.add("adr_active");
  for (const element of listElem) {
    element.classList.remove("option_list_active");
  }
  heading.innerText = "Sherrill, NY";
  contactCircle.classList.remove("contacts_circle_active");
  elementContacts.classList.remove("contact_element_active");
});
