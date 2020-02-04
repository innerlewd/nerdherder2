import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Discover from "./components/Discover";
import About from "./components/About";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';



function App() {
  return (
    
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        
          <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Discover" component={Discover} />
          <Route exact path="/Search" component={Search} />
          </Switch>
        
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
