let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.navigation');
let cross = document.querySelector('.material-symbols-outlined');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  cross.classList.toggle('active');
});

document.querySelectorAll('.navigation_link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    cross.classList.remove('active');
  })
);

document.querySelectorAll('.material-symbols-outlined').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    cross.classList.remove('active');
  })
);

document.querySelectorAll('main').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    cross.classList.remove('active');
  })
);
