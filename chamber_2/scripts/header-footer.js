// This sets today's date in the header
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".header-today p").textContent = fulldate;

// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets the last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;

// Toggle the menu open or closed
function toggleMenu(){
    document.querySelector("nav ul").classList.toggle("menu-active");
    document.querySelector("#hamburger-x").classList.toggle("menu-active");
    document.querySelector("#hamburger-equiv").classList.toggle("menu-active");
}

// Attach click listener to the hamburger menu
document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);

// Pop up Banner Every Tuesday and Monday
var messagedate = new Date();
if(messagedate.getDay() == 1 || messagedate.getDay() == 2){
    document.querySelector(".banner").classList.add('active')
}