let currentDate= new Date;
let time = currentDate.getHours() + ":" + currentDate.getMinutes();

let dateAndTime = currentDate + " " + time;

var hidden = document.querySelector("#hidden-time");
hidden.value = dateAndTime;