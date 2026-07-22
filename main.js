let menuBtn = document.getElementById("menu-but");
let menuScreen = document.getElementById("menu-screen");
menuBtn.addEventListener("click", () => {
  menuScreen.classList.toggle("menu-show");
});

let buttons = document.querySelectorAll(".btn");

let input = document.getElementById("input-screen");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    input.value += btn.innerHTML;
  });
});

function clear() {
  input.value = "";
}
