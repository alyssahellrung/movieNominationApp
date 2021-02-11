import React from "react";
import "./style.css"

function Header() {
  return (
    <div className="heading">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">The Shoppies</h1>
          <p className="lead">Movie awards for entrepreneurs</p>
        </div>
      </div>
    </div>
  )
}

export default Header;