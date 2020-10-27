var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        const info = JSON.parse(this.responseText);
        console.log(info);

        for(var i = 0; i<10; i++){
            var number = info[getRndInteger(1163)];
            var name = info[getRndInteger(1163)];
            var form = info[getRndInteger(1163)];
            document.querySelectorAll(".number")[i].innerHTML = number.pokemon_name;
            document.querySelectorAll(".name")[i].innerHTML = name.pokemon_id;
            document.querySelectorAll(".form")[i].innerHTML = form.form;
        }
            
    }
    
});
console.log(getRndInteger(1163))
function getRndInteger(max) {
    return Math.floor(Math.random() * Math.random(max));
}

xhr.open("GET", "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json");
xhr.setRequestHeader("x-rapidapi-host", "pokemon-go1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "462959b014msh67f6abc055d2572p1c475bjsn27b4d44635ac");

xhr.send(data);
