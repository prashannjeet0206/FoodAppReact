import React, { useEffect, useState } from "react";
import Restaraunt from "./Restaraunt";
import { restaurantList } from "../Constants/Constant";
import ShimmerUI from "./ShimmerUI";
import useOnline from "../Utils/useOnline";

const BodyComponent = () => {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  function updateSearch(searchText, restaurant) {
    const filterData = restaurant.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchText)
    );
    return setRestaurant(filterData);
  }

  // async function getApi() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/mapi/homepage/getCards?lat=23.1373176&lng=79.9178709"
  //   );

  //   const json = await data.json();
  //   console.log(json);
  //   setRestaurant(
  //     json?.data?.cards[3]?.gridElements?.infoWIthStyle?.restaurants
  //   );
  // }
  // // getApi();
  // useEffect(() => {
  //   getApi();
  // }, []);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are offline!Please check your connection</h1>;
  }

  return restaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
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
