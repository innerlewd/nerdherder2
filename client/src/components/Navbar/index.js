import React from 'react';


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
<<<<<<< HEAD
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Nerd Up</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler color="#d3531a" onClick={this.onClick} />}
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



=======
    
         
< nav class="navbar navbar-expand-lg navbar-dark primary-color" >
  
  <a class="navbar-brand" href="/">Nerd Up</a>
                <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Discover">Discover</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Profile">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Search">Search</a>
      </li>
      </ul>
              </nav>)
               ;
              }}
  
>>>>>>> c2219f9e757c123f68889d4971c8318a2c036841
export default Navbar;

