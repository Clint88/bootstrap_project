//Explore Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')
var data = null;

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4)
    if(xhr.status = 200) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        // starter.innerHTML = data.name;
        // starterimg.src = data.sprites.front_default;
        // starterText.innerHTML = "Moves: " + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " +data.moves[2].move.name + "</br>Stats: " + data.stats[0].base_stat + "</br>Weight: " + data.weight + "</br>Hidden: " +data.abilities[0].ability.name;
        // starterSText.innerHTML = "Type: " + data.types[0].type.name;
    } else if(xhr.status === 404) {
        alert("Oh no! The page wasn't found");
    } else if(xhr.status === 500) {
        alert("Awww man the server is taking a break :(");
    }
};
xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "291f2a141amshcceb06ce96a9251p12770djsn3523e84a69f3");

xhr.send(data);



//Stats Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')
var data = null;

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4)
    if(xhr.status = 200) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        // starter.innerHTML = data.name;
        // starterimg.src = data.sprites.front_default;
        // starterText.innerHTML = "Moves: " + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " +data.moves[2].move.name + "</br>Stats: " + data.stats[0].base_stat + "</br>Weight: " + data.weight + "</br>Hidden: " +data.abilities[0].ability.name;
        // starterSText.innerHTML = "Type: " + data.types[0].type.name;
    } else if(xhr.status === 404) {
        alert("Oh no! The page wasn't found");
    } else if(xhr.status === 500) {
        alert("Awww man the server is taking a break :(");
    }
};
xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "291f2a141amshcceb06ce96a9251p12770djsn3523e84a69f3");

xhr.send(data);



//Rank Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')
var data = null;

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4)
    if(xhr.status = 200) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        // starter.innerHTML = data.name;
        // starterimg.src = data.sprites.front_default;
        // starterText.innerHTML = "Moves: " + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " +data.moves[2].move.name + "</br>Stats: " + data.stats[0].base_stat + "</br>Weight: " + data.weight + "</br>Hidden: " +data.abilities[0].ability.name;
        // starterSText.innerHTML = "Type: " + data.types[0].type.name;
    } else if(xhr.status === 404) {
        alert("Oh no! The page wasn't found");
    } else if(xhr.status === 500) {
        alert("Awww man the server is taking a break :(");
    }
};
xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "291f2a141amshcceb06ce96a9251p12770djsn3523e84a69f3");

xhr.send(data);



//Info Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')
var data = null;

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4)
    if(xhr.status = 200) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        // starter.innerHTML = data.name;
        // starterimg.src = data.sprites.front_default;
        // starterText.innerHTML = "Moves: " + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " +data.moves[2].move.name + "</br>Stats: " + data.stats[0].base_stat + "</br>Weight: " + data.weight + "</br>Hidden: " +data.abilities[0].ability.name;
        // starterSText.innerHTML = "Type: " + data.types[0].type.name;
    } else if(xhr.status === 404) {
        alert("Oh no! The page wasn't found");
    } else if(xhr.status === 500) {
        alert("Awww man the server is taking a break :(");
    }
};
xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "291f2a141amshcceb06ce96a9251p12770djsn3523e84a69f3");

xhr.send(data);