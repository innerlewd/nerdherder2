import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import Hero from "../components/Hero";

class Search extends Component {
  state = {
    search: "",
    games: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getAllGames()
      .then(res => this.setState({ games: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getAllGames(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      
      <div>
        <Hero backgroundImage="https://media.newyorker.com/photos/5ddea430de817400084a1dfb/master/pass/2019-Parkin-VideoGames.gif">
        <h1>Nerd Up</h1>
        <h2>Where it's Cool to be a Nerd</h2>
      </Hero>
        
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Title</h1>
          
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            games={this.state.games}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
