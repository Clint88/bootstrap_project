

/////info page
const getBtn = document.getElementById("searchButton");

const getData = () =>{
    var userInput = document.getElementById("searchBar").value;
    console.log(userInput);
    
    var infoAPI = 'https://api.fortnitetracker.com/v1/powerrankings/pc/NAE/' + userInput;
    sendHttpRequest('GET', infoAPI);
};
const sendHttpRequest = (method,url) =>{
    const promise = new Promise((resolve, reject) =>{
        console.log(url);
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            const data = JSON.parse(xhr.response);
            console.log(data);

            // document.getElementById('playerName').value = data.________;
            // document.getElementById('playerID').value = data.________;
            // document.getElementById('platform').value = data.________;
        }
        xhr.setRequestHeader('TRN-Api-Key', '4057cb80-b7ca-4cea-ad91-e2c03d871589')
        xhr.send();
    })
};
//getBtn.addEventListener("click", getData);


////////Create our Request to server
let xhr = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr.onreadystatechange = () => {
///////Create an if statement that asks if the server req is complete/////////////    
if(xhr.readyState === 4)
///////now server is complete create an if to see if connection succcessful///////
if(xhr.status = 200){
///////Body of the callback where we parse data and use DOM Manipulation//////////
const data = JSON.parse(xhr.response);
console.log(data);
//for(var i=0; i<11; i++){
   // document.getElementsByClassName("solo[i]").innerHTML = data.userID;
//}

///////Else if clause where we throw an error if we dont have success connecting//
    }else if (xhr.status === 404) {
    alert(`Oh no the page wasn't found`);
    }else if (xhr.status === 500){
    alert(`Awhh man the server is taking a break`)
    }
};

///////open server request////////////////////////////////////////////////////////
xhr.open("GET", "https://rapidapi.p.rapidapi.com/stats/Rubix3554");
///////send server request////////////////////////////////////////////////////////
xhr.setRequestHeader("x-rapidapi-key", "462959b014msh67f6abc055d2572p1c475bjsn27b4d44635ac");
xhr.setRequestHeader("Access-Allow-Control-Origin", "https://rapidapi.p.rapidapi.com/stats/Rubix3554");
xhr.send();