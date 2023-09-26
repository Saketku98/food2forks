import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container-fluid" id="Nav">
      <h4 className="h4" >
        &nbsp;F&nbsp;o&nbsp;o&nbsp;d
        <span style={{ color: "red" }}>
          &nbsp;2&nbsp;F&nbsp;o&nbsp;r&nbsp;k&nbsp;
        </span>{" "}
      </h4>

      <div className="container-fluid" id="Nav-Items">
        <Link to="/Home" id="Home">
          <h6 className="h6">Home</h6>
        </Link>
        <Link to="/Recipes" id="Home">
          <h6 className="h6">Recipes</h6>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
