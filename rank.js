var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        const info = JSON.parse(this.responseText);
        console.log(info);

        //variables for the different buttons
        const grassBtn = document.getElementById("grass");
        const fireBtn = document.getElementById("fire");
        const waterBtn = document.getElementById("water");
        const bestBtn = document.getElementById("best");

        //when each of these buttons are clicked they send their own request to access their own specific info displayed on the page.
        //ex: when the grass button is clicked, the top grass pokemon shows up
        grassBtn.onclick = function(){
            document.querySelector("#pokeName").innerHTML = info[6].pokemon_name;
            document.querySelector("#pokeNumber").innerHTML = info[6].pokemon_id;
        }
        fireBtn.onclick = function(){
            document.querySelector("#pokeName").innerHTML = info[10].pokemon_name;
            document.querySelector("#pokeNumber").innerHTML = info[10].pokemon_id;
        }
        waterBtn.onclick = function(){
            document.querySelector("#pokeName").innerHTML = info[151].pokemon_name;
            document.querySelector("#pokeNumber").innerHTML = info[151].pokemon_id;
        }
        bestBtn.onclick = function(){
            document.querySelector("#pokeName").innerHTML = info[384].pokemon_name;
            document.querySelector("#pokeNumber").innerHTML = info[384].pokemon_id;
        }
        
        
	}
});

xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "462959b014msh67f6abc055d2572p1c475bjsn27b4d44635ac");

xhr.send(data);