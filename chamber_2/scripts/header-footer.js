// Today's date in the header
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".header-today p").textContent = fulldate;


const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

document.querySelector("#lastmodified").textContent = document.lastModified;

function toggleMenu(){
    document.querySelector("nav ul").classList.toggle("menu-active");
    document.querySelector("#hamburger-x").classList.toggle("menu-active");
    document.querySelector("#hamburger-equiv").classList.toggle("menu-active");
}

document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);

var messagedate = new Date();
if(messagedate.getDay() == 1 || messagedate.getDay() == 2){
    document.querySelector(".banner").classList.add('active')
}
