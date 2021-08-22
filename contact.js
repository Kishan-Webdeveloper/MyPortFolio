
const Darkmode = document.getElementById("icon");

Darkmode.addEventListener("click",() => {
        document.body.classList.toggle("Light-Dark-Mode");
});


var refresh = document.getElementById("form");

function submitData(){
    console.log( document.getElementById('name').value);
    console.log(document.getElementById('number').value);
    console.log(document.getElementById('email').value);
    console.log(document.getElementById('city').value);
}

function hamburger(){
    document.querySelector(".ul-items").classList.toggle("toggle-nav-items");
}
