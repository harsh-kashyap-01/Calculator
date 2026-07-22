

let buttons = document.querySelectorAll(".number-key");

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e) => {
        
;    })
})


let menuBtn = document.getElementById("menu-but");
let menuScreen = document.getElementById("menu-screen");
menuBtn.addEventListener("click", () => {
    menuScreen.classList.toggle("menu-show")
})