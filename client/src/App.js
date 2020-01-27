import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { GamesList, UserInfo, Registration } from './pages/pages';

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
          <Route path='/games' component={GamesList} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
