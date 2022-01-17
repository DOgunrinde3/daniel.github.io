// JavaScript source code
let searchButton = document.getElementById("search");
var today = new Date();
var currentDate = today.toISOString().substring(0, 10);



searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()

})

likeButton.addEventListener("click", () => {
    
    buttonLiked()

})

async function sendApiRequest()
{
    let APIKEY = "cbVWb5XtKyptyNfvad9LWcWZKvi4t2CncLm2WWaM";
    var lookup = document.getElementById("lookup").value;
    document.getElementById("spacetitle").className = "";

    console.log(lookup.localeCompare(""));

    

    if (lookup.localeCompare("") == 0) {
        var lookup = document.getElementById("lookup").value = currentDate;
    }

    if (lookup > currentDate) {
        document.getElementById("explain").innerHTML = "";
        document.getElementById("aside").style.backgroundColor = "white";
        document.getElementById("content").style.backgroundImage = ``;
        document.getElementById("spacetitle").innerHTML = "Available On this Date";
        document.getElementById("date").innerHTML = lookup;
        document.getElementById("content").style.backgroundColor = "black";
        document.getElementById("like").style.visibility = "hidden";
        

    }


    if (lookup <= currentDate) {
        let response = await fetch(`https://api.nasa.gov/planetary/apod?date=${lookup}&api_key=${APIKEY}`);

        console.log(response);

        let data = await response.json();
        console.log(data);
        useApi(data);

    }

}

function useApi(data)
{ 
    
    document.getElementById("aside").style.backgroundColor = "white";
    document.getElementById("content").style.backgroundSize = "cover";
    document.getElementById("like").style.visibility = "visible";
    document.getElementById("like").className = "heart";
    document.getElementById("content").style.backgroundImage = `url("${data.url}")`;
    document.getElementById("explain").innerHTML = data.explanation;
    document.getElementById("spacetitle").className = "type";
    document.getElementById("spacetitle").innerHTML = data.title;
    document.getElementById("date").innerHTML = data.date;
    
    
}

function buttonLiked()
{
    

    document.getElementsByClassName("heart")[0].style.backgroundColor = "red";
    
    document.getElementsByClassName("heart")[0].after.style.backgroundColor = "red";
    

}