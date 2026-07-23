
let item = document.querySelectorAll(".theme");
let menuBut = document.querySelectorAll(".menu-btn")
let checkTheme = false;



function theme(){

    
    
    if(checkTheme == false){
        checkTheme = true;
        input.style.background = "rgb(235, 235, 235)";
        input.style.color = "black";
        document.body.style.background = "linear-gradient(to top, rgb(255, 255, 255), rgb(255, 255, 255))";
    item.forEach(items => {
        items.style.background = "linear-gradient(to top, rgb(255, 255, 255), rgb(255, 255, 255))";
        items.style.color = "black";
        items.style.boxShadow = "0px 0px 10px 0.5px rgba(119, 119, 119, 0.37)";
        menuScreen.style.background = "rgb(250, 250, 250)";
        menuBut.forEach(e => {
            e.style.background = "rgb(245, 245, 245)";
            e.style.color = "black"
            document.getElementById("theme-btn").innerHTML = "Theme - Light";
        })
    });
    }
    else{
        checkTheme = false;
        input.style.background = "rgb(26, 26, 26)";
        document.body.style.background = "linear-gradient(to top, rgb(19, 19, 19), rgb(12, 12, 12))";
    item.forEach(items => {
        items.style.background = "rgb(43, 43, 43)";
        items.style.color = "white";
        items.style.boxShadow = "0px 0px 0px 0px rgba(119, 119, 119, 0.37)";
        menuBut.forEach(e => {
            menuBtn.style.border = "none";
            menuBtn.style.background = "transparent";
            e.style.background = "rgb(21, 21, 21)";
            e.style.color = "rgba(136, 134, 134, 0.829)";
            menuScreen.style.background = "rgb(22, 22, 22)";
            document.getElementById("theme-btn").innerHTML = "Theme - Dark";
        })
    });
    }
}

