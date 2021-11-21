import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../search/Search"
import peopleListings from "../data/peoplelistings"

function People() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Search for People!</h1>
        <Search details={peopleListings}/>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default People;
