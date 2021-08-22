const Darkmode = document.getElementById("icon");


Darkmode.addEventListener("click",() => {
        document.body.classList.toggle("Light-Dark-Mode");
})


function hamburger(){
        document.querySelector(".ul-items").classList.toggle("toggle-nav-items");
}