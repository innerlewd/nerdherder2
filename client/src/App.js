import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./components/Discover";
import About from "./components/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

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
      <div>
        <Navbar />

        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route path='/user/:id' component={UserInfo} />
          <Route path='/register' component={Registration} />
          <Route path='/games/list' component={GamesList} />
          <Route path='/logout' component={Login} />
        </Wrapper>
        <Footer />
      </div>
    </Router>

  );
}







export default App;
