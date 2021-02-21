// smooth scroll function :
import { smoothScroll } from "./functions.js";

// smooth scrolling elements :
let to = document.querySelector(".section-local");
let from = document.querySelector(".btn-header--location");
from.addEventListener("click", function () {
  smoothScroll(to, 1000);
});
let to1 = document.querySelector(".footer");
let from1 = document.querySelector(".local-addresses .btn.submit-form");
from1.addEventListener("click", function () {
  smoothScroll(to1, 1000);
});

// getting contact us submit :
let submit_btn = document.querySelector(".form-contact .submit-form");

//getting popUp :
let popUp = document.querySelector(".popup");
let popUp_box = document.querySelector(".popup-box");
let form_popUp = document.forms.form_popUp;
let contact_form = document.forms.contact_form;

// block submitting form refreshing :
contact_form.addEventListener("submit", (event) => event.preventDefault());
form_popUp.addEventListener("submit", (event) => event.preventDefault());

// show popup when click to btn and fill inputs in popup :
submit_btn.addEventListener("click", () => {
  if (contact_form.checkValidity()) {
    document.querySelector(
      ".fullname"
    ).innerHTML = `${contact_form.name.value} ${contact_form.Lname.value} `;
    form_popUp.name.value = contact_form.name.value;
    form_popUp.Lname.value = contact_form.Lname.value;
    form_popUp.email.value = contact_form.email.value;
    form_popUp.phone.value = contact_form.phone.value;
    form_popUp.message.value = contact_form.message.value;
    popUp.style.display = "flex";
    popUp.style.backdropFilter = "blur(1.5rem)";
    popUp_box.style.display = "block";
  } else {
    alert("re-Enter your information");
  }
});

// getting popUp buttons:
let confirm_btn = document.querySelector(".popUp-form .confirm-btn");
let cancel_btn = document.querySelector(".popUp-form .cancel-btn");
let edit_btn = document.querySelector(".popUp-form .edit-btn");
let thank__page = document.querySelector(".thank__page");
let return_btn = document.querySelector(".thank__page .btn_return");

// turn on buttons in popUp form :
//// turn on confirm button:
confirm_btn.addEventListener("click", () => {
  // popUp.style.backdropFilter = "blur(1.5rem)";
  popUp_box.style.display = "none";
  thank__page.style.display = "flex";
});

////// hidden thank you page :
return_btn.addEventListener("click", () => {
  contact_form.name.value = null;
  contact_form.Lname.value = null;
  contact_form.email.value = null;
  contact_form.phone.value = null;
  contact_form.message.value = null;
  popUp.style.backdropFilter = "unset";
  popUp.style.display = "none";
  thank__page.style.display = "none";
});
//// turn on edit button:

cancel_btn.addEventListener("click", () => {
  popUp.style.display = "none";
  contact_form.name.value = null;
  contact_form.Lname.value = null;
  contact_form.email.value = null;
  contact_form.phone.value = null;
  contact_form.message.value = null;
});
edit_btn.addEventListener("click", () => {
  popUp.style.display = "none";
});
