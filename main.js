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
    if(btn.innerHTML === "C"){
        input.value = ""
    }

    if(btn.innerHTML === "="){
      let output = async(input.value);
      input.value = output;
    }

  });
});

function clear() {
  input.value = "";
}


function answer(){
  let output = eval(input.value);
  input.value = output;
}
