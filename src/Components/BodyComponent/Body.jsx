import React, { useState } from "react";
import Restaraunt from "./Restaraunt";
import { restaurantList } from "../Constants/Constant";

const BodyComponent = () => {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  function updateSearch(searchText, restaurant) {
    const filterData = restaurant.filter((rest) =>
      rest.info.name.includes(searchText)
    );
    return setRestaurant(filterData);
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search"
          className="search-text"
          value={searchText}
          onChange={handleChange}
        />
        <button
          className="search-btn"
          onClick={() => {
            updateSearch(searchText, restaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {restaurant.map((resto) => {
          return <Restaraunt {...resto.info} key={resto.info.id} />;
        })}
      </div>
    </>
  );
};

export default BodyComponent;
