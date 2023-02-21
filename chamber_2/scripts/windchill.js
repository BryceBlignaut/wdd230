function setWindChill(windspeed, temp){        
    // Get the DOM objects that are dynamic
    tempSpan = document.querySelector("#temperature");
    windSpeedSpan = document.querySelector("#windspeed");
    windChillSpan = document.querySelector("#windchill");

    // Set up the wind chill content
    let windchill = 'N/A';
    if (windspeed >= 3.0 && temp <= 50){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchill = `${chill}`;
    }

    // Write out the dynamic content
    tempSpan.textContent = temp;
    windSpeedSpan.textContent = windspeed;
    windChillSpan.innerHTML = windchill;
}

setWindChill(10, 5);

const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let today = new Date();
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-visit');

if (lastVisitString==null){        
    visitspan.textContent = '0'
}
else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", today.toLocaleDateString());