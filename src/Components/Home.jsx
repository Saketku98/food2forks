import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid" id="Home-Background"
    >
      <h1 className="h1" id="amz" >AMAZING&nbsp;&nbsp; RECIPES</h1>

      <Link to="/Recipes"><button className="btn btn-primary">SEARCH RECIPES</button></Link>
      
      
      
    </div>
  );
}

export default Home;
