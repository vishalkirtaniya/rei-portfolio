let bodySection = document.querySelector(".body-section");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  bodySection.classList.toggle("active");
});
