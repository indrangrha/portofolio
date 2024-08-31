//Klik Hamburger menu

const nv = document.querySelector(".navbar .nav-link");
const hm = document.querySelector("#hamburger-menu");

hm.addEventListener("click", (e) => {
  nv.classList.toggle("active");
  e.preventDefault();
});

//Klik diluar elemen
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !nv.contains(e.target)) {
    nv.classList.remove("active");
  }
});
