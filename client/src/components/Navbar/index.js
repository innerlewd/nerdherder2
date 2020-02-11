import React from 'react';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    // this.onClick = this.onClick.bind(this);
  }
  render() {
    return (


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
  }
}

export default Navbar;