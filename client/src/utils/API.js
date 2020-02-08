import axios from "axios";

require('dotenv').config();

axios({
  "method":"GET",
  "url":"https://rawg-video-games-database.p.rapidapi.com/games",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
  "x-rapidapi-key":"43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
  }
  })
  .then((response)=>{
    console.log(response.data.results)
  })
  .catch((error)=>{
    console.log(error)
  })



var keys = require("./Keys")
var giantbombApiKey = keys.giantbomb;

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
})


export const addGameToList = payload => api.post(`/game`, payload)
export const getMyGames = () => api.get(`/games`)
export const updateGame = (id, payload) => api.put(`/game/${id}`, payload)
export const deleteGame = id => api.delete(`/game/${id}`)
export const getGameById = id => api.get(`/game/${id}`)

export const createUser = payload => api.post(`/register`, payload)
export const getUsers = () => api.get(`/users`)
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUser = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

export const getAllGames = () => axios.get("https://www.giantbomb.com/api/genres/?api_key=" + giantbombApiKey, function (err, res, body) {
  let games = JSON.parse(body)
  if (games.length > 2) {}

  if (!err && res.statusCode === 200) {
    console.log('working', games)
  }
})

const apis = {
  addGameToList,
  getMyGames,
  updateGame,
  deleteGame,
  getGameById,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
  getAllGames
}


export default apis