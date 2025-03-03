const navbar = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
const links = sidebar.querySelectorAll('a');

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

//add fixed class to navbar
window.addEventListener('scroll', function () {
  if (this.window.scrollY > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  });
});

function getSection(name) {
  const element = document.getElementById(name);
  element.scrollIntoView();
}
