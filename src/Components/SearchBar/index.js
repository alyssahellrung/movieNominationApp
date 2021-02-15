import React from "react";
import "./style.css"

function SearchBar(props) {
  return (
    <form id="search-form">
      <div className="row">
      <div className="col-md-12 card">
        <input
          value={props.value}
          name="movieName"
          type="text"
          placeholder="Search for a Movie"
          id="movie-input"
        />
        <button className="btn btn-warning" id="search-movie-btn" value="Submit" onClick={props.handleSubmit}>Submit</button>
      </div>
      </div> 
    </form>
  ) 
}

export default SearchBar;