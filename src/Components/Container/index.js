import React, { Component } from "react";
import Header from "../Header";

class Container extends Component {
  state = {
    search: "",
    results: []
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Container;