import React, { useContext } from "react";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ref from "../Context/ContextApi";

function Recipes() {
  let { content, add } = useContext(ref);
  let [value1, setValue1] = useState("");

  const getRecipes = () => {
    axios
      .get(`https://forkify-api.herokuapp.com/api/search?q=${value1}`)
      .then((result) => {
        add(result.data.recipes);
      })
      .catch((e) => {
        alert("No Data Found");
      });
  };

  // https://forkify-api.herokuapp.com/api/get?rId=47746

  return (
    <div className="container" id="recipes">
      <h3 className="h3">
        Search Recipes With <span style={{ color: "red" }}>Food2Fork</span>
      </h3>
      <p className="p">Search Recipes</p>

      <div className="container" id="search-box">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="chicken,onion,carrot"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setValue1(e.target.value);
            }}
            value={value1}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#0072b1" }}
            >
              <i className="fas fa-search">
                <Search onClick={getRecipes} />
              </i>
            </button>
          </div>
        </div>
      </div>

      <h2>RECIPE LIST </h2>
      <div id="card">
        {content.map((ele) => {
          return (
            <div id="card" key={ele.recipe_id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={ele.image_url}
                  alt="Card image cap"
                  height={200}
                  
                />
                <div className="card-body">
                  <h6 className="card-title" style={{ fontWeight: "bolder" }}>
                    {ele.title}
                  </h6>
                  <p className="card-text" style={{ color: "goldenrod" }}>
                    {ele.publisher}
                  </p>
                  <Link to="/Details">
                    <button className="btn btn-primary">Details</button>
                  </Link>
                  &nbsp;
                  <a
                    href={ele.source_url}
                    target="_blank"
                    className="btn btn-success"
                  >
                    Recipe URL
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
