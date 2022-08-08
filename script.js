const button = document.querySelector("#menu-btn");
const nav = document.querySelector("#mobilenav");
button.addEventListener("click", function () {
  if (!button.classList.contains("open")) {
    button.classList.add("open");
    nav.classList.remove("hidden");

    //
  } else if (button.classList.contains("open")) {
    button.classList.remove("open");
    nav.classList.add("hidden");
  }
});

// METHOD 2
// const button = document.querySelector("#menu-btn");
// const nav = document.querySelector("#mobilenav");
// button.addEventListener("click", navToggle)
// function navToggle() {
//   button.classList.toggle("open");
//   nav.classList.toggle("flex");
//   nav.classList.toggle("hidden");
// }
