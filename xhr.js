//Explore Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')
// var data = null;

// let xhr1 = new XMLHttpRequest();
// xhr1.onreadystatechange = () => {
//     if(xhr1.readyState === 4)
//     if(xhr1.status = 200) {
//         const data = JSON.parse(xhr1.response);
//         console.log(data);
//         // starter.innerHTML = data.name;
//         // starterimg.src = data.sprites.front_default;
//         // starterText.innerHTML = "Moves: " + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " +data.moves[2].move.name + "</br>Stats: " + data.stats[0].base_stat + "</br>Weight: " + data.weight + "</br>Hidden: " +data.abilities[0].ability.name;
//         // starterSText.innerHTML = "Type: " + data.types[0].type.name;
//     } else if(xhr1.status === 404) {
//         alert("Oh no! The page wasn't found");
//     } else if(xhr1.status === 500) {
//         alert("Awww man the server is taking a break :(");
//     }
// };
// xhr1.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
// xhr1.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
// xhr1.setRequestHeader("x-rapidapi-key", "291f2a141amshcceb06ce96a9251p12770djsn3523e84a69f3");

// xhr1.send(data);



//Rank Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')
// var data = null;

// let xhr2 = new XMLHttpRequest();
// xhr2.onreadystatechange = () => {
//     if(xhr2.readyState === 4)
//     if(xhr2.status = 200) {
//         const data = JSON.parse(xhr2.response);
//         console.log(data);
//         // starter.innerHTML = data.name;
//         // starterimg.src = data.sprites.front_default;
//         // starterText.innerHTML = "Moves: " + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " +data.moves[2].move.name + "</br>Stats: " + data.stats[0].base_stat + "</br>Weight: " + data.weight + "</br>Hidden: " +data.abilities[0].ability.name;
//         // starterSText.innerHTML = "Type: " + data.types[0].type.name;
//     } else if(xhr2.status === 404) {
//         alert("Oh no! The page wasn't found");
//     } else if(xhr2.status === 500) {
//         alert("Awww man the server is taking a break :(");
//     }
// };
// xhr2.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
// xhr2.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
// xhr2.setRequestHeader("x-rapidapi-key", "291f2a141amshcceb06ce96a9251p12770djsn3523e84a69f3");

// xhr2.send(data);



//Stats Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')

////////////////Use Dom to select get and post button/////////////
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const getData = () =>{
    var userInput = document.getElementById("searchBar").value;
    console.log(userInput);
    var tops = 'https://pokeapi.co/api/v2/pokemon/' + userInput;
    sendHttpRequest('GET', tops);
};

const sendHttpRequest = (method,url) =>{
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
    const xhr3 = new XMLHttpRequest();
    xhr3.open(method, url);
    xhr3.onload = () => {
        const data = JSON.parse(xhr3.response);//converts JSON to data to RAW JS Objs & dataTypes
        console.log(data);//JSON Data

        var str = "" + data.id;
        var pad = "000";
        var ans = pad.substring(0, pad.length - str.length) + str;
        document.getElementsByClassName('win').value = '#' + ans + " " + data.name;
        document.getElementsByClassName('winRate').value = data.types[0].type.name;
        document.getElementsByClassName('kills').value = data.height + " ft";
        document.getElementsByClassName('kd').value = data.weight + " lbs";
        document.getElementsByClassName('killRate').innerHTML = "Possible Moves:";
        for(var i=0; i < 5; i++){
            document.getElementById('killRate').value += data.moves[i].move.name + ",";
        }
    }
    xhr3.send();
    })

};

getBtn.addEventListener("click", getData);




//Info Page
// const starter1 = document.querySelector('.starter1');
// const starter1img = document.querySelector('.starter1img');
// const starter1Text = document.querySelector('#cardText')
// const starter1SText = document.querySelector('#cardTextS')
// var data = null;

// let xhr4 = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if(xhr4.readyState === 4)
//     if(xhr4.status = 200) {
//         const data = JSON.parse(xhr4.response);
//         console.log(data);
//         // starter.innerHTML = data.name;
//         // starterimg.src = data.sprites.front_default;
//         // starterText.innerHTML = "Moves: " + data.moves[0].move.name + ", " + data.moves[1].move.name + ", " +data.moves[2].move.name + "</br>Stats: " + data.stats[0].base_stat + "</br>Weight: " + data.weight + "</br>Hidden: " +data.abilities[0].ability.name;
//         // starterSText.innerHTML = "Type: " + data.types[0].type.name;
//     } else if(xhr4.status === 404) {
//         alert("Oh no! The page wasn't found");
//     } else if(xhr4.status === 500) {
//         alert("Awww man the server is taking a break :(");
//     }
// };
// xhr4.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
// xhr4.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
// xhr4.setRequestHeader("x-rapidapi-key", "291f2a141amshcceb06ce96a9251p12770djsn3523e84a69f3");

// xhr4.send(data);