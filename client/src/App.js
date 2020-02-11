import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import CookieBar from './components/cookieBar';
import Homepage from './components/HomePage';
import Videogame from './components/Videogame';


import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { Provider } from "react-redux";
import store from "./store";

import { UserInfo, Register, Login } from './pages/pages';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";


if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends React.Component {

   
  

  render() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <CookieBar />
        <Landing />
        <Switch>
          <Route exact path="/" component={()=><Homepage/>} />
          <Route exact path="/about" component={()=><About/>} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path='/user/:id' component={UserInfo} />
          <Route exact path='/register' component={Register} />
          {/* <Route exact path='/games/list' component={GamesList} /> */}
          <Route exact path='/login' component={Login} />
          <Route path='/videogame/:id' component={Videogame} />
          
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </Provider>

  );
}
}



  




export default App;
