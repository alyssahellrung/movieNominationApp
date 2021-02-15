import React, { Component } from "react";
import Header from "../Header";
import SearchBar from "../SearchBar"

class Container extends Component {
  state = {
    search: "",
    results: []
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar 
        search={this.state.search} 
        handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Container;