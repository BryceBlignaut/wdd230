const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets)

}

getProphetData();

const displayProphets = (prophet) => {
    const cards = document.querySelector('div.cards')

    prophet.forEach((prophet) => {   
    let card = document.createElement("section");
    card.innerHTML = `<h2>${prophet.name} ${prophet.lastname}
                    </h2><h3>Date of Birth: ${prophet.birthdate}</h2>
                    <h3>Place of Birth: ${prophet.birthplace}</h3>
                    <img src = "${prophet.imageurl}" height="440" width="340" loading="lazy"><hr><br>`;
    cards.appendChild(card);
})};