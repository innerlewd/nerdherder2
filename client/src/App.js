import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Landing from './components/Landing';

import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

// import axios from "axios";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { GamesList, UserInfo, Registration, Login } from './pages/pages';





function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        {/* <Landing /> */}

        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
        <Route exact path='/user/:id' component={UserInfo} />
        <Route exact path='/register' component={Registration} />
        <Route exact path='/games/list' component={GamesList} />
        <Route exact path='/login' component={Login} />
        <Footer />
      </div>
    </Router>

  );
}







export default App;
