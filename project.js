setTimeout(() =>{
    const counters = document.querySelectorAll('.Data-counter');
    
    counters.forEach((Element) => {
        Element.innerHTML = 0;
        Element.style.color = "white";
    
        const NumberIncrementer = () =>{
    
            const TargetCounter = +Element.getAttribute('data-target');
                // Converting String Output Into Number Output

            const StartingCounter = Number(Element.innerHTML);
                // Converting String Output Into Number Output

            const Increment = TargetCounter / 100 ;
    
                if(StartingCounter<TargetCounter)
                {
                    Element.innerHTML = `${Math.round(StartingCounter + Increment)}`;
                    setTimeout(NumberIncrementer,40)
                }
                else
                {
                    Element.innerHTML = TargetCounter;
                }
                //setTimeout(NumberIncrementer,40) 
        }
        
        NumberIncrementer();
        
    });
},2000);


const Darkmode = document.getElementById("icon");

Darkmode.addEventListener("click",() => {
    document.body.classList.toggle("Light-Dark-Mode");
})


function hamburger(){
    document.querySelector(".ul-items").classList.toggle("toggle-nav-items");
}