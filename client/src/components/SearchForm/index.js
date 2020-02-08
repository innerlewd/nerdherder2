import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="game">Game Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="games"
          list="games"
          type="text"
          className="form-control"
          placeholder="search for a game"
          id="game"
        />
        {/* <datalist id="games">
          {props.games.map(game => (
            <option value={game} key={game} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
