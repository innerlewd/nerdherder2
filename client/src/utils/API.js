import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("https://www.giantbomb.com/api/game/[guid]/?api_key=8b5da22ef25cf5af94998d27556959ead8304c08&format=json&field_list=name,description");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseBreedsList: function() {
    return axios.get("https://www.giantbomb.com/api/genres/?api_key=8b5da22ef25cf5af94998d27556959ead8304c08");
  }
};



// const axios = require("axios");



// axios({
//     "method":"GET",
//     "url":"https://rawg-video-games-database.p.rapidapi.com/games",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
//     "x-rapidapi-key":"43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
//     }
//     })
//     .then((response)=>{
// 		var game = response.data.results
// 		var random = game[Math.floor(Math.random() * game.length)];
// 		var gamePic = random.background_image
// 		var popGame = random.name
// 		console.log(random.name)
// 	  console.log(random.background_image)



// axios({
//   url: "https://api-v3.igdb.com/games",
//   method: 'POST',
//   headers: {
//       'Accept': 'application/json',
//       'user-key': '8836c4a90e59a855cb89744d5ae56534'
//   },
//   data: "fields name,genres,cover_big,popularity:sort popularity desc"
// })
//   .then(response => {
//       console.log(response.data);
//   })
//   .catch(err => {
//       console.error(err);
//   });

//   axios({
//       url: "https://api-v3.igdb.com/covers",
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'user-key': '836c4a90e59a855cb89744d5ae56534'
//       },
//       data: "fields alpha_channel,animated,game,height,image_id,url,width;"
//     })
//       .then(response => {
//           console.log(response.data);
//       })
//       .catch(err => {
//           console.error(err);
//       });
      