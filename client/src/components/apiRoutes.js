const axios = require("axios");
const apiKey = "4add204314msh1259679162559f6p1dc5bdjsnf0c80500a57f"
const apiHost = 'https://rawg-video-games-database.p.rapidapi.com'
// simple get request that displays list of top 20 games of all time


axios({
    "method": "GET",
    "url": "https://rawg-video-games-database.p.rapidapi.com/games",
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey
    }
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

axios({
    "method": "GET",
    "url": "https://rawg-video-games-database.p.rapidapi.com/games"
})