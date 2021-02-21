// import important functions into contact us:
import { smoothScroll } from "./functions.js";
import { all } from "./data.js";

let from = document.querySelector(
  "body > header > div.header-content > div > a.btn.btn--reserve-header"
);
let to = document.querySelector("body > section.section-reservation");
from.addEventListener("click", function () {
  smoothScroll(to, 1000);
});

// for get elements by random order :
const sedan = [];
const constructMachine = [];
const motorcycle = [];
const city_car = [];
const SUV = [];
const truck = [];
const compact = [];

// filtering by type car :
all.forEach((element) => {
  if (element.type === "sedan") {
    sedan.push(element);
  } else if (element.type === "compact") {
    compact.push(element);
  } else if (element.type === "construction machine") {
    constructMachine.push(element);
  } else if (element.type === "motorcycle") {
    motorcycle.push(element);
  } else if (element.type === "City Car") {
    city_car.push(element);
  } else if (element.type === "SUV") {
    SUV.push(element);
  } else if (element.type == "truck") {
    truck.push(element);
  }
});
const automatic_gear = [sedan, truck];

// calculation tax by power:
all.forEach((element) => {
  if (element.power === "Diesel") {
    element.taxPower = 0.21;
  } else if (element.power === "Electric") {
    element.taxPower = 0.05;
  } else if (element.power === "Hybrid") {
    element.taxPower = 0.09;
  } else if (element.power === "essence") {
    element.taxPower = 0.14;
  }
});

//for add taxes automatic gear :
automatic_gear.forEach((element) => {
  element.forEach((elm) => {
    elm.taxGear = 0.19;
  });
});

// function for calculation total bill :
const total_bill = (days, Element) => {
  Element.total__bill = Element.taxGear
    ? days *
      (Element.price + Element.price * (Element.taxGear + Element.taxPower))
    : days * (Element.price + Element.price * Element.taxPower);
  return Element.total__bill;
};

// loading icon-arrow  :
let arrow = document.createElement("svg");
arrow.className = "icon--reserve";
let arrow_use = document.createElement("use");
arrow_use.setAttribute("href", "../images/SVG/icons.svg#icon-arrow-right2");
arrow.appendChild(arrow_use);

// calculate date :
//// date now :
let date = new Date();
let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
let year = date.getFullYear();
let month =
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
let current_Date = `${year}-${month}-${day}`;
//// get date
const calcDate = () => {
  date_picker_pickup.addEventListener("focus", () => {
    date_picker_pickup.type = "date";
    date_picker_pickup.value = current_Date;
  });
  date_picker_return.addEventListener("focus", () => {
    date_picker_return.type = "date";
    date_picker_return.value = current_Date;
  });
  let date_pick = new Date(date_picker_pickup.value);
  let date_return = new Date(date_picker_return.value);
  let diff_Date =
    (date_return.getTime() - date_pick.getTime()) / (1000 * 60 * 60 * 24);
  return diff_Date;
};

