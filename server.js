const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const fs = require('fs')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const request = require('request')
const compression = require('compression')
const oneyPlays = require('oneyplays-api')
const userAgent = { 'User-Agent': 'Nerd Up' }



const db = require("./config/keys").mongoURI;
const gameRouter = require('./routes/game-router')
const userRouter = require('./routes/user-router')




  function endpointCreation() {
    try {

      const app = express()
      const port = process.env.PORT || 5000
      
      app.use(bodyParser.urlencoded({ extended: false }))
      app.use(cors())
      app.use(bodyParser.json())
      mongoose
      .connect(
      db,
      { useNewUrlParser: true }
      )
      .then(() => console.log("MongoDB successfully connected"))
      .catch(err => console.log(err));
      // Passport middleware
      app.use(passport.initialize());
      // Passport config
      require("./config/passport")(passport);

  
      app.use(compression())
      app.use(express.static(path.join(__dirname, 'client/build')))
      // required to serve SPA on heroku production without routing problems; it will skip only 'api' calls
      if (process.env.NODE_ENV === 'production') {
        app.get(/^((?!(api)).)*$/, function(req, res) {
          res.set('Cache-Control', 'public, max-age=31536001')
          res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
        })
      }
  
      // providing a constant endpoint for trending videogames
      app.get('/api/trending', async (req, res) => {
        res.set('Cache-Control', 'no-cache')
        res.json(await apiCall(optionsTrending))
        console.log('/api/trending endpoint has been called!')
      })
  
      // providing a constant endpoint for a random top rated videogame
      app.get('/api/topRatedRecommended', async (req, res) => {
        const topRatedResponse = await apiCall(optionsTopRatedRecommended)
        const randomIndex = Math.floor(Math.random() * Math.floor(10)) // one page contains exactly 10 results
        const topRatedRandomVideogame = topRatedResponse.results[randomIndex]
        res.set('Cache-Control', 'no-cache')
        res.json(topRatedRandomVideogame)
        console.log('/api/topRatedRecommended endpoint has been called!')
      })
  
      // providing a dynamic endpoint to videogame detail pages
      app.get('/api/videogame/:rawgId', async (req, res) => {
        const id = req.params.rawgId.match(/\d+/)
        const getPrimaryDetails = async () => {
          optionsVideogame.url = `https://api.rawg.io/api/games/${id}`
          return await apiCall(optionsVideogame)
        }
        const getScreenshots = async () => {
          optionsVideogame.url = `https://api.rawg.io/api/games/${id}/screenshots`
          return await apiCall(optionsVideogame)
        }
        const getSuggested = async () => {
          optionsVideogame.url = `https://api.rawg.io/api/games/${id}/suggested`
          return await apiCall(optionsVideogame)
        }
        const getReviews = async () => {
          optionsVideogame.url = `https://api.rawg.io/api/games/${id}/reviews`
          return await apiCall(optionsVideogame)
        }
        const getYoutube = async () => {
          optionsVideogame.url = `https://api.rawg.io/api/games/${id}/youtube`
          return await apiCall(optionsVideogame)
        }
        const getDevTeam = async () => {
          optionsVideogame.url = `https://api.rawg.io/api/games/${id}/development-team`
          return await apiCall(optionsVideogame)
        }
        const getOneyplays = () => {
          let compatibilityOneyObj = []
          const oneyObj = oneyPlays(id)
          if (oneyObj.length > 0) {
            compatibilityOneyObj = [
              {
                ...oneyObj[0],
                external_id: oneyObj[0].yt_id,
                thumbnails: { medium: { url: oneyObj[0].yt_thumbnail } }
              }
            ]
          }
          return compatibilityOneyObj
        }
  
        const primary = await getPrimaryDetails()
        const secondary = await Promise.all([
          getScreenshots(),
          getSuggested(),
          getReviews(),
          getYoutube(),
          getDevTeam(),
          getOneyplays()
        ])
        const detailsCollected = {
          ...primary,
          screenshots: parseInt(primary.screenshots_count) > 0 ? secondary[0].results : [],
          suggested: parseInt(primary.suggestions_count) > 0 ? secondary[1].results : [],
          reviews: parseInt(primary.reviews_count) > 0 ? secondary[2].results : [],
          youtube: parseInt(primary.youtube_count) > 0 ? secondary[3].results : [],
          devteam: parseInt(primary.creators_count) > 0 ? secondary[4].results : [],
          oneyplays: secondary[5]
        }
  
        res.set('Cache-Control', 'no-cache')
        res.json(detailsCollected)
        console.log(`/api/videogame/${id} endpoint has been called!`)
      })
  
      // _Archive.org link to older titles
      // e.g.: https://archive.org/advancedsearch.php?q=title:(prehistorik) AND collection:(softwarelibrary^10) AND year:(1993) AND mediatype:(software)&fl[]=identifier&fl[]=title&fl[]=year&sort[]=downloads desc&rows=5&page=1&output=json
      app.get('/api/searchArchive', async (req, res) => {
        try {
          const queryTitle = req.query.title
          const queryYear = req.query.year
          optionsSearchArchive.qs.q = `title:(${queryTitle}) AND collection:(softwarelibrary^10) AND year:(${queryYear}) AND mediatype:(software)`
          res.set('Cache-Control', 'no-cache')
          res.json(await apiCall(optionsSearchArchive))
          console.log(`/api/searchArchive?title=${queryTitle}&year=${queryYear} endpoint has been called!`)
        } catch (e) {
          console.error(e)
        }
      })
  
      // providing a dynamic endpoint to videogame autocomplete
      app.get('/api/videogameAutocomplete', async (req, res) => {
        const query = req.query.q
        optionsVideogameAutocomplete.qs.search = query
        res.set('Cache-Control', 'no-cache')
        res.json(await apiCall(optionsVideogameAutocomplete))
        console.log(`/api/videogameAutocomplete?q=${query} endpoint has been called!`)
      })
  
      app.listen(port)
  
      console.log(`API is listening on ${port}`)
    } catch (e) {
      console.error(e)
    }
  }
  endpointCreation()

