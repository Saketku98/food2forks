import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Details() {
  let [id, setId] = useState([]);
  let [one, setOne] = useState([]);

  useEffect(() => {
    axios
      .get(`https://forkify-api.herokuapp.com/api/get?rId=47746`)
      .then((res) => {
        setOne(res.data.recipe);
        setId(res.data.recipe.ingredients);
        console.log(res.data.recipe.ingredients);
      });
  }, []);

  return (
    <div className="container">
      <div className="container" style={{ padding: "40px", display: "flex" }}>
        <div>
          <Link to="/Recipes">
            <button className="btn btn-warning" style={{color:"white",fontWeight:"600"}}>Back To Recipe List</button>
          </Link>
          <div className="container" style={{ paddingTop: "60px" }}>
            <img src={one.image_url} alt="recipe" width={600} style={{padding:"60px"}} />
          </div>
        </div>

        <div className="container">
          <h4 style={{ fontWeight: "600" }}>{one.title}</h4>
          <h3 id="provide">Provided by {one.publisher}</h3>
          <a href={id.publisher_url} target="_blank">
            <button className="btn btn-primary">Publisher Webpage</button>
          </a>
          &nbsp;&nbsp;
          <a href={id.source_url} target="_blank">
            <button className="btn btn-success">Recipe URL</button>
          </a>
          <h4 style={{ fontWeight: "600", padding: "20px" }}>Ingredients</h4>
          {id.map((ele) => {
            return <p id="ing">{ele}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