// function for fill categories :
const clickShowItem = (clickedItem, Items, event_type) => {
  clickedItem.addEventListener(event_type, () => {
    if (clickedItem !== window) {
      let ul_type = document.querySelectorAll("li.active_type");
      ul_type.forEach((elm) => {
        elm.classList.remove("active_type");
      });
      clickedItem.classList.add("active_type");
    }
    // delete all items in reservation_box
    let reservation_box = document.querySelector(".reservation-box");
    reservation_box.innerHTML = "";
    Items.forEach((element) => {
      //create node motor div :
      let Div_Motor = document.createElement("div");
      Div_Motor.className = "motor";

      // fill div_img node :
      let create_img_div = document.createElement("div");
      create_img_div.className = "motor_img";
      let create_img = document.createElement("img");
      create_img.src = element.img_src;
      create_img_div.appendChild(create_img);

      // create book_info_booking node :
      let motor_info_booking = document.createElement("div");
      motor_info_booking.className = "motor_info_booking";

      // fill name node :
      let motor_name = document.createElement("div");
      motor_name.className = "motor_name";
      motor_name.appendChild(document.createTextNode(element.name));

      // fill price node :
      let li_motor_price = document.createElement("li");
      li_motor_price.className = "motor_rent__price";
      $(li_motor_price).append(
        "<svg class='icon-gallery'><use xlink:href='../images/SVG/icons.svg#icon-credit-card'></use></svg>"
      );
      li_motor_price.appendChild(document.createTextNode(`$ ${element.price}`));

      // fill company name node :
      let li_motor_company = document.createElement("li");
      li_motor_company.className = "motor_company";
      $(li_motor_company).append(
        "<svg class='icon-gallery'><use xlink:href='../images/SVG/icons.svg#icon-map2'></use></svg>"
      );
      li_motor_company.appendChild(document.createTextNode(element.company));

      // fill power node :
      let li_motor_power = document.createElement("li");
      li_motor_power.className = "motor_power";
      $(li_motor_power).append(
        "<svg class='icon-gallery'><use xlink:href='../images/SVG/icons.svg#icon-power'></use></svg>"
      );
      li_motor_power.appendChild(document.createTextNode(element.power));

      // fill type node :
      let li_motor_type = document.createElement("li");
      li_motor_type.className = "motor_type";
      $(li_motor_type).append(
        "<svg class='icon-gallery'><use xlink:href='../images/SVG/icons.svg#icon-info'></use></svg>"
      );
      li_motor_type.appendChild(document.createTextNode(element.type));

      // fill btn reservation :
      let btn_reservation = document.createElement("a");
      btn_reservation.className = "btn btn--primary btn--reserve-section";
      btn_reservation.appendChild(document.createTextNode("Reserve now"));
      $(btn_reservation).append(
        "<svg class='icon-gallery'><use xlink:href='../images/SVG/icons.svg#icon-arrow-right2'></use></svg>"
      );

      // fill ul from li :
      let ul = document.createElement("ul");
      ul.className = "motor_infos";
      ul.appendChild(li_motor_price);
      ul.appendChild(li_motor_company);
      ul.appendChild(li_motor_power);
      ul.appendChild(li_motor_type);

      //fill motor_info_booking :
      motor_info_booking.appendChild(ul);
      motor_info_booking.appendChild(btn_reservation);
      Div_Motor.appendChild(create_img_div);
      Div_Motor.appendChild(motor_name);
      Div_Motor.appendChild(motor_info_booking);
      reservation_box.appendChild(Div_Motor);

      // addEventListener to btn_reservation :
      btn_reservation.addEventListener("click", () => {
        calcDate();
        document
          .querySelector(".popup-box")
          .appendChild(Div_Motor.cloneNode(true));
        document.querySelector(".popup-reservation").style.display = "flex";
        let pop_reservation = document.querySelector(".popup-reservation");
        document
          .querySelector(".btn_popUp__reserve")
          .addEventListener("click", () => {
            calcDate();
            if (calcDate() > 0) {
              console.log("true date");
              alert(
                `price per day : $${
                  element.price
                }\nday : ${calcDate()}\ngear tax :${
                  element.taxGear ? `${element.taxGear}` : `0%`
                }\npower tax :${Math.round(
                  element.taxPower * 100
                )}%\nTotal bill: $${Math.round(
                  total_bill(calcDate(), element)
                )}`
              );
              console.log(total_bill(calcDate(), element));
            } else {
              alert("Enter Valid date !");
            }
          });

        // hide popup when click in cancel btn :
        document
          .querySelector(".btn_popUp__cancel")
          .addEventListener("click", () => {
            pop_reservation.style.display = "none";
            pop_reservation.querySelector(".motor").remove();
          });
      });
    });
  });
};

// events in reservation section :
clickShowItem(window, all, "load");
clickShowItem(document.querySelector(".all_items"), all, "click");
clickShowItem(document.querySelector(".motorcycle"), motorcycle, "click");
clickShowItem(document.querySelector(".cityCar"), city_car, "click");
clickShowItem(document.querySelector(".compact"), compact, "click");
clickShowItem(document.querySelector(".sedan"), sedan, "click");
clickShowItem(document.querySelector(".SUVcar"), SUV, "click");
clickShowItem(
  document.querySelector(".construction_machine"),
  constructMachine,
  "click"
);
clickShowItem(document.querySelector(".truck"), truck, "click");
document.querySelector(".all_items").classList.add("active_type");
