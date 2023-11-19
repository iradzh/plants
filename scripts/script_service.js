let gardenBtn = document.querySelector(".service_btn_garden");
let gardenCards = document.getElementsByClassName("service_card_garden");

let lawnBtn = document.querySelector(".service_btn_lawn");
let lawnCards = document.getElementsByClassName("service_card_lawn");

let plantingBtn = document.querySelector(".service_btn_planting");
let plantingCards = document.getElementsByClassName("service_card_planting");

function toBlur(cardType) {
  for (let index = 0; index < cardType.length; index++) {
    cardType[index].classList.add("service_card_blur");
  }
}
function toUnblur(cardType) {
  for (let index = 0; index < cardType.length; index++) {
    cardType[index].classList.remove("service_card_blur");
  }
}

function blurBehavior() {
  toUnblur(gardenCards);
  toUnblur(lawnCards);
  toUnblur(plantingCards);
  if (
    !gardenBtn.classList.contains("service_btn_active") &&
    lawnBtn.classList.contains("service_btn_active") &&
    plantingBtn.classList.contains("service_btn_active")
  ) {
    toBlur(gardenCards);
  } else if (
    gardenBtn.classList.contains("service_btn_active") &&
    !lawnBtn.classList.contains("service_btn_active") &&
    plantingBtn.classList.contains("service_btn_active")
  ) {
    toBlur(lawnCards);
  } else if (
    gardenBtn.classList.contains("service_btn_active") &&
    lawnBtn.classList.contains("service_btn_active") &&
    !plantingBtn.classList.contains("service_btn_active")
  ) {
    toBlur(plantingCards);
  } else if (
    gardenBtn.classList.contains("service_btn_active") &&
    !lawnBtn.classList.contains("service_btn_active") &&
    !plantingBtn.classList.contains("service_btn_active")
  ) {
    toBlur(lawnCards);
    toBlur(plantingCards);
  } else if (
    !gardenBtn.classList.contains("service_btn_active") &&
    lawnBtn.classList.contains("service_btn_active") &&
    !plantingBtn.classList.contains("service_btn_active")
  ) {
    toBlur(gardenCards);
    toBlur(plantingCards);
  } else if (
    !gardenBtn.classList.contains("service_btn_active") &&
    !lawnBtn.classList.contains("service_btn_active") &&
    plantingBtn.classList.contains("service_btn_active")
  ) {
    toBlur(gardenCards);
    toBlur(lawnCards);
  } else if (
    !gardenBtn.classList.contains("service_btn_active") &&
    !lawnBtn.classList.contains("service_btn_active") &&
    !plantingBtn.classList.contains("service_btn_active")
  ) {
    toUnblur(gardenCards);
    toUnblur(lawnCards);
    toUnblur(plantingCards);
  }
}

gardenBtn.addEventListener("click", () => {
  gardenBtn.classList.toggle("service_btn_active");
  if (
    lawnBtn.classList.contains("service_btn_active") &&
    plantingBtn.classList.contains("service_btn_active")
  ) {
    gardenBtn.classList.remove("service_btn_active");
  }
  blurBehavior();
});

lawnBtn.addEventListener("click", () => {
  lawnBtn.classList.toggle("service_btn_active");
  if (
    gardenBtn.classList.contains("service_btn_active") &&
    plantingBtn.classList.contains("service_btn_active")
  ) {
    lawnBtn.classList.remove("service_btn_active");
  }
  blurBehavior();
});

plantingBtn.addEventListener("click", () => {
  plantingBtn.classList.toggle("service_btn_active");
  if (
    gardenBtn.classList.contains("service_btn_active") &&
    lawnBtn.classList.contains("service_btn_active")
  ) {
    plantingBtn.classList.remove("service_btn_active");
  }
  blurBehavior();
});
