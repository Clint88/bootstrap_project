

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
getBtn.addEventListener("click", getData);
