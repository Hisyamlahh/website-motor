// Toggle class active
const navbarUl = document.querySelector(".navbar ul");
//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").
onclick = () => {
  navbarUl.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
   if(!hamburger.contains(e.target) && !navbarUl.contains(e.target)) {
    navbarUl.classList.remove('active');
   }
});