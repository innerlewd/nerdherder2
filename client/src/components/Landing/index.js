import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBMask, MDBView } from 'mdbreact';
class Landing extends Component {
  render() {
    return (
      <MDBView src="https://media.newyorker.com/photos/5ddea430de817400084a1dfb/master/pass/2019-Parkin-VideoGames.gif">
      <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
        <h2>Welcome to Nerd Up!</h2>
        <h5>Welcome to Nerd Up™ The place where you can embrace your inner-nerd. Check out news on the trending video games, and ask the community for tips, tricks, or help.</h5>
        <p>Check out news on the trending video games, and ask the community for tips, tricks, or help.</p>
        <p>To get started scroll down and log in and/or register! </p><br />
      
        <Link
          to="/register"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px"
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Register
        </Link>
        <Link
          to="/login"
          style={{
            width: "140px",
            borderRadius: "3px",
            letterSpacing: "1.5px"
          }}
          className="btn btn-large btn-flat waves-effect white black-text"
        >
          Log In
        </Link>
      </MDBMask>
    </MDBView>
    );
  }
}
export default Landing;