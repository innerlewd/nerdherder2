import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Nerd Up</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/About">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Discover">Discover</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Profile">Profile</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Search">Search</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://media.newyorker.com/photos/5ddea430de817400084a1dfb/master/pass/2019-Parkin-VideoGames.gif">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
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
        </header>

        <main>
          {/* <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer> */}
        </main>
      </div>
    );
  }
}



export default Navbar;
// import React from "react";
// import { BrowserRouter } from 'react-router-dom';
// import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

// export default () => (
//   <BrowserRouter>

//     <MDBNav>
//       <MDBNavItem>
//         <MDBNavLink active to="/">Nerd Up</MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink to="/About">About</MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink to="/Discover">Discover</MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink to="/Search">Search</MDBNavLink>
//       </MDBNavItem>
//     </MDBNav>

//   </BrowserRouter>
// );

// import React, { Component } from "react";
// import Navbar from 'react-bootstrap/Navbar'
// class Navbar extends Component {
//   render() {
//     return (
//       <Navbar>
//       <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse className="justify-content-end">
//       <Navbar.Text>
//         Signed in as: <a href="#login">Mark Otto</a>
//       </Navbar.Text>
//         </Navbar.Collapse>
// </Navbar>
//     );
//   }
// }
// export default Navbar;

