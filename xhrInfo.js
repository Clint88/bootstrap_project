var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        const info = JSON.parse(this.responseText);
        console.log(info);

        const getBtn = document.getElementById("searchBtn");
        getBtn.onclick = function(){
            const userInput = document.getElementById("search").value;
            //this will put anything the user types and put it into the unserInput
            document.querySelector('.pokeName').innerHTML = info[userInput].pokemon_name;
            document.querySelector('.pokeNum').innerHTML = info[userInput].pokemon_id;
            document.querySelector('.form').innerHTML = info[userInput].form;
            // once the userInput is found the data will look for what number they typed and find the info on the pokemon
        }
	}
});

xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "462959b014msh67f6abc055d2572p1c475bjsn27b4d44635ac");

xhr.send(data);
