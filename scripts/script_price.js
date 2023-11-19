let bigBox = document.querySelector('.prices_box');

let openBtn1 = document.querySelector('.price_btn_1');
let onePriceBox = document.querySelector('.one_price_box');
let onePriceContent = document.querySelector('.price_item_content');
let element1 = document.querySelector('.element_01');

let openBtn2 = document.querySelector('.price_btn_2');
let twoPriceBox = document.querySelector('.two_price_box');
let twoPriceContent = document.querySelector('.price_item_content_2');
let element2 = document.querySelector('.element_02');

let openBtn3 = document.querySelector('.price_btn_3');
let threePriceBox = document.querySelector('.three_price_box');
let threePriceContent = document.querySelector('.price_item_content_3');
let element3 = document.querySelector('.element_03');

openBtn1.addEventListener('click', () => {
  twoPriceBox.classList.remove('one_price_box_active');
  twoPriceContent.classList.remove('price_item_content_active');
  element2.classList.remove('element_01_active');
  openBtn2.classList.remove('circle_active');

  threePriceBox.classList.remove('one_price_box_active');
  threePriceContent.classList.remove('price_item_content_active');
  element3.classList.remove('element_01_active');
  openBtn3.classList.remove('circle_active');

  bigBox.classList.remove('prices_box_active');

  bigBox.classList.toggle('prices_box_active');
  onePriceBox.classList.toggle('one_price_box_active');
  onePriceContent.classList.toggle('price_item_content_active');
  element1.classList.toggle('element_01_active');
  openBtn1.classList.toggle('circle_active');

  priceBorder();
});

openBtn2.addEventListener('click', () => {
  onePriceBox.classList.remove('one_price_box_active');
  onePriceContent.classList.remove('price_item_content_active');
  element1.classList.remove('element_01_active');
  openBtn1.classList.remove('circle_active');

  threePriceBox.classList.remove('one_price_box_active');
  threePriceContent.classList.remove('price_item_content_active');
  element3.classList.remove('element_01_active');
  openBtn3.classList.remove('circle_active');

  bigBox.classList.remove('prices_box_active');

  bigBox.classList.toggle('prices_box_active');
  twoPriceBox.classList.toggle('one_price_box_active');
  twoPriceContent.classList.toggle('price_item_content_active');
  element2.classList.toggle('element_01_active');
  openBtn2.classList.toggle('circle_active');

  priceBorder();
});

openBtn3.addEventListener('click', () => {
  onePriceBox.classList.remove('one_price_box_active');
  onePriceContent.classList.remove('price_item_content_active');
  element1.classList.remove('element_01_active');
  openBtn1.classList.remove('circle_active');

  twoPriceBox.classList.remove('one_price_box_active');
  twoPriceContent.classList.remove('price_item_content_active');
  element2.classList.remove('element_01_active');
  openBtn2.classList.remove('circle_active');

  bigBox.classList.remove('prices_box_active');

  bigBox.classList.toggle('prices_box_active');
  threePriceBox.classList.toggle('one_price_box_active');
  threePriceContent.classList.toggle('price_item_content_active');
  element3.classList.toggle('element_01_active');
  openBtn3.classList.toggle('circle_active');

  priceBorder();
});

function priceBorder() {
  if (
    !openBtn1.classList.contains('circle_active') &&
    !openBtn2.classList.contains('circle_active') &&
    !openBtn3.classList.contains('circle_active')
  ) {
    bigBox.classList.remove('prices_box_active');
    console.log('inactive');
  }
}
