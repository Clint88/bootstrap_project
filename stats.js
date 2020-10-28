var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        const info = JSON.parse(this.responseText);
        console.log(info);

        //creates a variable for the search button
        const searchBtn = document.getElementById("searchBtn");
        //function that inputs the info of the certain pokemon the user searches when they click the search button
        searchBtn.onclick = function(){
            //variable for what the user puts into the search bar
            const userInput = document.getElementById("search").value;

            //areas of where each specific info goes into
            document.querySelector(".pokeN").innerHTML = info[userInput].pokemon_name;
            document.querySelector(".form").innerHTML = info[userInput].form;
            document.querySelector(".id").innerHTML = info[userInput].pokemon_id;
            document.querySelector(".bd").innerHTML = info[userInput].base_defense;
            document.querySelector(".bs").innerHTML = info[userInput].base_stamina;
            document.querySelector(".ba").innerHTML = info[userInput].base_attack;
        }
	}
});

xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "462959b014msh67f6abc055d2572p1c475bjsn27b4d44635ac");

xhr.send(data);