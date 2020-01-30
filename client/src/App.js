import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
<<<<<<< HEAD
import { GamesList, UserInfo, Registration } from './pages/pages';
=======
import axios from "axios";
>>>>>>> 169e62d3336b18455886e5754b7403ecdc9218f3

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route path='/register' component={Registration} />
          <Route path='/user/:id' component={UserInfo} />
          <Route path='/games/list' component={GamesList} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


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
  




export default App;
