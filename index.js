
const Darkmode = document.getElementById("icon");

Darkmode.addEventListener("click",() => {
        document.body.classList.toggle("Light-Dark-Mode");
        // if(document.body.classList.contains("Light-Dark-Mode")){
        //         icon.src = "fas fa-sun";
        // }else{
        //         icon.src = "fas fa-moon";
        // }
})


const Loader = document.getElementById("PreLoader");

function LoaderFunction() {
        Loader.style.display = "none";
}


function hamburger(){
        document.querySelector(".ul-items").classList.toggle("toggle-nav-items");
}





