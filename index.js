const button = document.getElementById("email");
const close = document.getElementById("close");
const modul = document.getElementById("modal");
const settingsToggle = document.querySelector(".fas")
const navIcons = ["fas fa-battery-quarter", "fas fa-battery-full"];
const iconSelector = document.querySelector("#nav-icons");
let video = document.getElementById("videoBG");
const animationToggle = document.getElementById("portfolio-page");
const blinkToggle = document.getElementsByClassName("blinking");

// iconSelector.innerHTML = "";
// navIcons.forEach(icons => {
//     iconSelector.innerHTML += `<i>${icons}</i>`
// })
// const backgroundBlur = document.getElementById("blurbody");
settingsToggle.addEventListener("click", (event) =>{
    if(event.target.classList.contains("fa-battery-full")){
        event.target.classList.remove("fa-battery-full");
        event.target.classList.add("fa-battery-quarter"); 
        animationToggle.classList.toggle("portfolio-page-no-animation");
        blinkToggle.classList.remove("blinking");
    }else if(event.target.classList.contains("fa-battery-quarter")){
        event.target.classList.remove("fa-battery-quarter");
        event.target.classList.add("fa-battery-full");
        animationToggle.classList.remove("portfolio-page-no-animation");
        // blinkingToggle.classList.toggle("blinking");
    };
// settingsToggle.addEventListener("click", (e)=>{
   
// }




})


button.addEventListener("click", () => {
    modal.classList.remove("display-none")
});
close.addEventListener("click", () => {
    modal.classList.add("display-none")
});




// When the user clicks anywhere outside of the modal, close it
window.addEventListener ("click", event => {
    if (event.target === modal) {
        modal.classList.add("display-none");
    }
});
