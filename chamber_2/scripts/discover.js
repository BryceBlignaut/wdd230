const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let today_1 = new Date();
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#last-visit');

if (lastVisitString==null){        
    visitspan.textContent = '0'
}
else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((today_1.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", today_1.toLocaleDateString());