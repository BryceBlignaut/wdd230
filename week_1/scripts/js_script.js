// This sets the new date in the footer

const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

document.querySelector("#lastmodified").textContent = document.lastModified; 